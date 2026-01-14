interface BilingualPrayerProps {
  titlePortugues: string;
  titleLatim: string;
  textPortugues: string;
  textLatim: string;
}

const BilingualPrayer = ({
  titlePortugues,
  titleLatim,
  textPortugues,
  textLatim,
}: BilingualPrayerProps) => {
  // Function to render text with proper line breaks and V./R. formatting
  const renderPrayerText = (text: string, isLatin: boolean = false) => {
    const lines = text.split('\n');
    
    return lines.map((line, index) => {
      const trimmedLine = line.trim();
      
      // Empty line = paragraph break
      if (trimmedLine === '') {
        return <div key={index} className="h-4" />;
      }
      
      // Check for V. or R. patterns
      if (trimmedLine.startsWith('V.') || trimmedLine.startsWith('V:')) {
        return (
          <p key={index} className={`${isLatin ? 'prayer-text-latin' : 'prayer-text'} flex gap-2`}>
            <span className="font-bold text-primary min-w-[24px]">V.</span>
            <span>{trimmedLine.substring(2).trim()}</span>
          </p>
        );
      }
      
      if (trimmedLine.startsWith('R.') || trimmedLine.startsWith('R:')) {
        return (
          <p key={index} className={`${isLatin ? 'prayer-text-latin' : 'prayer-text'} flex gap-2`}>
            <span className="font-bold text-accent min-w-[24px]">R.</span>
            <span className="font-semibold">{trimmedLine.substring(2).trim()}</span>
          </p>
        );
      }
      
      // Check for "Oremos:" or "Orémus:"
      if (trimmedLine.startsWith('Oremos:') || trimmedLine.startsWith('Orémus:')) {
        return (
          <p key={index} className={`${isLatin ? 'prayer-text-latin' : 'prayer-text'} font-bold text-primary mt-4`}>
            {trimmedLine}
          </p>
        );
      }
      
      // Regular line
      return (
        <p key={index} className={isLatin ? 'prayer-text-latin' : 'prayer-text'}>
          {trimmedLine}
        </p>
      );
    });
  };

  return (
    <div className="baroque-frame">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8">
        {/* Portuguese Column */}
        <div className="text-center lg:text-left">
          <h3 className="font-title text-xl text-primary mb-4 tracking-wide">
            {titlePortugues}
          </h3>
          <div className="space-y-1">
            {renderPrayerText(textPortugues, false)}
          </div>
        </div>

        {/* Vertical Baroque Divider */}
        <div className="hidden lg:block vertical-divider min-h-[200px]" />
        
        {/* Mobile divider */}
        <div className="lg:hidden ornament-divider">
          <span className="font-title text-sm">✦</span>
        </div>

        {/* Latin Column */}
        <div className="text-center lg:text-left">
          <h3 className="font-title text-xl text-primary mb-4 tracking-wide italic">
            {titleLatim}
          </h3>
          <div className="space-y-1">
            {renderPrayerText(textLatim, true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilingualPrayer;
