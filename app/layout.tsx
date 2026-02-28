import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "FDGC | Fintech Digital Gold Coin — Reserve-Backed Settlement Infrastructure",
  description:
    "FDGC is a reserve-backed digital asset tokenized on BSC. Fixed supply. Audited smart contract. Built for institutional custody and settlement.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const scrollFixScript = `(function(){if(typeof window==='undefined')return;history.scrollRestoration='manual';var nav=performance.getEntriesByType&&performance.getEntriesByType('navigation')[0];var isReload=nav?nav.type==='reload':(performance.navigation&&performance.navigation.type===1);if(!isReload&&window.location.hash)return;if(isReload&&window.location.hash){history.replaceState(null,'',location.pathname+location.search)}function goTop(){window.scrollTo({top:0,left:0,behavior:'auto'});var h=document.documentElement;if(h)h.scrollTop=0;if(document.body)document.body.scrollTop=0}goTop();var n=0,i=setInterval(function(){goTop();if(++n>100)clearInterval(i)},50);['readystatechange','load','DOMContentLoaded'].forEach(function(ev){document.addEventListener(ev,function(){goTop();clearInterval(i)})});window.addEventListener('load',function(){goTop();clearInterval(i)});window.addEventListener('pageshow',function(e){if(!e.persisted)goTop()})})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: scrollFixScript }} />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
