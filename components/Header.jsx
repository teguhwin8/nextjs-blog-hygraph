import React, { useContext } from "react";
import Link from "next/link";

const categories = [
	{
		name: "React",
		slug: "react",
	},
	{
		name: "Web Development",
		slug: "web-development",
	},
];

const Header = () => {
	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="border-b w-full inline-block border-blue-400 py-8">
				<div className="md:float-left block">
					<Link href="/">
						<a className="cursor-pointer font-bold text-4xl text-white">
							Halo Blog
						</a>
					</Link>
				</div>
				<div className="hidden md:float-left md:contents">
					{categories.map((category, index) => (
						<Link key={index} href={`/categories/${category.slug}`}>
							<a className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
								{category.name}
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
