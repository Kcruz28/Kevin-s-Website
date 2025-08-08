"use client";

import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

export const FlatCard = ({
  name,
  description,
  icon,
}: {
  name: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card
      className={cn(
        "w-full h-full",
        "bg-white/30 dark:bg-black/30 backdrop-blur-[2px]",
        "border border-white/10 dark:border-white/10 rounded-lg",
        "shadow-md dark:shadow-none",
        "hover:shadow-lg hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.2)]",
        "transition-transform duration-300 ease-in-out hover:scale-105"
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-3 text-[#e30b5d] dark:text-[#e30b5d]">
          {icon}
        </div>
        <div>
          <CardTitle className="text-lg font-bold text-gray-800 dark:text-white">
            {name}
          </CardTitle>
          <CardDescription className="text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </CardDescription>
        </div>
      </div>
    </Card>
  );
};
