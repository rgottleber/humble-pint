<script>
  let logo = "logo.png";
  import Hamburger from "./Hamburger.svelte";
  import Menu from "./Menu.svelte";
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
      slug: "menu",
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

<img src={logo} alt="Humble Pint" class="h-64 w-full object-contain pb-2" />
<div class="mx-auto w-full">
  <Hamburger {pages} />
  <Menu {pages} />
</div>
