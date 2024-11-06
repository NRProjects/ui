import Root from './Alert.svelte';
import Header from './AlertHeader.svelte';
import Content from './AlertContent.svelte';
import type { Props, Variant } from '$types/types.js';

export interface AlertProps extends Props {
    onCreate?: () => unknown;
    onDismiss?: () => unknown;
    lifetime?: number;
}

export const variants: Variant = {
    color: {
        light: 'bg-white text-black',
        dark: 'bg-zinc-950 text-white',
    },
    size: {
        small: 'text-sm w-[30rem]',
        medium: 'text-base w-[30rem]',
        large: 'text-lg w-[30rem]',
    },
};

export { Root, Header, Content, Root as Alert, Content as AlertContent, Header as AlertHeader };
