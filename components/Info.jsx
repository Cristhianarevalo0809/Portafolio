import {
	HiOutlineMail,
	HiOutlinePhone,
	HiOutlineUser,
	HiOutlineLocationMarker,
} from 'react-icons/hi';

const Info = () => {
	return (
		<div className="flex flex-col gap-6 md:gap-10">
			<div className="flex flex-col md:flex-row gap-4">
				<div className="w-[280px] flex items-center gap-4 ">
					<HiOutlineUser className="text-2xl mt-1 text-accent" />
					<div>
						<p className="text-lg">Fecha de Nacimien</p>
						<p>12 Diciembre 1994</p>
					</div>
				</div>
				<div className="w-[280px] flex items-center gap-1.5 ">
					<HiOutlineMail className="text-2xl mt-1 text-accent" />
					<div>
						<p className="text-lg">Correo Electronico</p>
						<p>cristhianarevalo3@gmail.com</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col md:flex-row gap-4">
				<div className="w-[280px] flex items-center gap-4 ">
					<HiOutlinePhone className="text-2xl mt-1 text-accent" />
					<div>
						<p className="text-lg">Telefono</p>
						<p>(+57)318 692 2681</p>
					</div>
				</div>
				<div className="w-[280px] flex items-center gap-4 ">
					<HiOutlineLocationMarker className="text-2xl mt-1 text-accent" />
					<div>
						<p className="text-lg">Localizacion</p>
						<p>Ocaña, Colombia</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Info;
