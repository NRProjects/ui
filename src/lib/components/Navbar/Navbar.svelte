<script lang="ts">
	import { cn } from '$lib/utils/utils.js';

	import Heading from '$lib/components/Heading.svelte';
	import NavbarItem from '$lib/components/Navbar/NavbarItem.svelte';
	import type { NavbarProps } from '$types/types.js';

	let {
		class: _class = '',
		heading = 'Your Organization',
		entries = ['Home', 'Services', 'About', 'Contact'],
	}: NavbarProps = $props();
</script>

<div class="flex w-full flex-grow flex-row bg-slate-300">
	<div
		class={cn(
			'max-md:max-w-full m-auto flex max-w-[60%] flex-grow flex-row content-center items-center justify-between gap-5 p-4',
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
