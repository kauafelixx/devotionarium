interface OrnamentDividerProps {
  symbol?: string;
  className?: string;
}

const OrnamentDivider = ({ symbol = "✠", className = "" }: OrnamentDividerProps) => {
  return (
    <div className={`ornament-divider ${className}`}>
      <span className="font-title text-lg">{symbol}</span>
    </div>
  );
};

export default OrnamentDivider;
