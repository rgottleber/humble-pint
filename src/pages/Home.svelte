<style>
  .google-maps {
    position: relative;
    padding-bottom: 75%;
    height: 0;
    overflow: hidden;
  }
  .google-maps iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
</style>

<svelte:head>
  <title>
    Humble Pint Brewing Co. – Handcrafted Beer – Texas Friendly Service –
    Pacific NW Roots
  </title>
</svelte:head>

<div
  class="bg-white rounded-lg p-8 md:col-span-2 mx-4 md:mx-0 md:mx-10 sm:mt-8 md:mt-10 lg:mx-16">
  <div class="font-black">Humble Pint Brewing Co.</div>
  <div class="flex justify-center my-4">
    <a href="https://shop.arryved.com/preOrder?locationId=Bd82iU8E">
      <button
        class="border-4 border-yellow-300 bg-yellow-600 text-white text-3xl p-4 uppercase font-black shadow-lg">
        Order Online
      </button>
    </a>
  </div>
  <div class="border-4 border-gray-500 py-6 my-4">
    <p class="font-black text-gray-500 text-center">
      TAPROOM HOURS OF OPERATION
    </p>
    <p class="font-black text-gray-500 text-center">Weds – Thurs 12pm – 8pm</p>
    <p class="font-black text-gray-500 text-center">Friday 12pm – 10pm</p>
    <p class="font-black text-gray-500 text-center">Saturday 12pm – 9pm</p>
    <p class="font-black text-gray-500 text-center">Sunday 12pm – 7pm</p>
    <p class="font-black text-gray-500 text-center">
      Pizza Kitchen is open from 4pm daily! (Weds-Sun)
    </p>
    <p class="font-black text-gray-500 text-center">
      We are accepting credit and gift card payment only.
    </p>
  </div>
  <div class="flex justify-center my-4">
    <a href="covid">
      <button
        class="border-4 border-yellow-300 bg-yellow-600 text-white text-3xl p-4 font-black shadow-lg">
        Taproom Rules During COVID-19
      </button>
    </a>
  </div>
  <div class="google-maps">
    <iframe
      scrolling="no"
      width="600"
      height="450"
      src="https://maps.google.com/maps?q=Humble%20Pint%20Brewing%20Co.%2011880%20Hero%20Way%20W.%20Suite%20%23208%20Leander%20TX&amp;t=m&amp;z=18&amp;output=embed&amp;iwloc=near"
      title="Humble Pint Brewing Co. 11880 Hero Way W. Suite #208 Leander TX"
      aria-label="Humble Pint Brewing Co. 11880 Hero Way W. Suite #208 Leander TX"
      frameborder="0" />
  </div>
  <div class="mt-2">
    <!-- <img
        src={freshBeer}
        alt="Fresh Cold Beer"
        class="h-64 w-full object-contain pb-2" /> -->
  </div>
</div>
