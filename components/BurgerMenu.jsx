import React, { useState } from "react";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
import MenuItem from "./MenuItem";

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenMenu = () => {
		setIsOpen(!isOpen);
	};

    const classMenu = isOpen ? "top-16 right-3 left-3 opacity-1" : "top-16 right-3 left-3 opacity-0";

	return (
		<>
			<div className="">
				{!isOpen ? (
					<button onClick={handleOpenMenu}>
						<HiMenuAlt1
							className="w-8 h-8 text-white"
							onClick={handleOpenMenu}
						/>
					</button>
				) : (
					<button onClick={handleOpenMenu}>
						<HiOutlineX className="w-8 h-8 text-white" />
					</button>
				)}
				<div className={`absolute bg-white z-10 p-6 transition-all h-auto duration-300 rounded-lg shadow-2xl ${classMenu}`}>
					<div className="flex flex-col items-center gap-8 text-gray-700">
						<MenuItem />
					</div>
				</div>
			</div>
		</>
	);
}