'use client';

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import { Lottie } from "lottie-react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import SavoniusCard from "./SavoniusCard";
import CarbonCaptureVisual from "./CarbonCaptureVisual";

/** Declares type of each card */
export type BentoKind =
  | "savonius"
  | "globe"
  | "aquaponics"
  | "ycaf"
  | "carbon"
  | "collaborate";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto max-w-2xl lg:max-w-none",
        className,
      )}
    >
      {children}
    </div>
  );
};

const AquaponicsLoop = () => (
  <svg
    viewBox="0 0 200 120"
    className="mt-4 w-full max-w-64"
    role="img"
    aria-label="Closed loop: fish waste feeds bacteria, bacteria feed plants, plants return clean water to the fish"
  >
    <path d="M100 20 L172 84 L28 84 Z" fill="none" stroke="#CBACF9" strokeOpacity="0.25" strokeWidth="1.5" strokeLinejoin="round" />
    <path
      d="M100 20 L172 84 L28 84 Z"
      fill="none"
      stroke="#CBACF9"
      strokeWidth="1.5"
      strokeLinejoin="round"
      strokeDasharray="4 6"
      className="motion-reduce:hidden"
    >
      <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1.6s" repeatCount="indefinite" />
    </path>
    {[[100, 20], [172, 84], [28, 84]].map(([cx, cy]) => (
      <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="11" fill="#10132E" stroke="#CBACF9" strokeOpacity="0.6" />
    ))}
    <text x="118" y="24" className="fill-white/70 text-[9px]">Fish</text>
    <text x="172" y="112" textAnchor="middle" className="fill-white/70 text-[9px]">Bacteria</text>
    <text x="28" y="112" textAnchor="middle" className="fill-white/70 text-[9px]">Plants</text>
  </svg>
);

const STATION_COLORS = [
  "#fbbf24", "#f59e0b", "#fb923c", "#f97316", "#ef4444",
  "#fbbf24", "#fb923c", "#ef4444", "#f97316", "#f59e0b",
];
const StationDots = () => (
  <div
    aria-hidden
    className="grid grid-cols-5 gap-4 sm:gap-6"
  >
    {STATION_COLORS.map((color, i) => (
      <span
        key={i}
        className="h-6 w-6 sm:h-8 sm:w-8 rounded-full animate-pulse motion-reduce:animate-none"
        style={{
          backgroundColor: color,
          animationDelay: `${(i * 370) % 2000}ms`,
          animationDuration: "2.4s",
        }}
      />
    ))}
  </div>
);

export const BentoGridItem = ({
  className,
  kind,
  title,
  description,
  body,
  tags,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  kind?: BentoKind;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  body?: string;
  tags?: readonly string[];
  id?: number,
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('martinsuarezjaramillo@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch{
      /** catches bug where user has their clipboard blocked in permissions */
    }
  }

  // Cards whose text sits on top and whose visual fills the space below it.
  const stacked = kind === "savonius" || kind === "ycaf" || kind === "carbon";

  return (
    <div
      className={cn(
        "group/bento shadow-input relative overflow-hidden min-h-fit row-span-1 flex flex-col justify-between space-y-4 rounded-3xl transition duration-200 hover:shadow-xl dark:shadow-none border border-white/10",
        className,
      )}
      style={{
        background: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Wrapper: fills the card for stacked kinds so the visual slot can flex-grow */}
      <div
        className={cn(
          kind === "collaborate" && "flex h-full justify-center",
          stacked && "flex min-h-0 flex-1 flex-col",
        )}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt=""
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div className="absolute right-0 -bottom-5">
          {spareImg && (
            <img
              src={spareImg}
              alt=""
              className='object-cover object-center w-full h-full'
            />
          )}
        </div>

        {kind === "globe" && <GlobeDemo />}

        {kind === "collaborate" && <BackgroundGradientAnimation />}

        {/** Foreground: text block */}
        <div
          className={cn(
            titleClassName,
            'group-hover/bento:translate-x-2 transition duration-200 relative min-h-40 flex flex-col px-5 p-5 lg:p-10',
            stacked ? 'shrink-0' : 'md:h-full',
          )}
        >
          <div className="font-sans text-sm font-extralight text-white-200 md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div className="mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>
          {body && (
            <p className='z-10 max-w-80 font-sans text-sm text-white/70'>
              {body}
            </p>
          )}

          

          {kind === "aquaponics" && <AquaponicsLoop />}

          {tags && tags.length > 0 && (
            <ul className="z-10 mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className="rounded-lg bg-[#10132E] px-3 py-1.5 text-xs text-white/80">
                  {tag}
                </li>
              ))}
            </ul>
          )}

          {kind === "collaborate" && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  src={animationData}
                  autoplay={copied}
                />
              </div>
              <MagicButton
                title={copied ? 'Email copied' : 'Copy my Email'}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>

        {/* Visual slots: sit below the text and take the remaining height */}
        {kind === "savonius" && (
          <div className="relative min-h-72 flex-1">
            <div className="absolute inset-0"><SavoniusCard /></div>
          </div>
        )}

        {kind === "ycaf" && (
          <div className="flex flex-1 items-center justify-center px-5 pb-6 lg:pb-10">
            <StationDots />
          </div>
        )}

        {kind === "carbon" && (
          <div className="relative min-h-64 flex-1">
            <div className="absolute inset-0"><CarbonCaptureVisual /></div>
          </div>
        )}
      </div>
    </div>
  );
};
