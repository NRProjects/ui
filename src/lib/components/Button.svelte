<script lang="ts">
    import type { ButtonProps } from '$types/types.js';
    import { cn } from '$lib/utils/utils.js';
    import { getVariant } from '$lib/utils/variants.js';

    let { class: _class, children, variant = 'light', size = 'medium', ...props }: ButtonProps = $props();
</script>

<button class={cn('transition-all duration-200 ease-in-out', getVariant('button', variant, size), _class)} {...props}>
    {#if children}
        {@render children()}
    {:else}
        Button
    {/if}
</button>
