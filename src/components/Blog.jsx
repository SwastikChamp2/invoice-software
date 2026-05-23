import ScrollReveal from './ScrollReveal'

const posts = [
    {
        title: '5 Metrics every SaaS founder should track',
        desc: 'Learn which key performance indicators matter most when scaling your SaaS product and making smarter financial decisions.',
        img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    },
    {
        title: 'How we designed a simpler dashboard experience',
        desc: 'A behind-the-scenes look at how we built a dashboard that’s clear, fast, and user-friendly from day one.',
        img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
    },
    {
        title: 'Why secure syncing matters more than ever',
        desc: 'Explore how our security-first approach keeps your financial data safe and your mind at ease every day.',
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    },
]

export default function Blog() {
    return (
        <section className="bg-white py-24 px-5 md:px-8">
            <div className="max-w-[1220px] mx-auto">
                {/* Header */}
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center mb-14">
                        {/* Chip */}
                        <div className="bg-white border border-[#ececec] rounded-full px-4 py-1.5 shadow-[0_4px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] mb-6 w-fit">
                            <span className="text-[14px] text-[#707070] font-medium">
                                Blog
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="text-[36px] md:text-[50px] leading-[0.96] tracking-[-0.055em] font-medium text-[#111111] max-w-[720px]">
                            Insights to spend smarter.
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {posts.map((post, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.08}
                        >
                            <article
                                className="group bg-[#fafafa] border border-[#f1f1f1] rounded-[30px] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] cursor-pointer"
                            >
                                {/* Image */}
                                <div className="overflow-hidden p-2">
                                    <div className="overflow-hidden rounded-[24px]">
                                        <img
                                            src={post.img}
                                            alt={post.title}
                                            className="w-full h-[290px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="px-7 pb-7 pt-2">
                                    <h3 className="text-[24px] leading-[1.08] tracking-[-0.045em] font-medium text-[#111111] mb-4 max-w-[320px] transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    <p className="text-[15px] leading-[1.55] text-[#6f6f6f] max-w-[320px] line-clamp-3">
                                        {post.desc}
                                    </p>
                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Button */}
                <ScrollReveal delay={0.15}>
                    <div className="flex justify-center mt-14">
                        <button className="h-[56px] px-8 rounded-full bg-[#111111] text-white text-[18px] font-medium shadow-[0_10px_30px_rgba(0,0,0,0.18)] hover:bg-black transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                            Read More
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}