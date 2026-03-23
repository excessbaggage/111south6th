# 111 S 6th St — Property Showcase Website Design

## Overview
Single-property luxury listing website for 111 S 6th St, Fernandina Beach, FL 32034. Targets high-end clientele with editorial-quality presentation, deep historical storytelling, and strict SEO optimization. Domain: 111south6th.com.

## Stack
- **Framework:** Next.js 14 (App Router) with static export
- **Styling:** Tailwind CSS 3.4+
- **Fonts:** Playfair Display (headlines) + Lato (body) via Google Fonts
- **Deployment:** Vercel (static hosting)
- **Images:** Served directly from Zillow CDN (88 photos)

## Color Palette
| Role | Hex | Usage |
|------|-----|-------|
| Charcoal | #2C2C2C | Text, nav, footer backgrounds |
| Warm Cream | #FAF7F2 | Page background |
| Antique Gold | #C9A96E | CTAs, borders, accents, dividers |
| White | #FFFFFF | Cards, overlays, hero text |
| Muted | #6B6B6B | Secondary text, captions |

## Typography
- **Headlines:** Playfair Display, weights 300-400, tracking wide on labels
- **Body:** Lato, weight 400, 18px/1.7 line-height
- **Nav/Labels:** Lato, uppercase, letter-spacing 2px, weight 300
- **Max content width:** 900px for text sections

## Property Data
- **Price:** $999,000
- **Beds/Baths:** 3 bed / 3 bath
- **SqFt:** 2,189
- **Lot:** 4,735 sqft (0.11 acres)
- **Year Built:** c. 1884 (rebuilt 2003, kitchen 2013)
- **MLS#:** 115315
- **Agents:** Tina Smith & Brenda Slater, Pineywoods Realty LLC

## Page Sections

### 1. Hero (full viewport)
- Full-viewport exterior photo (photo #1 from listing)
- Address in Playfair Display thin weight, white text with subtle shadow
- Price below address
- Animated scroll indicator arrow
- Transparent nav overlay

### 2. Stats Bar
- Horizontal bar with key metrics: Beds | Baths | SqFt | Lot | Year | MLS#
- Gold dividers between stats
- Centered, cream background

### 3. Story Section
- Headline: "A Storied Residence in the Heart of Historic Fernandina"
- 2-3 paragraphs of lifestyle-oriented narrative
- Mention 2024 Amelia Island History Museums Cottages & Garden Tours feature
- Max-width 900px, generous padding

### 4. Full-Width Interior Photo
- Kitchen or fireplace hero shot, full-bleed
- Parallax-lite effect on scroll

### 5. Features Grid
- 3-column grid (stacks on mobile)
- Icon + title + brief description for each:
  - Thermador Chef's Kitchen
  - Two Working Fireplaces
  - Original Hardwood Floors
  - Detached Studio Space
  - Vintage Paned Glass
  - Private Treehouse Bedroom
  - Built-in Banquette
  - French Doors Throughout
  - Zoned Climate Control

### 6. Photo Gallery
- Masonry grid showing curated 30-40 best photos
- Lightbox modal on click with all 88 photos
- Arrow key navigation, swipe on mobile
- Counter showing current/total

### 7. History Section
- Headline: "Where History Lives"
- Isle of Eight Flags narrative
- Silk Stocking District context
- National Register Historic District status
- Golden Age of Fernandina Beach (1869-1915)
- Timeline sidebar with key dates
- Warm cream background with gold accents

### 8. Neighborhood
- Walking distance highlights (Centre Street, restaurants, marina, shops)
- Nearby landmarks (Fort Clinch, Amelia Island Lighthouse, Palace Saloon)
- Embedded Google Map (iframe)
- Grid of neighborhood features with distances

### 9. Agent Contact
- Agent photos (placeholder or pulled from web)
- Names, brokerage, phone, email
- "Schedule a Private Showing" gold CTA button
- Simple contact form: name, email, phone, message

### 10. Footer
- Equal housing logo
- MLS disclaimer text
- Pineywoods Realty LLC credit
- Domain/copyright

## SEO Implementation

### Structured Data (JSON-LD)
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "111 S 6th St, Fernandina Beach, FL 32034",
  "url": "https://111south6th.com",
  "datePosted": "2026-03-06",
  "description": "Historic 3-bedroom home...",
  "offers": {
    "@type": "Offer",
    "price": "999000",
    "priceCurrency": "USD"
  }
}
```

### Meta Tags
- Title: "111 S 6th St | Historic 3BD/3BA Home | Fernandina Beach, FL — $999,000"
- Description: "Circa 1884 historic home in Fernandina Beach's National Register District. 3 bed, 3 bath, Thermador kitchen, two fireplaces. Featured on 2024 Garden Tours. $999,000."

### Open Graph
- og:title, og:description, og:image (hero exterior), og:url
- Twitter card: summary_large_image

### Technical SEO
- Semantic HTML5 elements
- All images with descriptive alt text
- Canonical URL
- sitemap.xml
- robots.txt

## Interactions
- Scroll-triggered fade-up animations (CSS keyframes + Intersection Observer)
- Nav: transparent → solid charcoal on scroll
- Lightbox gallery with keyboard navigation
- Mobile: sticky "Schedule a Showing" bottom bar
- Smooth scroll from nav links to sections

## Photo URLs (88 total from Zillow CDN)
All photos served from: `https://photos.zillowstatic.com/fp/{hash}-uncropped_scaled_within_1536_1152.webp`

Photo hashes stored in data file for the gallery component.
