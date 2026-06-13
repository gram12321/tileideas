import path from "node:path";
import { fileURLToPath } from "node:url";

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const devPort = 4173;
const codespaceName = process.env.CODESPACE_NAME;
const forwardingDomain = process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN;
const isCodespaces = Boolean(
  process.env.CODESPACES && codespaceName && forwardingDomain,
);
const forwardedHost =
  isCodespaces && codespaceName && forwardingDomain
    ? `${codespaceName}-${devPort}.${forwardingDomain}`
    : undefined;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: devPort,
    strictPort: true,
    allowedHosts: forwardingDomain ? [`.${forwardingDomain}`] : undefined,
    hmr: forwardedHost
      ? {
          protocol: "wss",
          host: forwardedHost,
          clientPort: 443,
        }
      : undefined,
  },
  preview: {
    host: "0.0.0.0",
    port: devPort,
    strictPort: true,
    allowedHosts: forwardingDomain ? [`.${forwardingDomain}`] : undefined,
  },
});
