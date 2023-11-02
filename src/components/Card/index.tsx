import { FC } from "react";
import { TypeCard } from "@/data/Type/type-card";
import Link from "next/link";


const Card: FC<TypeCard> = (props) => {
  return (
    <div className="flex-col flex border-b-[2px] border-orange-300 border-dashed">
      <p className="text-black text-xl  font-bold hover:text-yellow-500">
        <Link href={`post/${props.id}`}>{props.title}</Link>
      </p>
      <p className="text-justify text-[15px]">{props.desc}</p>
      <div className="flex flex-row mt-3 justify-end ">
        <p className="ml-1 text-[15px] text-yellow-400 font-semibold">
          {" "}
          {props.author}
        </p>
      </div>

    </div>
  );
};

export default Card;
