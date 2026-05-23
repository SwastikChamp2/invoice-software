import { RiSparklingFill } from 'react-icons/ri'
import { FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa6'

const footerLinks = {
    Features: ['Analytics', 'Budgeting', 'Syncing', 'Reports', 'Security'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Support: ['Help Center', 'Contact', 'Privacy', 'Terms'],
    Developers: ['API', 'Docs', 'Status', 'Changelog'],
}

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex gap-16 mb-12">
                    {/* Brand */}
                    <div className="w-52 shrink-0">
                        <div className="flex items-center gap-1.5 mb-3">
                            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                                <RiSparklingFill className="text-gray-900 text-xs" />
                            </div>
                            <span className="text-sm font-semibold">Lumera</span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed mb-4">
                            Spend less. Save more.<br />Stress less with Lumera.
                        </p>
                        <div className="flex gap-3">
                            {[FaXTwitter, FaInstagram, FaLinkedinIn, FaGithub].map((Icon, i) => (
                                <a key={i} href="#" className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                                    <Icon className="text-xs text-gray-400" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex-1 grid grid-cols-4 gap-6">
                        {Object.entries(footerLinks).map(([category, links]) => (
                            <div key={category}>
                                <h4 className="text-xs font-semibold text-gray-300 mb-3">{category}</h4>
                                <ul className="space-y-2">
                                    {links.map(link => (
                                        <li key={link}>
                                            <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex items-center justify-between">
                    <p className="text-xs text-gray-600">Designed by Lumera. © 2025 All rights reserved.</p>
                    <p className="text-xs text-gray-600">Privacy · Terms · Cookies</p>
                </div>
            </div>
        </footer>
    )
}