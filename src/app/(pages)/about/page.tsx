import type { Metadata } from 'next';
import Link from 'next/link';
import BackButton from '@/components/ui/BackButton';

export const metadata: Metadata = {
  title: 'About Us | Texas Home Construction',
  description: 'Meet the Texas Home Construction team and learn about our 20-year journey building homes and commercial spaces across Texas. Trusted craftsmanship since 2005.',
  alternates: { canonical: '/about' },
};

const teamMembers = [
  { id: 'james-carter', name: 'James Carter', role: 'Founder & CEO', bio: 'James founded Texas Home Construction in 2005 with a single crew and a commitment to quality. With over 25 years in the trades, he oversees every project and ensures each client receives the same care he would want for his own home.' },
  { id: 'maria-reyes', name: 'Maria Reyes', role: 'Director of Operations', bio: 'Maria keeps the business running smoothly — from scheduling and permitting to vendor relationships. Her background in civil engineering means nothing slips through the cracks on her watch.' },
  { id: 'derek-nguyen', name: 'Derek Nguyen', role: 'Lead Project Manager', bio: 'Derek has managed over 200 residential and commercial projects since joining the team in 2012. He is known for clear communication, tight timelines, and a calm presence on even the most complex job sites.' },
  { id: 'ashley-brooks', name: 'Ashley Brooks', role: 'Client Relations Manager', bio: 'Ashley is the first voice clients hear and the last to say goodbye at project handoff. She guides homeowners and business owners through every step of the process, making sure expectations are met and questions are answered.' },
];

const timeline = [
  { year: '2005', milestone: 'Company Founded', description: 'James Carter launched Texas Home Construction in Austin with a small crew and a focus on residential builds.' },
  { year: '2010', milestone: 'First Commercial Project', description: 'We completed our first commercial contract — a 12,000 sq ft office complex in Round Rock — marking our expansion beyond residential work.' },
  { year: '2015', milestone: '100 Homes Built', description: 'A major milestone: our 100th completed home. We celebrated with the community that trusted us to build their spaces.' },
  { year: '2020', milestone: 'Expanded to DFW', description: 'We opened our Dallas–Fort Worth office, bringing our Texas-proven approach to one of the fastest-growing metro areas in the country.' },
  { year: '2024', milestone: '500+ Projects Completed', description: 'From single-family homes to large commercial developments, we have now delivered over 500 successful projects across Texas.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="w-full bg-primary py-16 px-4" aria-labelledby="about-page-heading">
        <div className="max-w-5xl mx-auto">
          <BackButton />
        </div>
        <div className="max-w-3xl mx-auto text-center mt-4">
          <h1 id="about-page-heading" className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            About Texas Home Construction
          </h1>
          <p className="font-body text-lg text-gray-300 leading-relaxed mb-8">
            Nearly two decades of building homes, businesses, and lasting relationships across the Lone Star State.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-accent text-primary font-heading font-semibold text-base rounded hover:bg-orange-400 transition-colors">
            Get a Quote
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16" aria-labelledby="team-section-heading">
        <h2 id="team-section-heading" className="font-heading text-3xl font-bold text-primary mb-2 text-center">Meet Our Team</h2>
        <p className="font-body text-base text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Our people are our greatest asset. Every member of the Texas Home Construction team brings deep expertise, genuine care, and a shared commitment to doing the job right.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {teamMembers.map((member) => (
            <article key={member.id} className="flex flex-col gap-3 p-6 rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-heading text-xl font-bold select-none" aria-hidden="true">
                {member.name.split(' ').map((n) => n[0]).join('')}
              </div>
              <h3 className="font-heading text-xl font-bold text-primary">{member.name}</h3>
              <p className="font-body text-sm font-semibold text-accent uppercase tracking-wide">{member.role}</p>
              <p className="font-body text-sm text-gray-700 leading-relaxed">{member.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-gray-50 py-16 px-4" aria-labelledby="timeline-section-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="timeline-section-heading" className="font-heading text-3xl font-bold text-primary mb-2 text-center">Our Journey</h2>
          <p className="font-body text-base text-gray-600 text-center mb-12">From a single crew in Austin to a statewide operation.</p>
          <ol className="relative border-l-2 border-accent ml-4 flex flex-col gap-10">
            {timeline.map((item) => (
              <li key={item.year} className="pl-8 relative">
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-accent border-2 border-white shadow" aria-hidden="true" />
                <time dateTime={item.year} className="font-heading text-sm font-bold text-accent uppercase tracking-widest">{item.year}</time>
                <h3 className="font-heading text-lg font-bold text-primary mt-1">{item.milestone}</h3>
                <p className="font-body text-sm text-gray-700 leading-relaxed mt-1">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full bg-primary py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Build Something Great?</h2>
          <p className="font-body text-base text-gray-300 mb-8">Whether it&apos;s your dream home or your next commercial venture, our team is ready to make it happen.</p>
          <Link href="/#contact" className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 bg-accent text-primary font-heading font-semibold text-base rounded hover:bg-orange-400 transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
