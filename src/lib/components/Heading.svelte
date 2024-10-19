<script lang="ts">
    import { cn } from '$lib/utils/utils.js';
    import { getVariant } from '$lib/utils/variants.js';
    import type { HeadingProps } from '$types/types.js';

    let { class: _class, children, variant = 'light', size = 'medium' }: HeadingProps = $props();
</script>

<h1 class={cn('text-xl font-bold', getVariant('heading', variant, size), _class)}>
    {#if children}
        {@render children()}
    {:else}
        Heading
    {/if}
</h1>
