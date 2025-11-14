import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <img
      src="/assets/finance.svg" 
      alt="Logo"
      className={cn("w-16 h-auto", className)}
    />
  );
};

export const LogoIcon = ({
  className,
  uniColor,
}: {
  className?: string;
  uniColor?: boolean;
}) => {
  return (
    <img
      src="/assets/finance.svg" 
      alt="Logo Icon"
      className={cn("w-10 h-auto", className)}
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <img
      src="/assets/finance.svg" 
      alt="Logo Stroke"
      className={cn("w-16 h-auto", className)}
    />
  );
};
