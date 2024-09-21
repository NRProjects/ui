<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Input from '$lib/components/Input.svelte';
	import AlertDialog from '$lib/components/AlertDialog.svelte';
</script>

<div class="flex flex-grow flex-col items-center justify-between">
	<Button />
	<Input />
	<AlertDialog>Alert</AlertDialog>
</div>
