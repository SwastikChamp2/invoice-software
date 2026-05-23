const posts = [
    {
        title: '5 Metrics every SaaS founder should track',
        desc: 'Discover the key financial metrics that successful startup founders use to guide every major business decision.',
        img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
        tag: 'Finance',
    },
    {
        title: 'How we designed a crisper dashboard experience',
        desc: 'A behind-the-scenes look at the design process that shaped Lumera\'s clean and intuitive dashboard.',
        img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
        tag: 'Design',
    },
    {
        title: 'Why secure syncing matters more than ever',
        desc: 'We explore the evolution of financial data security and why Lumera\'s approach sets the new standard.',
        img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80',
        tag: 'Security',
    },
]




export default function Blog() {
    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Blog</p>
                    <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
                        Insights to spend smarter.
                    </h2>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {posts.map((post, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="overflow-hidden rounded-2xl mb-4">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="px-1">
                                <span className="text-[10px] text-blue-500 font-medium uppercase tracking-wider">{post.tag}</span>
                                <h3 className="text-sm font-semibold text-gray-900 mt-1 leading-snug group-hover:text-blue-500 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{post.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button className="bg-gray-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-gray-700 transition-colors">
                        Read More
                    </button>
                </div>
            </div>
        </section>
    )
}