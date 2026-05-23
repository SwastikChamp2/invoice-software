import { AiFillStar } from 'react-icons/ai'

const testimonials = [
    {
        name: 'Reid Chan',
        role: 'Founder, Shopify',
        text: 'Finally know where money goes. Lumera gave me a complete picture of my finances and now I feel totally in control of my money.',
        rating: 4,
        avatar: 'RC',
        color: 'bg-blue-100 text-blue-700',
    },
    {
        name: 'Sharese Ford',
        role: 'CFO, TechCorp',
        text: 'Replaced three tools at once. Our finance team now runs entirely on Lumera — the automated reports save us hours every week.',
        rating: 5,
        avatar: 'SF',
        color: 'bg-purple-100 text-purple-700',
        featured: true,
    },
    {
        name: 'Finn Lee',
        role: 'Designer, Framer',
        text: 'Spending habits changed forever. The smart budgeting feature literally transformed how I think about money. Highly recommend.',
        rating: 4,
        avatar: 'FL',
        color: 'bg-orange-100 text-orange-700',
    },
]

const stats = [
    { value: '10K+', label: 'Happy Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '50M+', label: 'Tracked' },
]

export default function Testimonials() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="mb-10">
                    <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
                        Real results from real users.
                    </h2>
                    <p className="text-sm text-gray-500 mt-2">
                        See how Lumera helps people save more money, organize their finances and finally achieve their ideas.
                    </p>
                    <a href="#" className="text-xs text-blue-500 mt-1 inline-block hover:underline">Lumera in details →</a>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {testimonials.map((t, i) => (
                        <div key={i} className={`rounded-2xl p-5 border ${t.featured ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${t.featured ? 'bg-gray-700 text-gray-200' : t.color}`}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className={`text-sm font-semibold ${t.featured ? 'text-white' : 'text-gray-900'}`}>{t.name}</div>
                                    <div className={`text-xs ${t.featured ? 'text-gray-400' : 'text-gray-400'}`}>{t.role}</div>
                                </div>
                            </div>
                            <p className={`text-xs leading-relaxed mb-4 ${t.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                                "{t.text}"
                            </p>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, si) => (
                                    <AiFillStar key={si} className={`text-sm ${si < t.rating ? 'text-yellow-400' : t.featured ? 'text-gray-700' : 'text-gray-200'}`} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 mt-12 gap-4 text-center">
                    {stats.map((s, i) => (
                        <div key={i}>
                            <div className="text-4xl font-bold text-gray-900">{s.value}</div>
                            <div className="text-sm text-gray-400 mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}