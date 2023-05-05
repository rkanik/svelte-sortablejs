<script lang="ts">
	import Sortable from '$lib';

	let items = [
		{ id: 1, name: 'RK Anik' },
		{ id: 2, name: 'Mastuta' }
	];

	const setItems = (e: any) => {
		items = e;
	};

	$: {
		console.log(items);
	}
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{items.map((v) => v.id).toString()}
<Sortable list={items} setList={setItems}>
	{#each items as item}
		<div data-id={item.id}>{item.name}</div>
	{/each}
</Sortable>
