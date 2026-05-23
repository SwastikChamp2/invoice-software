
import logo1 from '../assets/images/logo1.avif';
import logo2 from '../assets/images/logo2.avif';
import logo3 from '../assets/images/logo3.avif';
import logo4 from '../assets/images/logo4.avif';
import logo5 from '../assets/images/logo5.avif';
import ScrollReveal from './ScrollReveal';


export default function LogoStrip() {



    const logos = [logo1, logo2, logo3, logo4, logo5];

    return (
        <section className="relative w-full overflow-hidden bg-[#ffffff] py-10">
            {/* Left Blur Fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#ffffff] to-transparent" />

            {/* Right Blur Fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#ffffff] to-transparent" />

            {/* Logos */}
            <ScrollReveal delay={0.1} duration={0.8} distance={15}>
                <div className="flex items-center justify-center gap-16 opacity-70">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="brand logo"
                            className="h-8 w-auto object-contain grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                        />
                    ))}
                </div>
            </ScrollReveal>
        </section>
    );
}