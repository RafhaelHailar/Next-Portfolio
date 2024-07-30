import { Project } from "@/types/projects";
import Image from "next/image";

interface Props {
  id: string;
  name: string;
  image: string;
}

function Card({ id, name, image }: Props) {
  return (
    <div className="h-40 w-52 bg-background relative border-primary border-4 rounded-md cursor-pointer">
      <Image
        src={image}
        sizes="13rem"
        fill
        loading="lazy"
        unoptimized
        className="relative object-cover"
        alt={name}
      />
    </div>
  );
}

export default Card;
