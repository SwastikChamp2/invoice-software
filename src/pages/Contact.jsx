export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center py-24 px-6">
            <h1 className="text-5xl font-bold text-green-400 mb-6">
                Contact Page
            </h1>

            <p className="text-zinc-300 text-lg max-w-2xl text-center mb-8">
                This is the Contact page for testing routing and Tailwind CSS.
            </p>

            <form className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800 flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-zinc-800 px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-green-400"
                />

                <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-zinc-800 px-4 py-3 rounded-xl outline-none border border-zinc-700 focus:border-green-400"
                />

                <button className="bg-green-500 hover:bg-green-400 transition text-black font-semibold py-3 rounded-xl">
                    Send Message
                </button>
            </form>
        </div>
    );
}