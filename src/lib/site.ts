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

export type CommandDoc = {
  section: string;
  id: string;
  title: string;
  summary: string;
  commands: string[];
};

export const commandDocs: CommandDoc[] = [
  {
    section: "Управление ботами",
    id: "bots",
    title: "Управление ботами",
    summary: "Создание, удаление, состояние и базовый контроль сессии.",
    commands: [
      "bot summon <1..25>",
      "bot despawn",
      "bot kickbots",
      "bot status",
      "bot players",
      "bot logout",
      "bot reconnect"
    ]
  },
  {
    section: "Чат",
    id: "chat",
    title: "Чат и сообщения",
    summary: "Публичные сообщения, лички и чат-алиасы.",
    commands: [
      "bot say <text>",
      "bot chat <text>",
      "bot message <player> <text>",
      "bot msg <player> <text>",
      "bot tell <player> <text>",
      "bot dm <player> <text>",
      "bot pm <player> <text>",
      "bot whisper <player> <text>"
    ]
  },
  {
    section: "Движение",
    id: "movement",
    title: "Движение и поведение",
    summary: "Ходьба, прыжок, следование, охрана и боевые режимы.",
    commands: [
      "bot jump",
      "bot forward <blocks>",
      "bot back <blocks>",
      "bot left <blocks>",
      "bot right <blocks>",
      "bot stop",
      "bot hold <0..8>",
      "bot sneak on|off",
      "bot sprint on|off",
      "bot follow <player>",
      "bot come <player>",
      "bot look <player>",
      "bot guard <player>",
      "bot spin",
      "bot spin <player>",
      "bot attack",
      "bot attack <player>"
    ]
  },
  {
    section: "Инвентарь",
    id: "inventory",
    title: "Инвентарь и GUI",
    summary: "Выбор слота, клики по инвентарю и хотбару.",
    commands: [
      "click.item.slot.<0..8>",
      "bot slot <index>",
      "bot use <0..8>",
      "bot hotbar <0..8>",
      "bot click slot <index>"
    ]
  },
  {
    section: "Мир",
    id: "world",
    title: "Инструменты мира",
    summary: "Добыча, установка блока и мягкая очистка.",
    commands: [
      "bot mine block",
      "bot mine nearby <block_name> [1..10]",
      "bot place <0..8>",
      "bot clear soft [1..2]"
    ]
  },
  {
    section: "Спаммер",
    id: "spammer",
    title: "Спаммер",
    summary: "Конфигурируемая отправка сообщений по таймеру.",
    commands: [
      "bot spammer start <interval> <message> [count]",
      "bot spammer stop",
      "bot spammer status"
    ]
  },
  {
    section: "Алиасы",
    id: "aliases",
    title: "Старые алиасы",
    summary: "Совместимость со старыми синтаксисами команд.",
    commands: [
      "bot add <n>",
      "bot remove all",
      "bot move forward <blocks>",
      "bot move back <blocks>",
      "bot move left <blocks>",
      "bot move right <blocks>",
      "bot wait",
      "bot halt",
      "bot circle <player>",
      "bot list players",
      "bot stop all",
      "*follow <player>",
      "#stop"
    ]
  }
];
