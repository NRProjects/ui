<script lang="ts">
    import { cn } from '$lib/utils/utils.js';
    import { getVariant } from '$lib/utils/variants.js';
    import type { ButtonProps } from '.';

    let {
        class: _class,
        children,
        variant = 'light',
        size = 'medium',
        formaction,
        href,
        ...props
    }: ButtonProps = $props();
</script>

<a {href}>
    <button
        class={cn('transition-all duration-200 ease-in-out', getVariant('button', variant, size), _class)}
        {...props}
    >
        {#if children}
            {@render children()}
        {:else}
            Button
        {/if}
    </button>
</a>
