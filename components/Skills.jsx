import { Imprima } from 'next/font/google';
import {
	RiReactjsFill,
	RiNextjsFill,
	RiHtml5Fill,
	RiCss3Fill,
	RiTailwindCssFill,
	RiNodejsFill,
} from 'react-icons/ri';

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const skills = [
	{
		icon: <RiReactjsFill />,
		name: 'React.js',
	},
	{
		icon: <RiNextjsFill />,
		name: 'Next.js',
	},
	{
		icon: <RiHtml5Fill />,
		name: 'Html 5',
	},
	{
		icon: <RiCss3Fill />,
		name: 'Css 3',
	},
	{
		icon: <RiTailwindCssFill />,
		name: 'Tailwind CSS',
	},
	{
		icon: <RiNodejsFill />,
		name: 'Node.js',
	},
];

const Skills = () => {
	return (
		<div>
			<h2 className="h2 mb-8">
				Mis <span className="text-accent">Tecnologias</span>
			</h2>
			<div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
				{skills.map((item, index) => {
					return (
						<TooltipProvider key={index}>
							<Tooltip>
								<TooltipTrigger
									className="w-16 h-16 rounded-full flex items-center
                justify-center bg-teratiary/70 group"
								>
									<div
										className="text-3xl group-hover:text-accent transition-all
                  duration-300 cursor-pointer"
									>
										{item.icon}
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p className="text-lg">{item.name}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					);
				})}
			</div>
		</div>
	);
};

export default Skills;
