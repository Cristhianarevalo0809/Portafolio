import Link from 'next/link';
import {
	BiLogoDribbble,
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoLinkedin,
} from 'react-icons/bi';

const socials = [
	{
		icon: <BiLogoFacebook />,
		path: 'https://www.facebook.com/Crizthian.arevalo759/',
	},
	{
		icon: <BiLogoInstagram />,
		path: 'https://www.instagram.com/cristhianrarevalo/',
	},
	{
		icon: <BiLogoLinkedin />,
		path: 'https://www.linkedin.com/in/cristhian-arevalo-61bb01301/',
	},
	{
		icon: <BiLogoDribbble />,
		path: 'https://dribbble.com/cristhian-arevalo-pacheco',
	},
];

const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => (
				<Link
					key={index}
					href={item.path}
					className={iconStyles}
					target="_blank"
					rel="noopener noreferrer"
				>
					{item.icon}
				</Link>
			))}
		</div>
	);
};

export default Socials;
