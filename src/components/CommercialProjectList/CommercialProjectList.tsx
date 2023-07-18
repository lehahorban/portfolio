import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import data from "@/data/projects.json";

export const CommercialProjectList: FC = () => {
  return (
    <ul className="grid grid-flow-col-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8">
      {data.commercialProjects.map(
        ({ title, image, lifeLink, gitHubLink, description }) => (
          <li
            key={title}
            className="rounded-lg shadow-md overflow-hidden bg-slate-300"
          >
            <h2 className="text-2xl font-bold mb-2 pl-4 pt-2">{title}</h2>
            <div className="relative aspect-video">
              <Image
                className="object-cover object-center"
                fill
                src={image.url}
                alt={image.alt}
              />
            </div>
            <div className="p-4 bg-white flex flex-col h-full">
              <Link
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={lifeLink}
                className="text-blue-500 text-lg font-medium hover:underline hover:text-blue-600 hover:font-semibold transition-all duration-300"
              >
                Life page
              </Link>
              <Link
                rel="nofollow noopener noreferrer"
                target="_blank"
                href={gitHubLink}
                className="text-blue-500 text-lg font-medium hover:underline hover:text-blue-600 hover:font-semibold transition-all duration-300"
              >
                GitHub
              </Link>
              <p className="mt-2 text-gray-700 text-base font-normal">
                {description}
              </p>
            </div>
          </li>
        )
      )}
    </ul>
  );
};
