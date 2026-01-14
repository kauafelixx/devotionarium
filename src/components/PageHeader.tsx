import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <header className="text-center py-8 relative">
      <Link
        to="/"
        className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-sepia hover:text-primary transition-colors font-body text-lg"
      >
        <ArrowLeft className="w-5 h-5 mb-44" />
        <span className="hidden sm:inline mb-44">Voltar</span>
      </Link>

      <div className="ornament-divider mb-4">
        <span className="font-title text-lg">✠</span>
      </div>

      <h1 className="font-title text-2xl sm:text-3xl md:text-4xl text-primary tracking-widest uppercase">
        {title}
      </h1>

      <div className="ornament-divider mt-4">
        <span className="font-title text-sm">❧</span>
      </div>
    </header>
  );
};

export default PageHeader;
