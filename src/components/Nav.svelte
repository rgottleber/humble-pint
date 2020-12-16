<script>
  let logo = "HumblePint.svg";
  import Hamburger from "./Hamburger.svelte";
  import Logo from "./Logo.svelte";
  import NavMenu from "./NavMenu.svelte";
  export let pages = [
    {
      text: "Home",
      slug: "/",
    },
    {
      text: "Vision",
      slug: "/vision",
    },
    {
      text: "What's On Tap",
      slug: "tap",
    },
    {
      text: "Menu",
      slug: "/menu",
    },
    {
      text: "Merch",
      slug: "merch",
    },
    {
      text: "Taproom Opening During Covid-19",
      slug: "covid",
    },
    {
      text: "Careers",
      slug: "careers",
    },
  ];
</script>

<Logo />

<div class="mx-auto w-full">
  <Hamburger {pages} />
  <NavMenu {pages} />
</div>
