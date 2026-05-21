export default function About() {
    return (
        <div className="flex flex-col items-center justify-center py-24 px-6">
            <h1 className="text-5xl font-bold text-pink-400 mb-6">
                About Page
            </h1>

            <p className="text-zinc-300 text-lg max-w-2xl text-center">
                This is a simple About page made using React Router and Tailwind CSS.
            </p>

            <div className="mt-8 p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                <p className="text-pink-300">
                    If this card looks styled, Tailwind is working.
                </p>
            </div>
        </div>
    );
}