import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import { AppHeader } from "@/components/AppHeader/AppHeader";
import "../styles/markdown-light.css";
import "remark-callouts/styles.css";
import "../../node_modules/prismjs/themes/prism-coy.min.css";
import { MenuStoreProvider } from "@/provider/MenuProvider";
import SearchModal from "@/components/SearchModal/SearchModal";

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
        <ThemeRegistry options={{ key: "joy" }}>
          <MenuStoreProvider>
            <AppHeader />
            <SearchModal/>
            {children}
          </MenuStoreProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
