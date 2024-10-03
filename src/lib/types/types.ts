import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type Props<T> = {
    item: T;
};

export interface GenericProps {
    class?: string | undefined;
    children?: Snippet | undefined;
    props?: Props<never> | undefined;
    name?: string;
}

export interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, keyof GenericProps>, GenericProps {}

export interface AlertDialogProps extends Omit<HTMLAttributes<never>, keyof GenericProps>, GenericProps {
    content?: string;
    header?: string;
    classButton?: string;
    classCloseButton?: string;
    classContinueButton?: string;
    buttonText?: string;
    closeButtonText?: () => void | string;
    continueButtonText?: string;
    continue?: () => void;
}

export interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, keyof GenericProps>, GenericProps {
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

export interface HeadingProps extends Omit<HTMLAttributes<HTMLHeadingElement>, keyof GenericProps>, GenericProps {}

export interface LabelProps extends Omit<HTMLAttributes<HTMLLabelElement>, keyof GenericProps>, GenericProps {}

export interface FieldProps extends Omit<HTMLAttributes<never>, keyof GenericProps>, GenericProps {
    label?: string;
    value?: ReturnType<typeof $bindable>;
    placeholder?: string;
    inputmode?: 'decimal' | 'email' | 'none' | 'numeric' | 'search' | 'tel' | 'text' | 'url';

    labelClass?: string;
    inputClass?: string;
}

export interface NavbarProps extends Omit<HTMLAttributes<never>, keyof GenericProps>, GenericProps {
    heading?: string;
    entries?: string[];
    type: 'default' | 'side';
}

export interface NavbarItemProps extends Omit<HTMLAttributes<never>, keyof GenericProps>, GenericProps {}

export interface GridProps extends Omit<HTMLAttributes<never>, keyof GenericProps>, GenericProps {}

export interface GridItemProps extends Omit<HTMLAttributes<never>, keyof GenericProps>, GenericProps {}
