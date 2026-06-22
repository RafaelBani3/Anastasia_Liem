# MASTER PLANNING — Anastasia Liem Portfolio

> Status: **AWAITING APPROVAL** — Jangan eksekusi sebelum user approve.

---

## 1. TECH STACK (FINAL)

| Layer | Choice | Alasan |
|---|---|---|
| Framework | **Next.js 14+ (App Router) + TypeScript** | SSR/SSG, SEO-friendly, type-safe |
| Styling | **Tailwind CSS** | Utility-first, cepat, konsisten |
| Animasi | **Framer Motion** | Smooth, declarative, well-maintained |
| Icons | **Lucide React** | Lightweight, clean, open-source |
| Scroll Spy | **custom hook (Intersection Observer)** | Tanpa dependency tambahan |
| Font | **next/font (Google Fonts)** | Playfair Display + Poppins, zero-layout-shift |
| CV Download | **static PDF di /public** | Langsung download tanpa backend |
| Deploy | **Vercel** | Zero-config, auto HTTPS, fast CDN |

### Library yang akan di-install:
```
framer-motion
lucide-react
clsx
tailwind-merge
```

> `clsx` + `tailwind-merge` digabung dalam utility `cn()` untuk conditional class merging yang aman.

---

## 2. PROJECT STRUCTURE

```
tasia-portofolio/
├── public/
│   ├── cv-anastasia-liem.pdf        # CV statis untuk download
│   ├── og-image.png                 # Open Graph image
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout, metadata, fonts
│   │   ├── page.tsx                 # Single page — semua section
│   │   └── globals.css              # Tailwind base + custom CSS
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Sticky navbar + scroll spy
│   │   │   └── Footer.tsx           # Footer minimalis
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Hero + CTA
│   │   │   ├── AboutSection.tsx     # Professional summary
│   │   │   ├── ExperienceSection.tsx # Work timeline
│   │   │   ├── SkillsSection.tsx    # Hard skills + soft skills
│   │   │   ├── AchievementsSection.tsx # Metrics cards
│   │   │   ├── EducationSection.tsx # Education card
│   │   │   └── ContactSection.tsx   # Contact links
│   │   └── ui/
│   │       ├── Button.tsx           # Reusable button
│   │       ├── Card.tsx             # Reusable card wrapper
│   │       ├── SectionWrapper.tsx   # Section padding + animation wrapper
│   │       ├── Badge.tsx            # Skill badge / tag
│   │       └── TimelineItem.tsx     # Work experience item
│   ├── constants/
│   │   └── portfolioData.ts         # Semua data (dari CONTENT_DATA.md)
│   ├── hooks/
│   │   └── useActiveSection.ts      # Intersection Observer scroll spy
│   └── lib/
│       └── utils.ts                 # cn() helper
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── package.json
├── postcss.config.js
└── .gitignore
```

---

## 3. TAILWIND CONFIG — DESIGN TOKENS

```ts
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      navy:         '#0D1B2A',
      slate:        '#334155',
      'dusty-rose': '#CDA4A4',
      'bg-accent':  '#F7EDEB',
      'bg-base':    '#FAFAF9',
    },
    fontFamily: {
      heading: ['Playfair Display', 'serif'],
      body:    ['Poppins', 'sans-serif'],
    },
    borderRadius: {
      'card': '1rem',   // 16px
      'btn':  '0.5rem', // 8px
    },
    boxShadow: {
      'soft':   '0 2px 16px rgba(13, 27, 42, 0.06)',
      'medium': '0 4px 24px rgba(13, 27, 42, 0.10)',
    }
  }
}
```

---

## 4. SECTION BREAKDOWN

### 4.1 — Navbar
- Sticky top, blur backdrop (`backdrop-blur-md`)
- Logo/name kiri: **"Anastasia Liem"**
- Menu kanan: About · Experience · Skills · Contact
- Active state berdasarkan scroll position (Intersection Observer)
- Mobile: hamburger → slide-in drawer
- Framer Motion: fade-down saat first load

### 4.2 — Hero Section
- Layout: 2 kolom (desktop), stack (mobile)
- Kiri: Headline + subheadline + 2 CTA
  - **CTA 1**: "Connect With Me" → scroll ke Contact
  - **CTA 2**: "Download CV" → trigger download PDF
- Kanan: Foto/profile placeholder (lingkaran, soft shadow)
- Background: gradient halus `bg-base` → `bg-accent`
- Framer Motion: fade-up staggered (headline → sub → buttons → image)

### 4.3 — About Section
- Professional summary (100–180 kata)
- 2 kolom: text kiri, highlight card kanan (nama, lokasi, role)
- Framer Motion: slide-in dari kiri + fade-up card

### 4.4 — Experience Section
- Vertical timeline dengan garis kiri (`border-l-2 border-dusty-rose`)
- Setiap item: Company, Role, Period, Responsibilities (bullet list)
- Framer Motion: fade-up per item saat masuk viewport (`whileInView`)

### 4.5 — Skills Section
- 2 kolom: **Hard Skills** | **Soft Skills**
- Hard skills dikelompokkan: Recruitment · Assessment Tools · Technical · HR Ops
- Ditampilkan sebagai `Badge` (pill shape, `bg-bg-accent text-navy`)
- Framer Motion: staggered fade-in per badge group

### 4.6 — Achievements Section
- 3 metric cards (grid 3 kolom desktop, stack mobile)
  - "100+ Candidates/Day"
  - "50–70 Psychotests Daily"
  - "< 3 Weeks Time-to-Fill"
- Icon besar + angka + deskripsi singkat
- Framer Motion: scale-up + fade saat masuk viewport

### 4.7 — Education Section
- Single card: Universitas Bunda Mulia, Psychology, GPA 3.45, 2025
- Academic highlights sebagai bullet list
- Framer Motion: fade-up

### 4.8 — Contact Section
- 2 kolom: Info kiri (email, LinkedIn, lokasi) · CTA kanan
- Tombol "Download CV" kedua (reinforce CTA)
- Link email: `mailto:anastasia.liem11@gmail.com`
- Link LinkedIn: `linkedin.com/in/anastasialiem`
- Framer Motion: fade-up

### 4.9 — Footer
- Minimalis: "© 2026 Anastasia Liem. All rights reserved."
- Link kecil: LinkedIn · Email

---

## 5. DOWNLOAD CV — IMPLEMENTATION DETAIL

```
/public/cv-anastasia-liem.pdf  ← user harus menyediakan file ini
```

```tsx
<a
  href="/cv-anastasia-liem.pdf"
  download="CV-Anastasia-Liem.pdf"
  className="..."
>
  <Download size={18} />
  Download CV
</a>
```

> **Catatan**: File PDF CV harus disiapkan sendiri dan ditaruh di `/public/` sebelum deploy.

---

## 6. ANIMATIONS STRATEGY

| Element | Animation | Trigger |
|---|---|---|
| Navbar | Fade-down | Page load |
| Hero text | Fade-up stagger | Page load |
| Section heading | Fade-up | Scroll into view |
| Timeline items | Fade-up + slide-right | Scroll into view |
| Skill badges | Stagger fade-in | Scroll into view |
| Achievement cards | Scale-up + fade | Scroll into view |
| CTA buttons | Subtle scale on hover | Hover |
| Navbar link | Underline grow | Hover |

**Prinsip:**
- `whileInView` untuk semua section — tidak mengganggu scroll
- `once: true` — animasi hanya trigger sekali
- Duration: 0.4s–0.6s, easing: `ease-out`
- Tidak ada animasi berlebihan — tetap premium dan tenang

---

## 7. SEO CONFIGURATION

```tsx
// src/app/layout.tsx
export const metadata: Metadata = {
  title: 'Anastasia Liem — Talent Acquisition & HR Professional',
  description: 'Portfolio Anastasia Liem. Talent Acquisition Specialist & HR Professional based in Tangerang, Indonesia.',
  keywords: ['Anastasia Liem', 'Talent Acquisition', 'HR Professional', 'Recruiter Indonesia'],
  openGraph: {
    title: 'Anastasia Liem — Talent Acquisition & HR Professional',
    images: ['/og-image.png'],
    type: 'website',
  },
}
```

---

## 8. RESPONSIVE BREAKPOINTS

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile | < 640px | Single column, hamburger nav |
| Tablet | 640px–1024px | 2 kolom adaptif |
| Desktop | > 1024px | Full 2 kolom |

---

## 9. IMPLEMENTATION PHASES

### Phase 1 — Setup
- [ ] `create-next-app` TypeScript + Tailwind
- [ ] Install: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`
- [ ] Konfigurasi `tailwind.config.ts`
- [ ] Setup `globals.css`
- [ ] Buat `src/lib/utils.ts` → `cn()`

### Phase 2 — Data Layer
- [ ] `src/constants/portfolioData.ts` dengan TypeScript interfaces

### Phase 3 — UI Components
- [ ] Button, Card, SectionWrapper, Badge, TimelineItem

### Phase 4 — Layout Components
- [ ] Navbar (desktop + mobile)
- [ ] Footer
- [ ] `useActiveSection` hook

### Phase 5 — Sections
- [ ] HeroSection
- [ ] AboutSection
- [ ] ExperienceSection
- [ ] SkillsSection
- [ ] AchievementsSection
- [ ] EducationSection
- [ ] ContactSection

### Phase 6 — Polish
- [ ] Framer Motion animations
- [ ] Download CV functionality
- [ ] SEO metadata
- [ ] Placeholder CV di `/public/`

---

## 10. CATATAN PENTING

1. **CV PDF**: User harus menyediakan `cv-anastasia-liem.pdf` di `/public/` sebelum deploy.
2. **Foto Profile**: Placeholder digunakan jika belum ada foto.
3. **Nomor Telepon**: Disamarkan — perlu update jika ingin ditampilkan.
4. **Tidak ada backend**: Semua static.

---

## AWAITING APPROVAL

> **Mohon review planning di atas.**
> Jika sudah sesuai, balas **"Approve"** atau **"Lanjut"** untuk mulai coding.
> Jika ada yang ingin diubah/ditambahkan, silakan sampaikan.