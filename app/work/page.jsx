'use client';

import { motion } from 'framer-motion';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import Image from 'next/image';
import { MdArrowOutward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

// data
const projects = [
	{
		id: 1,
		category: 'frontend',
		title: 'Landing TecniAuto',
		description: 'Next.js  + Tailwind landing page',
		image: '/assets/work/thumb1.png',
		demoLink: 'https://tecni-auto.netlify.app/',
		repoLink: 'https://github.com/Cristhianarevalo0809/TecniAuto',
		tech: ['React', 'Tailwind CSS', 'Framer Motion'],
		git: '',
	},
	{
		id: 2,
		category: 'frontend',
		title: 'Pokedex',
		description: 'React.js',
		image: '/assets/work/thumb2.png',
		demoLink: 'https://poke-cristh.netlify.app/',
		repoLink: 'https://github.com/Cristhianarevalo0809/Pokedex-Cr',
		tech: ['React', 'Tailwind CSS', 'Shadcn UI'],
	},
	{
		id: 3,
		category: 'frontend',
		title: 'Rick and morty',
		description: 'React.js',
		image: '/assets/work/thumb3.png',
		demoLink: 'https://rick-app-sanchez.netlify.app/',
		repoLink: 'https://github.com/Cristhianarevalo0809/Rick-and-morty',
		tech: ['React', 'Tailwind CSS', 'Framer Motion'],
	},
	{
		id: 4,
		category: 'frontend',
		title: 'Data Climatex',
		description: 'React.js',
		image: '/assets/work/thumb4.png',
		demoLink: 'https://climatex-app.netlify.app/',
		repoLink: 'https://github.com/Cristhianarevalo0809/climatex-app',
		tech: ['React', 'Tailwind CSS', 'Framer Motion'],
	},
];

const categories = ['frontend'];

const Work = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className="min-h-screen flex items-center py-24 xl:py-0"
		>
			<div className="container mx-auto w-full flex flex-col justify-center">
				{/* heading */}
				<h2 className="h2 mb-6 xl:mb-12 max-w-[600px] ">
					Mi Ùltimo <span className="text-accent">Trabajo</span>
				</h2>
				{/* tabs */}
				<Tabs
					defaultValue="frontend"
					className="w-full flex flex-col gap-6 xl:gap-12"
				>
					{/* taps list */}
					<TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
						{categories.map((category) => {
							return (
								<TabsTrigger
									key={category}
									value={category}
									className="capitalize border border-white/10 data-[state=active]:bg-accent
								 data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
								>
									{category === 'uiux' ? 'UI UX Desing' : category}
								</TabsTrigger>
							);
						})}
					</TabsList>
					{/* taps content */}
					<div
						className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5
					overflow-y-scroll xl:overflow-y-visible"
					>
						{categories.map((category) => {
							return (
								<TabsContent key={category} value={category}>
									<Swiper
										modules={[Pagination]}
										pagination={{ clickable: true, dynamicBullets: true }}
										className="h-max xl:h-[460px]"
									>
										{projects
											.filter((project) => project.category === category)
											.map((project) => {
												return (
													<SwiperSlide key={project.id} className="h-full">
														<div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
															{/* proyect info  */}
															<div
																className="w-full max-w-[380px] flex flex-col gap-6
															xl:gap-8 xl:pt-6 order-2 xl:order-none"
															>
																{/* title */}
																<h3 className="h3">{project.title}</h3>
																{/* tech */}
																<div className="xl:mb-4 max-w-[300px] min-h-[130px] ">
																	<p className="mb-4">Tecnologias Usadas</p>
																	<ul className="flex flex-wrap gap-4">
																		{project.tech.map((item, index) => {
																			return (
																				<li
																					key={index}
																					className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px]
																					rounded-full "
																				>
																					{item}
																				</li>
																			);
																		})}
																	</ul>
																</div>
																{/* btns */}
																<div className="flex flex-col sm:flex-row gap-4 items-start">
																	{/* Botón de Demo */}
																	<Link
																		href={project.demoLink}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="btn btn-sm btn-accent flex gap-2 items-center"
																	>
																		<MdArrowOutward className="text-xl" />
																		<span>Ver Proyecto</span>
																	</Link>

																	{/* Botón de Repo */}
																	<Link
																		href={project.repoLink}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="btn btn-sm btn-white flex gap-2 items-center"
																	>
																		<FaGithub className="text-xl" />
																		<span>Github Repo</span>
																	</Link>
																</div>
															</div>
															{/* proyect img */}
															<div
																className="w-full h-[200px] md:h-[300px] xl:h-[400px]
															relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden"
															>
																<Image
																	src={project.image}
																	alt={project.image}
																	fill
																	className="object-cover"
																/>
															</div>
														</div>
													</SwiperSlide>
												);
											})}
									</Swiper>
								</TabsContent>
							);
						})}
					</div>
				</Tabs>
			</div>
		</motion.section>
	);
};

export default Work;
