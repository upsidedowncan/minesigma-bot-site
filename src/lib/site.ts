export const GITHUB_OWNER = "upsidedowncan";
export const GITHUB_REPO = "minesigma-bot";
export const REPO_URL = `https://github.com/${GITHUB_OWNER}/${GITHUB_REPO}`;
export const RELEASE_API_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/latest`;

export const installers = [
  { key: "bun", label: "Bun", install: "bun install", run: "bun run dev" },
  { key: "npm", label: "npm", install: "npm install", run: "npm run dev" },
  { key: "pnpm", label: "pnpm", install: "pnpm install", run: "pnpm run dev" },
  { key: "yarn", label: "Yarn", install: "yarn install", run: "yarn dev" }
] as const;

export type InstallerKey = (typeof installers)[number]["key"];

export const commands = [
  "bot follow Player",
  "bot guard Player",
  "bot come",
  "bot status",
  "bot mine block",
  "bot place 0"
] as const;
