export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Changelog Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Git commits →{" "}
          <span className="text-[#58a6ff]">Slack release notes</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Connect your GitHub or GitLab repo, pick a range of commits, and get a beautifully formatted changelog message ready to post in Slack — in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $18/mo
        </a>
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left font-mono text-sm text-[#8b949e] leading-relaxed">
          <p className="text-[#58a6ff] mb-2">📦 Release v2.4.1 — 2024-06-10</p>
          <p><span className="text-green-400">✨ feat:</span> Add dark mode toggle to dashboard</p>
          <p><span className="text-yellow-400">🐛 fix:</span> Resolve pagination bug on reports page</p>
          <p><span className="text-blue-400">⚡ perf:</span> Reduce API response time by 40%</p>
          <p><span className="text-purple-400">🔒 security:</span> Patch XSS vulnerability in input fields</p>
          <p className="mt-3 text-[#58a6ff]">👉 Full changelog: github.com/acme/app/releases/v2.4.1</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "GitHub & GitLab integration",
              "Unlimited changelog generations",
              "Custom Slack message templates",
              "Automated release webhooks",
              "Commit categorization (feat/fix/perf)",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-sm"
          >
            Start Free Trial
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which Git providers are supported?</h3>
            <p className="text-[#8b949e] text-sm">GitHub and GitLab are fully supported. You authenticate via OAuth and select any repository you have access to.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I customize the Slack message format?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can create and save custom templates using our template editor. Control grouping, emoji, links, and tone to match your team's style.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is there a free trial?</h3>
            <p className="text-[#8b949e] text-sm">Yes — your first 7 days are free with full access. No credit card required to start. Cancel anytime from your billing dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Git Changelog Slack Formatter. All rights reserved.
      </footer>
    </main>
  );
}
