import { MenuIcon } from "lucide-react";
import { useEffect, useState, type PropsWithChildren } from "react";
import { Button } from "@/components/ui/shadcn/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/shadcn/sheet";


export default function MenuMobile({ children }: PropsWithChildren) {
    const PUBLIC_API_URL = import.meta.env.PUBLIC_API_URL;
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkSize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", checkSize);
        return () => window.removeEventListener("resize", checkSize);
    }, []);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon-lg" title="Menu" className="cursor-pointer">
                    <MenuIcon className="size-6" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        EduStack Smart
                    </SheetTitle>
                    <SheetDescription>
                        Menú
                    </SheetDescription>
                </SheetHeader>
                <div className="grid flex-1 auto-rows-min p-4 gap-0.5">
                    {children}
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button variant="outline">
                            Cerrar
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
