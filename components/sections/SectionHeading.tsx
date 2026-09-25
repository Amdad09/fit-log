interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    description: string;
}

const SectionHeading = ({
    eyebrow,
    title,
    description,
}: SectionHeadingProps) => {
    return (
        <div className="max-w-2xl py-2 md:py-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary sm:text-sm">
                {eyebrow}
            </p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-base-content sm:text-2xl md:text-3xl uppercase">
                {title}
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-base-content/60 sm:text-base sm:leading-7">
                {description}
            </p>
        </div>
    );
};

export default SectionHeading;
