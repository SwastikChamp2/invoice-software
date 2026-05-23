import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const faqs = [
    'How does this platform help our team manage financial statements?',
    'Can we connect our existing system and find our financial tools easily?',
    'Is our company\'s financial data secured and protected here?',
    'Do you support different account levels?',
    'How long does it take to set up anything on Lumera?',
]

export default function FAQ() {
    const [open, setOpen] = useState(0)

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="flex gap-16">
                    {/* Left */}
                    <div className="w-80 shrink-0">
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">FAQ</p>
                        <h2 className="text-3xl font-semibold text-gray-900 tracking-tight leading-snug">
                            Questions you<br />might have.
                        </h2>
                        <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                            Can't find the answer you're looking for? Try contacting us.
                        </p>
                        <a href="#" className="mt-4 inline-block text-sm text-gray-900 font-medium underline underline-offset-2 hover:text-blue-500 transition-colors">
                            Get a answer
                        </a>
                    </div>

                    {/* Right */}
                    <div className="flex-1 space-y-0">
                        {faqs.map((q, i) => (
                            <div key={i} className="border-b border-gray-100">
                                <button
                                    className="w-full flex items-center justify-between py-4 text-left"
                                    onClick={() => setOpen(open === i ? -1 : i)}
                                >
                                    <span className="text-sm text-gray-800 font-medium pr-4">{q}</span>
                                    <HiChevronDown
                                        className={`text-gray-400 text-lg shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {open === i && (
                                    <div className="pb-4 text-xs text-gray-500 leading-relaxed">
                                        Lumera provides enterprise-grade tools to help your team track, analyze, and optimize financial operations with real-time data and smart automation.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}