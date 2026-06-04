import "./globals.css";
import type { Metadata } from "next";
import NextAuthProvider from "@/components/NextAuthProvider";
import Script from "next/script";
export const metadata: Metadata = {
  title: "Globalink",
  description: "Globalink - Government-grade compliance, marketplace and consultancy platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en">
    <body>
      <NextAuthProvider>{children}</NextAuthProvider>

      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x1qh8x4f3d");
        `}
      </Script>
    </body>
  </html>
);
}