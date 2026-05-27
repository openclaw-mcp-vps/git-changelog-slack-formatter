import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Git Changelog Slack Formatter — Readable Release Notes in Seconds",
  description: "Transform git commit messages into professional Slack changelog messages. Connect GitHub or GitLab, configure templates, and ship beautiful release notes automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7b53351f-3f14-4a0d-893d-8ef8290f5ef2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
