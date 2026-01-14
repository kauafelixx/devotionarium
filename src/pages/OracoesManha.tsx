import { useState } from "react";
import PrayerPageLayout from "@/layouts/PrayerPageLayout";
import BilingualPrayer from "@/components/BilingualPrayer";
import PrayerMenu from "@/components/PrayerMenu";
import { getCategoryById } from "@/data/prayers";

const OracoesManha = () => {
  const category = getCategoryById("oracoes-manha");
  const [selectedPrayerId, setSelectedPrayerId] = useState(category?.prayers[0]?.id || "");
  
  const selectedPrayer = category?.prayers.find((p) => p.id === selectedPrayerId);

  if (!category || !selectedPrayer) return null;

  const menuItems = category.prayers.map((p) => ({
    id: p.id,
    title: p.titlePortugues,
  }));

  return (
    <PrayerPageLayout title={category.categoryTitle}>
      <PrayerMenu
        prayers={menuItems}
        currentPrayerId={selectedPrayerId}
        onSelectPrayer={setSelectedPrayerId}
      />
      <BilingualPrayer
        titlePortugues={selectedPrayer.titlePortugues}
        titleLatim={selectedPrayer.titleLatim}
        textPortugues={selectedPrayer.textPortugues}
        textLatim={selectedPrayer.textLatim}
      />
    </PrayerPageLayout>
  );
};

export default OracoesManha;
