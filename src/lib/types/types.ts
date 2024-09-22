import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	class?: string;
	children?: Snippet;
}

export interface DivProps extends HTMLAttributes<HTMLDivElement> {
	class?: string;
	children?: Snippet;
}
