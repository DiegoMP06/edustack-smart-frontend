import { Search } from 'lucide-react'
import { Button } from '../shadcn/button'
import SpotlightSearch from './SpotlightSearch'
import { useState } from 'react'

export default function SearchButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                variant="ghost"
                size="icon-lg"
                title="Buscar"
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <Search className="size-6" />
            </Button>

            <SpotlightSearch
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </>
    )
}
