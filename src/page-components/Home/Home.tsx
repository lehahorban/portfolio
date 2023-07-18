import { FC } from "react";
import { HomePage } from "@/components/HomePage";

export const HomeSection: FC = () => {
  return (
    <section className="py-28">
      <div className="container">
        <HomePage />
      </div>
    </section>
  );
};
