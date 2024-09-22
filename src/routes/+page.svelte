<script lang="ts">
	import Field from '$lib/components/Field.svelte';
	import Grid from '$lib/components/Grid/Grid.svelte';
	import Input from '$lib/components/Input.svelte';
</script>

<div class="flex h-full w-full flex-col justify-center gap-10 bg-black p-4">
	<Grid class="grid-cols-2 max-mobile:grid-cols-1">
		<Field
			label="Starting Weight"
			input="Starting weight"
			inputType="number"
			labelClass="text-white"
			inputClass="bg-neutral-950 border text-gray-200 border-gray-200 hover:bg-neutral-900 transition duration-200 ease-in-out"
		/>

		<Field
			label="Ending Weight"
			input="Ending weight"
			inputType="number"
			labelClass="text-white"
			inputClass="bg-neutral-950 border text-gray-200 border-gray-200 hover:bg-neutral-900 transition duration-200 ease-in-out"
		/>
	</Grid>

	<Grid class="max-mobile:grid-cols-1">
		<Field
			label="Payouts Counted"
			input="Payouts counted"
			inputType="number"
			labelClass="text-white"
			inputClass="bg-neutral-950 border text-gray-200 border-gray-200 hover:bg-neutral-900 transition duration-200 ease-in-out"
		/>
	</Grid>
</div>
