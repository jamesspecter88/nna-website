import React from 'react';

interface CTAButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href, onClick, primary = true }) => {
  const baseClasses = "rounded-full border border-solid transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5";
  const primaryClasses = "border-transparent bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]";
  const secondaryClasses = "border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent";

  const classes = `${baseClasses} ${primary ? primaryClasses : secondaryClasses}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
};

export default CTAButton;