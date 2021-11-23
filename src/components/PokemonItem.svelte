<script>
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";

  import { pokemon } from "../util/fetching.js";
  import { matchTypeToColor } from "../util";

  export let poke;

  let showMore = false;
  let more;

  const getMoreInfo = () => {
    showMore = !showMore;
    if (!more) {
      more = pokemon.fetcher(poke.url)();
    }
  };
</script>

<Card class="bg-gray-400 dark:bg-gray-700 grid gap-8 justify-items-center rounded">
	<p class="uppercase tracking-wide font-bold">
		{poke.name}
	</p>
  {#if showMore}
    {#await more then data}
      <img src={data.sprites["front_default"]} alt={poke.name} />
      <p class="flex gap-2 items-center justify-center">
      {#each data.types as {type}}
        <span style="--poke-type-color: {matchTypeToColor(type.name)}" class="bg-[color:var(--poke-type-color)] dark:text-white/90 text-white leading-4 text-sm p-2 uppercase">
          {type.name}
        </span>
      {/each}
      </p>
    {/await}
  {/if}
	<Button class="focus-visible:border-transparent text-gray-800/90 dark:text-gray-300/80 text-base border-l border-r border-current px-6 py-2" on:click={getMoreInfo}>{showMore ? "Show Less" : "Show More"}</Button>
</Card>