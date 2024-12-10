import { cn } from "@/components/libs/utils";

interface AnimatedTrailProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * The duration of the animation.
     * @default "10s"
     */
    duration?: string | number;
    contentClassName?: string;

    trailColor?: string;
    trailSize?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
    sm: 5,
    md: 10,
    lg: 20,
    xl: 60,
};

export default function AnimatedBorderTrail({
    children,
    className,
    duration = "10s",
    trailColor = "purple",
    trailSize = "xl",
    contentClassName,
    ...props
}: AnimatedTrailProps) {
    return (
        <div
            {...props}
            className={cn("relative h-fit w-fit overflow-hidden rounded-2xl bg-yellow-400 p-px", className)}
        >
            <div
                className="absolute inset-0 h-full w-full animate-trail"
                style={{
                    "--duration": typeof duration === "number" ? `${duration}s` : duration,
                    "--angle": "0deg",
                    background: `conic-gradient(from var(--angle) at 70% 70%, transparent ${100 - sizes[trailSize]}%, ${trailColor})`,
                } as React.CSSProperties}
            />
            <div
                className={cn(
                    "relative h-full w-full overflow-hidden rounded-[15px] bg-yellow-400",
                    contentClassName,
                )}
            >
                {children}
            </div>
        </div>
    );
}
