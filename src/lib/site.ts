/**
 * Single source of truth for HKM Vizag site content.
 * All facts (address, deities, timings, sevas, festivals) live here so they
 * can be updated in one place and are consumed by both the UI and SEO layers.
 */

export const SITE = {
  name: "Hare Krishna Movement, Visakhapatnam",
  shortName: "HKM Vizag",
  legalName: "Hare Krishna Movement India (HKMI), Visakhapatnam",
  center: "Hare Krishna Vaikuntham Cultural Centre",
  tagline: "A Sacred Refuge for the Soul",
  // The canonical production domain. Change before going live.
  url: "https://www.harekrishnavizag.org",
  locale: "en_IN",
  foundedYear: 2015,
  founderAcharya: "His Divine Grace A. C. Bhaktivedanta Swami Prabhupada",
  description:
    "Hare Krishna Movement, Visakhapatnam is a spiritual and cultural sanctuary at the Hare Krishna Vaikuntham Cultural Centre, Gambhiram. Experience daily darshan of Sri Sri Nitai-Gauranga, soulful kirtan, sanctified prasadam and the Anna-Daan & Subhojanam food sevas — in the lineage of Srila Prabhupada.",
  mission:
    "To give human society an opportunity for a life of happiness, good health, peace of mind and all good qualities through God consciousness.",
} as const;

export const CONTACT = {
  addressLine: "Chaitanya Bhavan, Hare Krishna Vaikuntham Cultural Centre",
  street: "IIM Road, opposite Akshaya Patra Foundation, Gambhiram",
  locality: "Visakhapatnam",
  region: "Andhra Pradesh",
  postalCode: "531163",
  country: "India",
  countryCode: "IN",
  phonePrimary: "+91 96666 11108",
  phonePrimaryRaw: "+919666611108",
  phoneSecondary: "0891-2705295",
  whatsapp: "+919666611108",
  whatsappRaw: "919666611108",
  email: "info.vizag@hkm-group.org",
  geo: { lat: 17.8074, lng: 83.3405 },
  mapsQuery: "Hare+Krishna+Vaikuntham+Cultural+Centre+Gambhiram+Visakhapatnam",
} as const;

export const SOCIALS = [
  { label: "Facebook", href: "https://www.facebook.com/hkm.vizag/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/hare_krishna_vizag/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/harekrishnavizag", icon: "youtube" },
  { label: "X (Twitter)", href: "https://x.com/hkm_vizag", icon: "twitter" },
] as const;

export const MAHA_MANTRA = {
  devanagari:
    "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥",
  transliteration:
    "Hare Kṛṣṇa Hare Kṛṣṇa · Kṛṣṇa Kṛṣṇa Hare Hare · Hare Rāma Hare Rāma · Rāma Rāma Hare Hare",
} as const;

/** Primary navigation (also used for the sitemap and accessibility landmarks). */
export const NAV: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Sevas", href: "/#sevas" },
  { label: "Festivals", href: "/#festivals" },
  { label: "Visit", href: "/visit" },
  { label: "Donate", href: "/donate" },
];

/** Deities installed and worshipped. */
export const DEITIES = [
  {
    name: "Sri Sri Nitai-Gauranga",
    role: "The Most Merciful Avatars",
    blurb:
      "Lord Chaitanya and Lord Nityananda — the golden avatars of Kali-yuga who freely distribute love of God through the holy name.",
  },
  {
    name: "Sri Sri Radha-Krishna",
    role: "The Divine Couple",
    blurb:
      "The reservoir of all pleasure and the highest object of pure devotion, eternally served in the mood of Vrindavan.",
  },
  {
    name: "Sri Sri Jagannath, Baladeva & Subhadra",
    role: "The Lords of the Universe",
    blurb:
      "Worshipped with the joyous spirit of the Ratha Yatra, drawing every soul homeward, back to Godhead.",
  },
] as const;

export type Aarti = {
  time: string; // 24h "HH:MM" for live status
  display: string; // human label
  name: string;
  note?: string;
};

/** Daily aarti / darshan schedule (Vaishnava temple standard). */
export const SCHEDULE: Aarti[] = [
  { time: "04:30", display: "4:30 AM", name: "Mangala Aarti", note: "The auspicious dawn worship" },
  { time: "05:00", display: "5:00 AM", name: "Tulasi Aarti & Japa" },
  { time: "07:15", display: "7:15 AM", name: "Darshan Aarti" },
  { time: "07:30", display: "7:30 AM", name: "Guru Puja" },
  { time: "08:00", display: "8:00 AM", name: "Srimad Bhagavatam Class" },
  { time: "12:30", display: "12:30 PM", name: "Raj Bhoga Aarti" },
  { time: "16:30", display: "4:30 PM", name: "Dhoop Aarti" },
  { time: "19:00", display: "7:00 PM", name: "Sandhya & Tulasi Aarti", note: "The lamp-lit evening worship" },
  { time: "20:15", display: "8:15 PM", name: "Shayana Aarti" },
];

/** Darshan windows for the live open/closed indicator (minutes since midnight). */
export const DARSHAN_WINDOWS = [
  { open: "04:30", close: "13:00", label: "Morning Darshan" },
  { open: "16:30", close: "20:30", label: "Evening Darshan" },
] as const;

export type Seva = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  amounts: number[];
  icon: string; // lucide icon name
  highlight?: boolean;
};

export const SEVAS: Seva[] = [
  {
    slug: "anna-daan",
    title: "Anna-Daan Seva",
    tagline: "No one should go hungry",
    description:
      "Sponsor sanctified meals distributed to pilgrims, the elderly and those in need. In the Vedic tradition, the gift of food is the highest charity.",
    amounts: [501, 1100, 2100, 5100],
    icon: "UtensilsCrossed",
    highlight: true,
  },
  {
    slug: "subhojanam",
    title: "Subhojanam",
    tagline: "Community feast of prasadam",
    description:
      "Support the daily community kitchen serving wholesome, lovingly-cooked vegetarian prasadam to every visitor of the dham.",
    amounts: [251, 751, 1501, 3100],
    icon: "Soup",
  },
  {
    slug: "akshaya-patra",
    title: "Mid-Day Meals",
    tagline: "Feed a child for a year",
    description:
      "In partnership with the Akshaya Patra Foundation, help end classroom hunger by sponsoring nutritious mid-day meals for school children.",
    amounts: [1500, 3000, 7500, 15000],
    icon: "GraduationCap",
  },
  {
    slug: "nitya-seva",
    title: "Nitya Seva",
    tagline: "Daily worship of the Lord",
    description:
      "Become a part of the deities' daily service — bhoga offerings, flowers, fragrance and the eternal flame of devotion.",
    amounts: [1100, 2500, 5100, 11000],
    icon: "Flame",
  },
  {
    slug: "gaushala",
    title: "Gaushala Seva",
    tagline: "Protect the sacred cows",
    description:
      "Cow protection is central to Krishna consciousness. Provide fodder, care and shelter for the gentle mothers of the dham.",
    amounts: [501, 1100, 2100, 5100],
    icon: "Heart",
  },
  {
    slug: "vaikuntham",
    title: "Vaikuntham Seva",
    tagline: "Build a home for the Lord",
    description:
      "Contribute to the development of the Hare Krishna Vaikuntham Cultural Centre — a spiritual landmark for generations to come.",
    amounts: [2100, 5100, 11000, 51000],
    icon: "Landmark",
  },
];

export type ImpactStat = {
  value: string;
  label: string;
  sub?: string;
};

export const IMPACT: ImpactStat[] = [
  { value: "18 Lakh+", label: "Meals served", sub: "through Anna-Daan & Subhojanam" },
  { value: "6,000+", label: "Life members", sub: "across the community" },
  { value: "Since 2015", label: "Serving Visakhapatnam", sub: "registered spiritual trust" },
  { value: "365 Days", label: "Darshan & prasadam", sub: "open every day of the year" },
];

export type Festival = {
  name: string;
  date: string; // ISO date for the 2026 Vaishnava calendar (verify before publishing)
  display: string;
  blurb: string;
};

export const FESTIVALS: Festival[] = [
  {
    name: "Jhulan Yatra",
    date: "2026-08-24",
    display: "24–28 August 2026",
    blurb: "The swing festival — the Lord is gently swung on a flower-decked jhula amidst kirtan.",
  },
  {
    name: "Sri Krishna Janmashtami",
    date: "2026-09-04",
    display: "4 September 2026",
    blurb: "The grand midnight appearance of Lord Krishna — abhishekam, kirtan and a night of celebration.",
  },
  {
    name: "Sri Radhashtami",
    date: "2026-09-19",
    display: "19 September 2026",
    blurb: "The divine appearance of Srimati Radharani, served with opulent decoration and offerings.",
  },
  {
    name: "Govardhan Puja",
    date: "2026-11-10",
    display: "10 November 2026",
    blurb: "Annakut — a mountain of prasadam offered in remembrance of the lifting of Govardhan Hill.",
  },
];

/** The marquee festival used for the homepage countdown. */
export const FEATURED_FESTIVAL = FESTIVALS[1]; // Sri Krishna Janmashtami

export type Service = {
  title: string;
  blurb: string;
  icon: string;
  tone: "saffron" | "maroon" | "gold" | "krishna";
};

/** "Explore the Dham" bento experiences. */
export const EXPERIENCES: Service[] = [
  {
    title: "Temple Darshan",
    blurb: "Behold the beautifully adorned deities across nine daily aartis in a serene marble sanctum.",
    icon: "Sparkles",
    tone: "saffron",
  },
  {
    title: "Govinda's Prasadam",
    blurb: "Pure-vegetarian, sanctified meals prepared with devotion and offered to the Lord first.",
    icon: "UtensilsCrossed",
    tone: "maroon",
  },
  {
    title: "Harinaam & Kirtan",
    blurb: "Join the congregational chanting of the holy names that cleanses the heart and uplifts the soul.",
    icon: "Music",
    tone: "gold",
  },
  {
    title: "Gaushala",
    blurb: "Meet the gentle cows of the dham and take part in the sacred service of go-seva.",
    icon: "Heart",
    tone: "krishna",
  },
  {
    title: "Bhagavad Gita Classes",
    blurb: "Timeless wisdom for modern life — weekly study circles, youth forums and value education.",
    icon: "BookOpen",
    tone: "maroon",
  },
  {
    title: "Cultural Centre",
    blurb: "Exhibitions, dioramas and a gift shop that bring the pastimes of Krishna vividly to life.",
    icon: "Landmark",
    tone: "saffron",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "What are the darshan timings?",
    a: "The temple is open for darshan from 4:30 AM to 1:00 PM and again from 4:30 PM to 8:30 PM, every day of the year. The deities rest between 1:00 PM and 4:30 PM.",
  },
  {
    q: "Is there an entry fee?",
    a: "No. Entry and darshan are completely free for everyone. The temple is sustained by the voluntary contributions and sevas of devotees.",
  },
  {
    q: "Is prasadam available?",
    a: "Yes. Sanctified vegetarian prasadam is served daily through the Subhojanam community kitchen. Special feasts are organised on festival days.",
  },
  {
    q: "How can I contribute or volunteer?",
    a: "You can support the temple through any of our sevas — Anna-Daan, Subhojanam, mid-day meals, gaushala or Nitya Seva — or volunteer your time. Visit the Donate page or call us to begin.",
  },
  {
    q: "Is the donation tax-exempt?",
    a: "Yes. Hare Krishna Movement India is a registered charitable trust and contributions are eligible for tax exemption under the applicable provisions of the Income Tax Act. A receipt is issued for every donation.",
  },
  {
    q: "Where is the temple located?",
    a: "We are at the Hare Krishna Vaikuntham Cultural Centre, IIM Road, opposite the Akshaya Patra Foundation, Gambhiram, Visakhapatnam — Andhra Pradesh 531163.",
  },
];
