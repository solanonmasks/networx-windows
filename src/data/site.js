// ------------------------------------------------------------
// All the editable content for the site lives in this file.
// Change text, phone numbers, images and lists here, save,
// and the page updates. You don't need to touch index.astro.
// ------------------------------------------------------------

// Where the contact form sends its messages.
// Leave it empty ('') and the form just shows the thank-you note
// without sending anything. To make it work, create a free form at
// https://formspree.io and paste its URL here, for example:
// formEndpoint: 'https://formspree.io/f/abcdwxyz',
export const formEndpoint = '';

export const business = {
  name: 'Networx Windows & More',
  legalName: 'Networx Windows and More',
  url: 'https://networxwindowsandmore.com',
  phone: '(604) 625-0960',
  phoneHref: 'tel:16046250960',
  phoneSchema: '+1-604-625-0960',
  email: 'info@networxwindowsandmore.com',
  street: '27250 58 Crescent',
  city: 'Langley',
  region: 'BC',
  postalCode: 'V4W 3W7',
  country: 'CA',
  hoursShort: 'Mon–Fri 8:00–4:30',
  hoursLines: ['Mon–Fri 8:00 a.m.–4:30 p.m.', 'Saturdays by request'],
  // Used by Google (structured data). Format: Mo-Fr 08:00-16:30
  openingHours: 'Mo-Fr 08:00-16:30',
  homestars: 'https://homestars.com/companies/2777516-networx-home-improvement',
  facebook: 'https://www.facebook.com/NetworxWindows',
  instagram: 'https://www.instagram.com/networxwindows',
};

export const seo = {
  title: 'Networx Windows & More | Windows, doors & exteriors, Langley BC',
  description:
    'Windows, doors and exteriors across the Fraser Valley from a Langley showroom with 30+ years in the trade. Lifetime installation warranty and a 100% leak-free guarantee. Book a free estimate.',
};

// Images are currently linked from the client's existing website.
// Before launch, download them into public/images/ and change these
// to paths like '/images/15.jpg'.
const G = 'https://networxwindowsandmore.com/images/gallery/';
export const images = {
  logo: 'https://networxwindowsandmore.com/images/templogo.png',
  hero: G + '15.JPG',
  heroAlt: 'Walnut Grove home with black vinyl windows and white trim',
  heroCaption: 'Walnut Grove · black vinyl windows',
};

export const nav = [
  { label: 'The Worx', href: '#worx' },
  { label: 'Installation', href: '#install' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
];

export const proof = [
  { t: '30+ years', d: 'Homeowners, contractors & property managers' },
  { t: 'Lifetime warranty', d: 'On every installation' },
  { t: '100% leak-free', d: 'Guaranteed' },
  { t: 'Local showroom', d: 'Langley, with expert guidance' },
];

// "The Worx" tabs
export const worx = [
  { t: 'Windows', img: G + '14.JPG', h: 'Windows', p: 'Replacement windows in the style and material that suit your home, from Milgard’s extensive range and other trusted suppliers.', items: ['Sliders', 'Awnings & casements', 'Picture windows', 'Bay / bow', 'Garden windows'] },
  { t: 'Doors', img: G + '13.JPG', h: 'Doors', p: 'Entry doors, patio doors and minimalist bi-fold moving glass systems that open your home up.', items: ['Entry doors', 'Patio doors', 'Moving glass systems'] },
  { t: 'Exteriors', img: G + '17.jpg', h: 'Exteriors', p: 'JamesHardie board, shakes and trim, or low-maintenance vinyl siding, finished in the colour scheme you choose.', items: ['JamesHardie', 'Vinyl siding', 'Trim boards'] },
  { t: 'And more', img: G + '10.jpg', h: 'Renovations & more', p: 'We offer more than windows and doors. If you can envision it, we can build it.', items: ['Renovations', 'Custom projects'] },
];

export const promises = [
  { n: '01', t: 'Lifetime installation warranty', d: 'Every installation we do is covered for life.' },
  { n: '02', t: '100% leak-free guarantee', d: 'Installed right the first time, sealed and finished properly. Including windows over brick.' },
  { n: '03', t: 'Showroom guidance', d: 'With countless options, it’s hard to choose. Visit our showroom to see our product lines and get advice from a specialist.' },
];

export const brands = 'Products from Milgard, JamesHardie, Ply Gem, Gentek, Masonite and The Folding Sliding Door Company.';

export const projects = [
  { src: G + '13.JPG', city: 'Ladner, Delta', d: 'James Hardie board, shakes and trim, white vinyl windows with grids and a double white front door.' },
  { src: G + '15.JPG', city: 'Walnut Grove', d: 'White trim boards, black vinyl windows and a black front door with double sidelights.' },
  { src: G + '14.JPG', city: 'White Rock', d: 'White vinyl windows and patio doors.' },
  { src: G + '12.JPG', city: 'Delta', d: 'White vinyl windows over brick with black trim, including 14 windows in a round room.' },
  { src: G + '17.jpg', city: 'Chilliwack', d: 'Barn-red vinyl siding, white vinyl windows and black trim for a country feel.' },
  { src: G + '18.JPG', city: 'Langley', d: 'White vinyl windows and dark grey trim.' },
  { src: G + '11.jpg', city: 'Cloverdale', d: 'White vinyl windows, plus a repair to the living room’s top sliders.' },
  { src: G + '10.jpg', city: 'Surrey', d: 'Vinyl and Hardietrim boards, with sliders replaced by casements for a uniform look.' },
];

export const reviews = [
  { q: 'Waited a very long time for these windows… and they are so worth the wait! The employees did a fantastic job, cleaned up every day and were courteous with my flower beds. They’ve made such a difference on the busy road we live on.', n: 'Erica C.', c: 'Mission' },
  { q: 'Tony was very knowledgeable and explained all options. The crew were prompt, professional and friendly, did a great job and cleaned up very well. Well priced and a great product.', n: 'Jack T.', c: 'Langley' },
  { q: 'Easy to work with from start to finish. The crew was very nice, left their workspace clean and provided a stellar service. I would recommend them to family and friends.', n: 'Kyle R.', c: 'Aldergrove' },
  { q: 'Tony and his team did a great job on our windows, patio doors and entry doors. We’re very happy with the Milgard products and the fit and finish of the install, and the price was good.', n: 'Sean M.', c: 'Surrey' },
];

// "I'm interested in" buttons on the contact form
export const chips = ['Windows', 'Doors', 'Siding', 'Renovation'];
