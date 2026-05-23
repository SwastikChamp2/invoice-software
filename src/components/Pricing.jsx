import { HiCheckCircle } from 'react-icons/hi'

const plans = [
    {
        name: 'Starter',
        price: '$0',
        period: '/mo',
        desc: 'Perfect for new members who are beginning their financial journey.',
        cta: 'Get Started',
        ctaStyle: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        highlighted: false,
        features: [
            'Up to 3 connected accounts',
            'Basic analytics reports',
            'Basic reports',
            'Community support',
            'Up to 2 team members',
        ],
    },
    {
        name: 'Growth',
        price: '$25',
        period: '/mo',
        desc: 'Quarterly pricing saves money for growing teams and portfolios.',
        cta: 'Get Started',
        ctaStyle: 'bg-blue-500 text-white hover:bg-blue-600',
        highlighted: true,
        features: [
            'Up to 10 connected accounts',
            'Advanced analytics & reports',
            'Automated monthly reports',
            'Priority email support',
            'Up to 10 team members',
        ],
    },
    {
        name: 'Scale',
        price: '$75',
        period: '/mo',
        desc: 'For established teams ready to scale and optimize their finances.',
        cta: 'Contact Us',
        ctaStyle: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        highlighted: false,
        features: [
            'Unlimited connected accounts',
            'Enterprise analytics suite',
            'Dedicated account manager',
            '24/7 premium support',
            'Unlimited team members',
        ],
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Pricing</p>
                    <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
                        Simple plans, clear value.
                    </h2>
                </div>

                <div className="grid grid-cols-3 gap-4 items-start">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl border p-6 ${plan.highlighted
                                ? 'border-blue-500 shadow-lg shadow-blue-100 bg-white relative'
                                : 'border-gray-200 bg-white'}`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-medium px-3 py-0.5 rounded-full">
                                    Most Popular
                                </div>
                            )}
                            <div className="flex items-center gap-1.5 mb-3">
                                <div className={`w-4 h-4 rounded-full ${plan.highlighted ? 'bg-blue-500' : 'bg-gray-200'}`} />
                                <span className="text-sm font-semibold text-gray-700">{plan.name}</span>
                            </div>
                            <div className="flex items-baseline gap-0.5 mb-1">
                                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                                <span className="text-sm text-gray-400">{plan.period}</span>
                            </div>
                            <p className="text-xs text-gray-500 mb-5 leading-relaxed">{plan.desc}</p>
                            <button className={`w-full py-2.5 rounded-full text-sm font-medium transition-colors ${plan.ctaStyle}`}>
                                {plan.cta}
                            </button>
                            <div className="mt-5 space-y-2.5">
                                {plan.features.map((feat, fi) => (
                                    <div key={fi} className="flex items-start gap-2">
                                        <HiCheckCircle className={`text-base mt-0.5 shrink-0 ${plan.highlighted ? 'text-blue-500' : 'text-gray-400'}`} />
                                        <span className="text-xs text-gray-600">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}