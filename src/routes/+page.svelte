<script lang="ts">
	import Field from '$lib/components/Field.svelte';
	import Input from '$lib/components/Input.svelte';

	let test = $state();
</script>

<div class="flex h-full w-full flex-col justify-center gap-10 p-4">
	<Input inputmode="numeric" type="number" />

	<Field bind:value={test}></Field>
	<span>
		{test}
	</span>
</div>
