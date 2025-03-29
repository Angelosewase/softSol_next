import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32 " id='content'>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Our development ecosystem delivers complete solutions.</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p className="text-body">
                            Our approach is more than just coding. <span className="text-title font-medium">We engineer comprehensive software ecosystems</span> — from concept to deployment and beyond.
                        </p>
                        <p>We deliver end-to-end software solutions — from intuitive user interfaces to robust microservices architecture and APIs that empower businesses to scale efficiently and innovate continuously.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Agile Development</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Rapid iterations with CI/CD pipelines to bring your software products to market faster with higher quality.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Cloud-Native Architecture</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Scalable, resilient solutions built on modern cloud platforms to grow with your business demands.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div aria-hidden className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"></div>
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image src="/assets/charts.webp" className="hidden rounded-[12px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/assets/charts-light.webp" className="rounded-[12px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
