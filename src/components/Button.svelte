<script>
  export let primary = false;
  export let secondary = false;
  export { className as class };
  let className;

  const styles = [
    primary ? "text-blue-100 bg-blue-500 focus:bg-blue-600 ring-blue-100" : ""
  ];
</script>

<button on:click class="{[...styles].join(" ")} {className}">
	<slot />
</button>