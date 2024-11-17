<script lang="ts">
    import { enhance } from '$app/forms';
    import * as Alert from '$lib/components/Alert/index.js';
    import Button from '$lib/components/Button/Button.svelte';
    import Heading from '$lib/components/Heading.svelte';
    import Input from '$lib/components/Input.svelte';
    import { fade, scale } from 'svelte/transition';
    import { getContext } from 'svelte';

    let test = $state();

    const items = [
        { key: '0022', value: 'Utilities' },
        { key: '0023', value: 'Construction' },
        { key: '0042', value: 'Wholesale trade' },
        { key: '0044', value: 'Retail trade' },
    ];
</script>

<div class="flex h-full w-full flex-col justify-center p-4">
    <Heading variant="light" size="medium"></Heading>
    <Button variant="dark" size="large" onclick={() => (test = !test)} />
    <Alert.Root>
        <Alert.Header>Some header</Alert.Header>
        <Alert.Content>Some content</Alert.Content>
    </Alert.Root>
    <Button variant="light" size="large" formaction="?/switchTheme">Theme</Button>
    <Button class="border-2 border-red-500" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" />
    <Button variant="light" size="large" onclick={() => (test = !test)} />
    <Input />
    {#if test}
        <div
            class="fixed bottom-4 self-center"
            in:scale={{ duration: 200, start: 0.5, opacity: 0 }}
            out:fade={{ duration: 200 }}
        >
            <Alert.Root variant="dark" size="large" onDismiss={() => (test = false)}>
                <Alert.Header>Alert content</Alert.Header>
                <Alert.Content
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
                    commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit
                    fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet
                    aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum
                    debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias
                    error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum
                    voluptates a cumque velit quibusdam sed amet tempora. Sit laborum ab, eius corporis!</Alert.Content
                >
            </Alert.Root>
        </div>
    {/if} fugit doloribus tenetur fugiat, temporibus enim commodi iusto libero magni deleniti quod quam consequuntur! Commodi
    minima excepturi repudiandae velit hic maxime doloremque. Quaerat provident commodi consectetur veniam similique ad earum
    omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo fugiat, dolorum eligendi quam cupiditate excepturi
    mollitia maiores labore suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium modi minima sunt
    esse temporibus sint culpa, recusandae aliquam numquam totam ratione voluptas quod exercitationem fuga. Possimus quis
    earum veniam quasi aliquam eligendi, placeat qui
</div>
