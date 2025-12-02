import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Prestige Concrete and Construction LLC",
  description: "Comprehensive concrete services including driveways, patios, foundations, sidewalks, and commercial concrete work in Dayton, Ohio.",
};

const services = [
  {
    id: "driveways",
    title: "Residential Driveways",
    description: "Your driveway is one of the first things people notice about your home. We create beautiful, durable driveways that enhance curb appeal while standing up to Ohio's weather conditions for years to come.",
    features: [
      "Custom designs and patterns",
      "Multiple finish options available",
      "Proper grading for drainage",
      "Reinforced construction",
      "Weather-resistant sealants",
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "patios",
    title: "Patios & Outdoor Living",
    description: "Transform your backyard into an outdoor retreat with custom concrete patios. From simple designs to elaborate outdoor entertainment areas, we bring your vision to life with expert craftsmanship.",
    features: [
      "Stamped and decorative options",
      "Integrated seating walls",
      "Fire pit surrounds",
      "Multi-level designs",
      "Custom color matching",
    ],
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "commercial",
    title: "Commercial Concrete",
    description: "We provide heavy-duty commercial concrete solutions designed to handle high traffic and heavy loads. Our commercial projects are built to last with industrial-grade materials and techniques.",
    features: [
      "Parking lots and garages",
      "Warehouse flooring",
      "Loading docks",
      "Industrial slabs",
      "ADA-compliant sidewalks",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "foundations",
    title: "Foundations",
    description: "A solid foundation is crucial for any structure. We specialize in residential and commercial foundation work, ensuring your building has the stable base it needs for decades of reliable support.",
    features: [
      "Slab-on-grade foundations",
      "Basement foundations",
      "Crawl space foundations",
      "Foundation repairs",
      "Footings and grade beams",
    ],
    image: "https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sidewalks",
    title: "Sidewalks & Walkways",
    description: "Create safe, accessible pathways around your property with our professional sidewalk and walkway services. We ensure proper construction for lasting durability and safety.",
    features: [
      "Residential walkways",
      "Commercial sidewalks",
      "ADA compliant designs",
      "Decorative borders",
      "Non-slip finishes",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "decorative",
    title: "Decorative Concrete",
    description: "Add style and personality to your concrete surfaces with our decorative options. From stamped patterns to custom staining, we create unique finishes that elevate any space.",
    features: [
      "Stamped concrete",
      "Acid staining",
      "Exposed aggregate",
      "Custom coloring",
      "Pattern combinations",
    ],
    image: "https://images.unsplash.com/photo-1558618047-f4b511ec252d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=80"
            alt="Concrete work background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-6">
            Professional Concrete Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From residential projects to commercial developments, we deliver quality concrete work
            tailored to your specific needs with attention to detail and lasting durability.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:9376733104"
                    className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transition-all shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Get a Free Quote
                  </a>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      {service.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 text-lg">
              We follow a proven process to ensure every project meets our high standards for quality and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "We discuss your project goals and provide expert recommendations" },
              { step: "02", title: "Estimate", desc: "You receive a detailed, transparent quote with no hidden costs" },
              { step: "03", title: "Preparation", desc: "We prepare the site and gather materials for optimal results" },
              { step: "04", title: "Execution", desc: "Our skilled team completes your project to the highest standards" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. We&apos;re here to help bring your concrete project to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:9376733104"
              className="inline-flex items-center justify-center bg-white text-amber-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (937) 673-3104
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
