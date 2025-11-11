// About Section Constants
export const ABOUT_SECTION = {
  subtitle: {
    icon: "/icon.webp",
    text: "ABOUT US"
  },
  title: {
    main: "America's #1",
    highlight: "Roofing Solutions Provider"
  },
  description: "We deliver maintenance-free, energy-efficient roofing with top-quality materials, handling everything from sales to installation. Let us transform your home.",
  subheading: "Timeless Elegance with Unmatched Steel Strength",
  roofTypesDescription: "Our roofing panels are masterfully crafted to mimic:",
  roofTypes: [
    {
      id: "barrel-tile",
      image: "roof-image-1",
      name: "Barrel Tile"
    },
    {
      id: "asphalt-shingles", 
      image: "roof-image-2",
      name: "Asphalt Shingles"
    },
    {
      id: "wood-shakes",
      image: "roof-image-3", 
      name: "Wood Shakes"
    }
  ],
  ctaButton: {
    text: "Get a FREE Quote Now!",
    class: "cta-btn"
  },
  image: {
    src: "/about-img-1.webp",
    alt: "About"
  }
} as const;

// Why Choose Us Section Constants
export const WHY_CHOOSE_SECTION = {
  subtitle: {
    icon: "/icon-white.webp",
    text: "WHY CHOOSE US"
  },
  title: {
    main: "Trusted Roofing Services,",
    highlight: "Built Right"
  },
  description: "We're a trusted roofing company committed to delivering high-quality solutions for all your roofing needs.",
  image: {
    src: "/choose-img.webp",
    alt: "Choose"
  },
  features: [
    {
      id: "expert-craftsmanship",
      icon: "/icon-why-choose-1.svg",
      title: "Expert Craftsmanship",
      description: "Our team of experienced roofers ensures that every project is completed to the highest standards, using the latest techniques and materials."
    },
    {
      id: "comprehensive-solutions",
      icon: "/icon-why-choose-2.svg", 
      title: "Comprehensive Roofing Solutions",
      description: "We offer a wide range of roofing services, from roof repair and maintenance to complete roof replacements. Our team can handle any roofing project, no matter how complex."
    }
  ],
  services: [
    {
      id: "emergency-repair",
      icon: "/choose-feature-1.svg",
      title: "Emergency Repair Service"
    },
    {
      id: "customer-service",
      icon: "/choose-feature-2.svg",
      title: "Excellent Customer Service"
    }
  ],
  ctaButton: {
    text: "Get a FREE Quote Now!",
    class: "cta-btn"
  }
} as const;

// Hero Section Constants
export const HERO_SECTION = {
  subtitle: {
    icon: "/icon-white.webp",
    text: "WELCOME"
  },
  title: "Protecting your home with expert roofing",
  description: "Our skilled team delivers top-quality roofing solutions to safeguard your home, providing reliable installations, repairs.",
  stats: {
    rating: {
      stars: "/stars-1.svg",
      text: "Rated 4.5 by 15,200+ Homeowners",
      avatars: "/avatars.webp"
    }
  },
  form: {
    title: "Get Started Now for Your FREE Quote!",
    description: "Fill out the form below to get your FREE, no-obligation estimate today!",
    fields: [
      { id: "first-name", type: "text", placeholder: "First Name", name: "first-name" },
      { id: "last-name", type: "text", placeholder: "Last Name", name: "last-name" },
      { id: "zip", type: "number", placeholder: "Zip Code", name: "zip" },
      { id: "phone", type: "tel", placeholder: "Phone", name: "phone" },
      { id: "email", type: "email", placeholder: "Email", name: "email" }
    ],
    disclaimer: "By submitting this form, I agree to the United Roofing Experts Terms of Use and Privacy Policy. I authorize United Roofing Experts and its partners to send me marketing text messages or phone calls at the number provided, including those made with an autodialer. Standard message and data rates may apply. Message frequency varies. Opt-out anytime by replying STOP or using the unsubscribe link.",
    submitText: "Get Your FREE Quote"
  },
  offerBadge: "Limited Time Offer",
  partners: [
    "Erie Home",
    "Erie Home_BC", 
    "Erie Roofing",
    "Roof Savings Pro",
    "Billy.com",
    "Advanced Roofing, Inc.",
    "American Remodeling",
    "Anderson Windows",
    "Baker Roofing Company",
    "Best Choice Roofing",
    "Bone Dry Roofing",
    "Breezy Roofing LLC",
    "Breezy Roofing powered by Roofix",
    "Burr Roofing, Siding, & Windows",
    "CCX Roofing",
    "Centimark Corporation",
    "Clear Choice Home Improvement",
    "Coastal Windows",
    "Cody Clinger's Roofing",
    "Corey Construction",
    "Crowther Roofing and Cooling",
    "Erie",
    "Future Remodeling",
    "GreenWatt Consulting LLC",
    "Greenwood Industries, Inc.",
    "Home Genius Exteriors",
    "Infinity Home Services",
    "Jolly Roofing & Contracting Company, Inc.",
    "Kalkreuth Roofing and Sheet Metal",
    "Legacy Restoration",
    "Long Home",
    "Mammoth Roofing and Solar",
    "Nations Roof",
    "New Pro",
    "O'Hara's Son Roofing Company",
    "Pointer Leads",
    "Refined Roofing Inc",
    "RestoreMasters",
    "Roofing Corp of America",
    "Roofix Technologies LLC",
    "Stronghouse Solutions",
    "Tecta America",
    "Victory Home Remodeling",
    "Adventum LLC",
    "Homefix",
  ]
} as const;

// FAQ Section Constants
export const FAQ_SECTION = {
  subtitle: {
    icon: "/icon.webp",
    text: "FAQs"
  },
  title: "Frequently Asked Questions",
  faqs: [
    {
      id: "installation-time",
      question: "How long does a typical roof installation take?",
      answer: "Most metal roofs will last a minimum of thirty to fifty years, which is two to three times longer than a normal roof.",
      active: true
    },
    {
      id: "paint-metal-roof",
      question: "Can you paint a metal roof?",
      answer: "While some metal roofing solutions need to be repainted to maintain elegant curb appeal, United Roofing Expert's stone coated metal roofing solutions mimic traditional shingle roofing and never fade, giving you that new roof look for decades to come with no maintenance needed."
    },
    {
      id: "metal-roof-cost",
      question: "How much does a metal roof cost?",
      answer: "Metal roofs last much longer than traditional asphalt shingles, making it a better long-term investment and costing less money over time. Over 50 years, a homeowner would have to repair or replace their asphalt roof at least twice within the same lifespan of one metal roof."
    },
    {
      id: "home-value",
      question: "Does a new roof increase home value?",
      answer: "Metal roofing is a premium product investment. The durability and look increases home value, as it protects the home from damage and costly repairs."
    }
  ]
} as const;

// Image Slider Section Constants
export const IMAGE_SLIDER_SECTION = {
  images: [
    { src: "/slider-img-1.png", alt: "Slide 1" },
    { src: "/slider-img-2.png", alt: "Slide 2" },
    { src: "/slider-img-3.png", alt: "Slide 3" },
    { src: "/slider-img-4.png", alt: "Slide 4" },
    { src: "/slider-img-5.png", alt: "Slide 5" },
    { src: "/slider-img-6.png", alt: "Slide 6" },
    { src: "/slider-img-7.png", alt: "Slide 7" }
  ]
} as const;

// Ratings Section Constants
export const RATINGS_SECTION = {
  platforms: [
    {
      id: "facebook",
      stars: "/stars-1.svg",
      platform: "/fb.webp",
      alt: "Facebook"
    },
    {
      id: "guild-quality",
      stars: "/stars-1.svg", 
      platform: "/guild-quality.webp",
      alt: "Guild Quality"
    },
    {
      id: "google",
      stars: "/stars-1.svg",
      platform: "/google.webp",
      alt: "Google"
    },
    {
      id: "bbb",
      rating: "A+",
      platform: "/bbb.webp",
      alt: "BBB"
    }
  ]
} as const;

// Review Section Constants
export const REVIEW_SECTION = {
  subtitle: {
    icon: "/icon.webp",
    text: "REVIEW"
  },
  title: {
    main: "What Our Clients Say",
    highlight: "About Us"
  },
  description: "Discover what our satisfied customers have to say about their experience with United Roofing Experts. Their testimonials reflect our commitment to quality and service.",
  reviews: [
    {
      id: "john-d",
      stars: "/stars-1.svg",
      text: "Outstanding service from start to finish! The team was professional, efficient, and completed our roof replacement ahead of schedule.",
      name: "John D.",
      location: "Miami, FL"
    },
    {
      id: "sarah-m",
      stars: "/stars-1.svg",
      text: "United Roofing Experts did an amazing job on our home. Their attention to detail and quality workmanship exceeded our expectations.",
      name: "Sarah M.",
      location: "Houston, TX"
    },
    {
      id: "robert-w",
      stars: "/stars-1.svg",
      text: "Very impressed with their professionalism and expertise. They helped us choose the perfect roofing solution and delivered exceptional results.",
      name: "Robert W.",
      location: "Chicago, IL"
    },
    {
      id: "emily-k",
      stars: "/stars-1.svg",
      text: "The team was incredibly knowledgeable and efficient. They completed our roof repair quickly and left the site spotless. Highly recommend!",
      name: "Emily K.",
      location: "Phoenix, AZ"
    },
    {
      id: "michael-b",
      stars: "/stars-1.svg",
      text: "United Roofing Experts provided excellent service at a fair price. Their team was courteous, professional and completed the job on time. Couldn't be happier!",
      name: "Michael B.",
      location: "Atlanta, GA"
    },
    {
      id: "lisa-r",
      stars: "/stars-1.svg",
      text: "From the initial consultation to the final inspection, everything was handled professionally. They took great care to protect our landscaping during the roof replacement.",
      name: "Lisa R.",
      location: "Denver, CO"
    },
    {
      id: "david-p",
      stars: "/stars-1.svg",
      text: "Best roofing company I've ever worked with! Their communication was excellent throughout the project and they went above and beyond to ensure our satisfaction.",
      name: "David P.",
      location: "Seattle, WA"
    }
  ]
} as const;

// Ribbon Section Constants
export const RIBBON_SECTION = {
  features: [
    {
      id: "rust-resistant",
      title: "Rust-Resistant",
      icon: "/ribbon-icon.svg"
    },
    {
      id: "hail-proof",
      title: "Hail-Proof", 
      icon: "/ribbon-icon.svg"
    },
    {
      id: "fire-safe",
      title: "Fire-Safe",
      icon: "/ribbon-icon.svg"
    },
    {
      id: "wind-tested",
      title: "Wind-Tested Up to 120 mph",
      icon: "/ribbon-icon.svg"
    },
    {
      id: "expert-installation",
      title: "Expert Installation",
      icon: "/ribbon-icon.svg"
    }
  ]
} as const;

// Roofing Styles Section Constants
export const ROOFING_STYLES_SECTION = {
  subtitle: {
    icon: "/icon.webp",
    text: "ROOFING STYLES"
  },
  title: {
    main: "Enchance and Protect the",
    highlight: "Beauty of Your Home"
  },
  description: "United Roofing Experts crafts metal roofs with stone chips, offering a true-to-life look of traditional materials like dimensional shingles, wood shakes, and barrel tiles.",
  styles: [
    {
      id: "metal-shingles",
      title: "Metal Shingles",
      description: "Urban Roofing Experts Metal shingle roofs combine the timeless look of traditional asphalt shingles with low-maintenance durability. Made from ultra-strong steel and reinforced with UV-resistant stone chips, these roofs are designed to endure over 50 years of harsh sun, hail, and winds up to 120 mph.",
      image: "/metal-shingles.webp",
      colors: [
        { name: "Barclay", image: "/barclay.webp" },
        { name: "Charcoal", image: "/charcoal.webp" },
        { name: "English Suede", image: "/english-suede.webp" },
        { name: "Iron Wood", image: "/iron-wood.webp" },
        { name: "Timber Wood", image: "/timber-wood.webp" }
      ]
    },
    {
      id: "metal-spanish-tiles",
      title: "Metal Spanish Tiles",
      description: "While traditional Spanish tile roofs boast a timeless curved style, their clay composition can absorb moisture, leading to weathering and cracks. Urban Roofing Experts metal Spanish tile roofs combine the allure of barrel tile with a lifetime of durability and minimal maintenance typical of metal roofing.",
      image: "/spanish-tile.webp",
      colors: [
        { name: "Barclay", image: "/spanish-barclay.webp" },
        { name: "Charcoal", image: "/spanish-charcoal.webp" },
        { name: "Spanish Red", image: "/spanish-red.webp" }
      ]
    },
    {
      id: "metal-shake",
      title: "Metal Shake",
      description: "Seeking the rustic appeal of wood shake roofing without the maintenance or susceptibility to weathering? United Roofing Experts metal shake roofs emulate the natural wood look with the strength and longevity of steel roofing. Experience the classic style of natural wood enhanced with the unmatched protection of stone-coated steel.",
      image: "/metal-shake.webp",
      colors: [
        { name: "Barclay", image: "/shake-barclay.webp" },
        { name: "Charcoal", image: "/shake-charcoal.webp" },
        { name: "Country", image: "/shake-country.webp" },
        { name: "Iron Wood", image: "/shake-iron-wood.webp" },
        { name: "Timber Wood", image: "/shake-timber-wood.webp" }
      ]
    }
  ],
  ctaButton: {
    text: "Get a FREE Quote Now!",
    class: "cta-btn"
  }
} as const;

// Work Section Constants
export const WORK_SECTION = {
  subtitle: {
    icon: "/icon.webp",
    text: "HOW IT WORKS"
  },
  title: {
    main: "Our Step-by-Step Process",
    highlight: "for Your Roof"
  },
  description: "Our roofing process is designed to ensure quality, efficiency, and peace of mind. We begin with a thorough inspection to assess your roofing needs and identify any issues. Next, we provide a detailed plan and transparent.",
  image: {
    src: "/work-img.webp",
    alt: "Work"
  },
  steps: [
    {
      id: "consultation",
      number: "01",
      title: "Timeless Elegance with Unmatched Steel Strength",
      description: "We start with a consultation to understand your roofing needs. Our team conducts a thorough inspection, identifying any damage, wear, or potential issues to determine the best approach for your roof."
    },
    {
      id: "estimate",
      number: "02", 
      title: "Detailed Estimate and Planning",
      description: "Based on the assessment, we provide a transparent estimate outlining the scope, materials, timeline, and cost. We'll walk you through each detail, ensuring you have a clear understanding of the work involved."
    },
    {
      id: "materials",
      number: "03",
      title: "Material Selection and Preparation", 
      description: "We help you choose high-quality materials suited to your home's needs, preferences, and budget. Once selected, we order and prepare all necessary materials, keeping the project on schedule."
    }
  ],
  features: [
    {
      id: "storm-hail-repair",
      icon: "/icon-work-benefit-1.svg",
      title: "Strom & Hail Damage Repair"
    },
    {
      id: "free-inspections",
      icon: "/icon-work-benefit-2.svg",
      title: "Free Roof Inspections"
    },
    {
      id: "insurance-claims",
      icon: "/icon-work-benefit-3.svg",
      title: "Insurances Claims"
    },
    {
      id: "emergency-support",
      icon: "/icon-work-benefit-4.svg",
      title: "Emergency Support"
    }
  ],
  ctaButton: {
    text: "Get a FREE Quote Now!",
    class: "cta-btn"
  }
} as const;

// Section IDs
export const SECTION_IDS = {
  ABOUT: "about",
  CHOOSE: "choose",
  HERO: "hero",
  FAQ: "faq",
  IMAGE_SLIDER: "image-slider",
  RATINGS: "ratings",
  REVIEW: "review",
  RIBBON: "ribbon",
  ROOFING_STYLES: "roofing-styles",
  WORK: "work"
} as const;

// CSS Classes
export const CSS_CLASSES = {
  CONTAINER: "container",
  CONTENT: "content",
  LEFT: "left",
  RIGHT: "right",
  SUBTITLE: "subtitle",
  TITLE: "title",
  OTHER_DESCRIPTION: "other-description",
  LINE: "line",
  SUBHEADING: "subheading",
  ROOF_GRID: "roof-grid",
  ROOF_ITEM: "roof-item",
  CTA_BTN: "cta-btn",
  IMAGE: "image",
  // Why Choose Us specific classes
  CHOOSE_CONTAINER: "choose-container",
  CHOOSE_ITEM: "choose-item",
  CHOOSE_ICON: "choose-icon",
  CHOOSE_INFO: "choose-info",
  CHOOSE_SERVICE_CONTAINER: "choose-service-container",
  CHOOSE_SERVICE_GRID: "choose-service-grid",
  CHOOSE_SERVICE_ITEM: "choose-service-item",
  CHOOSE_SERVICE_ICON: "choose-service-icon",
  CHOOSE_SERVICE_INFO: "choose-service-info",
  // Hero section classes
  DESCRIPTION: "description",
  STATS: "stats",
  STAT: "stat",
  FORM_CONTAINER: "form-container",
  FORM_TITLE: "form-title",
  FORM_DESCRIPTION: "form-description",
  FORM_ROW: "form-row",
  FORM_GROUP: "form-group",
  DISCLAIMER: "disclaimer",
  OFFER_BADGE: "offer-badge",
  MODAL: "modal",
  MODAL_CONTENT: "modal-content",
  MODAL_HEADER: "modal-header",
  CLOSE_MODAL: "close-modal",
  MODAL_BODY: "modal-body",
  PARTNERS_GRID: "partners-grid",
  PARTNER_ITEM: "partner-item",
  // FAQ section classes
  FAQ_CONTAINER: "faq-container",
  FAQ_ITEM: "faq-item",
  FAQ_HEADER: "faq-header",
  TOGGLE_ICON: "toggle-icon",
  FAQ_CONTENT: "faq-content",
  // Image slider classes
  SWIPER: "swiper",
  IMAGE_SWIPER: "image-swiper",
  SWIPER_WRAPPER: "swiper-wrapper",
  SWIPER_SLIDE: "swiper-slide",
  // Ratings section classes
  RATINGS_GRID: "ratings-grid",
  RATING_CARD: "rating-card",
  STARS_1: "stars-1",
  PLATFORM: "platform",
  // Review section classes
  REVIEWS_SWIPER: "reviews-swiper",
  REVIEW_CARD: "review-card",
  REVIEW_HEADER: "review-header",
  REVIEW_DATE: "review-date",
  REVIEW_TEXT: "review-text",
  REVIEWER: "reviewer",
  // Ribbon section classes
  RIBBON_TRACK: "ribbon-track",
  RIBBON_CONTENT: "ribbon-content",
  RIBBON_TEXT: "ribbon-text",
  // Roofing styles classes
  MOBILE_VIEW: "mobile-view",
  MOBILE_CARDS: "mobile-cards",
  CARD: "card",
  CARD_HEADER: "card-header",
  CARD_CONTENT: "card-content",
  CARD_IMAGE: "card-image",
  COLOR_OPTIONS: "color-options",
  COLOR_GRID: "color-grid",
  COLOR_ITEM: "color-item",
  COLOR_CIRCLE: "color-circle",
  DESKTOP_VIEW: "desktop-view",
  TABS_NAV: "tabs-nav",
  TAB_BTN: "tab-btn",
  TABS_CONTENT: "tabs-content",
  TAB_PANEL: "tab-panel",
  TAB_INFO: "tab-info",
  TAB_IMAGE: "tab-image",
  // Work section classes
  STEPS_CONTAINER: "steps-container",
  STEP_ITEM: "step-item",
  STEP_NUMBER: "step-number",
  STEP_INFO: "step-info",
  FEATURES_CONTAINER: "features-container",
  WORK_FEATURES_GRID: "work-features-grid",
  FEATURE_ITEM: "feature-item",
  FEATURE_ICON: "feature-icon",
  FEATURE_INFO: "feature-info"
} as const;
