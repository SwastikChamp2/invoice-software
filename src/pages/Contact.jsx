import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiTrendingUp, FiMessageSquare, FiCheckCircle, FiLoader } from 'react-icons/fi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const contactChannels = [
    {
        title: 'Sales & Partnerships',
        desc: 'Interested in enterprise accounts or custom plans? Let’s talk.',
        email: 'sales@lunera.com',
        phone: '+1 (555) 349-2098',
        tag: 'Replies in < 2 hours',
        icon: FiTrendingUp,
        iconBg: '#e0f2fe',
        iconColor: '#0369a1'
    },
    {
        title: 'Product Support',
        desc: 'Need assistance setting up your account or managing tools?',
        email: 'support@lunera.com',
        phone: '+1 (555) 832-1102',
        tag: 'Replies in < 1 hour',
        icon: FiMessageSquare,
        iconBg: '#f1f0fe',
        iconColor: '#7c6ff7'
    },
    {
        title: 'HQ Office',
        desc: 'Stop by our main office in San Francisco or send us mail.',
        address: '100 Pine Street, Floor 12, San Francisco, CA 94111',
        tag: 'Mon - Fri, 9am - 6pm PST',
        icon: FiMapPin,
        iconBg: '#fef3c7',
        iconColor: '#b45309'
    }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [validationError, setValidationError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationError('');

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setValidationError('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);

        // Simulate sending a message
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
    };

    return (
        <div style={{ fontFamily: "'Geist', sans-serif" }} className="bg-white min-h-screen flex flex-col overflow-x-clip relative">
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-1 relative pb-24 pt-32 md:pt-40">
                {/* ── Sky background ── */}
                <div
                    className="absolute inset-0 w-full h-[640px] pointer-events-none"
                    style={{
                        backgroundImage: `url('https://framerusercontent.com/images/Yx0Pz1GXYHNpQKHjvXJ1NjjNCaU.png?scale-down-to=2048&width=2400&height=1600')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center top',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Soft white overlay */}
                <div className="absolute inset-0 h-[640px] bg-white/33 pointer-events-none" />

                {/* Bottom fade-to-white gradient */}
                <div
                    className="absolute left-0 right-0 pointer-events-none"
                    style={{
                        top: '260px',
                        height: '380px',
                        background:
                            'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.4) 25%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.95) 75%, #ffffff 100%)',
                    }}
                />

                {/* Content Container */}
                <div className="relative z-10 max-w-[1180px] mx-auto px-6">
                    {/* Header */}
                    <div className="flex flex-col items-start mb-16 pt-8 max-w-2xl">
                        <ScrollReveal delay={0.05}>
                            <div className="bg-white border border-[#ececec] rounded-full px-4 py-1.5 shadow-[0_4px_8px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.03)] mb-6 inline-flex">
                                <span className="text-[14px] text-[#707070] font-medium">
                                    Contact Us
                                </span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h1 className="text-[40px] md:text-[56px] leading-[1.08] tracking-[-0.055em] font-bold text-gray-900 mb-6">
                                We're here to help<br />your business grow.
                            </h1>
                        </ScrollReveal>

                        <ScrollReveal delay={0.15}>
                            <p className="text-[17px] leading-relaxed text-gray-600">
                                Have questions about features, pricing, or custom options? Drop us a line. Our team is dedicated to getting back to you as quickly as possible.
                            </p>
                        </ScrollReveal>
                    </div>

                    {/* Columns grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        
                        {/* Left Side: Contact Channels */}
                        <div className="lg:col-span-5 space-y-6">
                            {contactChannels.map((channel, i) => (
                                <ScrollReveal key={channel.title} delay={0.1 + i * 0.08}>
                                    <div className="bg-[#fafafa] border border-[#efefef] rounded-[24px] p-6 hover:shadow-[0_12px_32px_rgba(0,0,0,0.02)] transition-shadow duration-300">
                                        <div className="flex items-start gap-4">
                                            {/* Icon */}
                                            <div 
                                                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                                                style={{ backgroundColor: channel.iconBg }}
                                            >
                                                <channel.icon size={20} color={channel.iconColor} />
                                            </div>

                                            {/* Info */}
                                            <div className="space-y-1.5 flex-1">
                                                <div className="flex items-center justify-between flex-wrap gap-2">
                                                    <h3 className="text-[17px] font-semibold text-gray-900 tracking-tight">
                                                        {channel.title}
                                                    </h3>
                                                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-white border border-[#eaeaea] text-gray-500 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                                                        {channel.tag}
                                                    </span>
                                                </div>
                                                <p className="text-[14px] text-gray-500 leading-normal">
                                                    {channel.desc}
                                                </p>
                                                
                                                {/* Details */}
                                                <div className="pt-2 text-[14px] font-medium text-gray-900 space-y-1">
                                                    {channel.email && (
                                                        <div className="flex items-center gap-2">
                                                            <FiMail size={13} className="text-gray-400" />
                                                            <a href={`mailto:${channel.email}`} className="hover:underline text-gray-700">
                                                                {channel.email}
                                                            </a>
                                                        </div>
                                                    )}
                                                    {channel.phone && (
                                                        <div className="flex items-center gap-2">
                                                            <FiPhone size={13} className="text-gray-400" />
                                                            <span className="text-gray-700">{channel.phone}</span>
                                                        </div>
                                                    )}
                                                    {channel.address && (
                                                        <div className="flex items-start gap-2 pt-0.5">
                                                            <FiMapPin size={13} className="text-gray-400 mt-1 shrink-0" />
                                                            <span className="text-gray-700 leading-snug">{channel.address}</span>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Right Side: Form Card */}
                        <div className="lg:col-span-7">
                            <ScrollReveal delay={0.25}>
                                <div className="bg-white border border-[#efefef] rounded-[28px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] relative overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        {!isSuccess ? (
                                            <motion.form
                                                key="contact-form"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                onSubmit={handleSubmit}
                                                className="space-y-6"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {/* Name */}
                                                    <div className="space-y-2">
                                                        <label htmlFor="name" className="text-[13px] font-semibold text-gray-600 tracking-tight">
                                                            Your Name <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            id="name"
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                            placeholder="John Doe"
                                                            required
                                                            className="w-full bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3 text-[15px] outline-none transition-all focus:border-black focus:bg-white text-gray-900"
                                                        />
                                                    </div>

                                                    {/* Email */}
                                                    <div className="space-y-2">
                                                        <label htmlFor="email" className="text-[13px] font-semibold text-gray-600 tracking-tight">
                                                            Your Email <span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="john@example.com"
                                                            required
                                                            className="w-full bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3 text-[15px] outline-none transition-all focus:border-black focus:bg-white text-gray-900"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Subject */}
                                                <div className="space-y-2">
                                                    <label htmlFor="subject" className="text-[13px] font-semibold text-gray-600 tracking-tight">
                                                        Subject
                                                    </label>
                                                    <input
                                                        id="subject"
                                                        type="text"
                                                        name="subject"
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        placeholder="How can we help you?"
                                                        className="w-full bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3 text-[15px] outline-none transition-all focus:border-black focus:bg-white text-gray-900"
                                                    />
                                                </div>

                                                {/* Message */}
                                                <div className="space-y-2">
                                                    <label htmlFor="message" className="text-[13px] font-semibold text-gray-600 tracking-tight">
                                                        Message <span className="text-red-500">*</span>
                                                    </label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={5}
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        placeholder="Tell us more about your inquiry..."
                                                        required
                                                        className="w-full bg-[#fafafa] border border-gray-100 rounded-xl px-4 py-3 text-[15px] outline-none transition-all focus:border-black focus:bg-white text-gray-900 resize-none"
                                                    />
                                                </div>

                                                {/* Validation Error Message */}
                                                {validationError && (
                                                    <div className="text-red-500 text-sm font-medium">
                                                        {validationError}
                                                    </div>
                                                )}

                                                {/* Submit Button */}
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full text-white text-sm font-semibold py-3.5 rounded-full transition-all duration-200 hover:opacity-90 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                                                    style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' }}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <FiLoader className="animate-spin text-white" size={16} />
                                                            <span>Sending Message...</span>
                                                        </>
                                                    ) : (
                                                        <span>Send Message</span>
                                                    )}
                                                </button>
                                            </motion.form>
                                        ) : (
                                            <motion.div
                                                key="success-card"
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                className="flex flex-col items-center text-center py-10 px-4"
                                            >
                                                <div className="w-16 h-16 bg-[#dcfce7] rounded-full flex items-center justify-center mb-6">
                                                    <FiCheckCircle size={32} className="text-[#16a34a]" />
                                                </div>
                                                <h3 className="text-[24px] font-bold text-gray-900 mb-3 tracking-[-0.03em]">Message Sent Successfully</h3>
                                                <p className="text-[15px] text-gray-500 leading-relaxed max-w-sm mb-8">
                                                    Thank you for reaching out! We have received your inquiry and a member of our team will get back to you shortly.
                                                </p>
                                                <button
                                                    onClick={() => setIsSuccess(false)}
                                                    className="bg-black text-white text-[15px] font-medium px-8 py-3 rounded-full hover:bg-neutral-800 transition-all cursor-pointer shadow-sm"
                                                >
                                                    Send Another Message
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </ScrollReveal>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}