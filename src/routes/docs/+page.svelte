<script lang="ts">
  import { installers, REPO_URL, commandDocs } from "$lib/site";
  let activeInstaller = "bun";
</script>

<svelte:head>
  <title>Minesigma BOT Docs</title>
  <meta name="description" content="Документация и команды Minesigma BOT." />
</svelte:head>

<main class="wrap">
  <header class="topbar">
    <div class="brand">
      <span class="mark">MS</span>
      <span>Minesigma BOT</span>
    </div>
    <nav class="nav">
      <a href="/">главная</a>
      <a href={REPO_URL} target="_blank" rel="noreferrer">github</a>
    </nav>
  </header>

  <section class="hero">
    <div class="headline">
      <div class="eyebrow">Документация</div>
      <h1>Команды и поведение</h1>
      <p class="copy">
        Здесь собраны все поддерживаемые команды, алиасы и варианты запуска.
        Документация повторяет реальный синтаксис бота, а не отдельный упрощённый список.
      </p>
      <div class="badges">
        <span class="badge">bot prefix</span>
        <span class="badge">чат и DM</span>
        <span class="badge">legacy aliases</span>
        <span class="badge">SvelteKit routes</span>
      </div>
    </div>

    <aside class="download-card">
      <div>
        <div class="eyebrow">быстрый старт</div>
        <p class="version">docs</p>
        <div class="date">без `.html` в URL</div>
      </div>
      <div class="status">
        Сначала открой установку, потом выбери нужную команду. Все секции ниже
        синхронизированы с текущим кодом бота.
      </div>
      <div class="actions">
        <a class="button secondary" href="/">На главную</a>
        <a class="button" href={REPO_URL} target="_blank" rel="noreferrer">Открыть репозиторий</a>
      </div>
    </aside>
  </section>

  <section class="docs-shell">
    <aside class="docs-sidebar" aria-label="Навигация по документации">
      <div class="docs-toc">
        <h2>Содержание</h2>
        <nav>
          <a href="#start">Обзор</a>
          <a href="#install">Установка</a>
          {#each commandDocs as group}
            <a href={`#${group.id}`}>{group.title}</a>
          {/each}
        </nav>
      </div>
      <div class="docs-note">
        Бот принимает команды из обычного чата, личных сообщений и старых префиксов
        `*` и `#`. Команды без `bot`-префикса тоже обрабатываются, если чат-фильтр их распознал.
      </div>
    </aside>

    <div class="docs-content">
      <section class="docs-section" id="start">
        <h2>Обзор</h2>
        <p>
          Командная система разбита на управление ботами, чат, движение, инвентарь,
          мир и спаммер. Для совместимости поддерживаются синонимы вроде
          `add`, `remove`, `move`, `chat`, `dm`, `pm`, `whisper`, `use`, `hotbar`,
          `click slot`, `wait`, `halt`, `circle`, `list players` и `stop all`.
        </p>
        <div class="docs-commands">
          <div class="docs-command">
            <strong>Префикс</strong>
            <div><code>bot follow Player</code></div>
          </div>
          <div class="docs-command">
            <strong>Legacy</strong>
            <div><code>*stop</code></div>
          </div>
          <div class="docs-command">
            <strong>Публичный чат</strong>
            <div><code>[17:15:32] chat ... » bot guard Player</code></div>
          </div>
        </div>
      </section>

      <section class="docs-section" id="install">
        <h2>Установка</h2>
        <p>Сайт использует Bun. Для локального запуска подходят и другие менеджеры.</p>
        <div class="tabs" role="tablist" aria-label="Выбор пакетного менеджера">
          {#each installers as item}
            <button class="tab {activeInstaller === item.key ? 'active' : ''}" type="button" on:click={() => (activeInstaller = item.key)}>
              {item.label}
            </button>
          {/each}
        </div>
        {#each installers as item}
          <div class="tab-panel {activeInstaller === item.key ? 'active' : ''}">
            <div class="terminal">{item.install}
{item.run}
# открыть http://localhost:3000</div>
          </div>
        {/each}
      </section>

      {#each commandDocs as group}
        <section class="docs-section" id={group.id}>
          <h2>{group.title}</h2>
          <p>{group.summary}</p>
          <div class="docs-commands">
            {#each group.commands as command}
              <div class="docs-command">
                <strong>{group.section}</strong>
                <div><code>{command}</code></div>
              </div>
            {/each}
          </div>
        </section>
      {/each}

      <section class="docs-section">
        <h2>Примечание по чату</h2>
        <p>
          Админ-проверка выполняется по списку в конфиге. Если пользователь не записан
          как админ, команда из чата отклоняется.
        </p>
      </section>
    </div>
  </section>
</main>
