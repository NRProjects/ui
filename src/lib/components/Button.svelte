<script lang="ts">
	import type { ButtonProps } from '$types/types.js';

	let { class: _class, children, ...props }: ButtonProps = $props();
</script>

<button
	class="rounded-md border-0 bg-white px-4 py-2 text-base font-medium transition-all duration-200 ease-in-out hover:bg-gray-200 {_class}"
	{...props}
>
	{#if children}
		{@render children()}
	{:else}
		Button
	{/if}
</button>
