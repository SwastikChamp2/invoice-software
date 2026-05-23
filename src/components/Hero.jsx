import { FiLock } from 'react-icons/fi';
import { HiArrowTrendingUp } from 'react-icons/hi2';
import { PiMusicNoteSimpleFill } from 'react-icons/pi';


export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center overflow-hidden pt-20">

            {/* ── Sky background ── */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url('https://framerusercontent.com/images/Yx0Pz1GXYHNpQKHjvXJ1NjjNCaU.png?scale-down-to=2048&width=2400&height=1600')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                }}
            />

            {/* Soft white overlay */}
            <div className="absolute inset-0 bg-white/25" />

            {/* Bottom fade-to-white gradient */}
            <div
                className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
                style={{
                    height: '380px',
                    background:
                        'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.95) 75%, #ffffff 100%)',
                }}
            />

            {/* ── Main content ── */}
            <div className="relative z-10 flex flex-col items-center text-center px-6 pt-10 w-full max-w-5xl mx-auto">

                {/* Headline */}
                <h1
                    className="font-bold text-gray-900 leading-[1.12] tracking-tight"
                    style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)' }}
                >
                    Track every dollar,<br />grow every investment.
                </h1>

                <p className="mt-5 text-[1.05rem] text-gray-500 max-w-md leading-relaxed">
                    Smarter tools designed to help you grow your wealth and take control of your financial future.
                </p>

                {/* ── Phone + floating cards zone ── */}
                <div
                    className="relative mt-14 flex justify-center items-start w-full"
                    style={{ height: '540px' }}
                >

                    {/* LEFT SIDE */}
                    <div
                        className="absolute z-20"
                        style={{ left: 'clamp(10px, 6%, 140px)', top: '80px' }}
                    >
                        {/* Chip */}
                        <div
                            className="inline-flex items-center gap-2 text-white font-medium px-[18px] py-[8px] rounded-full mb-3"
                            style={{
                                background: '#000000',
                                fontSize: '14px',
                                letterSpacing: '-0.01em',
                                boxShadow: '0 6px 28px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.14)',
                                transform: 'translate(100px, -32px)',
                            }}
                        >
                            <FiLock size={13} strokeWidth={2.2} />
                            <span>Secure payment</span>
                        </div>

                        {/* White card */}
                        <div
                            className="bg-white rounded-2xl border border-gray-100 p-5"
                            style={{
                                width: '220px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                            }}
                        >
                            <div className="text-[13px] text-gray-400 mb-2" style={{ fontWeight: 400 }}>
                                New Sales from App Store
                            </div>
                            <div
                                className="font-bold text-gray-900 tracking-tight"
                                style={{ fontSize: '2rem', lineHeight: 1.1 }}
                            >
                                $2,144.37
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span
                                    className="text-[12px] font-semibold px-2 py-0.5 rounded-full"
                                    style={{ color: '#16a34a', background: '#dcfce7' }}
                                >
                                    +7%
                                </span>
                                <span className="text-[12px] text-gray-400">from last week</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div
                        className="absolute z-20 flex flex-col items-end"
                        style={{ right: 'clamp(10px, 6%, 140px)', top: '60px' }}
                    >
                        {/* White card */}
                        <div
                            className="bg-white rounded-2xl border border-gray-100 p-5"
                            style={{
                                width: '210px',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                                transform: 'translate(-10px, -24px)',
                            }}
                        >
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                                style={{ background: '#f1f0fe' }}
                            >
                                <PiMusicNoteSimpleFill size={18} color="#7c6ff7" />
                            </div>

                            <div className="flex items-baseline gap-2 mb-1">
                                <span
                                    className="font-bold text-gray-900"
                                    style={{ fontSize: '1.7rem', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                                >
                                    $1,235
                                </span>
                                <span className="text-[13px] font-semibold" style={{ color: '#16a34a' }}>
                                    +2%
                                </span>
                            </div>
                            <div className="text-[13px] text-gray-400">Entertainment Spending</div>
                        </div>

                        {/* Chip */}
                        <div
                            className="inline-flex items-center gap-2 text-white font-medium px-[18px] py-[8px] rounded-full mt-3"
                            style={{
                                background: '#000000',
                                fontSize: '14px',
                                letterSpacing: '-0.01em',
                                boxShadow: '0 6px 28px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.14)',
                                transform: 'translate(-104px, 10px)',
                            }}
                        >
                            <HiArrowTrendingUp size={14} />
                            <span>Track effectively</span>
                        </div>
                    </div>

                    {/* PHONE */}
                    <div className="relative z-10 flex justify-center">
                        <img
                            src="https://framerusercontent.com/images/8EqJJl7WcpFsqJnET6imexN7M0.png?scale-down-to=2048&width=973&height=2100"
                            alt="Lumera App"
                            style={{
                                width: 'clamp(220px, 28vw, 290px)',
                                display: 'block',
                                maskImage: 'linear-gradient(to bottom, black 0%, black 52%, transparent 82%)',
                                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 52%, transparent 82%)',
                            }}
                            className="drop-shadow-2xl"
                        />
                    </div>
                </div>



            </div>


            {/* ── Bottom: social proof + CTA ── */}
            <div className="relative z-30 flex flex-col items-center gap-5 -mt-4 pb-16">



                {/* May be use this component later in future - DO NOT DELETE THIS COMMENT BELOW */}
                {/* Avatars + stars + count */}
                {/* <div className="flex items-center gap-3">
                    <div className="flex items-center">
                        {[
                            'https://randomuser.me/api/portraits/men/32.jpg',
                            'https://randomuser.me/api/portraits/women/44.jpg',
                            'https://randomuser.me/api/portraits/men/22.jpg',
                        ].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt="user"
                                className="rounded-full border-2 border-white object-cover"
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    marginLeft: i === 0 ? '0' : '-10px',
                                    position: 'relative',
                                    zIndex: 3 - i,
                                }}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col items-start gap-0.5">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-[13px] text-gray-500 font-medium">40K+ users worldwide</span>
                    </div>
                </div> */}



                {/* CTA buttons */}
                <div className="flex items-center gap-3">
                    <button
                        className="text-white text-sm font-semibold px-7 py-3 rounded-full transition-all hover:opacity-90"
                        style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}
                    >
                        Download App
                    </button>
                    <button className="text-gray-700 text-sm font-semibold px-7 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                        Contact Sales
                    </button>
                </div>




            </div>
        </section>
    );
}