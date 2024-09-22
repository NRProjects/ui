<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { scale } from 'svelte/transition';
	import Heading from '$lib/components/Heading.svelte';
	import { cn } from '$lib/utils/utils.js';
	import type { AlertDialogProps } from '$types/types.js';

	let {
		content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec erat enim. Nullam sapien nisi, vestibulum id ex sit amet, cursus feugiat eros.',
		header = 'Lorem Ipsum',
		classButton = '',
		classCloseButton = 'border-0 bg-rose-700 text-white hover:bg-rose-800',
		classContinueButton = 'border border-gray-200',
		buttonText = 'Alert',
		closeButtonText = 'Cancel',
		continueButtonText = 'Continue',
		continue: _continue = () => close(),
		...props
	}: AlertDialogProps = $props();

	let _open = $state(false);

	function open() {
		_open = true;
	}

	function close() {
		_open = false;
	}
</script>

<Button class={cn(classButton)} onclick={() => open()}>{buttonText}</Button>

{#if _open}
	<div
		transition:scale={{ duration: 100, start: 0.75 }}
		class="fixed inset-0 z-50 flex h-full w-full flex-grow flex-col items-center justify-center p-8 backdrop-blur-sm"
	>
		<div class="max-md:w-full max-md:gap-6 flex w-3/12 flex-col gap-4 rounded-lg bg-white px-6 py-4">
			<Heading>{header}</Heading>
			<p class="text-base font-normal">
				{content}
			</p>
			<div class="flex w-full flex-row justify-end gap-2">
				<Button onclick={() => close()} class={cn(classCloseButton)}>{closeButtonText}</Button>

				<Button class={cn(classContinueButton)} onclick={_continue}>{continueButtonText}</Button>
			</div>
		</div>
	</div>
{/if}
