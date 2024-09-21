<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import Button from '$lib/components/Button.svelte';
	import { scale } from 'svelte/transition';

	let {
		class: _class,
		children,
		content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec erat enim. Nullam sapien nisi, vestibulum id ex sit amet, cursus feugiat eros.',
		header = 'Lorem Ipsum',
		closeButtonClass = 'border-0 bg-rose-700 text-white hover:bg-rose-800',
		continueButtonClass = 'border border-gray-200',
		closeButtonText = 'Cancel',
		continueButtonText = 'Continue',
		continue: _continue = () => close(),
		...props
	} = $props();

	let _open = $state(false);

	function open() {
		_open = true;
	}

	function close() {
		_open = false;
	}
</script>

<Button class={cn(_class)} {children} onclick={() => open()} />

{#if _open}
	<div
		transition:scale={{ duration: 100, start: 0.75 }}
		class="fixed inset-0 z-50 flex h-full w-full flex-grow flex-col items-center justify-center p-8 backdrop-blur-sm"
	>
		<div class="flex w-3/12 flex-col gap-4 rounded-lg bg-white px-6 py-4">
			<h1 class="text-lg font-bold">
				{header}
			</h1>
			<p class="text-base font-normal">
				{content}
			</p>
			<div class="flex w-full flex-row justify-end gap-2">
				<Button onclick={() => close()} class={closeButtonClass}
					>{closeButtonText}</Button
				>

				<Button class={continueButtonClass} onclick={_continue}
					>{continueButtonText}</Button
				>
			</div>
		</div>
	</div>
{/if}
