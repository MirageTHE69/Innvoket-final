const config = {
  //Navbar

  navbar: {
    logo: "logo.avif",
  },

  //Text Slider

  textSlider: {
    message: "INNVOKET WE BUILD FUTURE",
  },

  //Services

  services: {
    heading: "What we are offering",
    subheading: "Services",
    cards: [
      {
        id: 1,
        icon: "Globe",
        title: "Web Development",
        description:
          "Build responsive, visually stunning, and scalable websites to deliver an outstanding digital presence.",
        link: "/",
      },
      {
        id: 2,
        icon: "SquareMenu",
        title: "Custom Software Development",
        description:
          "Develop tailored software solutions that address specific business challenges and ensure maximum efficiency.",
        link: "/",
      },
      {
        id: 3,
        icon: "SquareMenu",
        title: "Mobile App Development",
        description:
          "Design intuitive, feature-rich mobile applications for iOS and Android platforms, enabling businesses to connect with customers on the go.",
        link: "/",
      },
      {
        id: 4,
        icon: "PanelTop",
        title: "E-commerce Platforms",
        description:
          "Create robust and user-friendly e-commerce platforms designed for seamless shopping experiences, enhancing customer satisfaction and business growth.",
        link: "/",
      },
    ],
  },

  //Special Services

  specialService: {
    heading: "Specialized Business and Enterprise Solutions",
    subheading: "Services",
    cards: [
      {
        id: 1,
        icon: "Globe",
        title: "Real Estate Solutions",
        description:
          "Streamline property management, lead tracking, and asset organization to close deals faster.",
        link: "/",
      },
      {
        id: 2,
        icon: "SquareMenu",
        title: "Manufacturing Solutions",
        description:
          "Optimize production, manage supply chains, and ensure quality control with customized ERP systems.",
        link: "/",
      },
      {
        id: 3,
        icon: "SquareMenu",
        title: "Retail & E-commerce Solutions",
        description:
          "Boost sales with automated inventory tracking, POS systems, and personalized customer engagement tools.",
        link: "/",
      },
      {
        id: 4,
        icon: "PanelTop",
        title: "Healthcare Solution",
        description:
          "Enhance patient care with appointment scheduling, inventory tracking for medical supplies, and automated staff management.",
        link: "/",
      },
    ],
  },

  //Brand Slider

  brandSlider: {
    heading: "Brand Collaborations",
    subheading: "Brands that trust us",
    images: [
      { src: "brand1.avif", alt: "Brand 1" },
      { src: "brand2.avif", alt: "Brand 2" },
      { src: "brand3.avif", alt: "Brand 3" },
      { src: "brand4.png", alt: "Brand 4" },
      { src: "brand5.avif", alt: "Brand 5" },
      { src: "brand6.avif", alt: "Brand 6" },
    ],
  },
  heroSection: {
    backgroundImage: "bg.avif",
    values: [
      {
        title: "Proven Track Record",
        description:
          "We have built a reputation as a trusted and reliable partner in achieving business success.",
        icon: "Rocket",
      },
      {
        title: "Tailored Solutions",
        description:
          "We offer personalized solutions tailored to your specific goals, audience, and industry.",
        icon: "Network",
      },
      {
        title: "Client-Centric Focus",
        description:
          "Your success is our priority. We prioritize understanding your business goals.",
        icon: "Target",
      },
    ],
    additionalValues: [
      "Continuous Innovation",
      "Dedicated Support",
      "Positive Client Experiences",
      "Commitment to Excellence",
    ],
  },

  //Case Studies

  caseStudies: [
    {
      img: "case1.avif",
      title: "Elite Sports Training Web & Mobile App Development",
      desc: "Empowered trainees with personalized exercise schedules and metrics tracking.",
    },
    {
      img: "case2.avif",
      title:
        "Comprehensive CRM & Inventory Management System with Feature-Rich Mobile App",
      desc: "Unified web and mobile platforms streamline workflows, reducing manual processes.",
    },
    {
      img: "case3.avif",
      title: "Antivirus Dealers Web & Mobile Portal Development",
      desc: "Real-time data tracking and intuitive tools empowered dealers to boost efficiency.",
    },
    {
      img: "case4.avif",
      title:
        "Chess in Chunks: A Unified Platform for Chess Academies, Students, and Coaches",
      desc: "Unified Web and Mobile platforms ensure learning and training are available anytime, anywhere.",
    },
  ],

  //Specialties

  specialties: {
    header: {
      title: "WHY US",
      description:
        "Innvoket transforms businesses with cutting-edge IT and automation solutions tailored to your industry. We deliver measurable results through seamless integrations, innovative technologies, and a focus on customer success.",
    },
    largeImageSection: {
      image: "section.avif",
      efficiencyBoostPercentage: "150%",
      efficiencyBoostTitle: "Workflow Efficiency Boost",
      efficiencyBoostDescription:
        "Our clients choose us for our ability to simplify complexities, enabling them to focus on growth and innovation.",
    },
    gridItems: [
      {
        image: "poster.avif",
      },
      {
        title: "ENHANCED PRODUCTIVITY",
        percentage: "80%",
        description:
          "Innvoket’s automation systems have drastically improved productivity by automating repetitive tasks, reducing errors, and enabling faster decision-making.",
      },
    ],
  },

  //Footer

  footer: {
    contactDetails: [
      {
        icon: "Mail",
        text: "agencee@email.com",
        link: "mailto:agencee@email.com",
      },
      {
        icon: "Phone",
        text: "+54 2541 22 55 66",
        link: "tel:+542541225566",
      },
      {
        icon: "MapPin",
        text: "123 Main Street Anytown, USA, 2141",
        link: "https://www.google.com/maps?q=123+Main+Street+Anytown,+USA,+2141",
      },
    ],
    menuLinks: [
      { title: "Home", link: "/" },
      { title: "About", link: "/pages/about" },
      { title: "Services", link: "/pages/services" },
      { title: "Projects", link: "/pages/projects" },
      { title: "Blog", link: "/pages/blog" },
      { title: "Review", link: "/pages/reviews" },
      { title: "Contact", link: "/pages/contact" },
    ],
    serviceLinks: [
      { title: "SEO", link: "/services/seo" },
      { title: "Content Marketing", link: "/services/content-marketing" },
      { title: "Website Design", link: "/services/website-design" },
      {
        title: "Social Media Marketing",
        link: "/services/social-media-marketing",
      },
    ],
    otherPagesLinks: [
      { title: "License", link: "/license" },
      { title: "404", link: "/pages/404" },
    ],
    socialLinks: [
      { platform: "Facebook", url: "https://facebook.com", icon: "Facebook" },
      { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" },
      { platform: "Linkedin", url: "https://linkedin.com", icon: "Linkedin" },
      {
        platform: "Instagram",
        url: "https://instagram.com",
        icon: "Instagram",
      },
    ],
  },

  //Blogs Page

  articles: [
    {
      title:
        "Unlocking the Power of SEO Keyword Research: A Guide to Choosing the Right Tools",
      date: "Feb 7, 2024",
      category: "News",
      featured: true,
      image: "/blog1.avif",
    },
    {
      title:
        "Navigating the Marketplace for SEO: Finding the Right Solutions for Your Business",
      date: "Feb 7, 2024",
      category: "Article",
      featured: false,
      image: "/blog2.avif",
    },
    {
      title:
        "Empower Your SEO Strategy with Top SEO Tools: A Comprehensive Guide",
      date: "Feb 7, 2024",
      category: "News",
      featured: false,
      image: "/blog3.avif",
    },
    {
      title:
        "Unveiling the Power of Organic Search: Why It Matters and How to Leverage It",
      date: "Feb 7, 2024",
      category: "Tips",
      featured: true,
      image: "/blog4.avif",
    },
    {
      title: "Unlocking the Secret Sauce: A Guide to Ranking on Google",
      date: "Feb 7, 2024",
      category: "News",
      featured: false,
      image: "/blog5.avif",
    },
    {
      title: "The Ultimate Guide to Boosting Your Website's SEO Performance",
      date: "Mar 1, 2024",
      category: "Tips",
      featured: true,
      image: "/blog6.avif",
    },
  ],

  //Contact Page
  contact: {
    hotline: "(555) 123-4567",
    address: "123 Main Street, Cityville, Stateburg, 98765",
    email: "AGENCEE@EMAIL.COM",
    openingHours: [
      { days: "MON TO FRI", hours: "9:00AM - 8:30PM" },
      { days: "SAT", hours: "10:00AM - 6:30PM" },
      { days: "SUN", hours: "CLOSED" },
    ],
    mapCenter: [22.3072, 73.1818],
    socialMedia: ["Twitter", "Facebook", "Instagram"],
  },

  //reviews page

  reviews: [
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
    {
      stars: 5,
      text: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
      author: "David Reynolds",
      company: "Tech Innovations Ltd.",
      image: "https://via.placeholder.com/50",
    },
  ],
};

export default config;
