import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, service } = body;

    // Basic Input Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Please complete all mandatory fields (Name, Email, Phone, Message).",
        },
        { status: 400 }
      );
    }

    const submissionTime = new Date().toISOString();
    const logData = {
      timestamp: submissionTime,
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      service: service ? String(service).trim() : "General Inquiry",
      message: String(message).trim(),
      userAgent: req.headers.get("user-agent") || "unknown",
      ip: req.headers.get("cf-connecting-ip") || "unknown",
    };

    // Log to Cloudflare Worker console
    console.log("[Fly Air Logistics Contact Submission]:", JSON.stringify(logData, null, 2));

    // Optional Cloudflare D1 persistence if configured
    try {
      // @ts-ignore Cloudflare env binding
      const db = (globalThis as any).DB || process.env.DB;
      if (db && typeof db.prepare === "function") {
        await db
          .prepare(
            `INSERT INTO inquiries (name, email, phone, service, message, created_at) VALUES (?, ?, ?, ?, ?, ?)`
          )
          .bind(
            logData.name,
            logData.email,
            logData.phone,
            logData.service,
            logData.message,
            logData.timestamp
          )
          .run();
        console.log("[D1] Inquiry successfully inserted into database.");
      }
    } catch (dbErr) {
      // Non-blocking: log D1 issue without failing the user response
      console.warn("[D1 Storage Notice - Optional DB not initialized]:", dbErr);
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting Fly Air Logistics. Your inquiry has been received by our cargo desk. A representative will contact you shortly.",
      timestamp: submissionTime,
    });
  } catch (error: any) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please message us directly on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
