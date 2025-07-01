'use client';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/components/ui/select';

import { HiOutlineMapPin, HiOutlineArrowLongRight } from 'react-icons/hi2';
import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className="h-screen flex items-center py-24 xl:py-0"
		>
			<div
				className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden
			scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible"
			>
				<div className="w-full">
					<div className="flex flex-col xl:flex-row gap-6">
						{/* info text */}
						<div className="flex-1 xl:w-[600px] flex flex-col gap-12">
							<div>
								<h2 className="h2 mb-6">
									Ponte en <span className="text-accent">Contacto</span>
								</h2>
								<p className="max-w-[480px]">
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Doloremque, iste?
								</p>
							</div>
							{/* info */}
							<div className="flex flex-col gap-8 mb-6 xl:mb-0">
								{/* Phone */}
								<div className="flex items-center gap-4 text-lg">
									<span className="text-accent">
										<HiOutlinePhone className="text-2xl" />
									</span>
									<span>+57 318 692 2681</span>
								</div>
								{/* email */}
								<div className="flex items-center gap-4 text-lg">
									<span className="text-accent">
										<HiOutlineMail className="text-2xl" />
									</span>
									<span>cristhianarevalo3@gmail.com</span>
								</div>
								{/* location */}
								<div className="flex items-center gap-4 text-lg">
									<span className="text-accent">
										<HiOutlineMapPin className="text-2xl" />
									</span>
									<span>Ocaña NS, Colombia</span>
								</div>
							</div>
						</div>
						{/* form */}
						<div className="flex-1">
							<form className="flex flex-col gap-6 items-center">
								{/* first and last name */}
								<div className="flex flex-col xl:flex-row gap-6 w-full">
									<div className="w-full">
										<Label htmlFor="name">
											Nombre <span className="text-accent">*</span>
										</Label>
										<Input
											id="firstname"
											name="firstname"
											placeholder="Nombre"
											required
										/>
									</div>
									<div className="w-full">
										<Label htmlFor="name">
											Apellidos <span className="text-accent">*</span>
										</Label>
										<Input
											id="lastname"
											name="lastname"
											placeholder="Apellidos"
											required
										/>
									</div>
								</div>
								{/* email */}
								<div className="w-full">
									<Label htmlFor="name">
										Email <span className="text-accent">*</span>
									</Label>
									<Input
										id="email"
										name="email"
										placeholder="Example@gmail.com"
										required
									/>
								</div>
								{/* select */}
								<div className="w-full">
									<Label htmlFor="name">
										Estoy interesado en <span className="text-accent">*</span>
									</Label>
									<Select name="service" required>
										<SelectTrigger
											id="service"
											className="w-full !h-12 bg-white/5 border-white/10 px-4"
										>
											<SelectValue placeholder="Elige Aquí" />
										</SelectTrigger>
										<SelectContent className="bg-black border-white/20">
											<SelectItem value="webdev">Desarrollo Web</SelectItem>
											<SelectItem value="uiux">
												Interfaces de Usuario (UI) Modernas y Dinámicas
											</SelectItem>
											<SelectItem value="logo">
												Optimización y Mantenimiento de Sitios Web
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								{/* textarea */}
								<div className="w-full">
									<Label htmlFor="name">
										Mensaje <span className="text-accent">*</span>
									</Label>
									<Textarea
										id="message"
										name="message"
										placeholder="Escribe tu mensaje..."
										className="min-h-[160px] bg-white/5 border-white/10
									focus-visible:border-accent focus-visible:ring-accent
									focus-visible:ring-[1px] resize-none p-4 selection:bg-accent
									placeholder:text-white/50"
									/>
								</div>
								{/* btn */}
								<button className="btn btn-lg btn-accent">
									<div className="flex items-center gap-3">
										<span className="font-medium">Enviar Mensaje</span>
										<HiOutlineArrowLongRight className="text-xl" />
									</div>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
