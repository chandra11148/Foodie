import { ReactNode } from "react";

export const Card = ({
    id,
    avatar,
    image,
    title,
    description,
    email,
    ingredients,
    note,
    children,
    isFull = false,
  }: { 
    id: string;
    avatar: string;
    image: string;
    description: string;
    title: string;
    email: string;
    ingredients: string;
    note?: string;
    children?: ReactNode;
    isFull?: boolean;
  }) => {
    return (
        <div className={`w-full ${isFull? "md:w-[50%]":"md:w-[14rem]"}
            bg-zinc-900 transition ease-in-out delay-150 hover:translate-x-6 hover:scale-100 duration-300 mb-4
        `}>

        </div>
    );
}