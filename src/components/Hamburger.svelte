<script>
  import { slide } from "svelte/transition";
  import { Link } from "svelte-routing";
  import url from "../url";

  export let open = false;
  export let pages;
</script>

<style>
  svg {
    min-height: 24px;
    transition: transform 0.3s ease-in-out;
  }

  svg line {
    stroke: currentColor;
    stroke-width: 3;
    transition: transform 0.3s ease-in-out;
  }

  button {
    z-index: 20;
  }
  .open svg {
    transform: scale(0.7);
  }

  .open #top {
    transform: translate(5px, 1px) rotate(45deg);
  }

  .open #middle {
    opacity: 0;
  }

  .open #bottom {
    transform: translate(-12px, 6px) rotate(-45deg);
  }
  :global(a):visited {
    color: black;
  }
  :global(a)[aria-current="page"] {
    --tw-text-opacity: 1;
    color: rgba(245, 158, 11, var(--tw-text-opacity));
  }
</style>

<button
  class="flex text-lg justify-center w-full md:hidden bg-gray-200"
  class:open
  on:click={() => (open = !open)}>
  <div class="flex justify-center">
    <svg width="32" height="24">
      <line id="top" x1="0" y1="4" x2="24" y2="4" />
      <line id="middle" x1="0" y1="12" x2="24" y2="12" />
      <line id="bottom" x1="0" y1="20" x2="24" y2="20" />
    </svg>
    MENU
  </div>
</button>
{#if open}
  <nav transition:slide class="uppercase w-full md:hidden items-center" id="sm">
    <ul class="text-center items-center">
      {#each pages as page}
        <li class="text-center border-b h-10 text-lg truncate ...">
          <Link
            aria-current={$url.pathname === page.slug ? 'page' : undefined}
            to={page.slug}>
            <p
              class="px-6 hover:text-yellow-400"
              on:click={() => (open = !open)}>
              {page.text}
            </p>
          </Link>
        </li>
      {/each}
    </ul>
  </nav>
{/if}
