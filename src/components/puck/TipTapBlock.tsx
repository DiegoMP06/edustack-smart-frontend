import type { ComponentConfig } from '@puckeditor/core';
import { TipTapViewer } from '@/components/tiptap/TipTapEditor';

type TipTapBlockProps = {
    html: string;
};

export default function TipTapBlock({ html }: TipTapBlockProps) {
    return (
        <div className="my-2">
            <TipTapViewer content={html} />
        </div>
    );
}

export const TipTapBlockConfig: ComponentConfig<TipTapBlockProps> = {
    label: 'Editor enriquecido',
    fields: {
        html: {
            type: 'text',
        },
    },
    defaultProps: {
        html: '<p>Escribe aquí...</p>',
    },
    render: TipTapBlock,
};
