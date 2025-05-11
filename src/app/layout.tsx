import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "../styles/markdown-light.css";
import "../styles/global.css";
import "remark-callouts/styles.css";
import "../../node_modules/prismjs/themes/prism-coy.min.css";
import { SidebarProvider } from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "gumgum's Garden",
  description: "🌼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider className="flex-col">
            {children}
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
