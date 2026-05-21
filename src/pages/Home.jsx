export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center py-24 px-6">
            <h1 className="text-5xl font-bold text-cyan-400 mb-6">
                Home Page
            </h1>

            <p className="text-zinc-300 text-lg max-w-2xl text-center">
                Tailwind CSS is working perfectly on the Home page.
            </p>

            <button className="mt-8 bg-red-500 hover:bg-cyan-400 transition px-6 py-3 rounded-xl text-black font-semibold">
                Test Button
            </button>
        </div>
    );
}