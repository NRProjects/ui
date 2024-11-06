<script lang="ts">
    import { cn } from '$lib/utils/utils.js';
    import type { Props } from '$types/types.js';

    let { children, class: _class }: Props = $props();
</script>

<div class={cn('text-lg font-bold', _class)}>
    {@render children?.()}
</div>
