import { Link, useLocation } from 'react-router-dom'
import { RiSparklingFill } from 'react-icons/ri'

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-5 px-6">
            <div className="flex items-center gap-12 md:gap-20 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full pl-7 pr-3.5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                        <RiSparklingFill className="text-white text-[10px]" />
                    </div>
                    <span className="text-[17px] font-bold text-black tracking-tight">Lunera</span>
                </Link>

                {/* Nav Links */}
                <div className="flex items-center gap-6 md:gap-8">
                    <Link to="/#features" className="text-[15px] font-medium text-black hover:text-neutral-600 transition-colors">Features</Link>
                    <Link to="/#blog" className="text-[15px] font-medium text-black hover:text-neutral-600 transition-colors">Blog</Link>
                    <Link to="/#pricing" className="text-[15px] font-medium text-black hover:text-neutral-600 transition-colors">Pricing</Link>
                    <Link to="/contact" className="text-[15px] font-medium text-black hover:text-neutral-600 transition-colors">Contact</Link>
                </div>

                {/* CTA */}
                <button className="bg-black text-white text-[15px] font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-all duration-200 cursor-pointer">
                    Download App
                </button>
            </div>
        </nav>
    )
}

