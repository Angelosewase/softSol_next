export default function StatsSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-xl space-y-6">
                    <h2 className="text-4xl font-medium lg:text-5xl">Our software expertise delivers measurable results.</h2>
                    <p>
                        Our approach is more than just development. <span className="font-medium">We create complete technology ecosystems</span> — that drive business growth.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <p>We deliver end-to-end solutions — from intuitive front-end interfaces to robust back-end systems that help businesses scale and transform</p>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+200</div>
                                <p>Completed Projects</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">+95%</div>
                                <p>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <blockquote className="border-l-4 pl-4">
                            <p>Working with this software development team has transformed our business operations. Their custom solutions streamlined our processes and gave us the competitive edge we needed in our industry.</p>

                            <div className="mt-6 space-y-3">
                                <cite className="block font-medium">Sarah Johnson, CTO</cite>
                                <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    )
}
