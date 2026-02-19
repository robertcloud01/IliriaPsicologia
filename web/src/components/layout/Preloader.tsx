'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Force scroll to top on load
        window.scrollTo(0, 0);

        // Disable scroll
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'auto';
        }, 3500); // Total animation duration

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[9999] bg-[#050a09] flex items-center justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <svg
                            viewBox="0 0 1280 1280"
                            className="w-full h-full text-[#cbede0]"
                            style={{ filter: 'drop-shadow(0 0 20px rgba(203, 237, 224, 0.3))' }}
                        >
                            <g transform="translate(0,1280) scale(0.1,-0.1)">
                                <motion.path
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: 1,
                                        opacity: 1,
                                        fill: ["transparent", "transparent", "#cbede0"]
                                    }}
                                    transition={{
                                        pathLength: { duration: 2, ease: "easeInOut" },
                                        opacity: { duration: 0.2 },
                                        fill: { delay: 2.2, duration: 0.8 }
                                    }}
                                    d="M668 11315 c-5 -5 -8 -66 -8 -136 l0 -127 78 -7 c131 -11 204 -25
                                    296 -56 255 -85 417 -265 493 -546 l27 -98 6 -825 c7 -771 9 -835 29 -979 127
                                    -905 494 -1586 1131 -2098 690 -554 1690 -885 2813 -929 l177 -7 -1 -871 c-1
                                    -479 -4 -1233 -8 -1676 l-7 -805 -31 -93 c-76 -226 -222 -385 -454 -496 -104
                                    -50 -229 -89 -359 -112 -129 -22 -363 -36 -478 -29 l-103 7 3 -118 3 -118 105
                                    2 c1490 25 2490 25 3980 0 l105 -2 3 118 3 118 -103 -7 c-116 -7 -349 7 -481
                                    30 -132 24 -252 61 -356 111 -232 111 -374 265 -453 494 l-33 95 -6 840 c-4
                                    462 -7 1216 -8 1676 l-1 836 178 7 c996 39 1904 306 2577 756 256 172 531 422
                                    704 640 362 457 568 966 663 1635 19 139 21 210 28 975 l6 825 27 98 c83 307
                                    269 493 572 571 50 13 232 36 281 36 12 0 14 23 12 133 l-3 132 -170 -1 c-614
                                    -2 -1170 -217 -1550 -598 -218 -219 -361 -461 -470 -791 -84 -254 -121 -497
                                    -135 -876 -5 -141 -17 -321 -25 -400 -76 -689 -287 -1278 -618 -1719 -84 -112
                                    -261 -297 -367 -383 -306 -247 -688 -404 -1125 -462 -134 -18 -491 -32 -548
                                    -21 l-37 7 0 1752 c1 1890 7 2247 39 2389 72 316 274 541 579 644 203 69 424
                                    94 660 75 81 -6 157 -14 170 -17 22 -6 22 -6 22 125 l0 131 -2130 0 -2130 0 0
                                    -131 c0 -131 0 -131 23 -125 12 3 88 11 169 17 236 19 457 -6 660 -75 290 -98
                                    495 -315 567 -598 45 -174 44 -133 48 -2205 l5 -1982 -38 -7 c-58 -11 -414 3
                                    -549 21 -437 58 -819 215 -1125 462 -106 86 -283 271 -367 383 -203 270 -365
                                    606 -472 976 -105 362 -154 692 -171 1143 -14 386 -51 621 -140 891 -248 755
                                    -829 1224 -1673 1351 -138 21 -496 37 -509 24z"
                                    stroke="currentColor"
                                    strokeWidth="10"
                                    fill="transparent"
                                />
                            </g>
                        </svg>

                        {/* Loading Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="absolute -bottom-12 left-0 right-0 text-center"
                        >
                            <span className="font-serif text-[#cbede0]/50 tracking-[0.3em] text-sm uppercase">Ilíria Psicologia</span>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
