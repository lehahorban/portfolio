import { FC } from "react";
import { CommercialProjectList } from "@/components/CommercialProjectList";

export const CommercialProjecrtSection: FC = () => {
  return (
    <section className="py-28">
      <div className="container">
        <CommercialProjectList />;
      </div>
    </section>
  );
};
