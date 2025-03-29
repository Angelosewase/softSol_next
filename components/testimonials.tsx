import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'David Chen',
        role: 'CTO, FinTech Solutions Inc.',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote: 'Their development team delivered our blockchain-based payment platform ahead of schedule. The scalable architecture handles 100K+ daily transactions flawlessly, and their security implementation passed all regulatory audits.',
    },
    {
        name: 'Sarah Martinez',
        role: 'VP of Technology, E-commerce Giant',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        quote: "The microservices architecture they implemented increased our platform's reliability to 99.99%. Our order processing speed improved by 60%, and the new AI-powered recommendation engine boosted sales by 35%.",
    },
    {
        name: 'Dr. James Wilson',
        role: 'CIO, Metropolitan Healthcare',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        quote: 'Their HIPAA-compliant patient management system revolutionized our operations. The AI-assisted diagnosis support has improved accuracy by 40%, while the integrated telehealth platform handled 50,000+ consultations last quarter.',
    },
    {
        name: 'Emily Thompson',
        role: 'COO, Global Logistics Ltd',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        quote: 'The real-time fleet management system they built reduced our operational costs by 30%. The predictive maintenance module has prevented 150+ potential breakdowns, and the route optimization saved 25% in fuel costs.',
    },
    {
        name: 'Robert Yamamoto',
        role: 'CTO, Smart Manufacturing Co.',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        quote: 'Their IIoT platform connected 1000+ sensors across our facilities, reducing downtime by 45%. The predictive analytics dashboard has helped prevent $2M in potential equipment failures this year alone.',
    },
    {
        name: 'Lisa Anderson',
        role: 'Head of Digital Innovation, RetailTech',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        quote: 'The omnichannel retail solution they developed increased our online-to-offline conversion by 80%. Their custom inventory management system reduced stockouts by 60% while optimizing warehouse space utilization.',
    },
    {
        name: 'Michael O\'Brien',
        role: 'CIO, EduTech Innovations',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: 'Their learning management system supports 100,000+ concurrent users with 99.9% uptime. The AI-powered assessment module has reduced grading time by 75% while improving accuracy.',
    },
    {
        name: 'Jennifer Lee',
        role: 'VP Engineering, InsurTech Leader',
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        quote: 'The claims processing automation they implemented reduced processing time from 5 days to 2 hours. Their fraud detection system has saved us $5M annually with 95% accuracy.',
    },
    {
        name: 'Carlos Rodriguez',
        role: 'Director of IT, Energy Solutions',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        quote: 'Their smart grid management system improved our energy distribution efficiency by 40%. The real-time monitoring platform has helped prevent 200+ potential outages this year.',
    },
    {
        name: 'Anna Kowalski',
        role: 'CTO, AgriTech Innovations',
        image: 'https://randomuser.me/api/portraits/women/10.jpg',
        quote: 'The precision farming platform they developed increased crop yields by 35%. Their IoT sensor network and predictive analytics have reduced water usage by 40% while optimizing fertilizer application.',
    },
    {
        name: 'Thomas Schmidt',
        role: 'Head of Operations, Smart City Solutions',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        quote: 'Their integrated city management platform reduced emergency response times by 50%. The AI-powered traffic management system has decreased congestion by 30% in peak hours.',
    },
    {
        name: 'Maria Garcia',
        role: 'Director of Digital, Media Corp',
        image: 'https://randomuser.me/api/portraits/women/12.jpg',
        quote: 'Their content delivery platform handles 10M+ daily users seamlessly. The personalization engine increased user engagement by 45%, and the recommendation system boosted content discovery by 60%.',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section id='testimonials'>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">Trusted by Industry Leaders</h2>
                        <p className="text-body mt-6">See how we&apos;ve helped organizations across industries achieve their digital transformation goals.</p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className="space-y-3">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index}>
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                                            <Avatar className="size-9">
                                                <AvatarImage alt={name} src={image} loading="lazy" width="120" height="120" />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
