<script lang="ts">
	import { cn } from '$lib/utils/utils.js';

	import Heading from '$lib/components/Heading.svelte';
	import NavbarItem from '$lib/components/Navbar/NavbarItem.svelte';

	let {
		class: _class = '',
		heading = 'Your Organization',
		entries = ['Home', 'Services', 'About', 'Contact'],
	} = $props();
</script>

<div class="flex w-full flex-grow flex-row bg-slate-300">
	<div
		class={cn(
			'm-auto flex max-w-[60%] flex-grow flex-row content-center items-center justify-between gap-5 p-4 max-md:max-w-full',
			_class
		)}
	>
		<Heading>{heading}</Heading>
		<div class="flex gap-8">
			{#each entries as entry}
				<NavbarItem>{entry}</NavbarItem>
			{/each}
		</div>
	</div>
</div>
