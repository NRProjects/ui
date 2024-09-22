<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import type { LabelProps } from '$types/types.js';

	let { class: _class, children, ...props }: LabelProps = $props();
</script>

<label for="" class={cn('font-medium', _class)}>
	{#if children}
		{@render children()}
	{:else}
		Label
	{/if}
</label>
