import { useState } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PrayerMenuItem {
  id: string;
  title: string;
}

interface PrayerMenuProps {
  prayers: PrayerMenuItem[];
  currentPrayerId?: string;
  onSelectPrayer: (id: string) => void;
}

const PrayerMenu = ({ prayers, currentPrayerId, onSelectPrayer }: PrayerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectPrayer = (id: string) => {
    onSelectPrayer(id);
    setIsOpen(false);
  };

  return (
    <div className="mb-6">
       
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-ivory via-cream to-aged-paper border border-sepia/30 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
        aria-label="Menu de orações"
      >
        <div className="flex items-center gap-3">
          {isOpen ? (
            <X className="w-5 h-5 text-sepia" />
          ) : (
            <Menu className="w-5 h-5 text-sepia" />
          )}
          <span className="font-title text-sm sm:text-base tracking-wide text-primary">
            Selecionar Oração
          </span>
        </div>
        <span className="text-accent text-xs">❧</span>
      </button>

     
      <div
        className={`mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-ivory to-cream border border-sepia/25 rounded-2xl shadow-lg overflow-hidden">
          <ul className="divide-y divide-sepia/10">
            {prayers.map((prayer) => (
              <li key={prayer.id}>
                <button
                  onClick={() => handleSelectPrayer(prayer.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 text-left transition-all duration-200 hover:bg-sepia/10 ${
                    currentPrayerId === prayer.id
                      ? "bg-sepia/15 text-primary"
                      : "text-foreground/80"
                  }`}
                >
                  <span className="font-body text-base sm:text-lg">
                    {prayer.title}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 text-accent transition-transform duration-200 ${
                      currentPrayerId === prayer.id ? "translate-x-1" : ""
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrayerMenu;
