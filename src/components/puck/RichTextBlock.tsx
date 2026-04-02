import type { ComponentConfig } from '@puckeditor/core';
import TipTapEditorContainer from '../tiptap/TipTapEditorContainer';

type RichTextBlockProps = {
    html: string;
};

export default function RichTextBlock({ html }: RichTextBlockProps) {
    return (
        <TipTapEditorContainer
            className="my-4"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}

export const RichTextBlockConfig: ComponentConfig<RichTextBlockProps> = {
    label: 'Texto enriquecido:',
    fields: {
        html: {
            type: 'text',
        },
    },
    defaultProps: {
        html: '<p>Escribe aquí tu contenido.</p>',
    },
    render: RichTextBlock,
};
