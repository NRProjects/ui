<script lang="ts">
    import { cn } from '$lib/utils/utils.js';
    import { getVariant } from '$lib/utils/variants.js';
    import type { InputProps } from '$types/types.js';

    let {
        class: _class,
        placeholder = 'Placeholder',
        variant = 'light',
        size = 'medium',
        value = $bindable(),
        ...props
    }: InputProps = $props();
</script>

<input
    class={cn(
        'border-transparent transition-none placeholder:font-normal placeholder:italic focus:border-blue-500 focus:outline-none',
        getVariant('input', variant, size),
        _class,
    )}
    {placeholder}
    bind:value
    {...props}
/>
