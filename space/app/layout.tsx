import { Metadata } from "next";
// helpers
import { ASSET_PREFIX } from "@/helpers/common.helper";
// components
import { InstanceProvider } from "@/lib/instance-provider";
import { StoreProvider } from "@/lib/store-provider";
// styles
import "@/styles/globals.css";
import { ToastProvider } from "@/lib/toast-provider";

export const metadata: Metadata = {
  title: "Proline Publish | Make your Proline boards public with one-click",
  description: "Proline Publish is a customer feedback management tool built on top of proline.com",
  openGraph: {
    title: "Proline Publish | Make your Proline boards public with one-click",
    description: "Proline Publish is a customer feedback management tool built on top of proline.com",
    url: "https://sites.Proline.so/",
  },
  keywords:
    "software development, customer feedback, software, accelerate, code management, release management, project management, issue tracking, agile, scrum, kanban, collaboration",
  twitter: {
    site: "@juanakbarrr1",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href={`${ASSET_PREFIX}/favicon/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${ASSET_PREFIX}/favicon/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${ASSET_PREFIX}/favicon/favicon-16x16.png`} />
        <link rel="manifest" href={`${ASSET_PREFIX}/site.webmanifest.json`} />
        <link rel="shortcut icon" href={`${ASSET_PREFIX}/favicon/favicon.ico`} />
      </head>
      <body>
        <StoreProvider>
          <ToastProvider>
            <InstanceProvider>{children}</InstanceProvider>
          </ToastProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
