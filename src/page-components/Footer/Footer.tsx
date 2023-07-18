import { FC } from "react";
import { FooterList } from "@/components/FooterList";

export const Footer: FC = () => {
  return (
    <footer id="contacts" className="bg-slate-900 py-6">
      <div className="container">
        <FooterList />
      </div>
    </footer>
  );
};
