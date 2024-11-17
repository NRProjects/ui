import type { ColorScheme, ElementType, Size } from '$types/types.js';

export const variants = {
    input: {
        mode: {
            light: 'bg-slate-100 text-black',
            dark: 'bg-neutral-900 text-white',
        },
        size: {
            small: 'w-[8rem] rounded-md border px-2 py-1 text-sm',
            medium: 'w-[10rem] rounded-md border-2 px-2 py-1 text-base',
            large: 'w-[16rem] rounded-md border-2 px-4 py-2 text-lg',
        },
    },
    label: {
        mode: {
            light: 'text-black',
            dark: 'text-white',
        },
        size: {
            small: 'text-sm',
            medium: 'text-base',
            large: 'text-lg',
        },
    },
    heading: {
        mode: {
            light: 'text-black',
            dark: 'text-white',
        },
        size: {
            small: 'text-xl',
            medium: 'text-2xl',
            large: 'text-4xl',
        },
    },
    button: {
        mode: {
            light: 'border-gray-200 bg-white hover:bg-gray-200',
            dark: 'text-white bg-zinc-950 border-zinc-700 hover:bg-zinc-800',
        },
        size: {
            small: 'w-[4rem] rounded-md font-medium border px-2 py-1 text-sm',
            medium: 'w-[6rem] rounded-md font-medium border px-4 py-2 text-base',
            large: 'w-[10rem] rounded-md font-medium border px-4 py-2 text-lg',
        },
    },
};

export function getColorScheme(element: ElementType, color: ColorScheme) {
    return variants[element].mode[color];
}

export function getSize(element: ElementType, size: Size) {
    return variants[element].size[size];
}

export function getVariant(element: ElementType, color: ColorScheme, size: Size) {
    return getColorScheme(element, color) + ' ' + getSize(element, size) + ' ';
}
