import { useState, useRef, useEffect } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { motion, AnimatePresence, useInView, animate } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

function NumberTicker({ value, suffix = '', decimals = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    useEffect(() => {
        if (!isInView) return

        const node = ref.current
        const controls = animate(0, value, {
            duration: 1.5,
            ease: 'easeOut',
            onUpdate(val) {
                node.textContent = val.toFixed(decimals) + suffix
            },
        })

        return () => controls.stop()
    }, [isInView, value, decimals, suffix])

    return <span ref={ref}>0{suffix}</span>
}

const testimonials = [
    {
        name: 'Marcus Reid',
        role: 'CEO, Folio Labs',
        title: 'Replaced three tools at once.',
        text: 'We were using separate apps for expenses, cards, and reporting. Lumera brought everything into one view and cut our finance admin time in half.',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    },
    {
        name: 'Priya Nair',
        role: 'Founder, Calla Studio',
        title: 'Spending habits changed instantly.',
        text: 'Seeing my categories broken down visually made me realize where I was overspending and cancel unnecessary subscriptions within the first week.',
        image:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    },
    {
        name: 'Daniel Kim',
        role: 'Founder, Northstar',
        title: 'Finance finally feels organized.',
        text: 'The reporting and budgeting tools gave our team complete visibility across every expense and helped us move faster with decisions.',
        image:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
    },
]

const stats = [
    { value: 10, suffix: 'K+', decimals: 0, label: 'Happy users' },
    { value: 99.9, suffix: '%', decimals: 1, label: 'Uptime' },
    { value: 50, suffix: 'M+', decimals: 0, label: 'Tracked' },
]

export default function Testimonials() {
    const [active, setActive] = useState(1)

    const prevSlide = () => {
        setActive((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        )
    }

    const nextSlide = () => {
        setActive((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        )
    }

    const getVisibleCards = () => {
        const prev =
            active === 0 ? testimonials.length - 1 : active - 1
        const next =
            active === testimonials.length - 1 ? 0 : active + 1

        return [
            testimonials[prev],
            testimonials[active],
            testimonials[next],
        ]
    }

    const visibleCards = getVisibleCards()

    return (
        <section className="bg-white py-24 px-5 md:px-8 overflow-hidden">
            <div className="max-w-[1220px] mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="flex items-start justify-between gap-8 mb-14">
                        <div>
                            <h2 className="text-[36px] md:text-[50px] leading-[0.96] tracking-[-0.055em] font-medium text-[#111111] max-w-[700px]">
                                Real results from
                                <br />
                                real users.
                            </h2>

                            <p className="mt-5 text-[16px] leading-[1.5] text-[#6f6f6f] max-w-[520px]">
                                App founders and finance teams trust Lunera to keep
                                their money organized and their decisions clear.
                            </p>
                        </div>

                        <button className="hidden md:flex h-[46px] px-5 rounded-full border border-[#ececec] bg-white items-center justify-center text-[15px] font-medium text-[#111111] shadow-[0_4px_10px_rgba(0,0,0,0.04)] hover:bg-[#fafafa] transition-all cursor-pointer">
                            Leave a review
                        </button>
                    </div>
                </ScrollReveal>

                {/* Slider */}
                <ScrollReveal delay={0.1}>
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
                            <AnimatePresence mode="wait">
                                {visibleCards.map((testimonial, index) => {
                                    const isActive = index === 1

                                    return (
                                        <motion.div
                                            key={`${testimonial.name}-${index}`}
                                            initial={{
                                                opacity: 0,
                                                y: 20,
                                                scale: 0.96,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: isActive ? 1 : 0.97,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: -20,
                                            }}
                                            transition={{
                                                duration: 0.45,
                                                ease: 'easeOut',
                                            }}
                                            className={`relative rounded-[28px] min-h-[360px] p-7 flex flex-col justify-between overflow-hidden transition-all duration-500 ${isActive
                                                ? 'bg-[#0f0f0f] border border-[#1d1d1d] shadow-[0_20px_50px_rgba(0,0,0,0.12)]'
                                                : 'bg-[#fafafa] border border-[#efefef]'
                                                }`}
                                        >
                                            {/* Gradient */}
                                            {isActive && (
                                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_40%)]" />
                                            )}

                                            <div className="relative z-10">
                                                {/* Stars */}
                                                <div className="flex gap-1 mb-9">
                                                    {[...Array(5)].map((_, i) => (
                                                        <AiFillStar
                                                            key={i}
                                                            className="text-[14px] text-[#f4c542]"
                                                        />
                                                    ))}
                                                </div>

                                                {/* User */}
                                                <div className="flex items-center gap-3 mb-8">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        className="w-11 h-11 rounded-full object-cover"
                                                    />

                                                    <div>
                                                        <div
                                                            className={`text-[16px] font-medium tracking-[-0.03em] leading-none ${isActive
                                                                ? 'text-white'
                                                                : 'text-[#111111]'
                                                                }`}
                                                        >
                                                            {testimonial.name}
                                                        </div>

                                                        <div
                                                            className={`text-[14px] mt-1 ${isActive
                                                                ? 'text-[#8a8a8a]'
                                                                : 'text-[#8a8a8a]'
                                                                }`}
                                                        >
                                                            {testimonial.role}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3
                                                    className={`text-[30px] leading-[0.98] tracking-[-0.055em] font-medium mb-5 ${isActive
                                                        ? 'text-white'
                                                        : 'text-[#111111]'
                                                        }`}
                                                >
                                                    {testimonial.title}
                                                </h3>

                                                {/* Text */}
                                                <p
                                                    className={`text-[15px] leading-[1.6] ${isActive
                                                        ? 'text-[#b5b5b5]'
                                                        : 'text-[#7a7a7a]'
                                                        }`}
                                                >
                                                    {testimonial.text}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </AnimatePresence>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-3 mt-8">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full border border-[#ececec] bg-white flex items-center justify-center shadow-sm hover:bg-[#fafafa] transition-all cursor-pointer"
                            >
                                <FiChevronLeft className="text-[#8d8d8d] text-[16px]" />
                            </button>

                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActive(i)}
                                        className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer ${active === i
                                            ? 'w-8 bg-[#111111]'
                                            : 'w-2 bg-[#d6d6d6]'
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full border border-[#ececec] bg-white flex items-center justify-center shadow-sm hover:bg-[#fafafa] transition-all cursor-pointer"
                            >
                                <FiChevronRight className="text-[#8d8d8d] text-[16px]" />
                            </button>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Stats */}
                <div className="grid grid-cols-3 max-w-[800px] mx-auto mt-12 border-t border-[#efefef] pt-8">
                    {stats.map((stat, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.08}
                            className={`text-center ${index !== 2
                                ? 'border-r border-[#efefef]'
                                : ''
                                }`}
                        >
                            <div className="text-[44px] md:text-[54px] leading-none tracking-[-0.06em] font-medium text-[#111111]">
                                <NumberTicker value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                            </div>

                            <div className="mt-1 text-[15px] text-[#7b7b7b]">
                                {stat.label}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}