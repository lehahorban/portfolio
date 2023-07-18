import { FC } from "react";
import { EducationalProjectsList } from "@/components/EducationalProjectsList";

export const EducationalProjectsSection: FC = () => {
  return (
    <section className="py-28">
      <div className="container">
        <EducationalProjectsList />
      </div>
    </section>
  );
};
