import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Integrations from '../components/Integrations'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import LogoStrip from '../components/LogoStrip'

export default function Home() {
    return (
        <div style={{ fontFamily: "'Geist', sans-serif" }} className="bg-white overflow-x-clip">
            <Navbar />
            <Hero />
            <LogoStrip />
            <Features />
            <Integrations />
            <HowItWorks />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Blog />
            <Footer />
        </div>
    )
}