import { ArrowRight } from "lucide-react";

import { cn } from "@/components/libs/utils";

type Props = {
    label: string;
    show?: boolean
};

export default function ShiningButtonWhite({ label, show }: Props) {

    return (
        <button className="group cursor-pointer rounded-xl border-4 border-white border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100">
            <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-[#fff] px-6 py-2.5 font-medium text-[#E53636] hover:bg-[#f5f5f5]">
                {label}
                {show && <ArrowRight className="transition-all group-hover:translate-x-2 group-hover:scale-125" />}
                <div
                    className={cn(
                        "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-red-800/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]",
                    )}
                />
            </div>
        </button>
    );
}

