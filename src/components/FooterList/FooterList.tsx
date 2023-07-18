import { FC } from "react";
import Link from "next/link";
import EmailIcon from "public/images/email.svg";
import GithubIcon from "public/images/github.svg";
import LinkedinIcon from "public/images/linkedin.svg";
import TelegramIcon from "public/images/telegram.svg";
import TelphoneIcon from "public/images/telephone.svg";

import data from "@/data/projects.json";

export const FooterList: FC = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center tablet:flex-row">
          <Link
            className="group"
            target={"_blank"}
            rel="nofollow noopener noreferrer"
            href={`mailto:${data.footer.email.url}`}
            aria-label={data.footer.email.ariaLabel}
          >
            <div className="flex items-center justify-center gap-3">
              <EmailIcon className="w-6 h-6" />
              <p className="text-blue-500 text-base group-hover:text-blue-700 transition-all duration-300">
                {data.footer.email.url}
              </p>
            </div>
          </Link>
          <Link
            className="ml-0 tablet:ml-10 group"
            target={"_blank"}
            rel="nofollow noopener noreferrer"
            href="tel:+380975659932"
          >
            <div className="flex items-center justify-center">
              <TelphoneIcon className="w-4 h-4" />
              <p className="text-blue-500 text-base group-hover:text-blue-700 transition-all duration-300">
                {data.footer.telephone.number}
              </p>
            </div>
          </Link>
        </div>
        <ul className="flex items-center gap-3 mt-3">
          <li>
            <Link
              target={"_blank"}
              rel="nofollow noopener noreferrer"
              href={data.footer.github.url}
              aria-label={data.footer.github.ariaLabel}
            >
              <GithubIcon className="w-8 h-8" />
            </Link>
          </li>
          <li>
            <Link
              target={"_blank"}
              rel="nofollow noopener noreferrer"
              href={data.footer.linkedin.url}
              aria-label={data.footer.linkedin.ariaLabel}
            >
              <LinkedinIcon className="w-10 h-10" />
            </Link>
          </li>
          <li>
            <Link
              target={"_blank"}
              rel="nofollow noopener noreferrer"
              href={data.footer.telegram.url}
              aria-label={data.footer.telegram.ariaLabel}
            >
              <TelegramIcon className="w-8 h-8" />
            </Link>
          </li>
        </ul>
      </div>
      <p className="text-center text-gray-50 text-base mt-3">
        {data.footer.text}
      </p>
    </>
  );
};
