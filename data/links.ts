import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

interface Link {
    icon: React.ElementType;
    href: string;
};


const Links: Link[] = [
    {
        icon: FaGithub,
        href: "https://github.com/RafhaelHailar"
    },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/rafhaelhailar/"
    },
];


export default Links;