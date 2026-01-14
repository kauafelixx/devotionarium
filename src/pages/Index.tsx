import pelicanLogo from "@/assets/pelican-logo.png";
import PrayerButton from "@/components/PrayerButton";
import OrnamentDivider from "@/components/OrnamentDivider";
import BaroqueFrame from "@/components/BaroqueFrame";

const Index = () => {
  const prayerLinks = [
    { to: "/oracoes-principais", label: "Orações Principais" },
    { to: "/oracoes-manha", label: "Orações da Manhã" },
    { to: "/oracoes-noite", label: "Orações da Noite" },
    { to: "/nossa-senhora", label: "A Nossa Senhora" },
    { to: "/sao-jose", label: "A São José" },
    { to: "/antes-missa", label: "Antes da Santa Missa" },
    { to: "/acao-gracas", label: "Para Ação de Graças" },
    { to: "/devocoes-eucaristicas", label: "Devoções Eucarísticas" },
    { to: "/oracoes-diversas", label: "Orações Diversas" },
    { to: "/ladainhas", label: "Ladainhas" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-2xl mx-auto px-4 py-8 sm:py-12">
        {/* Header Section with Baroque Frame */}
        <BaroqueFrame className="mb-12">
          <div className="text-center">
            {/* Logo */}
            <div className="relative mx-auto w-40 h-40 sm:w-52 sm:h-52 mb-6 opacity-0 animate-fade-in">
              <img
                src={pelicanLogo}
                alt="Devotionarium - Pelicano"
                className="w-full h-auto object-contain rounded-lg scale-150"
                style={{
                  filter: "sepia(20%) contrast(1.1)",
                }}
              />
            </div>

            {/* Title */}
            <h1 
              className="font-title text-2xl sm:text-4xl md:text-5xl text-primary tracking-[0.2em] uppercase mb-4 opacity-0 animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              Devotionarium
            </h1>

            <OrnamentDivider symbol="✠" />

            {/* Subtitle */}
            <p 
              className="font-body text-xl sm:text-2xl text-sepia italic opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Orações cotidianas
            </p>
            <p 
              className="font-title text-sm sm:text-base text-muted-foreground tracking-[0.3em] uppercase mt-2 opacity-0 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              Latim — Português
            </p>
          </div>
        </BaroqueFrame>

        {/* Prayer Navigation Cards */}
        <nav className="space-y-3 sm:space-y-4">
          {prayerLinks.map((link, index) => (
            <PrayerButton key={link.to} to={link.to} delay={400 + index * 50}>
              {link.label}
            </PrayerButton>
          ))}
        </nav>

        {/* Footer ornament */}
        <div className="mt-12">
          <OrnamentDivider symbol="❧" />
        </div>
      </div>
    </div>
  );
};

export default Index;
