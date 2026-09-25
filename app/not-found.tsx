import Link from 'next/link';

const NotFound = () => {
    return (
        <main className="flex min-h-[70vh] items-center justify-center px-5">
            <div className="w-full max-w-lg text-center">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">
                    FitLog
                </p>

                <h1 className="mt-4 text-7xl font-black tracking-tight text-base-content sm:text-8xl">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-base-content sm:text-3xl">
                    Page not found
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-base-content/60 sm:text-base">
                    Sorry, we couldn&apos;t find the page you&apos;re looking
                    for. It may have been moved or doesn&apos;t exist.
                </p>

                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="
                            inline-flex items-center justify-center
                            rounded-full
                            bg-primary
                            px-6 py-2.5
                            text-sm font-bold text-neutral-950
                            transition-all duration-200
                            hover:-translate-y-0.5
                            hover:bg-lime-300
                            active:translate-y-0
                        "
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/"
                        className="
                            inline-flex items-center justify-center
                            rounded-full
                            border border-neutral-700
                            px-6 py-2.5
                            text-sm font-semibold text-base-content
                            transition-all duration-200
                            hover:border-neutral-500
                            hover:bg-neutral-900
                            hover:-translate-y-0.5
                            active:translate-y-0
                        "
                    >
                        Browse Workouts
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
