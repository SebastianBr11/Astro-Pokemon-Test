<script>
  import Button from "./Button.svelte";
  import PokemonItem from "./PokemonItem.svelte";

  import { pokemon } from "../util/fetching.js";

  export let preRendered;

  let data;

  const refetch = () => {
    data = pokemon.all();
  };

  const fetchNext = next => {
    console.log(next);
    data = pokemon.fetcher(next)();
  };

  refetch();
</script>

<div class="text-2xl">
  {#await data}
    {#if !!preRendered}
    <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 mb-4"> 
      {#each preRendered.results as poke}
        <li>
          <PokemonItem {poke} />
        </li>
      {/each}
      </ul>
    {/if}
  {:then data}
    <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5 mb-4">
      {#each data.results as poke}
        <li>
          <PokemonItem {poke} />
        </li>
      {/each}
    </ul>
    <div class="flex gap-4 mt-8">
      {#if data}
        <Button on:click={() => fetchNext(data.next)} primary class="px-6 py-3 rounded">Next Page</Button>
      {/if}
      <Button on:click={refetch} class="focus-visible:border-transparent border-2 border-current px-6 py-3">Refetch</Button>
    </div>
  {/await}
</div>

