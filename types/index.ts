// ─── Primitives ───────────────────────────────────────────────────────────────

export type PetCategory = "dogs" | "cats" | "birds" | "small-animals";
export type PetType = "dog" | "cat" | "bird" | "small-animal";
export type UserRole = "customer" | "admin" | "moderator";
export type DiscountType = "percentage" | "fixed" | "free_shipping";
export type SubscriptionPlan = "snoozy" | "zoomies" | "royale";
export type SubscriptionFrequency = "monthly" | "quarterly";
export type SubscriptionStatus = "active" | "paused" | "cancelled" | "past_due" | "trialing";
export type ProductStatus = "active" | "draft" | "out_of_stock" | "archived";
export type OrderStatus =
  | "pending" | "confirmed" | "processing" | "packed"
  | "shipped" | "out_for_delivery" | "delivered"
  | "cancelled" | "refunded";
export type PawTier = "pup" | "pack" | "alpha" | "legend";
export type PointsSource =
  | "purchase" | "subscription" | "signup" | "add_pet" | "review_photo"
  | "review_text" | "referral_order" | "referral_subscribe" | "social_share"
  | "birthday" | "anniversary" | "quiz" | "tier_upgrade" | "admin_adjust"
  | "quarterly_bonus" | "festival_bonus";
export type PointsType = "earn" | "redeem" | "expire" | "bonus" | "reverse";
export type RedemptionType =
  | "order_discount" | "free_product" | "free_sub_month" | "box_upgrade" | "donate_strays";
export type ReferralStatus = "pending" | "order_placed" | "subscribed";
export type BlogPostStatus = "draft" | "published";
export type ShippingMethod = "standard" | "express";

// ─── Category ─────────────────────────────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  slug: PetCategory;
  description?: string;
  bannerImage?: string;       // Cloudinary public_id
  bannerImageUrl?: string;    // Resolved URL
  petType: PetCategory;
  displayOrder: number;
  productCount?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── Product ──────────────────────────────────────────────────────────────────

export interface ProductImage {
  id: string;
  productId: string;
  publicId: string;          // Cloudinary public_id
  url: string;               // Cloudinary secure URL
  alt?: string;
  displayOrder: number;
  isPrimary: boolean;
}

export interface ProductVariant {
  id: string;
  productId: string;
  name: string;              // e.g. "500g — Chicken"
  sku: string;
  price: number;             // in paise (₹1 = 100 paise)
  compareAtPrice?: number;
  stock: number;
  weight?: number;           // grams
  attributes?: Record<string, string>; // { size: "500g", flavour: "chicken" }
  isDefault: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  ingredients?: string;
  howToUse?: string;
  images: ProductImage[];
  category: PetCategory;
  tags: string[];
  variants: ProductVariant[];
  basePrice: number;         // lowest variant price in paise
  rating: number;            // 0–5
  reviewCount: number;
  status: ProductStatus;
  isFeatured: boolean;
  isSubscriptionEligible: boolean;
  brand?: string;
  origin?: string;           // e.g. "Made in India"
  weight?: number;           // default weight in grams
  sku?: string;              // for single-variant products
  createdAt: string;
  updatedAt: string;
}

// ─── Cart ─────────────────────────────────────────────────────────────────────

export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  name: string;
  image: string;
  price: number;             // in paise
  quantity: number;
  variant?: {
    name: string;
    attributes?: Record<string, string>;
  };
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  promoCode?: string;
  promoDiscount?: number;
}

// ─── Address ─────────────────────────────────────────────────────────────────

export interface Address {
  id: string;
  userId: string;
  label: string;             // "Home", "Office", etc.
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  isDefault: boolean;
  createdAt: string;
}

// ─── Order ────────────────────────────────────────────────────────────────────

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  variantId: string;
  name: string;
  image: string;
  price: number;             // in paise, price at time of order
  quantity: number;
  subtotal: number;
}

export interface Order {
  id: string;
  orderNumber: string;       // e.g. "PAW-2026-00142"
  userId: string;
  items: OrderItem[];
  shippingAddress: Address;
  shippingMethod: ShippingMethod;
  status: OrderStatus;
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  promoCode?: string;
  promoDiscount?: number;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  paymentMethod?: string;
  trackingId?: string;
  courier?: string;
  notes?: string;
  pawPointsEarned?: number;
  createdAt: string;
  updatedAt: string;
  deliveredAt?: string;
}

// ─── Pet ──────────────────────────────────────────────────────────────────────

export interface Pet {
  id: string;
  userId: string;
  name: string;
  type: PetType;
  breed?: string;
  ageMonths?: number;
  gender?: "male" | "female";
  weightKg?: number;
  avatar?: string;           // Cloudinary public_id
  avatarUrl?: string;
  birthday?: string;         // ISO date string YYYY-MM-DD
  allergies?: string[];
  dietaryNotes?: string;
  preferences?: string[];
  createdAt: string;
  updatedAt: string;
}

// ─── User / Profile ──────────────────────────────────────────────────────────

export interface Profile {
  id: string;                // Matches Supabase auth.users.id
  email: string;
  phone?: string;
  firstName: string;
  lastName: string;
  avatar?: string;           // Cloudinary public_id
  avatarUrl?: string;
  role: UserRole;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  referralCode: string;
  referredBy?: string;
  preferences?: {
    petTypes?: PetType[];
    newsletter?: boolean;
    smsAlerts?: boolean;
    whatsappAlerts?: boolean;
  };
  createdAt: string;
  lastLoginAt?: string;
}

// kept as alias for backward compat
export type User = Profile;

// ─── Subscription ─────────────────────────────────────────────────────────────

export interface SubscriptionBox {
  plan: SubscriptionPlan;
  name: string;
  tagline: string;
  monthlyPrice: number;      // in paise
  quarterlyPrice: number;    // in paise (per cycle)
  itemCount: number;
  highlights: string[];
  color: string;
  badge?: string;
}

export interface BoxItem {
  id: string;
  boxId: string;
  productId: string;
  product?: Product;
  quantity: number;
  note?: string;
}

export interface SubscriptionBoxMonth {
  id: string;
  plan: SubscriptionPlan;
  month: string;             // "2026-05"
  items: BoxItem[];
  isPublished: boolean;
  createdAt: string;
}

export interface Subscription {
  id: string;
  userId: string;
  petId: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  frequency: SubscriptionFrequency;
  nextBillingDate: string;
  nextDeliveryDate?: string;
  shippingAddressId: string;
  price: number;             // in paise, current period
  addons: string[];          // product IDs
  razorpaySubscriptionId?: string;
  razorpayPlanId?: string;
  createdAt: string;
  updatedAt: string;
  pausedUntil?: string;
  cancelledAt?: string;
}

// ─── Review ──────────────────────────────────────────────────────────────────

export interface Review {
  id: string;
  productId: string;
  userId: string;
  rating: number;            // 1–5
  title?: string;
  body: string;
  images?: string[];         // Cloudinary URLs
  isVerifiedPurchase: boolean;
  pawPointsAwarded: number;
  createdAt: string;
}

// ─── Paw Points ──────────────────────────────────────────────────────────────

export const PAW_TIER_THRESHOLDS: Record<PawTier, number> = {
  pup: 0,
  pack: 5000,
  alpha: 20000,
  legend: 50000,
};

export const PAW_TIER_MULTIPLIERS: Record<PawTier, number> = {
  pup: 1.0,
  pack: 1.2,
  alpha: 1.5,
  legend: 2.0,
};

export const PAW_TIER_UPGRADE_BONUS: Record<PawTier, number> = {
  pup: 0,
  pack: 500,
  alpha: 1000,
  legend: 2000,
};

export interface PawPointsAccount {
  id: string;
  userId: string;
  balance: number;           // redeemable balance (can go up and down)
  lifetimeEarned: number;    // cumulative total ever earned (for tier calc, never decreases)
  tier: PawTier;
  tierMultiplier: number;    // 1.0 | 1.2 | 1.5 | 2.0
  lastActivity: string;      // ISO datetime — for 12-month expiry tracking
  updatedAt: string;
}

export interface PawPointsTransaction {
  id: string;
  userId: string;
  type: PointsType;
  source: PointsSource;
  points: number;            // positive = earned, negative = redeemed/expired
  orderId?: string;
  description: string;
  expiresAt?: string;
  createdAt: string;
}

// ─── Referral ─────────────────────────────────────────────────────────────────

export interface Referral {
  id: string;
  referrerId: string;
  refereeId: string;
  referralCode: string;
  status: ReferralStatus;
  pointsAwarded: number;
  createdAt: string;
  updatedAt: string;
}

// ─── Promo Code ──────────────────────────────────────────────────────────────

export interface PromoCode {
  id: string;
  code: string;
  discountType: DiscountType;
  discountValue: number;     // percentage (0-100) or fixed paise
  minOrderValue?: number;    // in paise
  maxDiscount?: number;      // in paise (cap for percentage discounts)
  usageLimit?: number;
  usageCount: number;
  restrictToEmail?: string;
  restrictToTier?: PawTier;
  isFirstBoxOnly: boolean;
  isActive: boolean;
  expiresAt?: string;
  createdAt: string;
}

// ─── Site Settings (admin-controlled) ────────────────────────────────────────

export interface SiteSettings {
  id: string;
  storeName: string;
  logoUrl?: string;
  contactEmail: string;
  whatsappNumber: string;    // e.g. "+919876543210"
  socialLinks: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
    facebook?: string;
  };
  freeShippingThreshold: number;  // in paise, e.g. 49900 = ₹499
  expressShippingFee: number;     // in paise, e.g. 9900 = ₹99
  announcementBarEnabled: boolean;
  announcementBarText: string;
  heroHeadline: string;
  heroSubtext: string;
  heroImagePublicId?: string;
  heroImageUrl?: string;
  statsParents: number;
  statsPincodes: number;
  statsRating: string;
  snoozyMonthlyPrice: number;     // in paise
  snoozyQuarterlyPrice: number;
  zoomiesMonthlyPrice: number;
  zoomiesQuarterlyPrice: number;
  royaleMonthlyPrice: number;
  royaleQuarterlyPrice: number;
  razorpayMode: "test" | "live";
  updatedAt: string;
}

// ─── Testimonial ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  customerName: string;
  city: string;
  petDescription: string;   // e.g. "Golden Retriever — Biscuit"
  body: string;
  avatarUrl?: string;
  rating: number;
  displayOrder: number;
  isActive: boolean;
  createdAt: string;
}

// ─── Blog ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;              // Rich HTML from Tiptap
  featuredImageUrl?: string;
  featuredImagePublicId?: string;
  category: string;
  tags: string[];
  author: string;
  seoTitle?: string;
  seoDescription?: string;
  status: BlogPostStatus;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Rewards Catalogue ───────────────────────────────────────────────────────

export interface RewardCatalogueItem {
  id: string;
  name: string;
  description?: string;
  imageUrl?: string;
  pointsCost: number;
  stock: number;
  category: RedemptionType;
  isActive: boolean;
  createdAt: string;
}

// ─── API helpers ──────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}
