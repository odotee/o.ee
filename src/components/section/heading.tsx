interface HeadingProps {
    title?: string | undefined,
    subTitle?: string | undefined,
    description?: string | undefined
}

function SectionHeading({title, subTitle, description}: HeadingProps) {
    return (
        <div className="sm:text-center my-10 flex flex-col items-center justify-center px-6 lg:px-8">

            {title && <h2 className="max-w-5xl md:text-4xl text-2xl font-bold">{title}</h2>}
            {subTitle && (
                <p className="max-w-4xl mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                    {subTitle}
                </p>
            )}
            {description && (
                <p className="max-w-4xl mt-6 text-md">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionHeading;
