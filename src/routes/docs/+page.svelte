<script lang="ts">
  import { installers, REPO_URL } from "$lib/site";
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
      <h1>Команды и установка</h1>
      <p class="copy">Эта страница собрана отдельно от главной. Здесь лежат команды, варианты установки и краткие примеры поведения чата.</p>
    </div>

    <aside class="download-card">
      <div>
        <div class="eyebrow">быстрый старт</div>
        <p class="version">docs</p>
        <div class="date">без `.html` в URL</div>
      </div>
      <div class="status">Сайт теперь на SvelteKit, поэтому маршруты идут как `/` и `/docs`.</div>
      <div class="actions">
        <a class="button secondary" href="/">На главную</a>
        <a class="button" href={REPO_URL} target="_blank" rel="noreferrer">Открыть репозиторий</a>
      </div>
    </aside>
  </section>

  <section class="grid">
    <article class="panel wide">
      <h2>Установка</h2>
      <div class="tabs">
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
    </article>

    <article class="panel">
      <h2>Чат-команды</h2>
      <ul class="command-list">
        <li><code>bot follow Player</code></li>
        <li><code>bot guard Player</code></li>
        <li><code>bot come</code></li>
        <li><code>bot look Player</code></li>
        <li><code>bot status</code></li>
      </ul>
    </article>

    <article class="panel">
      <h2>Мир</h2>
      <ul class="command-list">
        <li><code>bot mine block</code></li>
        <li><code>bot mine nearby stone 10</code></li>
        <li><code>bot place 0</code></li>
        <li><code>bot clear soft 2</code></li>
      </ul>
    </article>

    <article class="panel">
      <h2>Админ-доступ</h2>
      <p>Команды из чата выполняются только для записанных админов. Это включает DM-форматы и публичные сообщения с обращением к боту.</p>
    </article>

    <article class="panel">
      <h2>Быстрые примеры</h2>
      <div class="steps">
        <div class="step" data-step="1"><div class="step-body"><div class="step-line"><code>bot add 3</code></div></div></div>
        <div class="step" data-step="2"><div class="step-body"><div class="step-line"><code>bot spammer start 3s hello --count 10</code></div></div></div>
        <div class="step" data-step="3"><div class="step-body"><div class="step-line"><code>bot hold 0</code></div></div></div>
      </div>
    </article>

    <article class="panel">
      <h2>Примечание</h2>
      <p>Если нужен ещё более подробный справочник, его лучше держать тут, а не прятать в `.html` файлах. Так URL остаётся чистым.</p>
    </article>
  </section>
</main>
