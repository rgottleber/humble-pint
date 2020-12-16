<script>
  import client from "../sanity-client.js";
  import urlBuilder from "@sanity/image-url";
  const query = '*[_type == "item"] | order(type asc)';
  let data;
  let menuTypes;
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
    {#each (menuTypes = [...new Set(data.map((item) => item.type))]) as menuType}
      <p
        class="text-5xl text-gray-600 mt-10 md:text-xl lg:text-3xl font-black justify-center border-t-2 border-b-2 border-gray-600">
        {menuType.split('-')[1]}
      </p>
      {#each data.filter((item) => item.type === menuType) as menuItem}
        <div class="flex flex-row pt-6">
          <div class="w-1/3 max-w-max">
            <img
              src={urlFor(menuItem.image).auto('format').size(500, 500).url()}
              alt={menuItem.name}
              class="h-full w-full object-cover object-center" />
          </div>
          <div class="w-7/12 ml-2">
            <div class="font-black md:text-xl lg:text-2xl">{menuItem.name}</div>
            <p class="text-gray-400 text-sm">{menuItem.description}</p>
          </div>
          <div class="pl-2 pt-8 text-gray-500 font-black">
            {formatter.format(menuItem.price / 100)}
          </div>
        </div>
      {/each}
    {/each}
  {/await}
</div>
