/* eslint-disable react-hooks/purity */
'use client';

import { motion } from 'framer-motion';

const petals = Array.from({ length: 18 });

const WorkoutComplete = () => {
    return (
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 px-6 py-8 text-center">
            {/* Falling petals */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {petals.map((_, index) => (
                    <motion.span
                        key={index}
                        className="absolute top-0 h-2 w-1.5 rounded-full bg-primary/70"
                        initial={{
                            x: `${Math.random() * 100}%`,
                            y: -20,
                            rotate: 0,
                            opacity: 0,
                        }}
                        animate={{
                            y: 220,
                            rotate: 360,
                            opacity: [0, 1, 1, 0],
                        }}
                        transition={{
                            duration: 2.5 + Math.random() * 1.5,
                            delay: Math.random() * 0.8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                }}
                className="relative z-10"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 0.15,
                        duration: 0.4,
                        type: 'spring',
                        stiffness: 180,
                    }}
                    className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl"
                >
                    ✓
                </motion.div>

                <h2 className="text-xl font-bold tracking-tight text-base-content sm:text-2xl">
                    Congratulations!
                </h2>

                <p className="mt-2 text-sm text-base-content/60">
                    You completed all 5 workouts for today.
                </p>

                <p className="mt-3 text-sm font-semibold text-primary">
                    5 / 5 Completed
                </p>
            </motion.div>
        </div>
    );
};

export default WorkoutComplete;
