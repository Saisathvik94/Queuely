import { codeToHtml } from "shiki"

const codeSnippet = `import { QueuelyClient } from "queuely"

const client = new QueuelyClient({ apiKey: "qly_live_xxx" })

await client.email.send({
  to: "user@example.com",
  subject: "Welcome to Queuely!",
  html: "<p>You're all set.</p>"
})`

export default async function CodePreview() {
  const html = await codeToHtml(codeSnippet, {
    lang: "typescript",
    theme: "poimandres" // Poimandres is a beautiful dark theme with violet/blue accents
  })

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-16 group">
      {/* Subtle Violet Glow */}
      <div className="absolute -inset-1 bg-violet-600/30 blur-2xl rounded-3xl opacity-50 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>

      {/* Code Window */}
      <div className="relative rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
        {/* Window Controls */}
        <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#111111]">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
          </div>
          <div className="mx-auto pr-10 text-xs text-gray-500 font-mono flex items-center gap-2">
            send.ts
          </div>
        </div>

        {/* Code Content */}
        <div
          className="p-6 overflow-x-auto text-sm leading-relaxed tracking-wide [&>pre]:!bg-transparent [&>pre]:m-0"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
