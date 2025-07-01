// components/MainNav.jsx
import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';
import { MdFileDownload } from 'react-icons/md';
import Link from 'next/link';

const MainNav = () => {
	return (
		<nav className="w-full pt-16">
			<div className="flex flex-col h-full items-center justify-between">
				<Logo />
				<NavLinks containerstyles="flex flex-col gap-6 " />
				<button className="btn btn-lg btn-tertiary mb-16">
					<div className="flex items-center gap-3">
						<Link href="/pdf/my_cv.pdf" download="my_cv.pdf">
							<span>Descargar Cv.</span>
						</Link>
						<MdFileDownload className="text-xl" />
					</div>
				</button>
			</div>
		</nav>
	);
};

export default MainNav;
