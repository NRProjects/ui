<script lang="ts">
    import { scale } from 'svelte/transition';
</script>

<div
    transition:scale={{ duration: 100, start: 0.75 }}
    class="fixed inset-0 z-50 flex h-full w-full flex-grow flex-col items-center justify-center p-8 backdrop-blur-sm"
>
    <div class="max-md:w-full max-md:gap-6 flex w-3/12 flex-col gap-4 rounded-lg bg-white px-6 py-4">
        <!-- <Heading>{header}</Heading>
        <p class="text-base font-normal">
            {content}
        </p>
        <div class="flex w-full flex-row justify-end gap-2">
            <Button onclick={() => close()} class={cn(classCloseButton)}>{closeButtonText}</Button>

            <Button class={cn(classContinueButton)} onclick={_continue}>{continueButtonText}</Button>
        </div> -->
    </div>
</div>
