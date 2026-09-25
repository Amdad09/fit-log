import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
    return (
        <section className="bg-base-100 py-6 sm:py-8 md:py-10 lg:py-14">
            <Container>
                <div className="overflow-hidden rounded-2xl bg-base-200">
                    <div className="flex flex-col-reverse items-center justify-between gap-8 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:flex-row lg:gap-12 lg:px-14 lg:py-16">
                        {/* Content */}
                        <div className="w-full text-center lg:max-w-xl lg:text-left">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#ccff00]">
                                WORKOUT LIBRARY
                            </p>
                            <h1 className="text-3xl font-bold leading-tighter tracking-tighter  sm:text-4xl md:text-5xl lg:text-6xl">
                                TRAIN WITH INTENT. LOG EVERY SET.
                            </h1>

                            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-base-content/70 sm:mt-5 sm:text-base sm:leading-7 md:text-lg lg:mx-0">
                                FitLog is a dark, no-nonsense gym companion:
                                pick a lift, lock it into today is plan, and
                                watch the week is work add up.
                            </p>

                            <a
                                href="#library"
                                className="mt-6 flex justify-center lg:justify-start"
                            >
                                <Button className="px-6">
                                    Browse Workouts
                                </Button>
                            </a>
                        </div>

                        {/* Image */}
                        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                            <Image
                                src="/banner.png"
                                alt="Fitness workout"
                                width={800}
                                height={500}
                                priority
                                className="h-auto w-full rounded-xl object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Hero;
