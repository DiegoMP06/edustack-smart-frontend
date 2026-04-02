import { useEffect, useRef, useState } from "react";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandList } from "@/components/ui/shadcn/command";
import { useDebounce } from "use-debounce";

type SpotlightSearchProps = {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
}

const getInitialSearch = () => {
    if (typeof window === 'undefined') return '';
    const params = new URLSearchParams(window.location.search);
    return params.get('search') || '';
};

export default function SpotlightSearch({ isOpen, setIsOpen }: SpotlightSearchProps) {
    const [search, setSearch] = useState(getInitialSearch());
    const [query] = useDebounce(search, 800);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const params = new URLSearchParams(window.location.search);
        const currentSearch = params.get('search') || '';

        if (query !== currentSearch) {
            if (query) {
                params.set('search', query);
            } else {
                params.delete('search');
            }

            const newUrl = `${window.location.pathname}?${params.toString()}`;

            window.location.href = newUrl;
        }
    }, [query])


    return (
        <CommandDialog
            onOpenChange={setIsOpen}
            open={isOpen}
            title='Buscar...'
            description='Busca cualquier cosa en este módulo...'
        >
            <Command>
                <CommandInput
                    placeholder='Buscar...'
                    onValueChange={setSearch}
                    value={search}
                />
            </Command>
        </CommandDialog>
    )
}