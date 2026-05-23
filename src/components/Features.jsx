import heroFeature1 from '../assets/images/heroFeature1.svg'
import heroFeature2 from '../assets/images/heroFeature2.svg'
import heroFeature3 from '../assets/images/heroFeature3.svg'
import heroFeature4 from '../assets/images/heroFeature4.svg'
import heroFeature5 from '../assets/images/heroFeature5.svg'
import ScrollReveal from './ScrollReveal'

const features = [
    {
        title: 'Real-Time Analytics',
        desc: 'Monitor your finances live with clear, intuitive dashboards.',
        image: heroFeature1,
    },
    {
        title: 'Automated Reports',
        desc: 'Generate summaries instantly —no manual work needed.',
        image: heroFeature2,
    },
    {
        title: 'Smart Budgeting',
        desc: 'Plan and adjust with AI-powered budget suggestions.',
        image: heroFeature3,
    },
    {
        title: 'Secure Syncing',
        desc: 'Link accounts safely with real-time data syncing.',
        image: heroFeature4,
    },
    {
        title: 'Growth Score',
        desc: 'View key metrics and trends at a glance.',
        image: heroFeature5,
    },
]

export default function Features() {
    return (
        <section
            id="features"
            className="bg-white py-24 px-5 md:px-8"
        >
            <div className="max-w-[1180px] mx-auto">
                {/* Heading */}
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center mb-14">
                        <div className="bg-white border border-[#ececec] rounded-full px-4 py-1.5 shadow-[0_4px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] mb-6">
                            <span className="text-[14px] text-[#707070] font-medium">
                                Features
                            </span>
                        </div>


                        <h2 className="text-[36px] md:text-[50px] leading-[0.96] tracking-[-0.055em] font-medium text-[#111111] max-w-[720px]">
                            Streamline finances
                            <br />
                            with smart features.
                        </h2>
                    </div>
                </ScrollReveal>

                {/* Top Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    {features.slice(0, 3).map((feature, index) => (
                        <ScrollReveal
                            key={index}
                            delay={index * 0.08}
                            className="h-full flex flex-col"
                        >
                            <div
                                className="bg-[#fafafa] border border-[#efefef] rounded-[28px] px-7 pt-7 overflow-hidden min-h-[320px] flex flex-col h-full w-full"
                            >
                                <div>
                                    <h3 className="text-[20px] md:text-[22px] leading-tight tracking-[-0.04em] font-semibold text-[#181818] mb-3">
                                        {feature.title}
                                    </h3>

                                    <p className="text-[15px] leading-[1.45] text-[#6f6f6f] max-w-[250px]">
                                        {feature.desc}
                                    </p>
                                </div>

                                <div className="flex justify-center mt-6">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className={`
                                            object-contain
                                            ${index === 0 ? 'w-[240px]' : ''}
                                            ${index === 1 ? 'w-[260px]' : ''}
                                            ${index === 2 ? 'w-[220px]' : ''}
                                        `}
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Secure Syncing */}
                    <ScrollReveal delay={0} className="h-full">
                        <div className="bg-[#fafafa] border border-[#efefef] rounded-[28px] px-7 py-7 overflow-hidden min-h-[250px] h-full">
                            <div className="flex items-center justify-between h-full gap-6">
                                {/* Left Content */}
                                <div className="max-w-[220px]">
                                    <h3 className="text-[20px] md:text-[22px] leading-tight tracking-[-0.04em] font-semibold text-[#181818] mb-3">
                                        {features[3].title}
                                    </h3>

                                    <p className="text-[15px] leading-[1.45] text-[#6f6f6f]">
                                        {features[3].desc}
                                    </p>
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-end items-center flex-1">
                                    <img
                                        src={features[3].image}
                                        alt={features[3].title}
                                        className="w-[240px] object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Growth Score */}
                    <ScrollReveal delay={0.08} className="h-full">
                        <div className="bg-[#fafafa] border border-[#efefef] rounded-[28px] px-7 py-7 overflow-hidden min-h-[250px] h-full">
                            <div className="flex items-center justify-between h-full gap-6">
                                {/* Left Content */}
                                <div className="max-w-[220px]">
                                    <h3 className="text-[20px] md:text-[22px] leading-tight tracking-[-0.04em] font-semibold text-[#181818] mb-3">
                                        {features[4].title}
                                    </h3>

                                    <p className="text-[15px] leading-[1.45] text-[#6f6f6f]">
                                        {features[4].desc}
                                    </p>
                                </div>

                                {/* Right Image */}
                                <div className="flex justify-end items-center flex-1">
                                    <img
                                        src={features[4].image}
                                        alt={features[4].title}
                                        className="w-[230px] object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>



            </div>
        </section>
    )
}