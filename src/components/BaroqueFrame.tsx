interface BaroqueFrameProps {
  children: React.ReactNode;
  className?: string;
}

const BaroqueFrame = ({ children, className = "" }: BaroqueFrameProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Corner ornaments - more rounded */}
      <div className="absolute top-0 left-0 w-10 h-10 sm:w-12 sm:h-12 border-t-2 border-l-2 border-sepia/40 rounded-tl-xl" />
      <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 border-t-2 border-r-2 border-sepia/40 rounded-tr-xl" />
      <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 border-b-2 border-l-2 border-sepia/40 rounded-bl-xl" />
      <div className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 border-b-2 border-r-2 border-sepia/40 rounded-br-xl" />
      
      {/* Inner frame line - rounded */}
      <div className="absolute inset-3 sm:inset-4 border border-sepia/20 rounded-xl pointer-events-none" />
      
      {/* Content */}
      <div className="p-6 sm:p-8 md:p-12">
        {children}
      </div>
    </div>
  );
};

export default BaroqueFrame;
