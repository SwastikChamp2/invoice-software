import { RiSparklingFill } from 'react-icons/ri'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pt-4 px-6">
            <div className="flex items-center gap-8 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full px-5 py-2.5 shadow-sm">
                {/* Logo */}
                <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                        <RiSparklingFill className="text-white text-xs" />
                    </div>
                    <span className="text-sm font-semibold text-gray-900 tracking-tight">Lumera</span>
                </div>

                {/* Nav Links */}
                <div className="flex items-center gap-6">
                    <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                    <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
                    <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                    <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
                </div>

                {/* CTA */}
                <button className="bg-gray-900 text-white text-sm font-medium px-4 py-1.5 rounded-full hover:bg-gray-700 transition-colors">
                    Download App
                </button>
            </div>
        </nav>
    )
}