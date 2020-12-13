<script>
  export let pages;
  import url from "../url";
  import { Link } from "svelte-routing";
</script>

<style>
  :global(a):visited {
    color: black;
  }
  :global(a)[aria-current="page"] {
    --tw-text-opacity: 1;
    color: rgba(245, 158, 11, var(--tw-text-opacity));
  }
</style>

<nav
  class="border-t-2 border-b-2 border-gray-400 uppercase w-full py-6 hidden md:flex items-center">
  <ul class="flex text-center items-center justify-around max-w-6xl mx-auto">
    {#each pages as page}
      <li class="text-center">
        <Link
          aria-current={$url.pathname === page.slug ? 'page' : undefined}
          to={page.slug}>
          <p class="hover:text-yellow-400 px-6">{page.text}</p>
        </Link>
      </li>
    {/each}
  </ul>
</nav>
