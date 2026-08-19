import ReactMarkdown from "react-markdown";

function ModelCard({ model, score, feedback, code, winner }) {
  return (
    <div
      className={`
        bg-[#211f1e]
        border
        rounded-lg
        overflow-hidden
        ${winner ? "border-amber-500" : "border-zinc-800"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-white">{model}</span>

          {winner && (
            <span className="text-xs font-bold text-amber-400">🏆 WINNER</span>
          )}
        </div>

        <span className="text-sm text-zinc-300">Score: {score}/10</span>
      </div>

      {/* Solution */}
      <div className="p-4">
        <div className="bg-[#111] border border-zinc-800 rounded-md p-4 overflow-x-auto">
          <ReactMarkdown
            components={{
              p({ children }) {
                return (
                  <p className="text-zinc-200 leading-7 mb-4">{children}</p>
                );
              },

              strong({ children }) {
                return (
                  <strong className="text-zinc-100 font-semibold">
                    {children}
                  </strong>
                );
              },

              li({ children }) {
                return <li className="text-zinc-200 leading-7">{children}</li>;
              },

              code({ children, className }) {
                const isCodeBlock = className?.startsWith("language-");

                if (isCodeBlock) {
                  return <code className="text-zinc-200">{children}</code>;
                }

                return (
                  <code className="text-amber-300 bg-zinc-800 px-1.5 py-0.5 rounded">
                    {children}
                  </code>
                );
              },

              pre({ children }) {
                return (
                  <pre className="text-zinc-200 bg-[#0d0d0d] p-4 rounded-md overflow-x-auto leading-6">
                    {children}
                  </pre>
                );
              },
            }}
          >
            {code}
          </ReactMarkdown>
        </div>
      </div>

      {/* Feedback */}
      <div className="border-t border-zinc-800 p-4">
        <h4 className="text-sm font-semibold text-amber-400">
          AI Judge Feedback
        </h4>

        <div className="mt-2 text-sm leading-6 text-zinc-400">
          <ReactMarkdown>{feedback}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default ModelCard;
