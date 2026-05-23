import { RiSparklingFill } from 'react-icons/ri'
import { FaXTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-16 px-6">
            <div className="max-w-[1220px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24 mb-16">
                    {/* Brand */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center gap-1.5 mb-6">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                                <RiSparklingFill className="text-gray-900 text-xs" />
                            </div>
                            <span className="text-sm font-semibold tracking-tight text-white">Lunera</span>
                        </div>
                        
                        <h2 className="text-2xl md:text-[36px] lg:text-[38px] font-medium tracking-[-0.05em] text-white leading-[1.1] mb-8">
                            Spend less. Save more.<br />Stress less with Lunera.
                        </h2>
                        
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-neutral-900 border border-neutral-800/30 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors">
                                <FaXTwitter className="text-sm text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-neutral-900 border border-neutral-800/30 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors">
                                <FaLinkedinIn className="text-sm text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-neutral-900 border border-neutral-800/30 rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors">
                                <FaInstagram className="text-sm text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-20 md:gap-32 pr-4">
                        <div>
                            <h4 className="text-[15px] font-normal text-neutral-400 mb-6 tracking-[-0.02em]">Platform</h4>
                            <ul className="space-y-4">
                                {['Features', 'Pricing', 'Integration', 'FAQ'].map((link) => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase()}`} className="text-[18px] font-medium text-white hover:text-neutral-300 transition-colors tracking-[-0.03em]">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[15px] font-normal text-neutral-400 mb-6 tracking-[-0.02em]">Resource</h4>
                            <ul className="space-y-4">
                                {['Contact', 'Blog', 'Terms'].map((link) => (
                                    <li key={link}>
                                        <a href={`#${link.toLowerCase()}`} className="text-[18px] font-medium text-white hover:text-neutral-300 transition-colors tracking-[-0.03em]">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-900 pt-8">
                    <p className="text-[15px] text-neutral-400 tracking-[-0.02em]">© Teraforge Digital Lab LLP | All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

