export default function FAQs() {
    return (
        <section className="scroll-py-16 py-16 md:scroll-py-32 md:py-32" id="help">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 px-2 lg:[grid-template-columns:1fr_auto]">
                    <div className="text-center lg:text-left">
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p>Common questions about our software development services</p>
                    </div>

                    <div className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0">
                        <div className="pb-6">
                            <h3 className="font-medium">What is your software development process?</h3>
                            <p className="text-muted-foreground mt-4">Our development process follows an agile methodology with iterative development cycles to ensure quality and flexibility.</p>

                            <ol className="list-outside list-decimal space-y-2 pl-4">
                                <li className="text-muted-foreground mt-4">Discovery and planning phase to understand your requirements</li>
                                <li className="text-muted-foreground mt-4">Design and architecture development</li>
                                <li className="text-muted-foreground mt-4">Iterative development with regular client feedback</li>
                                <li className="text-muted-foreground mt-4">Quality assurance and testing</li>
                                <li className="text-muted-foreground mt-4">Deployment and post-launch support</li>
                            </ol>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How long does it take to develop a custom software solution?</h3>
                            <p className="text-muted-foreground mt-4">Project timelines vary based on complexity and scope. Simple applications may take 2-3 months, while enterprise-level solutions can take 6+ months. We provide detailed timelines during the initial consultation.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">What technologies do you specialize in?</h3>
                            <p className="text-muted-foreground my-4">We have expertise in a wide range of technologies to meet diverse client needs:</p>
                            <ul className="list-outside list-disc space-y-2 pl-4">
                                <li className="text-muted-foreground">Frontend: React, Angular, Vue.js, Next.js</li>
                                <li className="text-muted-foreground">Backend: Node.js, Python, Java, .NET</li>
                                <li className="text-muted-foreground">Mobile: React Native, Flutter, Swift, Kotlin</li>
                                <li className="text-muted-foreground">Database: SQL, NoSQL, GraphQL</li>
                                <li className="text-muted-foreground">Cloud: AWS, Azure, Google Cloud</li>
                            </ul>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">Do you provide maintenance and support after launch?</h3>
                            <p className="text-muted-foreground mt-4">Yes, we offer flexible maintenance and support packages to ensure your software remains secure, up-to-date, and optimized. Our support includes bug fixes, security updates, performance optimization, and feature enhancements.</p>
                        </div>
                        <div className="py-6">
                            <h3 className="font-medium">How do you handle project pricing?</h3>
                            <p className="text-muted-foreground mt-4">We offer several pricing models including fixed-price, time and materials, and dedicated team arrangements. The best model depends on your project requirements, timeline, and budget constraints. We&apos;ll recommend the most suitable approach during our initial consultation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
