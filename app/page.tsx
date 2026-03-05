'use client';

import {
    Heart,
    ArrowDown,
    Images,
    Eye,
    Sun,
    Leaf,
    Moon,
} from 'lucide-react';
import {motion} from 'framer-motion';

export default function HomePage() {
    return (
        <div
            className="bg-[#fcfbf9] text-[#2c2a29] font-sans antialiased selection:bg-[#f3e6e8] selection:text-[#2c2a29] relative min-h-screen">
            <div
                className="fixed left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#eee8e7]/70 to-transparent -translate-x-1/2 z-0 hidden md:block"></div>
            <main className="relative">
                <section
                    className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-col items-center gap-16 md:gap-24 relative">
                    
                    <div
                        className="text-sm font-medium tracking-[0.25em] p-4 uppercase text-[#a39896] backdrop-blur-md px-6 py-3 rounded-full border border-[#f0ebea]/60 bg-white/20 shadow-lg">
                        Моему котику 🐈‍⬛
                    </div>
                    <div className="relative text-center space-y-8 max-w-4xl mx-auto">
                        <div className="space-y-2 px-4">
                            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight text-[#1a1918]">
                                Есть несколько поводов, но...
                            </h1>
                            <h2 className="font-serif italic text-4xl md:text-5xl lg:text-6xl font-light text-[#b89595]">
                                всего одно чувство внутри
                            </h2>
                        </div>
                        
                        <p className="text-base md:text-lg font-light tracking-wide text-[#7a7471] max-w-xl mx-auto leading-relaxed px-4">
                            С 14 февраля до 8 марта — прошло пару недель, но каждый день с тобой это праздник. Просто
                            потому что ты есть!
                        </p>
                        
                        <div className="flex flex-col items-center gap-2 text-[#a39896]">
                            <span className="text-lg uppercase tracking-[0.15em] font-light">Листай лапкой</span>
                            <ArrowDown className="w-5 h-5 animate-bounce" strokeWidth={1.5}/>
                        </div>
                    </div>
                </section>
                
                <section
                    className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24 relative">
                    <motion.div
                        className="w-full md:w-5/12 space-y-8 relative z-10"
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, margin: "-100px"}}
                        transition={{duration: 0.8}}
                    >
                        <motion.div
                            className="flex items-center gap-4 text-[#b89595]"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <span className="text-lg font-medium tracking-[0.2em] uppercase">14 Февраля</span>
                            <div className="h-[1px] w-16 bg-[#e3d5d5]"></div>
                        </motion.div>
                        <motion.h2
                            className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-snug text-[#1a1918]"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, delay: 0.4}}
                        >
                            Вот уже 3 год подряд, я пишу для тебя этот сайт который выражает <br/>
                            <span className="italic">всю любовь</span>
                        </motion.h2>
                        <motion.p
                            className="text-sm md:text-base font-light text-[#7a7471] leading-relaxed"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, delay: 0.6}}
                        >
                            Ты у меня еще та вредина, порой злюка, но помни, я очень сильно тебя люблю.
                            Пусть этот сайт будет очередным признаком и выражением любви.
                        </motion.p>
                    </motion.div>
                    
                    <motion.div
                        className="w-full md:w-7/12 relative"
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true, margin: "-100px"}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <motion.div
                            className="aspect-[4/3] md:aspect-auto md:h-[32rem] bg-gradient-to-tr from-[#f5eeee] to-transparent rounded-3xl border border-[#ece4e4]/60 p-10 flex flex-col justify-between relative overflow-hidden group"
                            whileHover={{scale: 1.02, rotateX: 5, rotateY: 5}}
                            transition={{duration: 0.4}}
                        >
                            <motion.img
                                className="absolute inset-0 bg-[#fdfaf9] opacity-0 group-hover:opacity-40 transition-opacity duration-1000"
                                initial={{opacity: 1}}
                                src={"https://i.pinimg.com/736x/b1/4b/d5/b14bd54aa315f3b36c1dd43d3e69e222.jpg"}
                                alt={"cat"}
                                whileHover={{opacity: 0.6}}
                                transition={{duration: 0.6}}
                            />
                            <div
                                className="absolute bottom-0 right-0 w-32 h-32 border-l border-t border-[#ece4e4]/50 rounded-tl-3xl translate-x-10 translate-y-10"></div>
                        </motion.div>
                    </motion.div>
                </section>
                
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
                    <motion.div
                        className="text-center mb-16 space-y-4 relative z-10"
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true, margin: "-100px"}}
                        transition={{duration: 0.8}}
                    >
                        <motion.div
                            initial={{scale: 0, rotate: -180}}
                            animate={{scale: 1, rotate: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                        >
                            <Images className="w-6 h-6 mx-auto text-[#c2a3a3]" strokeWidth={1.5}/>
                        </motion.div>
                        <motion.h2
                            className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-[#1a1918]"
                        >
                            Если у меня спросят, что я видел самое прекрасное в мире - я покажу тебя
                        </motion.h2>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                        <motion.div
                            className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#f0ebea] bg-[#f5eeee]"
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                            transition={{duration: 0.8}}
                            whileHover={{scale: 1.05}}
                        >
                            <img
                                src="first.jpg"
                                alt="Нежность"
                                className="w-full h-full object-cover grayscale-[50%] sepia-[20%] opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-[#2c2a29]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8"
                                initial={{opacity: 0, scale: 0.8}}
                                whileHover={{opacity: 1, scale: 1}}
                                transition={{duration: 0.4}}
                            >
                                <span className="text-[#fcfbf9] text-sm font-light tracking-wide">Нежность</span>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div
                            className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#f0ebea] bg-[#f5eeee] md:translate-y-12"
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                            transition={{duration: 0.8, delay: 0.2}}
                            whileHover={{scale: 1.05}}
                        >
                            <img
                                src="second.jpg"
                                alt="Свет"
                                className="w-full h-full object-cover grayscale-[50%] sepia-[20%] opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-[#2c2a29]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8"
                                initial={{opacity: 0, scale: 0.8}}
                                whileHover={{opacity: 1, scale: 1}}
                                transition={{duration: 0.4}}
                            >
                                <span className="text-[#fcfbf9] text-sm font-light tracking-wide">Свет</span>
                            </motion.div>
                        </motion.div>
                        
                        <motion.div
                            className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#f0ebea] bg-[#f5eeee]"
                            initial={{opacity: 0, y: 50}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                            transition={{duration: 0.8, delay: 0.4}}
                            whileHover={{scale: 1.05}}
                        >
                            <img
                                src="third.jpg"
                                alt="Тепло"
                                className="w-full h-full object-cover grayscale-[50%] sepia-[20%] opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-out"
                            />
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-[#2c2a29]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-8"
                                initial={{opacity: 0, scale: 0.8}}
                                whileHover={{opacity: 1, scale: 1}}
                                transition={{duration: 0.4}}
                            >
                                <span className="text-[#fcfbf9] text-sm font-light tracking-wide">Тепло</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
                
                <section
                    className="py-24 md:py-40 px-6 md:px-12 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 relative mt-12 md:mt-0">
                    <motion.div
                        className="w-full md:w-7/12 relative flex justify-center md:justify-start"
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, margin: "-100px"}}
                        transition={{duration: 0.8}}
                    >
                        <motion.div
                            className="relative w-full max-w-md aspect-square"
                            whileHover={{scale: 1.05, rotate: 2}}
                            transition={{duration: 0.4}}
                        >
                            <img
                                src="https://i.pinimg.com/1200x/98/68/5f/98685f0ecd0a5f5b3d8bef73f9d2231b.jpg"
                                alt="Тепло"
                                className="w-full h-full object-cover grayscale-[50%] sepia-[20%] opacity-90 hover:grayscale-0 transition-all duration-1000 ease-out rounded-2xl"
                            />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div
                        className="w-full md:w-5/12 space-y-8 relative z-10"
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true, margin: "-100px"}}
                        transition={{duration: 0.8, delay: 0.2}}
                    >
                        <motion.div
                            className="flex items-center gap-4 text-[#a39896]"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                        >
                            <div className="h-[1px] w-16 bg-[#e6dfde]"></div>
                            <span className="text-lg font-medium tracking-[0.2em] uppercase">8 Марта</span>
                        </motion.div>
                        <motion.h2
                            className="font-serif text-4xl md:text-5xl font-normal tracking-tight leading-snug text-[#1a1918]"
                        >
                            Ты — моя <br/>
                            <span className="italic">весна</span>
                        </motion.h2>
                        <motion.p
                            className="text-sm md:text-base font-light text-[#7a7471] leading-relaxed"
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            Ты невероятная: красивая, умная, добрая и самая любимая.
                            Твоя улыбка согревает меня лучше любого солнца. Спасибо, что ты есть.
                        </motion.p>
                    </motion.div>
                </section>
                
                <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto relative border-t border-[#f0ebea]/60">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        <motion.div
                            className="space-y-4 group"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                            transition={{duration: 0.6}}
                            whileHover={{y: -10}}
                        >
                            <motion.div
                                className="w-12 h-12 rounded-full bg-[#fdfaf9] border border-[#f0ebea] flex items-center justify-center text-[#b89595] group-hover:bg-[#f5eeee] transition-colors duration-500 cursor-pointer"
                                whileHover={{scale: 1.1, rotate: 360}}
                                transition={{duration: 0.4}}
                            >
                                <Eye className="w-5 h-5" strokeWidth={1.5}/>
                            </motion.div>
                            <h4 className="text-lg font-serif font-normal text-[#2c2a29] tracking-tight">Твой
                                взгляд</h4>
                            <p className="text-lg font-light text-[#7a7471] leading-relaxed">
                                В нём я вижу всю нашу вселенную. Такой родной и любимый.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            className="space-y-4 group"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                            transition={{duration: 0.6, delay: 0.1}}
                            whileHover={{y: -10}}
                        >
                            <motion.div
                                className="w-12 h-12 rounded-full bg-[#fdfaf9] border border-[#f0ebea] flex items-center justify-center text-[#b89595] group-hover:bg-[#f5eeee] transition-colors duration-500 cursor-pointer"
                                whileHover={{scale: 1.1, rotate: 360}}
                                transition={{duration: 0.4}}
                            >
                                <Sun className="w-5 h-5" strokeWidth={1.5}/>
                            </motion.div>
                            <h4 className="text-lg font-serif font-normal text-[#2c2a29] tracking-tight">Твоя
                                улыбка</h4>
                            <p className="text-lg font-light text-[#7a7471] leading-relaxed">
                                Ради неё я готов на всё. Она делает мой день лучше мгновенно.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            className="space-y-4 group"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, margin: "-100px"}}
                            transition={{duration: 0.6, delay: 0.2}}
                            whileHover={{y: -10}}
                        >
                            <motion.div
                                className="w-12 h-12 rounded-full bg-[#fdfaf9] border border-[#f0ebea] flex items-center justify-center text-[#b89595] group-hover:bg-[#f5eeee] transition-colors duration-500 cursor-pointer"
                                whileHover={{scale: 1.1, rotate: 360}}
                                transition={{duration: 0.4}}
                            >
                                <Leaf className="w-5 h-5" strokeWidth={1.5}/>
                            </motion.div>
                            <h4 className="text-lg font-serif font-normal text-[#2c2a29] tracking-tight">Твоя
                                легкость</h4>
                            <p className="text-lg font-light text-[#7a7471] leading-relaxed">
                                Ты словно паришь над землёй. Рядом с тобой и я чувствую себя невесомым.
                            </p>
                        </motion.div>
                    </div>
                </section>
                
                <section className="py-32 px-6 text-center max-w-4xl mx-auto relative">
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#f5eeee] rounded-full mix-blend-multiply filter blur-[70px] opacity-50 z-0"
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 180],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                    <motion.div
                        className="relative z-10 flex flex-col items-center"
                        initial={{opacity: 0, scale: 0.8}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true, margin: "-100px"}}
                        transition={{duration: 0.8}}
                    >
                        <motion.div
                            className="flex gap-2 text-[#c2a3a3] mb-12"
                            animate={{
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Moon className="w-6 h-6" strokeWidth={1.5}/>
                        </motion.div>
                        <motion.h3
                            className="font-serif text-3xl md:text-5xl font-normal leading-[1.3] tracking-tight text-[#2c2a29] italic"
                        >
                            Знаешь, мне абсолютно наплевать на эти даты в календаре, чтобы помнить, какое чудо находится
                            рядом со мной.
                        </motion.h3>
                    </motion.div>
                </section>
            </main>
            
            <footer className="relative bg-[#fcfbf9] border-t border-[#f0ebea] pt-24 pb-12 overflow-hidden">
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#f5eeee]/50 to-transparent pointer-events-none"
                    initial={{ height: 0 }}
                    animate={{ height: "16rem" }}
                    transition={{ duration: 1.5, delay: 1 }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#f7ebeb] rounded-full mix-blend-multiply filter blur-[100px] opacity-40"
                    animate={{
                        scale: [1, 1.15, 1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        scale: { duration: 20, repeat: Infinity },
                        rotate: { duration: 45, repeat: Infinity, ease: "linear" }
                    }}
                />
                
                <motion.div
                    className="max-w-6xl mx-auto px-6 relative z-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 mb-24">
                        {/* Левая часть с текстом */}
                        <div className="max-w-md text-center md:text-left space-y-6">
                            <motion.h2
                                className="font-serif text-3xl md:text-4xl font-normal tracking-tight text-[#1a1918]"
                            >
                                Помни, я всегда рядышком<br />
                                <span className="italic text-[#b89595]">Я твоя опора и твоя защита.</span>
                            </motion.h2>
                            <motion.p
                                className="text-sm font-light text-[#7a7471] leading-relaxed"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Я собрал здесь всё, что чувствую. Это лишь маленькая часть моей любви к тебе.
                            </motion.p>
                        </div>
                        
                        {/* Карточка-открытка справа */}
                        <motion.div
                            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-[#f0ebea] max-w-sm w-full"
                            initial={{ opacity: 0, y: 30, rotate: -2 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ scale: 1.02, rotate: 1 }}
                        >
                            <div className="flex justify-center mb-4 text-[#b89595]">
                                <Heart className="w-8 h-8" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-2xl text-center mb-2 text-[#2c2a29]">Моей любимой</h3>
                            <p className="text-sm text-[#7a7471] text-center font-light leading-relaxed">
                                Ты — самое дорогое, что у меня есть. Спасибо, что ты есть в моей жизни.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </footer>
        </div>
    )
        ;
}
