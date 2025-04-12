
import React from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface CustomCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  hoverEffect?: 'scale' | 'lift' | 'glow' | 'none';
  variant?: 'default' | 'glass' | 'outline' | 'solid';
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  animation?: 'fade-in' | 'slide-in' | 'bounce' | 'none';
  animationDelay?: string;
  icon?: React.ReactNode;
  iconBackground?: string;
}

const CustomCard = React.forwardRef<
  HTMLDivElement,
  CustomCardProps
>(({
  children,
  className,
  hoverEffect = 'scale',
  variant = 'default',
  headerClassName,
  contentClassName,
  footerClassName,
  animation = 'none',
  animationDelay = '0s',
  icon,
  iconBackground,
  ...props
}, ref) => {
  // Define hover effect classes
  const hoverEffectClasses = {
    scale: 'hover:scale-105',
    lift: 'hover:-translate-y-2 hover:shadow-lg',
    glow: 'hover:shadow-xl hover:shadow-skyblue/20 dark:hover:shadow-skyblue-dark/20',
    none: ''
  };

  // Define variant classes
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 shadow-md',
    glass: 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg',
    outline: 'bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700',
    solid: 'bg-skyblue/10 dark:bg-skyblue-dark/10 text-skyblue-dark dark:text-skyblue-light'
  };

  // Define animation classes
  const animationClasses = {
    'fade-in': 'animate-fade-in-up',
    'slide-in': 'animate-slide-in-right',
    'bounce': 'animate-bounce-lazy',
    'none': ''
  };

  return (
    <Card 
      ref={ref}
      className={cn(
        "transition-all duration-300 rounded-xl overflow-hidden",
        variantClasses[variant],
        hoverEffectClasses[hoverEffect],
        animationClasses[animation],
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      {icon && (
        <div className="flex justify-center mt-6">
          <div className={cn(
            "flex items-center justify-center p-3 rounded-full transition-transform duration-300 group-hover:scale-110",
            iconBackground || "bg-skyblue/20 dark:bg-skyblue-dark/20"
          )}>
            {icon}
          </div>
        </div>
      )}
      {children}
    </Card>
  );
});
CustomCard.displayName = "CustomCard";

const CustomCardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CardHeader>
>(({ className, ...props }, ref) => (
  <CardHeader ref={ref} className={cn("text-center", className)} {...props} />
));
CustomCardHeader.displayName = "CustomCardHeader";

const CustomCardContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CardContent>
>(({ className, ...props }, ref) => (
  <CardContent ref={ref} className={cn("text-center", className)} {...props} />
));
CustomCardContent.displayName = "CustomCardContent";

const CustomCardFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CardFooter>
>(({ className, ...props }, ref) => (
  <CardFooter ref={ref} className={cn("flex justify-center", className)} {...props} />
));
CustomCardFooter.displayName = "CustomCardFooter";

export { CustomCard, CustomCardHeader, CustomCardContent, CustomCardFooter };
