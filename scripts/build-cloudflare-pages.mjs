import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const nextBinary = resolve(
  "node_modules",
  ".bin",
  process.platform === "win32" ? "next.cmd" : "next"
);

const result = spawnSync(nextBinary, ["build"], {
  env: {
    ...process.env,
    CLOUDFLARE_PAGES_STATIC: "1",
  },
  shell: process.platform === "win32",
  stdio: "inherit",
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
