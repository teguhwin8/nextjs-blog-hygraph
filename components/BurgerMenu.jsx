import { useState } from "react";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import MenuItem from "./MenuItem";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    };

    const classMenu = isOpen ? "show" : "hidden";

    return (
        <>
            <div className="">
                {!isOpen ? (
                    <button aria-label="Menu" onClick={handleOpenMenu}>
                        <HiMenuAlt1 className="w-8 h-8 text-white" onClick={handleOpenMenu} />
                    </button>
                ) : (
                    <button aria-label="Close Menu" onClick={handleOpenMenu}>
                        <HiOutlineX className="w-8 h-8 text-white" />
                    </button>
                )}
                <div
                    className={`absolute bg-white p-6 h-auto top-16 right-3 left-3 transition duration-300 md:rounded-lg shadow-2xl ${classMenu}`}
                >
                    <div className="flex flex-col items-center gap-8 text-gray-700">
                        <MenuItem />
                    </div>
                </div>
            </div>
        </>
    );
}
