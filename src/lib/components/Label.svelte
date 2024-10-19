<script lang="ts">
    import { cn } from '$lib/utils/utils.js';
    import { getVariant } from '$lib/utils/variants.js';
    import type { LabelProps } from '$types/types.js';

    let { class: _class, children, variant = 'light', size = 'medium', ...props }: LabelProps = $props();
</script>

<label for="" class={cn('font-medium', getVariant('label', variant, size), _class)}>
    {#if children}
        {@render children()}
    {:else}
        Label
    {/if}
</label>
