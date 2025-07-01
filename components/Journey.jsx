const journey = [
	{
		years: '2025 - Presente',
		role: 'Estudiante',
		institucion: 'Academlo',
	},
	{
		years: '2018-2019',
		role: 'Tecnico en Sistemas',
		institucion: 'SENA Colombia',
	},
	{
		years: '2020-2025',
		role: 'Contador Publico',
		institucion: 'Universidad Francisco de Paula Santander',
	},
];

const Journey = () => {
	return (
		<div className="flex flex-col">
			<h2 className="h2 mb-8">Educacion</h2>
			{journey.map((item, index) => {
				const { institucion, role, years } = item;
				return (
					<div key={index} className="flex items-center gap-12 w-full">
						{/* bullets */}
						<div className="flex flex-col w-max justify-center items-center">
							<div className="w-3 h-3 bg-accent rounded-full"></div>
							<div className="w-[1px] h-[180px] bg-white/10 "></div>
						</div>
						{/* text */}
						<div className="mxx-w-[500px] ">
							<p className="mb-6 text-lg text-white/50">{years}</p>
							<h4 className="h4 mb-2">{role}</h4>
							<p className="text-lg text-white/50">{institucion}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Journey;
