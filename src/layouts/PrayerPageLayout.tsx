import PageHeader from "@/components/PageHeader";

interface PrayerPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PrayerPageLayout = ({ title, children }: PrayerPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-6">
        <PageHeader title={title} />
        <main className="mt-8">{children}</main>
      </div>
    </div>
  );
};

export default PrayerPageLayout;
