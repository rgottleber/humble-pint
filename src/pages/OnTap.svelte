<script>
  import client from "../sanity-client.js";
  import urlBuilder from "@sanity/image-url";
  const query = '*[_type == "beers"] | order(_createdAt asc)';
  let data;
  const urlFor = (source) => urlBuilder(client).image(source);
  const getData = async () => {
    return client
      .fetch(query)
      .then((response) => {
        data = response;
      })
      .catch((err) => this.error(500, err));
  };

  const formatter = Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });
</script>

<div
  class="bg-white rounded-lg p-8 md:col-span-2 mx-4 md:mx-0 md:mx-10 sm:mt-8 md:mt-10 lg:mx-16">
  <div class="font-black">Humble Pint Brewing Co.</div>

  {#await getData()}
    <p>Loading.......</p>
  {:then}
    {#each data as beer}
      <div class="flex flex-row pt-6">
        <div class="w-1/3 max-w-max">
          <img
            src={urlFor(beer.image).size(500, 500).url()}
            alt={beer.name}
            class="w-full object-cover object-center" />
        </div>
        <div class="w-2/3 ml-2">
          <div class="font-black md:text-xl lg:text-2xl">{beer.name}</div>
          <div
            class="pb-2 flex flex-row flex-wrap pt-8 text-gray-500 font-bold">
            <div class="flex flex-row whitespace-nowrap mr-2">
              <span class="font-thin pr-1">16oz Pint </span>
              {formatter.format(beer.pint / 100)}
            </div>
            <div class="flex flex-row whitespace-nowrap mr-2">
              <span class="font-thin pr-1">2pk Crowlers </span>
              {formatter.format(beer.crowler / 100)}
            </div>
            <div class="flex flex-row whitespace-nowrap mr-2">
              <span class="font-thin pr-1">Growler </span>
              {formatter.format(beer.growler / 100)}
            </div>
            <div class="flex flex-row whitespace-nowrap mr-2">
              <span class="font-thin pr-1">Fill Only </span>
              {formatter.format(beer.fill / 100)}
            </div>
          </div>
          <p class="text-gray-400 text-sm">{beer.description}</p>
        </div>
      </div>
    {/each}
  {/await}
</div>
