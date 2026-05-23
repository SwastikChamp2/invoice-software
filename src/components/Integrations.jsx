import integrationlogo1 from '../assets/images/integrationlogo1.avif'
import integrationlogo2 from '../assets/images/integrationlogo2.avif'
import integrationlogo3 from '../assets/images/integrationlogo3.avif'
import integrationlogo4 from '../assets/images/integrationlogo4.avif'
import integrationlogo5 from '../assets/images/integrationlogo5.avif'
import ScrollReveal from './ScrollReveal'
import { motion } from 'framer-motion'

const logos = [
    integrationlogo1,
    integrationlogo2,
    integrationlogo3,
    integrationlogo4,
    integrationlogo5,
]

/*
    Logo positioning across the arc
*/
const arcItems = [
    { angle: 155, rotateDeg: -65, size: 78 },
    { angle: 125, rotateDeg: -35, size: 86 },
    { angle: 90, rotateDeg: 0, size: 96 },
    { angle: 55, rotateDeg: 35, size: 86 },
    { angle: 25, rotateDeg: 65, size: 78 },
]

export default function Integrations() {
    return (
        <section
            id="integrations"
            className="bg-[#ffffff] py-24 px-5 md:px-8 overflow-hidden"
        >
            <div className="max-w-[1180px] mx-auto">

                {/* HEADING */}
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="bg-white border border-[#ececec] rounded-full px-4 py-1.5 shadow-[0_4px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] mb-6">
                            <span className="text-[14px] text-[#707070] font-medium">
                                Integrations
                            </span>
                        </div>

                        <h2 className="text-[36px] md:text-[50px] leading-[0.96] tracking-[-0.055em] font-medium text-[#111111] max-w-[640px]">
                            Works with the tools
                            <br />
                            you already use.
                        </h2>
                    </div>
                </ScrollReveal>

                {/* ARC SECTION */}
                <div
                    className="relative flex justify-center"
                    style={{
                        height: '420px',
                    }}
                >

                    {/* ========================================= */}
                    {/* PERFECT ATMOSPHERIC ARC GLOW */}
                    {/* ========================================= */}

                    <motion.div
                        className="absolute bottom-0 left-1/2 pointer-events-none"
                        style={{
                            transform: 'translateX(-50%)',
                            width: '860px',
                            height: '430px',
                            opacity: 0.95,
                            mixBlendMode: 'normal',
                        }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.95 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <svg
                            width="860"
                            height="430"
                            viewBox="0 0 860 430"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                overflow: 'visible',
                            }}
                        >
                            <defs>

                                {/* MAIN SOFT GLOW */}
                                <radialGradient
                                    id="softArc"
                                    cx="50%"
                                    cy="100%"
                                    r="75%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="#FFFFFF"
                                        stopOpacity="0"
                                    />

                                    <stop
                                        offset="42%"
                                        stopColor="#EEF2FF"
                                        stopOpacity="0.14"
                                    />

                                    <stop
                                        offset="70%"
                                        stopColor="#DFE7F8"
                                        stopOpacity="0.55"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="#D7DEF1"
                                        stopOpacity="0.95"
                                    />
                                </radialGradient>

                                {/* VERY SOFT BLUR */}
                                <filter id="blurMe">
                                    <feGaussianBlur
                                        stdDeviation="32"
                                    />
                                </filter>

                                {/* TOP FADE */}
                                <linearGradient
                                    id="fadeMask"
                                    x1="0"
                                    y1="0"
                                    x2="0"
                                    y2="1"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="white"
                                        stopOpacity="1"
                                    />

                                    <stop
                                        offset="60%"
                                        stopColor="white"
                                        stopOpacity="0.55"
                                    />

                                    <stop
                                        offset="100%"
                                        stopColor="white"
                                        stopOpacity="0"
                                    />
                                </linearGradient>

                                <mask id="maskFade">
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="url(#fadeMask)"
                                    />
                                </mask>
                            </defs>

                            {/* MAIN ATMOSPHERIC GLOW */}
                            <ellipse
                                cx="430"
                                cy="430"
                                rx="315"
                                ry="315"
                                fill="url(#softArc)"
                                filter="url(#blurMe)"
                                mask="url(#maskFade)"
                            />

                            {/* SUBTLE EDGE LINE */}
                            <path
                                d="
                                    M 115 430
                                    A 315 315 0 0 1 745 430
                                "
                                stroke="#E6EBF7"
                                strokeOpacity="0.9"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.div>

                    {/* ========================================= */}
                    {/* LOGO CARDS */}
                    {/* ========================================= */}

                    {arcItems.map((item, index) => {

                        const rad = (item.angle * Math.PI) / 180

                        const arcRadius = 315
                        const containerCy = 410

                        const x = Math.cos(rad) * arcRadius
                        const y = containerCy - Math.sin(rad) * arcRadius

                        return (
                            <div
                                key={index}
                                className="absolute"
                                style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `${y}px`,
                                    transform: `translate(-50%, -50%) rotate(${item.rotateDeg}deg)`,
                                    width: `${item.size}px`,
                                    height: `${item.size}px`,
                                    zIndex: 10,
                                }}
                            >
                                <motion.div
                                    className="
                                        w-full
                                        h-full
                                        bg-white
                                        rounded-[24px]
                                        flex
                                        items-center
                                        justify-center
                                        p-4
                                    "
                                    style={{
                                        boxShadow:
                                            `
                                            0px 4px 10px rgba(0,0,0,0.02),
                                            0px 12px 30px rgba(0,0,0,0.05),
                                            0px 24px 60px rgba(0,0,0,0.04)
                                            `,
                                        border: '1px solid rgba(255,255,255,0.7)',
                                        backdropFilter: 'blur(10px)',
                                    }}
                                    initial={{ opacity: 0, scale: 0.75 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{
                                        duration: 1.2,
                                        delay: index * 0.08,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                >
                                    <img
                                        src={logos[index]}
                                        alt={`Integration ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',

                                            /*
                                                Counter rotate image
                                                so logo stays upright
                                            */
                                            transform: `rotate(${-item.rotateDeg}deg)`,
                                        }}
                                    />
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}