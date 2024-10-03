<script lang="ts">
    import { enhance } from '$app/forms';
    import Input from '$lib/components/Input.svelte';
    import Label from '$lib/components/Label.svelte';

    let test = $state();
</script>

<div class="flex h-full w-full flex-col justify-center p-4">
    <form class="flex flex-col" method="POST" use:enhance>
        <Label></Label>
        <Input />

        <button>Submit</button>
    </form>
</div>
