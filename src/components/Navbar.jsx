import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-800 bg-zinc-950">
            <h1 className="text-2xl font-bold text-cyan-400">
                My React App
            </h1>

            <div className="flex gap-6 text-lg text-white">
                <Link
                    to="/"
                    className="hover:text-cyan-400 transition"
                >
                    Home
                </Link>

                <Link
                    to="/about"
                    className="hover:text-cyan-400 transition"
                >
                    About
                </Link>

                <Link
                    to="/contact"
                    className="hover:text-cyan-400 transition"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}