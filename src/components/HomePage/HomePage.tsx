import { FC } from "react";
import Image from "next/image";
import data from "@/data/projects.json";

export const HomePage: FC = () => {
  return (
    <>
      <div className="flex flex-col flex-wrap desktop:justify-center desktop:flex-row items-center">
        <div>
          <h1 className="font-extrabold text-4xl tablet:text-7xl text-white mb-10 desktop:w-[500px] shadow-title">
            {data.home.title}
          </h1>
          <h2 className="uppercase text-gray-900 font-medium text-xl tablet:text-3xl shadow-text">
            {data.home.name}
          </h2>
        </div>
        <Image
          src={data.home.image.url}
          alt={data.home.image.alt}
          width={400}
          height={400}
        />
      </div>
    </>
  );
};
