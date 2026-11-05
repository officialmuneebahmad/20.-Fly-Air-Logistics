import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  content,
}) => {
  // Robust markdown-to-elements renderer with decent padding, line-height & spacing
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const flushList = (key: string) => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul
          key={`ul-${key}`}
          className="my-6 space-y-3 list-disc list-outside text-base sm:text-[17px] text-brand-gray-800 leading-[1.85] pl-6"
        >
          {listItems.map((item, idx) => (
            <li
              key={idx}
              className="pl-2"
              dangerouslySetInnerHTML={{ __html: formatInline(item) }}
            />
          ))}
        </ul>
      );
      inList = false;
      listItems = [];
    }
  };

  const flushTable = (key: string) => {
    if (inTable && tableRows.length > 0) {
      const [header, , ...body] = tableRows;
      elements.push(
        <div
          key={`table-${key}`}
          className="my-10 overflow-x-auto border border-brand-gray-300 shadow-sm"
        >
          <table className="w-full text-left text-sm sm:text-base border-collapse">
            {header && (
              <thead className="bg-brand-black text-white">
                <tr>
                  {header.map((col, cIdx) => (
                    <th
                      key={cIdx}
                      className="p-4 sm:p-5 border-b border-brand-gray-700 font-bold uppercase tracking-wider text-xs sm:text-sm"
                    >
                      {col.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-brand-gray-200 bg-white">
              {body.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className={rIdx % 2 === 0 ? "bg-white" : "bg-brand-gray-50/70"}
                >
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className="p-4 sm:p-5 text-brand-gray-800 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: formatInline(cell.trim()),
                      }}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      inTable = false;
      tableRows = [];
    }
  };

  function formatInline(text: string): string {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong class='font-bold text-brand-black'>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(
        /`(.+?)`/g,
        "<code class='bg-brand-gray-100 border border-brand-gray-300 px-1.5 py-0.5 text-xs text-brand-red font-mono font-semibold'>$1</code>"
      )
      .replace(
        /\[(.+?)\]\((.+?)\)/g,
        "<a href='$2' class='text-brand-red font-semibold underline underline-offset-4 hover:text-brand-red-hover'>$1</a>"
      );
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Tables
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushList(`flush-${i}`);
      inTable = true;
      const cells = trimmed
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim());
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable(`table-end-${i}`);
    }

    // Unordered lists
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      inList = true;
      listItems.push(trimmed.slice(2));
      continue;
    } else {
      flushList(`list-end-${i}`);
    }

    // Blank line
    if (!trimmed) {
      continue;
    }

    // H3 Headings
    if (trimmed.startsWith("### ")) {
      const headingText = trimmed.slice(4);
      const id = headingText
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      elements.push(
        <h3
          key={`h3-${i}`}
          id={id}
          className="text-lg sm:text-xl font-heading font-bold text-brand-black uppercase tracking-tight mt-10 mb-4"
        >
          {headingText}
        </h3>
      );
      continue;
    }

    // H2 Headings
    if (trimmed.startsWith("## ")) {
      const headingText = trimmed.slice(3);
      const id = headingText
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      elements.push(
        <h2
          key={`h2-${i}`}
          id={id}
          className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-brand-black uppercase tracking-tight mt-14 mb-6 border-l-4 border-brand-red pl-4 pt-1 pb-1"
        >
          {headingText}
        </h2>
      );
      continue;
    }

    // Blockquote
    if (trimmed.startsWith("> ")) {
      elements.push(
        <blockquote
          key={`quote-${i}`}
          className="my-8 p-6 sm:p-7 border-l-4 border-brand-red bg-brand-gray-50 text-base sm:text-lg text-brand-gray-800 italic leading-relaxed shadow-sm"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed.slice(2)) }}
        />
      );
      continue;
    }

    // Standard Paragraph - Generous line-height & margins
    elements.push(
      <p
        key={`p-${i}`}
        className="my-6 sm:my-7 text-base sm:text-[17px] text-brand-gray-800 leading-[1.85] font-normal tracking-normal"
        dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
      />
    );
  }

  flushList("final");
  flushTable("final");

  return <div className="space-y-2">{elements}</div>;
};

export default MarkdownRenderer;
