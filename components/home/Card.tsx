import { Project } from "@/types/projects";
import Image from "next/image";

interface Props {
  id: string;
  name: string;
  image: string;
}

function Card({ id, name, image }: Props) {
  return (
    <div className="h-40 w-52 bg-white">
      <Image src={image} fill alt={name} />
    </div>
  );
}

export default Card;
