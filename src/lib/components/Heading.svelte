<script lang="ts">
	import { cn } from '$lib/utils/utils.js';

	let { class: _class, children } = $props();
</script>

<h1 class={cn('text-xl font-bold max-md:text-base', _class)}>
	{#if children}
		{@render children()}
	{:else}
		Heading
	{/if}
</h1>
