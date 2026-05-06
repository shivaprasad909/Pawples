import Image from "next/image";
import Link from "next/link";

// ─── Static fallback data (Sprint 3 CMS will replace via Supabase) ────────────

const petCategories = [
  {
    name: "Dogs",
    emoji: "🐶",
    slug: "dogs",
    description: "Treats, toys & wellness",
    color: "from-amber-400 to-orange-400",
    image: "https://picsum.photos/seed/pawdog/400/300",
    count: "240+ products",
  },
  {
    name: "Cats",
    emoji: "🐱",
    slug: "cats",
    description: "Snacks, wands & comfort",
    color: "from-rose-400 to-pink-500",
    image: "https://picsum.photos/seed/pawcat/400/300",
    count: "180+ products",
  },
  {
    name: "Birds",
    emoji: "🐦",
    slug: "birds",
    description: "Seeds, perches & more",
    color: "from-sky-400 to-blue-500",
    image: "https://picsum.photos/seed/pawbird/400/300",
    count: "90+ products",
  },
  {
    name: "Small Animals",
    emoji: "🐹",
    slug: "small-animals",
    description: "Hamsters, rabbits & more",
    color: "from-emerald-400 to-teal-500",
    image: "https://picsum.photos/seed/pawsmall/400/300",
    count: "75+ products",
  },
];

const featuredProducts = [
  {
    id: "1",
    name: "Himalayan Yak Chew",
    category: "Dogs",
    price: 349,
    compareAt: 449,
    rating: 4.8,
    reviews: 1240,
    image: "https://picsum.photos/seed/prod1paw/400/400",
    badge: "Best Seller",
    badgeColor: "bg-gold text-bark",
    slug: "himalayan-yak-chew",
    cat: "dogs",
  },
  {
    id: "2",
    name: "Tuna Crunchies for Cats",
    category: "Cats",
    price: 199,
    compareAt: null,
    rating: 4.9,
    reviews: 876,
    image: "https://picsum.photos/seed/prod2paw/400/400",
    badge: "New",
    badgeColor: "bg-plum text-white",
    slug: "tuna-crunchies",
    cat: "cats",
  },
  {
    id: "3",
    name: "Millet Spray — 100g",
    category: "Birds",
    price: 89,
    compareAt: null,
    rating: 4.7,
    reviews: 430,
    image: "https://picsum.photos/seed/prod3paw/400/400",
    badge: null,
    badgeColor: "",
    slug: "millet-spray",
    cat: "birds",
  },
  {
    id: "4",
    name: "Dental Chew Sticks — Chicken",
    category: "Dogs",
    price: 279,
    compareAt: 329,
    rating: 4.6,
    reviews: 2100,
    image: "https://picsum.photos/seed/prod4paw/400/400",
    badge: "20% Off",
    badgeColor: "bg-rose-500 text-white",
    slug: "dental-chew-sticks",
    cat: "dogs",
  },
];

const subscriptionPlans = [
  {
    id: "snoozy",
    name: "Snoozy Pack",
    emoji: "😴",
    tagline: "For the chill pup who loves comfort",
    monthlyPrice: 499,
    quarterlyPrice: 449,
    items: 5,
    highlights: ["2 treat varieties", "1 toy", "1 wellness item", "Paw care sample"],
    color: "bg-sky-50",
    borderColor: "border-sky-200",
    accentColor: "text-sky-600",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    id: "zoomies",
    name: "Zoomies Pack",
    emoji: "⚡",
    tagline: "The fan favourite for active pets",
    monthlyPrice: 899,
    quarterlyPrice: 809,
    items: 8,
    highlights: ["4 treat varieties", "2 toys", "1 wellness item", "Surprise bonus item", "Free shipping"],
    color: "bg-plum/5",
    borderColor: "border-plum/30",
    accentColor: "text-plum",
    buttonVariant: "primary" as const,
    popular: true,
  },
  {
    id: "royale",
    name: "Royale Pack",
    emoji: "👑",
    tagline: "The luxury experience for pampered royals",
    monthlyPrice: 1499,
    quarterlyPrice: 1349,
    items: 12,
    highlights: ["6 premium treat varieties", "3 premium toys", "2 wellness items", "Grooming essential", "Personalised card", "Priority shipping"],
    color: "bg-gold/8",
    borderColor: "border-gold/40",
    accentColor: "text-gold-600",
    buttonVariant: "secondary" as const,
    popular: false,
  },
];

const trustBadges = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Vet Approved",
    desc: "Every product reviewed by licensed Indian veterinarians",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Easy Cancellation",
    desc: "Pause or cancel your subscription anytime, no questions asked",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Pan-India Delivery",
    desc: "Shipping to 18,000+ pin codes across India",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Made with Love",
    desc: "Sourced from small Indian farms and artisan producers",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    city: "Mumbai",
    pet: "Golden Retriever — Biscuit",
    text: "Biscuit absolutely goes crazy every time the Pawples box arrives. The Himalayan yak chews are his favourite and the surprise toys are always a hit!",
    avatar: "https://picsum.photos/seed/review1/80/80",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    city: "Bengaluru",
    pet: "Persian Cat — Mochi",
    text: "As a cat parent I was sceptical about subscription boxes but Pawples nailed it. Mochi is picky and she loves every treat in the Zoomies pack.",
    avatar: "https://picsum.photos/seed/review2/80/80",
    rating: 5,
  },
  {
    name: "Divya Reddy",
    city: "Hyderabad",
    pet: "Labrador — Rocky",
    text: "The quality is amazing and I love that everything is vet-approved. Rocky has been on Pawples for 8 months now. Worth every rupee!",
    avatar: "https://picsum.photos/seed/review3/80/80",
    rating: 5,
  },
];

// ─── Component helpers ─────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-3.5 h-3.5 ${star <= rating ? "text-gold" : "text-bark/20"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Pricing toggle (Client Component) ────────────────────────────────────────

import PricingToggle from "@/components/home/PricingToggle";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-plum-900 via-plum to-plum-600 min-h-[90vh] flex items-center">
        {/* Background decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] rounded-full bg-plum-300/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-plum-800/40 blur-3xl" />
        </div>

        {/* Floating paw prints */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          {["top-16 left-20", "top-32 right-40", "bottom-24 left-1/3", "top-1/2 right-16", "bottom-40 right-1/3"].map((pos, i) => (
            <span key={i} className={`absolute text-4xl text-white ${pos}`}>🐾</span>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className="text-white animate-fade-in">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-white/90 text-sm font-dm-sans font-medium">
                Now delivering to 18,000+ pin codes across India
              </span>
            </div>

            <h1 className="font-nunito font-black text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance">
              Monthly joy,{" "}
              <span className="text-gold relative">
                tail-wagging
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C40 2 80 7 120 4.5C155 2.5 185 6 199 4" stroke="#F5A623" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              good.
            </h1>

            <p className="mt-8 text-white/75 text-lg font-dm-sans leading-relaxed max-w-lg">
              India&apos;s most loved pet subscription box — curated treats, toys & wellness for your dog, cat, bird, or small animal. Delivered every month. Because they&apos;re family.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/subscribe"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-300 text-bark font-nunito font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-gold/30 hover:shadow-gold/50 transition-all duration-200 active:scale-95"
              >
                Start My Subscription
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-nunito font-bold text-base px-8 py-4 rounded-full transition-all duration-200 active:scale-95"
              >
                Browse Shop
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[10, 20, 30, 40].map((seed) => (
                  <div key={seed} className="w-9 h-9 rounded-full border-2 border-plum-600 overflow-hidden">
                    <Image
                      src={`https://picsum.photos/seed/pet${seed}/36/36`}
                      alt="Pet parent"
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-white font-dm-sans font-semibold text-sm ml-1">4.9</span>
                </div>
                <p className="text-white/60 text-xs font-dm-sans mt-0.5">
                  Loved by 50,000+ pet parents
                </p>
              </div>
            </div>
          </div>

          {/* Right: hero image collage */}
          <div className="relative hidden lg:block animate-slide-up">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main image */}
              <div className="absolute inset-8 rounded-5xl overflow-hidden shadow-2xl shadow-plum-900/50">
                <Image
                  src="https://picsum.photos/seed/pawpleshero/600/600"
                  alt="Happy dog with Pawples treat box"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-900/30 to-transparent" />
              </div>

              {/* Floating card — box contents */}
              <div className="absolute -left-6 bottom-16 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-10 max-w-[200px]">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-xl shrink-0">📦</div>
                <div>
                  <p className="font-nunito font-bold text-bark text-sm leading-tight">Zoomies Pack</p>
                  <p className="text-bark/50 text-xs font-dm-sans">8 items inside</p>
                </div>
              </div>

              {/* Floating card — rating */}
              <div className="absolute -right-4 top-16 bg-white rounded-2xl shadow-xl p-4 z-10">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-nunito font-extrabold text-bark text-2xl leading-none">4.9</p>
                <p className="text-bark/50 text-xs font-dm-sans mt-0.5">50K+ reviews</p>
              </div>

              {/* Floating card — delivery */}
              <div className="absolute -right-2 bottom-8 bg-plum rounded-2xl shadow-xl p-3 flex items-center gap-2 z-10">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="font-nunito font-bold text-white text-xs leading-tight">Free Delivery</p>
                  <p className="text-white/60 text-xs font-dm-sans">Pan-India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80H1440V30C1200 70 900 10 600 40C300 70 100 20 0 40V80Z" fill="#FDF8F2"/>
          </svg>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="bg-ivory py-8 border-b border-plum/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: "50,000+", label: "Happy Pet Parents" },
              { value: "18,000+", label: "Pin Codes Served" },
              { value: "4.9 ★", label: "Average Rating" },
              { value: "₹0", label: "Cancellation Fee" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-nunito font-black text-3xl text-plum leading-none">{value}</span>
                <span className="font-dm-sans text-sm text-bark/60 mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pet Category Grid ──────────────────────────────────────────────── */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-plum/10 text-plum text-sm font-semibold font-dm-sans px-4 py-1.5 rounded-full mb-4">
              Shop by Pet
            </span>
            <h2 className="section-heading text-4xl lg:text-5xl">
              For every kind of family
            </h2>
            <p className="mt-4 text-bark/60 font-dm-sans text-lg max-w-lg mx-auto">
              Carefully curated products for dogs, cats, birds, and small animals — all vet-approved.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {petCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className="group card overflow-hidden hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-40`} />
                  <div className="absolute top-4 right-4 text-3xl animate-bounce-gentle">{cat.emoji}</div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-bark text-xs font-semibold px-2.5 py-1 rounded-full">
                      {cat.count}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-nunito font-extrabold text-xl text-bark group-hover:text-plum transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-bark/55 text-sm font-dm-sans mt-1">{cat.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-plum text-sm font-semibold font-dm-sans group-hover:gap-2 transition-all">
                    Shop now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ──────────────────────────────────────────────── */}
      <section className="py-20 bg-ivory-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="inline-block bg-gold/15 text-gold-600 text-sm font-semibold font-dm-sans px-4 py-1.5 rounded-full mb-4">
                Staff Picks
              </span>
              <h2 className="section-heading text-4xl lg:text-5xl">Top treats this month</h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center gap-2 text-plum font-nunito font-bold text-sm hover:text-plum-600 transition-colors"
            >
              View all products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.cat}/${product.slug}`}
                className="group card overflow-hidden"
              >
                <div className="relative h-56 bg-ivory-dark overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-full bg-plum text-white font-nunito font-bold py-3 text-sm hover:bg-plum-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-bark/40 font-dm-sans uppercase tracking-wider">{product.category}</span>
                  <h3 className="font-nunito font-bold text-bark text-base mt-1 group-hover:text-plum transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <StarRating rating={product.rating} />
                    <span className="text-bark/50 text-xs font-dm-sans">({product.reviews.toLocaleString("en-IN")})</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="font-nunito font-extrabold text-bark text-lg">₹{product.price}</span>
                    {product.compareAt && (
                      <span className="text-bark/40 text-sm line-through font-dm-sans">₹{product.compareAt}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/shop" className="btn-outline text-sm">View all products</Link>
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-plum relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-plum-300/20 blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block bg-white/15 text-white text-sm font-semibold font-dm-sans px-4 py-1.5 rounded-full mb-4">
              Simple as 1-2-3
            </span>
            <h2 className="font-nunito font-black text-white text-4xl lg:text-5xl">How Pawples works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-16 left-[calc(16.67%+40px)] right-[calc(16.67%+40px)] h-0.5 bg-white/20" />
            {[
              { step: "01", emoji: "🐾", title: "Tell us about your pet", desc: "Take a quick 2-min quiz about your pet's breed, age, size, and preferences so we can personalise every box." },
              { step: "02", emoji: "📦", title: "We curate your box", desc: "Our team of pet-loving experts selects 5–12 handpicked treats, toys, and wellness items just for your pet." },
              { step: "03", emoji: "🚀", title: "We deliver to your door", desc: "Your box ships every month with free delivery. Pause, skip or cancel anytime — zero hassle." },
            ].map(({ step, emoji, title, desc }) => (
              <div key={step} className="relative text-center flex flex-col items-center">
                <div className="w-20 h-20 bg-white/15 border border-white/20 rounded-full flex items-center justify-center text-4xl mb-6 relative z-10">
                  {emoji}
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-gold rounded-full flex items-center justify-center text-bark text-xs font-nunito font-black">
                    {step.slice(1)}
                  </span>
                </div>
                <h3 className="font-nunito font-extrabold text-white text-xl mb-3">{title}</h3>
                <p className="text-white/65 font-dm-sans text-sm leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/subscribe/quiz"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-300 text-bark font-nunito font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-gold/30 transition-all duration-200 active:scale-95"
            >
              Take the pet quiz
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Subscription Plans ─────────────────────────────────────────────── */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-plum/10 text-plum text-sm font-semibold font-dm-sans px-4 py-1.5 rounded-full mb-4">
              Subscription Plans
            </span>
            <h2 className="section-heading text-4xl lg:text-5xl">Choose your pack</h2>
            <p className="mt-4 text-bark/60 font-dm-sans text-lg max-w-xl mx-auto">
              From casual to completely spoiled — we have a subscription for every kind of pet parent.
            </p>
          </div>

          {/* Pricing toggle (client component) */}
          <PricingToggle plans={subscriptionPlans} />

          <p className="text-center text-bark/45 text-sm font-dm-sans mt-8">
            All plans include free delivery. Cancel or pause anytime. No commitment.
          </p>
        </div>
      </section>

      {/* ── What's Inside Banner ──────────────────────────────────────────── */}
      <section className="py-20 bg-ivory-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-plum rounded-5xl overflow-hidden grid lg:grid-cols-2 gap-0 relative">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <span className="inline-block bg-white/15 text-white text-sm font-semibold font-dm-sans px-4 py-1.5 rounded-full mb-6 w-fit">
                Inside the box
              </span>
              <h2 className="font-nunito font-black text-white text-4xl lg:text-5xl leading-tight">
                Every box is a <span className="text-gold">surprise</span> crafted for your pet
              </h2>
              <p className="mt-6 text-white/65 font-dm-sans text-base leading-relaxed">
                We source treats from small Indian farms and artisan producers. No artificial colours, no preservatives, no fillers — just pure, wholesome goodness your pet will love.
              </p>
              <ul className="mt-8 space-y-3">
                {["Vet-approved for Indian climates", "Natural & preservative-free treats", "Handpicked toys for your pet's size", "Seasonal & festival specials"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80 font-dm-sans text-sm">
                    <svg className="w-5 h-5 text-gold shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/subscribe"
                className="mt-10 inline-flex w-fit items-center gap-2 bg-gold hover:bg-gold-300 text-bark font-nunito font-extrabold text-sm px-7 py-3.5 rounded-full transition-all duration-200 active:scale-95"
              >
                Start My Box
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            <div className="relative hidden lg:grid grid-cols-2 gap-3 p-8">
              {[
                "https://picsum.photos/seed/box1/300/300",
                "https://picsum.photos/seed/box2/300/300",
                "https://picsum.photos/seed/box3/300/300",
                "https://picsum.photos/seed/box4/300/300",
              ].map((src, i) => (
                <div key={i} className={`relative rounded-2xl overflow-hidden ${i === 1 ? "mt-6" : i === 3 ? "-mt-6" : ""}`}>
                  <Image src={src} alt={`Box item ${i + 1}`} width={200} height={200} className="w-full h-40 object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-plum/10 text-plum text-sm font-semibold font-dm-sans px-4 py-1.5 rounded-full mb-4">
              Tail-wagging reviews
            </span>
            <h2 className="section-heading text-4xl lg:text-5xl">What pet parents say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-7 flex flex-col">
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 text-bark/75 font-dm-sans text-sm leading-relaxed flex-1">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 mt-6 pt-5 border-t border-bark/8">
                  <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
                    <Image src={t.avatar} alt={t.name} width={44} height={44} className="object-cover" />
                  </div>
                  <div>
                    <p className="font-nunito font-bold text-bark text-sm">{t.name}</p>
                    <p className="text-bark/45 text-xs font-dm-sans">{t.city} · {t.pet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Badges ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-plum/5 border-y border-plum/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-plum/10 flex items-center justify-center text-plum shrink-0">
                  {icon}
                </div>
                <div>
                  <h4 className="font-nunito font-bold text-bark text-base">{title}</h4>
                  <p className="text-bark/55 font-dm-sans text-sm mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-ivory text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-5xl mb-6 animate-bounce-gentle inline-block">🐾</div>
          <h2 className="section-heading text-4xl lg:text-5xl mb-6">
            Start your pet&apos;s Pawples journey today
          </h2>
          <p className="text-bark/60 font-dm-sans text-lg mb-10 max-w-xl mx-auto">
            Join 50,000+ pet parents who trust Pawples for their furry, feathered & fluffy family members.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/subscribe/quiz"
              className="inline-flex items-center gap-2 bg-plum hover:bg-plum-600 text-white font-nunito font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-plum/25 hover:shadow-plum/40 transition-all duration-200 active:scale-95"
            >
              Take the pet quiz
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 border-2 border-plum text-plum font-nunito font-extrabold text-base px-8 py-4 rounded-full hover:bg-plum hover:text-white transition-all duration-200 active:scale-95"
            >
              Browse the shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
