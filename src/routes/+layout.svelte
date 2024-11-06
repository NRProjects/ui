<script>
    import '$lib/index.css';
    let { children } = $props();
</script>

<div
    class="min-w-screen max-w-screen m-auto flex min-h-screen flex-grow flex-col content-center items-center font-serif"
>
    {@render children?.()}
</div>
