import {
    HiCheck,
    HiOutlineCube,
    HiOutlineSparkles,
    HiOutlineRocketLaunch,
} from 'react-icons/hi2'
import ScrollReveal from './ScrollReveal'

const plans = [
    {
        name: 'Starter',
        icon: HiOutlineCube,
        price: '$0',
        period: '/ mo',
        desc: 'Perfect for solo founders and early-stage projects.',
        cta: 'Get Started',
        highlighted: false,
        features: [
            '1 connected account',
            'Real-time dashboard access',
            'Basic reporting',
            'Email support',
            'Up to 2 team members',
        ],
    },
    {
        name: 'Growth',
        icon: HiOutlineSparkles,
        price: '$25',
        period: '/ mo',
        desc: 'Ideal for growing teams who need deeper insights.',
        cta: 'Get Started',
        highlighted: true,
        badge: 'Best Deal',
        features: [
            'Up to 5 connected accounts',
            'Advanced analytics',
            'Automated reports',
            'Priority email support',
            'Up to 10 team members',
        ],
    },
    {
        name: 'Scale',
        icon: HiOutlineRocketLaunch,
        price: '$75',
        period: '/ mo',
        desc: 'For established teams ready to maximize performance.',
        cta: 'Contact Us',
        highlighted: false,
        features: [
            'Unlimited connected accounts',
            'Custom dashboards',
            'Exportable reports',
            'Dedicated support',
            'Unlimited team members',
        ],
    },
]

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="w-full bg-[#ffffff] py-24 md:py-32 px-6"
        >
            <div className="max-w-[1220px] mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="bg-white border border-[#ececec] rounded-full px-4 py-1.5 shadow-[0_4px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] mb-6">
                            <span className="text-[14px] text-[#707070] font-medium">
                                Pricing
                            </span>
                        </div>

                        <h2 className="text-[36px] md:text-[50px] leading-[0.96] tracking-[-0.055em] font-medium text-[#111111] max-w-[720px]">
                            Simple plans, clear value.
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                    {plans.map((plan, i) => {
                        const Icon = plan.icon

                        return (
                            <ScrollReveal
                                key={i}
                                delay={i * 0.08}
                            >
                                <div
                                    className={`relative rounded-[28px] bg-[#fbfbfb] border overflow-visible transition-all ${plan.highlighted
                                        ? 'border-[#4f83f1] shadow-[0_10px_30px_rgba(79,131,241,0.10)]'
                                        : 'border-[#eeeeee]'
                                        }`}
                                >
                                    {/* Best Deal Badge */}
                                    {plan.highlighted && (
                                        <div className="absolute left-1/2 -translate-x-1/2 -top-5 z-20">
                                            <div className="bg-[#4f83f1] text-white text-[14px] font-medium px-5 py-2 rounded-full shadow-lg">
                                                {plan.badge}
                                            </div>
                                        </div>
                                    )}

                                    <div className="p-7 md:p-8">
                                        {/* Plan Header */}
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-11 h-11 rounded-full bg-[#f2f2f2] flex items-center justify-center">
                                                <Icon className="text-[20px] text-[#111111]" />
                                            </div>

                                            <h3 className="text-[22px] tracking-[-0.04em] font-medium text-[#111111]">
                                                {plan.name}
                                            </h3>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-end gap-2 mb-4">
                                            <span className="text-[52px] leading-none tracking-[-0.06em] font-medium text-[#111111]">
                                                {plan.price}
                                            </span>

                                            <span className="text-[17px] text-[#666666] mb-[7px]">
                                                {plan.period}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-[16px] leading-[1.45] text-[#6d6d6d] max-w-[260px] mb-7">
                                            {plan.desc}
                                        </p>

                                        {/* Button */}
                                        <button
                                            className={`w-full h-[52px] rounded-full text-[18px] font-medium transition-all shadow-[0_8px_20px_rgba(0,0,0,0.10)] cursor-pointer ${plan.highlighted
                                                ? 'bg-[#4f83f1] text-white hover:bg-[#4479eb]'
                                                : 'bg-black text-white hover:bg-[#111111]'
                                                }`}
                                        >
                                            {plan.cta}
                                        </button>

                                        {/* Divider */}
                                        <div className="w-full h-px bg-[#ececec] my-7" />

                                        {/* Features */}
                                        <div className="space-y-4">
                                            {plan.features.map((feature, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-3"
                                                >
                                                    <HiCheck className="text-[17px] text-[#666666] mt-[3px] shrink-0" />

                                                    <span className="text-[16px] leading-[1.35] text-[#5f5f5f]">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}