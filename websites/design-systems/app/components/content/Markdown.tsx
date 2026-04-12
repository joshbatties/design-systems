import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function Markdown({ source }: { source: string }) {
  if (!source.trim()) return null;
  return (
    <div className="prose-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className="text-[13px] leading-relaxed text-white/70 mb-3">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-white/90">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-white/80">{children}</em>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-[#0070F3] hover:underline underline-offset-2"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={
                href?.startsWith("http")
                  ? "noreferrer noopener"
                  : undefined
              }
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-5 mb-3 text-[13px] leading-relaxed text-white/70 marker:text-white/30">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-5 mb-3 text-[13px] leading-relaxed text-white/70 marker:text-white/30">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="mb-1">{children}</li>,
          h2: ({ children }) => (
            <h2 className="text-base font-semibold text-white/90 mt-6 mb-2 tracking-tight">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-sm font-semibold text-white/85 mt-5 mb-2 tracking-tight">
              {children}
            </h3>
          ),
          code: ({ children }) => (
            <code className="font-mono text-[12px] px-1 py-[1px] rounded bg-white/[0.06] text-white/85">
              {children}
            </code>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-2 border-white/[0.08] pl-3 text-white/60 my-3">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="border-white/[0.06] my-4" />,
        }}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
