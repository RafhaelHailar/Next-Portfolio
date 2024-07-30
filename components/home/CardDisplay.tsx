"use client";

import { useGetProjects } from "@/services/queries";
import Card from "./Card";
import { Skeleton } from "../ui/skeleton";

function CardDisplay() {
  const MAX_AMOUNT = 4;
  const { data, isSuccess } = useGetProjects();

  return (
    <div className="flex gap-x-5">
      {isSuccess
        ? data.map(
            ({
              id,
              name,
              image,
            }: {
              id: string;
              name: string;
              image: string;
            }) => <Card key={id} id={id} name={name} image={image} />
          )
        : new Array(MAX_AMOUNT)
            .fill(null)
            .map((_, index) => <Skeleton key={index} className="h-40 w-52" />)}
    </div>
  );
}

export default CardDisplay;
