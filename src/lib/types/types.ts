import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface Props {
	class?: string | undefined;
	children?: Snippet | null;
}

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, keyof Props>, Props {}

export interface AlertDialogProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {
	content?: string;
	header?: string;
	classButton?: string;
	classCloseButton?: string;
	classContinueButton?: string;
	buttonText?: string;
	closeButtonText?: string;
	continueButtonText?: string;
	continue?: () => void;
}

export interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, keyof Props>, Props {
	placeholder?: string;
}

export interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, keyof Props>, Props {}

export interface LabelProps extends Omit<HTMLAttributes<HTMLLabelElement>, keyof Props>, Props {}

export interface FieldProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {
	label?: string;
	input?: string;
	inputType:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	inputMode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url';
	labelClass?: string;
	inputClass?: string;
}

export interface NavbarProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {
	heading?: string;
	entries?: string[];
}

export interface NavbarItemProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {}

export interface GridProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {}

export interface GridItemProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {}
