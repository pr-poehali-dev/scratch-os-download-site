import { LucideIcon, CircleAlert } from "lucide-react";
import * as Icons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = (Icons as any)[name] as LucideIcon;
  const FallbackIcon = (Icons as any)[fallback] as LucideIcon;

  if (!IconComponent) {
    const FallbackComponent = FallbackIcon || CircleAlert;
    return <FallbackComponent size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
