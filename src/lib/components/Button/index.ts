import type { Props } from '$types/types';
import type { HTMLAttributes } from 'svelte/elements';

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>, Props {
    formaction?: string;
    href?: string;
}
