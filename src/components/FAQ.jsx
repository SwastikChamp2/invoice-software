import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import ScrollReveal from './ScrollReveal'

const faqs = [
    {
        question:
            'How does this platform help our team manage financial data better?',
        answer:
            'Lumera gives your team a centralized dashboard for tracking transactions, reports, and budgets in real time — helping everyone stay aligned and make faster decisions.',
    },
    {
        question:
            'Can we connect our existing banks and financial tools easily?',
        answer:
            'Yes, Lumera supports secure integrations with major banks, payment platforms, and accounting tools so your data stays synced automatically.',
    },
    {
        question:
            'Is our company’s financial data secure and protected here?',
        answer:
            'Absolutely. We use encrypted infrastructure, secure authentication, and enterprise-grade security practices to keep your financial information protected.',
    },
    {
        question: 'Do you support different access levels?',
        answer:
            'You can create multiple team roles with custom permissions so every member only accesses the information they need.',
    },
    {
        question:
            'How long does it take to set everything up initially?',
        answer:
            'Most teams are fully set up within a few minutes. Connecting accounts and inviting teammates is designed to be fast and intuitive.',
    },
]

export default function FAQ() {
    const [open, setOpen] = useState(null)

    return (
        <section className="bg-white py-24 px-5 md:px-8">
            <div className="max-w-[1220px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-10 md:gap-16">
                    {/* Left Content */}
                    <ScrollReveal className="pt-1">
                        <div>
                            {/* Chip */}
                            <div className="bg-white border border-[#ececec] rounded-full px-4 py-1.5 shadow-[0_4px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] mb-6 w-fit">
                                <span className="text-[14px] text-[#707070] font-medium">
                                    FAQ
                                </span>
                            </div>

                            {/* Heading */}
                            <h2 className="text-[36px] md:text-[50px] leading-[0.96] tracking-[-0.055em] font-medium text-[#111111] max-w-[720px]">
                                Questions you
                                <br />
                                might have.
                            </h2>

                            {/* Description */}
                            <p className="mt-6 text-[16px] leading-[1.5] text-[#6f6f6f] max-w-[320px]">
                                Everything you need to know before getting started.
                            </p>

                            {/* Button */}
                            <button className="mt-10 h-[52px] px-7 rounded-full border border-[#ececec] bg-white text-[18px] font-medium text-[#111111] shadow-[0_8px_20px_rgba(0,0,0,0.05)] hover:bg-[#fafafa] transition-all cursor-pointer">
                                Ask a question
                            </button>
                        </div>
                    </ScrollReveal>

                    {/* FAQ Accordions */}
                    <div className="bg-[#fafafa] border border-[#f1f1f1] rounded-[34px] p-5 md:p-6">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = open === index

                                return (
                                    <ScrollReveal
                                        key={index}
                                        delay={index * 0.06}
                                    >
                                        <div
                                            className="bg-white border border-[#f1f1f1] rounded-[24px] overflow-hidden transition-all duration-300"
                                        >
                                            <button
                                                onClick={() =>
                                                    setOpen(
                                                        isOpen ? null : index
                                                    )
                                                }
                                                className="w-full flex items-center justify-between gap-6 text-left px-8 py-7 cursor-pointer"
                                            >
                                                <span className="text-[18px] md:text-[19px] leading-[1.3] tracking-[-0.035em] font-medium text-[#151515] pr-4">
                                                    {faq.question}
                                                </span>

                                                <div
                                                    className={`shrink-0 transition-transform duration-300 ${isOpen
                                                        ? 'rotate-45'
                                                        : ''
                                                        }`}
                                                >
                                                    <HiPlus className="text-[24px] text-[#a5a5a5]" />
                                                </div>
                                            </button>

                                            <div
                                                className={`grid transition-all duration-300 ease-in-out ${isOpen
                                                    ? 'grid-rows-[1fr]'
                                                    : 'grid-rows-[0fr]'
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="px-8 pb-7 pr-16">
                                                        <p className="text-[15px] leading-[1.7] text-[#707070] max-w-[90%]">
                                                            {faq.answer}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </ScrollReveal>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}