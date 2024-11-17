<script>
    import '$lib/index.css';
    import { onMount } from 'svelte';
    import { global } from './global.svelte';

    let theme = $derived.by(() => {
        if (global.getTheme() === 'dark') {
            return global.getThemeClass();
        } else {
            return global.getThemeClass();
        }
    });

    let { children } = $props();
</script>

<div
    class="min-w-screen max-w-screen m-auto flex min-h-screen flex-grow flex-col content-center items-center bg-gray-200 font-serif"
>
    {@render children?.()}
</div>
