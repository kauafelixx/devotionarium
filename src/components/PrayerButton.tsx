import { Link } from "react-router-dom";

interface PrayerButtonProps {
  to: string;
  children: React.ReactNode;
  delay?: number;
}

const PrayerButton = ({ to, children, delay = 2 }: PrayerButtonProps) => {
  return (
    <Link
      to={to}
      className="group block w-full opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms`}}
    >
      <div className="prayer-card">
        <span className="prayer-card-ornament left">❧</span>
        <span className="font-title text-base sm:text-lg tracking-wide uppercase text-primary group-hover:text-primary-foreground transition-colors duration-300">
          {children}
        </span>
        <span className="prayer-card-ornament right">❧</span>
      </div>
    </Link>
  );
};

export default PrayerButton;
