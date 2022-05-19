import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/global.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Interactive Rating Component",
  description: "Interactive Rating Component",
  viewport: "width=device-width,initial-scale=1",
});

//@ts-expect-error
export function ErrorBoundary({ error }) {
  // For debugging purposes
  // console.log(error);

  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="w-full flex flex-col items-center justify-center min-h-screen">
          <h1 className="font-bold text-orange text-9xl mb-6">Error</h1>

          <h2 className="text-2xl font-bold text-center text-lightGrey md:text-3xl mb-20">
            <span className="text-lightGrey">Oops!</span> Something went wrong
          </h2>

          <a
            href="/"
            className="px-10 py-3 text-sm font-semibold text-white bg-orange uppercase rounded-md"
          >
            Go home
          </a>
        </main>
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
