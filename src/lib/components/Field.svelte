<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import Label from '$lib/components/Label.svelte';
	import Input from '$lib/components/Input.svelte';
	import type { FieldProps } from '$types/types.js';

	let {
		class: _class,
		label = 'Label',
		input = 'Placeholder',
		labelClass,
		inputClass,
		...props
	}: FieldProps = $props();
</script>

<div class={cn('flex flex-col gap-2', _class)}>
	<Label class={labelClass}>{label}</Label>
	<Input class={inputClass} placeholder={input} />
</div>
