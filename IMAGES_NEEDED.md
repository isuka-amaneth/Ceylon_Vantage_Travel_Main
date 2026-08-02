# Images Needed — Ceylon Vantage

The site is already coded to display a photo the moment you add one at the
right filename — no code changes required. Until a file exists at that
path, the site shows a clean branded placeholder instead of a broken image,
so nothing looks broken in the meantime.

## Where files go

All images live in the `public/images/` folder# Images Needed — Ceylon Vantage

The site shows a small automatic slideshow wherever multiple photos are
listed below — on destination cards, tour cards, the hero banner, and the
big wallpaper at the top of each destination/tour page. You don't need to
add every photo before launch: any photo you haven't added yet is simply
skipped, and the slideshow uses whichever ones exist. Add the first photo
per item as a priority; the "-2" and "-3" versions are optional extras
that make the slideshow richer once you have them.

## Where files go

All images live in `public/images/` in your project. A file at
`public/images/destinations/sigiriya.jpg` becomes accessible at
`yoursite.com/images/destinations/sigiriya.jpg` — no code changes needed.

**Specs:** landscape orientation, at least 1600px wide, JPG or WebP.
Filenames must match exactly (all lowercase, hyphens not spaces).

## Homepage hero (top banner, cycles automatically)
```
public/images/hero/hero.jpg       (priority — add this first)
public/images/hero/hero-2.jpg
public/images/hero/hero-3.jpg
```

## Founder photo (single photo, no slideshow)
```
public/images/founder/father.jpg
```

## Destinations — one slideshow set per destination (20 total)
Each destination uses 3 images: the base filename plus `-2` and `-3`.

```
sigiriya, sigiriya-2, sigiriya-3
ella, ella-2, ella-3
galle, galle-2, galle-3
yala, yala-2, yala-3
nuwara-eliya, nuwara-eliya-2, nuwara-eliya-3
mirissa, mirissa-2, mirissa-3
kandy, kandy-2, kandy-3
udawalawe, udawalawe-2, udawalawe-3
bentota, bentota-2, bentota-3
arugam-bay, arugam-bay-2, arugam-bay-3
jaffna, jaffna-2, jaffna-3
trincomalee, trincomalee-2, trincomalee-3
anuradhapura, anuradhapura-2, anuradhapura-3
polonnaruwa, polonnaruwa-2, polonnaruwa-3
horton-plains, horton-plains-2, horton-plains-3
adams-peak, adams-peak-2, adams-peak-3
dambulla, dambulla-2, dambulla-3
colombo, colombo-2, colombo-3
negombo, negombo-2, negombo-3
wilpattu, wilpattu-2, wilpattu-3
```
All go in `public/images/destinations/`, e.g. `public/images/destinations/sigiriya.jpg`.

## Tour packages — one slideshow set per tour (8 total)
```
ella-full-day-tour, ella-full-day-tour-2, ella-full-day-tour-3
yala-safari, yala-safari-2, yala-safari-3
udawalawe-elephant-safari, udawalawe-elephant-safari-2, udawalawe-elephant-safari-3
cultural-triangle-explorer, cultural-triangle-explorer-2, cultural-triangle-explorer-3
southern-coast-beach-circuit, southern-coast-beach-circuit-2, southern-coast-beach-circuit-3
adams-peak-pilgrimage-climb, adams-peak-pilgrimage-climb-2, adams-peak-pilgrimage-climb-3
colombo-negombo-stopover, colombo-negombo-stopover-2, colombo-negombo-stopover-3
wilpattu-wildlife-safari, wilpattu-wildlife-safari-2, wilpattu-wildlife-safari-3
```
All go in `public/images/tours/`, e.g. `public/images/tours/yala-safari.jpg`.

## Where to get real, licensed photos

**Best option — your own photography**, especially from your father's years
on the road — it fits the brand story better than stock ever will.

**For gaps**, use free-for-commercial-use sources only — never a plain
Google Images search, since most of those results are still copyrighted:
- **unsplash.com**
- **pexels.com**

Search using the destination or tour name plus "Sri Lanka" (e.g. "Wilpattu
National Park Sri Lanka", "Colombo Sri Lanka skyline").

## After adding images

No restart needed — drop a file in, refresh your browser, and it appears.
 in your project. Anything
placed there is served directly — e.g. a file at
`public/images/destinations/sigiriya.jpg` becomes accessible at
`yoursite.com/images/destinations/sigiriya.jpg`.

## Exact filenames expected

**Homepage hero background** (the natural-beauty banner at the very top of
the site):
```
public/images/hero/hero.jpg
```
Landscape, at least 2000px wide — this one gets stretched across the full
width of the screen so it needs to be high-resolution. A wide scenic shot
(hill country, coastline, or similar) works best here since text sits on
top of it.

**Founder photo** (needs to be a real photo of your father, ideally at work):
```
public/images/founder/father.jpg
```

**Destination photos** — one photo per destination. This single file is
used in two places automatically: as the small thumbnail on destination
cards (homepage, the all-destinations page, and experience pages) *and*
as the large wallpaper photo at the top of that destination's own page.
You only need to source one good photo per place, not two:
```
public/images/destinations/sigiriya.jpg
public/images/destinations/ella.jpg
public/images/destinations/galle.jpg
public/images/destinations/yala.jpg
public/images/destinations/nuwara-eliya.jpg
public/images/destinations/mirissa.jpg
public/images/destinations/kandy.jpg
public/images/destinations/udawalawe.jpg
public/images/destinations/bentota.jpg
public/images/destinations/arugam-bay.jpg
public/images/destinations/jaffna.jpg
public/images/destinations/trincomalee.jpg
public/images/destinations/anuradhapura.jpg
public/images/destinations/polonnaruwa.jpg
public/images/destinations/horton-plains.jpg
public/images/destinations/adams-peak.jpg
```

**If you'd rather use a different, larger photo for the detail-page
wallpaper than the small card thumbnail**, that's a quick code change on
my end — just let me know and I'll split it into two fields instead of one.

**Specs:** landscape orientation, at least 1600px wide, JPG or WebP.
Filenames must match exactly (all lowercase, hyphens not spaces).

## Where to get real, licensed photos

**Best option — your own photography.** Given your father's years driving
these routes, there's a real chance usable photos already exist from past
trips. Authentic photography also fits the brand story better than stock
imagery ever will.

**If you need to fill gaps with stock photography**, use sites that
explicitly license images for free commercial use — don't pull images
from a Google Images search, since most of those are still under
copyright even if there's no visible watermark:

- **unsplash.com** — free for commercial use, no attribution legally
  required (though appreciated).
- **pexels.com** — same free-commercial-use licensing.

Search terms that work well, one per destination: "Sigiriya rock
fortress", "Ella Sri Lanka nine arches bridge", "Galle fort Sri Lanka",
"Yala national park leopard", "Nuwara Eliya tea plantation", "Mirissa
beach Sri Lanka", "Kandy temple of the tooth", "Udawalawe elephants",
"Bentota beach Sri Lanka", "Arugam Bay surfing", "Jaffna fort", "Pigeon
Island Trincomalee", "Anuradhapura ancient stupa", "Polonnaruwa ruins",
"Horton Plains World's End", "Adam's Peak Sri Pada".

Download at the largest available size, rename to match the filenames
above exactly, and drop them into the corresponding folder.

## After adding images

No restart needed for images specifically — but if the dev server is
running, a browser refresh should show the new photo immediately.
