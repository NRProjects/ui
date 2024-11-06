<script lang="ts">
    import { CircleAlert, X } from 'lucide-svelte';
    import { onMount } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    import { variants, type AlertProps } from './index.js';
    import { cn } from '$lib/utils/utils.js';

    let {
        children,
        onCreate,
        onDismiss,
        class: _class,
        variant = 'light',
        size = 'medium',
        lifetime = 5000,
        ...props
    }: AlertProps = $props();

    onMount(() => {
        onCreate?.();
    });
</script>

<div
    class={cn(
        'flex flex-row justify-center gap-4 self-center rounded-lg p-4',
        variants.color[variant],
        variants.size[size],
        _class,
    )}
    {...props}
>
    <div class="flex h-min items-start">
        <CircleAlert />
    </div>
    <div class="flex flex-col">
        {@render children?.()}
    </div>
    <button onclick={onDismiss} class="flex h-min items-start">
        <X />
    </button>
</div>
