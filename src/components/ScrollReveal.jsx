import { motion } from 'framer-motion';

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 1.2,
    distance = 24,
    className = '',
    viewportOptions = { once: true, margin: '-80px' }
}) {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
        none: {},
    };

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
            }}
            viewport={viewportOptions}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.16, 1, 0.3, 1], // premium easeOutQuart/Expo ease
            }}
        >
            {children}
        </motion.div>
    );
}
