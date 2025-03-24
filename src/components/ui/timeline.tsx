"use client";
import {
//   useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full dir-ltr font-[iranbakh] md:px-10"
      ref={containerRef}
    >
    

      <div ref={ref} className="relative flex flex-col pb-20 w-full font-[iranbakhbold]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row-reverse justify-between pt-10 md:gap-10 w-full"
          >
            <div className="sticky justify-end flex  z-40 items-start top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute w-10 right-[-9%] rounded-full bg-transparent flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-(--secondary) border border-neutral-500  p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl  text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-[60%] ">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute right-[-1%] top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 right-[10%] top-0  w-[2px] bg-gradient-to-t to-[#172FA6] from-[#0FBFE9] from-[10%] to-[47%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
