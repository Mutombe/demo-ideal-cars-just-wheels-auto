export const designTokens = {
  heroStyle: "cinematic",
  typography: { heading: "Playfair Display", body: "DM Sans", display: "Playfair Display" },
  effects: { noise: true, glassmorphism: "none", floatingShapes: false, scrollProgress: true, meshGradient: false, gradientBorders: false, cursorGlow: false },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: ["hero","marquee","services","portfolio","stats","about","whyChooseUs","testimonials","cta"],
};

const siteData = {
  business: {
    name: "iDeal Cars & Just Wheels Auto",
    legalName: "iDeal Cars & Just Wheels Auto",
    tagline: "Drive Your Dream. Own Your Road.",
    description: "iDeal Cars & Just Wheels Auto is Harare's trusted destination for quality pre-owned vehicles. We combine two decades of automotive passion with a commitment to fair dealing, offering a curated selection of Japanese imports, European performance cars, and reliable everyday vehicles for every budget.",
    phone: "+263 78 523 3278",
    phoneRaw: "+263785233278",
    whatsappNumber: "263785233278",
    email: "sales@idealcars.co.zw",
    address: "Halifast, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.6,
    ratingRounded: 5,
    reviewCount: 28,
    established: "2012",
    yearsExperience: "12+",
    projectsCompleted: "1200+",
    employees: "20+",
    coordinates: { lat: -17.8312, lng: 31.0455 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:30 PM" },
      { day: "Saturday", time: "8:00 AM - 2:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0455!3d-17.8312",
    cookieConsentKey: "ideal-cars-consent",
    socialLinks: { facebook: "https://www.facebook.com/idealcarzzw/", instagram: "#", linkedin: "#" },
  },

  navbar: { logoImage: null, logoLine1: "iDeal Cars", logoLine2: "& Just Wheels" },

  hero: {
    badge: "Harare's Trusted Pre-Owned Vehicle Dealership",
    titleParts: [
      { text: "DRIVE YOUR " },
      { text: "DREAM", highlight: true },
      { text: " OWN YOUR ROAD." },
    ],
    subtitle: "Japanese precision. European performance. African value. Over 1,200 satisfied drivers and counting.",
    ctaPrimary: "View Stock",
    ctaSecondary: "Get a Quote",
    trustBadge: "1,200+ Vehicles Sold",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=85", alt: "Quality pre-owned vehicles" },
      { url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=85", alt: "Premium sedan on road" },
      { url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1920&q=85", alt: "SUV on highway at sunset" },
    ],
  },

  stats: [
    { number: "1200+", label: "Vehicles Sold" },
    { number: "12+", label: "Years Trading" },
    { number: "95%", label: "Repeat Clients" },
    { number: "30+", label: "Brands Stocked" },
  ],

  servicesPreview: [
    { title: "Pre-Owned Sales", desc: "A curated floor of Japanese and European vehicles -- every unit mechanically inspected, road-tested, and priced to deliver genuine value.", icon: "Car" },
    { title: "Vehicle Financing", desc: "Partnerships with CBZ, Stanbic, and FBC mean we structure deals that fit your cash flow, not the other way around.", icon: "CurrencyDollar" },
    { title: "Trade-In & Buyback", desc: "Instant valuations, same-day processing. Upgrade your ride without the wait or the runaround.", icon: "Handshake" },
    { title: "Japan Direct Import", desc: "Access auction-grade vehicles straight from Japan. Choose your spec, we handle shipping, duties, and registration.", icon: "Rocket" },
    { title: "Warranty Packages", desc: "Peace of mind from day one. Our warranty covers engine, gearbox, and drivetrain for up to 12 months.", icon: "ShieldCheck" },
    { title: "Corporate Fleets", desc: "Volume deals for companies who need reliable, presentable vehicles. Dedicated account management and service scheduling.", icon: "Buildings" },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Everything you need, from the showroom floor to the open road.",
    items: [
      { title: "Pre-Owned Sales", slug: "pre-owned-sales", desc: "Our showroom is stocked with vehicles that have passed a rigorous multi-point inspection. From fuel-efficient Honda Fits to commanding Toyota Land Cruisers, we cater to every need and budget. Each vehicle comes with a full history report, fresh service, and our personal guarantee of quality.", features: ["Multi-Point Inspection","Full Service History","Road Test Certificate","Fresh Detailing","Documentation Pack","Test Drive"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" },
      { title: "Vehicle Financing", slug: "vehicle-financing", desc: "We have done the legwork so you do not have to. Our finance desk works with Zimbabwe's top banks to get you approved quickly and on terms that work for your situation.", features: ["Multiple Bank Options","Hire Purchase","Lease-to-Own","Quick Approval","Budget Calculator","Insurance Referral"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
      { title: "Trade-In & Buyback", slug: "trade-in-buyback", desc: "Ready for something new? Drive in with your current vehicle and leave with an upgrade. Our valuations are transparent, market-based, and processed the same day.", features: ["Fair Market Value","Same-Day Credit","All Makes Welcome","Transfer Handled","No Obligation","Cash Option"], image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80" },
      { title: "Japan Direct Import", slug: "japan-direct-import", desc: "Want something specific? We source vehicles directly from Japanese auctions -- you choose the grade, colour, and spec, and we deliver it cleared and registered to your door.", features: ["Auction Access","Grade Selection","Shipping & Clearance","Duty Calculation","Door Delivery","Pre-Shipment Photos"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80" },
      { title: "Warranty Packages", slug: "warranty-packages", desc: "Every iDeal vehicle can be covered by our comprehensive warranty -- engine, gearbox, differential, and drivetrain for up to 12 months.", features: ["Engine Cover","Gearbox Cover","Drivetrain","12-Month Option","Claims Support","Nationwide Service"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" },
      { title: "Corporate Fleets", slug: "corporate-fleets", desc: "Fleet management should not be a headache. We supply, service, and manage vehicle fleets for businesses that need reliability and consistency.", features: ["Volume Pricing","Account Manager","Service Scheduling","Replacement Units","Insurance Bundle","Branding Support"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" },
    ],
  },

  projects: {
    heroTitle: "Recent Sales",
    heroSubtitle: "A snapshot of the quality vehicles we have placed with happy drivers.",
    items: [
      { title: "Toyota Hilux GD-6", slug: "toyota-hilux-gd6", category: "Pickup", location: "Harare", desc: "A 2021 Hilux Legend 50 in Glacier White -- the workhorse with style.", client: "Private", services: ["Sale","Warranty"], image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80", images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80"] },
      { title: "Honda Fit Hybrid", slug: "honda-fit-hybrid", category: "Hatchback", location: "Harare", desc: "Japan-direct 2020 Fit Hybrid. Low mileage, fuel economy champion.", client: "Private", services: ["Import","Sale"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"] },
      { title: "Mercedes C200", slug: "mercedes-c200", category: "Sedan", location: "Harare", desc: "2019 C200 AMG Line in Obsidian Black. Elegance meets performance.", client: "Private", services: ["Trade-In","Financing"], image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", images: ["https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"] },
      { title: "Nissan X-Trail", slug: "nissan-x-trail", category: "SUV", location: "Harare", desc: "2022 X-Trail e-POWER. The future of family driving, today.", client: "Private", services: ["Import","Warranty"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"] },
      { title: "Toyota Fortuner", slug: "toyota-fortuner", category: "SUV", location: "Harare", desc: "2021 Fortuner 2.8 GD-6. Built for the African road and lifestyle.", client: "Corporate Fleet", services: ["Fleet","Warranty"], image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80", images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80"] },
      { title: "BMW 320i M Sport", slug: "bmw-320i-m-sport", category: "Sedan", location: "Harare", desc: "2020 320i in Mineral Grey. The driver's sedan, redefined.", client: "Private", services: ["Sale","Financing"], image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80", images: ["https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80"] },
      { title: "Isuzu KB250", slug: "isuzu-kb250", category: "Pickup", location: "Harare", desc: "2019 KB250 D-TEQ. The reliable workhorse every business needs.", client: "Corporate", services: ["Fleet","Warranty"], image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80", images: ["https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80"] },
      { title: "Mazda CX-5", slug: "mazda-cx5", category: "SUV", location: "Harare", desc: "2022 CX-5 in Soul Red Crystal. Style and substance in equal measure.", client: "Private", services: ["Import","Sale"], image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", images: ["https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"] },
    ],
  },

  homeTestimonials: [
    { text: "Found my perfect Honda Fit at iDeal Cars. The import was seamless, price was fair, and the car arrived in better condition than the photos. These guys are the real deal.", name: "Tatenda Mhembere", role: "Honda Fit Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
    { text: "Bought two vehicles for my business fleet. The corporate pricing was competitive, the warranty gave us peace of mind, and the service has been consistent.", name: "Rumbidzai Gondo", role: "Fleet Manager, Econet", rating: 5, avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80" },
    { text: "The trade-in process was so smooth. Drove in with my old Mazda, test-drove a BMW 320i, and left with the keys the same afternoon. No pressure, just great service.", name: "Brian Mutasa", role: "BMW 320i Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80" },
    { text: "I was nervous about buying a car online but the iDeal team walked me through every step. The vehicle was exactly as described and delivered on time. Highly recommended.", name: "Nyasha Karimanzira", role: "Nissan X-Trail Owner", rating: 5, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    { text: "Third car from Just Wheels and the quality has never dropped. They remember my preferences and always have something to show me when new stock arrives.", name: "Farai Chigwedere", role: "Repeat Client", rating: 5, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  ],

  reviews: {
    heroTitle: "Driver Reviews",
    heroSubtitle: "Real stories from real owners who chose iDeal.",
    items: [
      { text: "Found my perfect Honda Fit. Import was seamless, price fair, car arrived in better condition than photos.", name: "Tatenda Mhembere", role: "Honda Fit Owner", rating: 5 },
      { text: "Two vehicles for our fleet. Competitive pricing, solid warranty, consistent service.", name: "Rumbidzai Gondo", role: "Fleet Manager", rating: 5 },
      { text: "Trade-in was smooth. Old Mazda in, BMW 320i out, same afternoon. No pressure.", name: "Brian Mutasa", role: "BMW Owner", rating: 5 },
      { text: "Nervous about buying online but team walked me through everything. Vehicle exactly as described.", name: "Nyasha Karimanzira", role: "X-Trail Owner", rating: 5 },
      { text: "Third car from Just Wheels. Quality never drops. They remember my preferences.", name: "Farai Chigwedere", role: "Repeat Client", rating: 5 },
      { text: "Best dealership experience in Harare. Transparent pricing and genuine care for customer satisfaction.", name: "Grace Moyo", role: "Fortuner Owner", rating: 5 },
    ],
  },

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Two brands, one mission: putting Zimbabwe in the driver's seat.",
    story: [
      "iDeal Cars and Just Wheels Auto joined forces in 2012 with a shared conviction -- that buying a car in Zimbabwe should be exciting, transparent, and fair. No fine print, no bait-and-switch, just quality vehicles at honest prices.",
      "Over 12 years and 1,200 vehicles later, we have become one of Harare's most trusted names in the pre-owned market. Our showroom at Halifast has become a destination for everyone from first-time buyers to corporate fleet managers.",
      "We source the best from Japan, South Africa, and local trade-ins, putting every vehicle through a rigorous inspection before it earns a spot on our floor.",
    ],
    values: [
      { title: "Honest Dealing", desc: "Transparent pricing, full disclosure on vehicle history, and no hidden fees. Ever." },
      { title: "Quality Assured", desc: "Every vehicle passes our multi-point inspection. If it is not right, it does not make the floor." },
      { title: "Client First", desc: "We listen to what you need, not what we want to sell. 95 percent of our clients come back." },
      { title: "After-Sale Care", desc: "Warranty, service network, and a team that answers the phone long after the sale." },
    ],
    team: [
      { name: "Kudzai Makoni", role: "Managing Director", bio: "A petrolhead since childhood, Kudzai built iDeal Cars from a passion for connecting people with the right vehicle.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
      { name: "Tsitsi Gondo", role: "Sales Manager", bio: "With a gift for understanding client needs, Tsitsi ensures every visitor leaves with a smile -- and the right keys.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80" },
      { name: "Michael Sibanda", role: "Workshop Manager", bio: "Michael's 18 years of mechanical experience is the backbone of our quality guarantee.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
      { name: "Linda Karonga", role: "Finance Coordinator", bio: "Linda navigates the banking landscape to find the best deal for every client.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
    ],
  },

  whyChooseUs: { title: "Why iDeal", points: [
    { title: "Multi-Point Inspection", desc: "Every vehicle is mechanically vetted and road-tested before it makes the showroom." },
    { title: "Transparent Pricing", desc: "The number on the windscreen is the number you pay. No last-minute additions." },
    { title: "Japan Direct Access", desc: "Auction-grade imports sourced to your exact specification and delivered to your door." },
    { title: "12-Month Warranty", desc: "Engine, gearbox, and drivetrain covered. Drive with complete peace of mind." },
  ]},

  featuredProjects: [
    { title: "Toyota Hilux GD-6", image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0571?w=800&q=80", category: "Pickup" },
    { title: "Mercedes C200", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", category: "Sedan" },
    { title: "Mazda CX-5", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80", category: "SUV" },
  ],

  careers: {
    heroTitle: "Join the Team",
    heroSubtitle: "Love cars? Love people? We should talk.",
    positions: [
      { title: "Sales Consultant", department: "Sales", location: "Harare", type: "Full-time", desc: "Help clients find their next vehicle with genuine advice and excellent service." },
      { title: "Workshop Technician", department: "Technical", location: "Harare", type: "Full-time", desc: "Inspect and prepare vehicles to our exacting standards." },
    ],
  },

  contact: {
    heroTitle: "Visit Our Showroom",
    heroSubtitle: "See the stock in person. Test drive your favourites. Let us find your perfect car.",
    branches: [
      { name: "Halifast Showroom", address: "Halifast, Harare, Zimbabwe", phone: "+263 78 523 3278", email: "sales@idealcars.co.zw" },
    ],
  },

  homeCta: {
    title: "YOUR PERFECT CAR IS WAITING",
    subtitle: "Over 1,200 happy drivers cannot be wrong. Visit our showroom, browse online, or WhatsApp us -- your next car is closer than you think.",
    ctaPrimary: "View Stock",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello iDeal Cars! I'm looking for a vehicle and would like to see what's available.",
    backgroundImage: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&q=85",
  },

  footer: {
    description: "Harare's trusted pre-owned vehicle dealership. Quality vehicles, honest deals, and drivers who come back since 2012.",
    copyright: "iDeal Cars & Just Wheels Auto",
  },
};

export default siteData;
