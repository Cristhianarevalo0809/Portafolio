'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { MdArrowOutward } from 'react-icons/md';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';
// components
import Blob from '@/components/Blob';
import Image from 'next/image';
import avatarImg from '@/public/assets/profile.PNG';
import Socials from '@/components/Socials';
import Pattern from '@/components/Pattern';
import Link from 'next/link';

const Home = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className="h-screen flex items-center"
		>
			{/* pattern */}
			<Pattern />
			<div className="flex flex-col xl:flex-row items-center justify-between w-full ">
				{/* text */}
				<div
					className="w-full xl:w-[500px] flex flex-col items-center xl:items-start 
					text-center xl:text-left"
				>
					<h1 className="h1 flex-1 mb-[28px] ">
						Hola! Soy Cristhian, <br />
						<TypeAnimation
							sequence={['Web Jr Developer', 2000, 'Web Jr Designer', 2000]}
							wrapper="span"
							speed={40}
							className="text-accent"
							repeat={Infinity}
							cursor={false}
						/>
					</h1>
					<p className="max-w-[500px] mb-[44px]">
						Construyo sitios web y aplicaciones web visualmente cautivadoras y
						fáciles de usar que transforman tus ideas en experiencias digitales
						fluidas y atractivas.
					</p>
					<button className="btn btn-lg btn-accent mb-16">
						<div className="flex items-center gap-3">
							<Link
								href="https://www.whatsapp.com/?lang=es_LA"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span>Hablemos.</span>
							</Link>
							<MdArrowOutward className="text-xl" />
						</div>
					</button>
					{/* contact info */}
					<div
						className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12
					xl:mb-0"
					>
						{/* phone */}
						<div className="flex items-center gap-1 text-lg ">
							<span className="text-accent">
								<HiOutlinePhone className="text-xl" />
							</span>
							<span className="w-40 ">57 318 692 2681</span>
						</div>
						{/* Mail */}
						<div className="flex items-center gap-4 text-lg">
							<span className="text-accent">
								<HiOutlineMail className="text-xl" />
							</span>
							<span>cristhianarevalo3@gmail.com</span>
						</div>
					</div>
					{/* Social */}
					<Socials
						containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex
					2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2
					2xl:-translate-y-1/2"
						iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px]
						text-[22px] flex items-center justify-center rounded-full cursor-pointer"
					/>
				</div>

				{/* blob & image */}
				<div className="hidden xl:block flex-1 relative z-20">
					{/* blob */}
					<Blob containerStyles="w-[530px] h-[530px]" />
					{/* avatar img */}
					<Image
						src={avatarImg}
						alt=""
						width={440}
						height={600}
						quality={100}
						className="absolute -top-25 left-[60px] "
					/>
					{/* overlay gradiant */}
					<div
						className="w-full h-[164px]
					absolute bottom-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/40"
					></div>
				</div>
			</div>
		</motion.section>
	);
};

export default Home;
