'use client';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// impoer swiper  required modules
import { Autoplay } from 'swiper/modules';
// import swiper styles

import 'swiper/css';
import 'swiper/css/pagination';

import { ImQuotesLeft } from 'react-icons/im';

// data

const softSkills = [
	{
		message:
			'Me esfuerzo por expresar mis ideas con claridad, escuchando activamente y manteniendo siempre el respeto en cualquier conversación profesional.',
		name: '💬 Comunicación asertiva ',
		qualitie: 'Habilidades Blandas',
	},
	{
		message:
			'Disfruto colaborar con otros, aprender de diferentes puntos de vista y aportar lo mejor de mí para alcanzar objetivos comunes.',
		name: '🤝 Trabajo en equipo',
		qualitie: 'Habilidades Blandas',
	},
	{
		message:
			'Me ajusto con facilidad a nuevos entornos, retos o herramientas, manteniendo una actitud positiva frente al cambio.',
		name: '🔄 Adaptabilidad',
		qualitie: 'Habilidades Blandas',
	},
];

const Testimonial = () => {
	return (
		<Swiper
			modules={[Autoplay]}
			loop={true}
			autoplay={{ delay: 4000, disableOnInteraction: false }}
			className="w-full max-w-[310px] md:max-w-[520px]
    bg-secundary rounded-lg "
		>
			{softSkills.map((person, index) => {
				return (
					<SwiperSlide key={index}>
						<div className="text-center">
							<p className="bg-accent">{person.qualitie}</p>
						</div>
						<div className="flex px-8 py-6 gap-8">
							<ImQuotesLeft className="hidden xl:flex text-8xl text-accent" />
							<div className="flex flex-col gap-2 ">
								<p>{person.message}</p>
								<p className="self-end   text-accent font-semibold">
									{person.name}
								</p>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default Testimonial;
