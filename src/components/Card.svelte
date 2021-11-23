<script>
  export let bg = "bg-gray-700";
  let className;

  export { className as class };
</script>

<div class="{bg} p-8 {className}">
	<slot />
</div>