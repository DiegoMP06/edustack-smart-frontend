import TipTapEditorContainer from './TipTapEditorContainer';

export function TipTapViewer({
    content,
    className,
}: {
    content: string;
    className?: string;
}) {
    return (
        <TipTapEditorContainer className={className}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </TipTapEditorContainer>
    );
}
