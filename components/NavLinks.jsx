'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
	{
		name: 'Inicio',
		path: '/',
	},
	{
		name: 'Sobre mi',
		path: '/about',
	},
	{
		name: 'Servicios',
		path: '/services',
	},

	{
		name: 'Proyectos',
		path: '/work',
	},
	{
		name: 'Contacto',
		path: '/contact',
	},
];

const NavLinks = ({ containerstyles }) => {
	const pathname = usePathname();

	return (
		<ul className={containerstyles}>
			{links.map((link, index) => {
				// determine if the current link matches the active route
				const isActive = pathname === link.path;
				// calculate the number of characters in the link name
				const charLength = link.name.length;
				// set the line with based on character length
				const lineWidth = charLength > 20 ? 'after:w[120px]' : 'after:w-[90%]';
				console.log(link);
				return (
					<Link
						href={link.path}
						key={index}
						className={`relative text-lg uppercase 	text-white ${
							isActive &&
							`after:content-[''] after:block after:absolute after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] after:bg-accent
							 after:-translate-y-1/2 after:z-0`
						}`}
					>
						<span className="relative z-10">{link.name}</span>
					</Link>
				);
			})}
		</ul>
	);
};

export default NavLinks;
