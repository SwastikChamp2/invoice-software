import { useEffect, useRef } from "react";
import {
    HiOutlineSparkles,
    HiOutlineChartBar,
} from "react-icons/hi2";
import { IoIosTrendingUp } from "react-icons/io";

import scrollFeature1 from "../assets/images/scrollFeature1.svg";
import scrollFeature2 from "../assets/images/scrollFeature2.svg";
import scrollFeature3 from "../assets/images/scrollFeature3.svg";

const cards = [
    {
        id: "01",
        title: "Connect Accounts",
        desc: "Securely link your bank and business tools in minutes.",
        image: scrollFeature1,
        icon: <HiOutlineSparkles size={16} />,
    },
    {
        id: "02",
        title: "Track in Real-Time",
        desc: "View all your financial data live on one clean dashboard.",
        image: scrollFeature2,
        icon: <IoIosTrendingUp size={16} />,
    },
    {
        id: "03",
        title: "Grow Smarter, Faster",
        desc: "Use insights and reports to guide better business decisions.",
        image: scrollFeature3,
        icon: <HiOutlineChartBar size={16} />,
    },
];

export default function HowItWorks() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const cardElements = cardsRef.current;

        const handleScroll = () => {
            cardElements.forEach((card, index) => {
                if (!card) return;
                if (index === cardElements.length - 1) return;

                const nextCard = cardElements[index + 1];
                if (!nextCard) return;

                const cardInner = card.querySelector(".card-inner");
                if (!cardInner) return;

                const cardRect = card.getBoundingClientRect();
                const nextRect = nextCard.getBoundingClientRect();

                const height = cardRect.height;
                if (height <= 0) return;

                // Calculate progress based on the physical overlap of the next card on the current card
                let progress = (cardRect.bottom - nextRect.top) / height;
                progress = Math.max(0, Math.min(progress, 1));

                // Subtle scale effect (94% at maximum overlap)
                const toScale = 1 - (cardElements.length - 1 - index) * 0.03;
                const scale = 1 - (1 - toScale) * progress;

                cardInner.style.transform = `scale(${scale})`;
            });
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="w-full bg-[#ffffff] py-24 md:py-32">
            <div className="max-w-[1320px] mx-auto px-5 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 lg:gap-16 items-start">
                    {/* LEFT */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        {/* Chip */}
                        <div className="bg-white border border-[#ececec] rounded-full px-4 py-1.5 shadow-[0_4px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] mb-6 w-fit">
                            <span className="text-[14px] text-[#707070] font-medium">
                                How It Works
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-[36px] md:text-[50px] leading-[0.96] tracking-[-0.055em] font-medium text-[#111111] max-w-[720px]">
                            From setup to
                            <br />
                            insight—just three
                            <br />
                            simple steps.
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="relative">
                        {cards.map((card, index) => (
                            <div
                                key={card.id}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className={`
                                    sticky
                                    ${index === 0 ? "top-24" : ""}
                                    ${index === 1 ? "top-32" : ""}
                                    ${index === 2 ? "top-40" : ""}
                                    h-fit
                                    mb-10
                                `}
                                style={{
                                    zIndex: index + 1,
                                }}
                            >
                                <div
                                    className="
                                        card-inner
                                        origin-top
                                        relative
                                        bg-[#f7f7f6]
                                        border border-[#e8e8e6]
                                        rounded-[28px]
                                        overflow-hidden
                                        shadow-[0_2px_10px_rgba(0,0,0,0.03)]
                                        backdrop-blur-sm
                                        will-change-transform
                                    "
                                >
                                    <div className="p-7 md:p-8">
                                        {/* Top */}
                                        <div className="flex items-start gap-5">
                                            {/* Icon */}
                                            <div className="w-[44px] h-[44px] rounded-full bg-[#5f8ef7] flex items-center justify-center text-white shrink-0">
                                                {card.icon}
                                            </div>

                                            <div>
                                                <h3 className="text-[28px] md:text-[30px] leading-none tracking-[-0.05em] font-medium text-[#171717]">
                                                    {card.title}
                                                </h3>

                                                <p className="mt-3 text-[16px] md:text-[17px] leading-[1.35] text-[#6c6c6c] tracking-[-0.03em] max-w-[480px]">
                                                    {card.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Illustration */}
                                        <div className="mt-8 flex justify-center">
                                            <img
                                                src={card.image}
                                                alt={card.title}
                                                className="
                                                    w-full
                                                    max-w-[520px]
                                                    object-contain
                                                    pointer-events-none
                                                    select-none
                                                "
                                            />
                                        </div>
                                    </div>

                                    {/* Number */}
                                    <div className="absolute bottom-5 right-5">
                                        <div className="w-[42px] h-[42px] rounded-full bg-[#ececeb] flex items-center justify-center">
                                            <span className="text-[15px] text-[#666666] font-medium tracking-[-0.03em]">
                                                {card.id}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Extra spacer for proper stacking scroll effect */}
                        <div className="h-[20vh]" />
                    </div>
                </div>
            </div>
        </section>
    );
}