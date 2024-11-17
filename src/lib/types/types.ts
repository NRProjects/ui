import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TransitionConfig } from 'svelte/transition';
import type { Scale } from 'lucide-svelte';
import { scale } from 'svelte/transition';
import type {
    BlurParams,
    CrossfadeParams,
    DrawParams,
    FadeParams,
    FlyParams,
    ScaleParams,
    SlideParams,
} from 'svelte/transition';

export type ElementType = 'input' | 'label' | 'heading' | 'button';
export type ColorScheme = 'light' | 'dark';
export type Size = 'small' | 'medium' | 'large';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Transition = (node: Element, params?: any) => TransitionConfig;

export interface Props {
    class?: string | undefined;
    children?: Snippet | undefined;
    props?: unknown;
    name?: string;
    variant?: ColorScheme;
    size?: Size;
    transition?: Transition;
    transitionConfig?: BlurParams | CrossfadeParams | DrawParams | FadeParams | FlyParams | ScaleParams | SlideParams;
}

// export interface AlertDialogProps extends Omit<HTMLAttributes<never>, keyof GenericProps>, GenericProps {
//     content?: string;
//     header?: string;
//     classButton?: string;
//     classCloseButton?: string;
//     classContinueButton?: string;
//     buttonText?: string;
//     closeButtonText?: () => void | string;
//     continueButtonText?: string;
//     continue?: () => void;
// }
export interface AlertDialogProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {
    onContinue: () => void;
    onCancel: () => void;
}

export interface PopupProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {
    open: () => boolean;
}

export interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, keyof Props>, Props {
    placeholder?: string;
    value?: unknown;
    type?:
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
    inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url';
}

export interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, keyof Props>, Props {}

export interface LabelProps extends Omit<HTMLAttributes<HTMLLabelElement>, keyof Props>, Props {}

export interface FieldProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {
    label?: string;
    value?: ReturnType<typeof $bindable>;
    placeholder?: string;
    inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url';

    labelClass?: string;
    inputClass?: string;
}

export interface NavbarProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {
    heading?: string;
    entries?: string[];
    type: 'default' | 'side';
}

export interface NavbarItemProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {}

export interface GridProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {}

export interface GridItemProps extends Omit<HTMLAttributes<never>, keyof Props>, Props {}

export interface Variant {
    color: {
        light: string;
        dark: string;
    };
    size: {
        small: string;
        medium: string;
        large: string;
    };
}
