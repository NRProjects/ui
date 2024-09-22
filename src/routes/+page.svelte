<script lang="ts">
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import Heading from '$lib/components/Heading.svelte';
	import AlertDialog from '$lib/components/AlertDialog.svelte';
	import Grid from '$lib/components/Grid/Grid.svelte';
	import { Button } from '$lib';
	import GridItem from '$lib/components/Grid/GridItem.svelte';
</script>

<div
	class="min-w-screen max-w-screen flex min-h-screen flex-grow flex-col items-center justify-between"
>
	<Grid class="max-mobile:grid-cols-1 m-auto content-between justify-between">
		<GridItem class="max-mobile:h-20 aspect-auto"></GridItem>
		<GridItem class="max-mobile:h-20 aspect-auto"></GridItem>
		<GridItem class="max-mobile:h-20 aspect-auto"></GridItem>
		<GridItem class="max-mobile:h-20 aspect-auto"></GridItem>
		<GridItem class="max-mobile:h-20 aspect-auto"></GridItem>
		<GridItem class="max-mobile:h-20 aspect-auto"></GridItem>
	</Grid>
</div>
