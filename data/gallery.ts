export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  orientation: "portrait" | "landscape" | "square";
  span?: "tall" | "wide" | "normal";
}

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/placeholder-gallery-1.jpg",
    alt: "Konpa Groundz crowd dancing", // REPLACE: Client event photo
    category: "Konpa Groundz",
    orientation: "landscape",
    span: "wide",
  },
  {
    id: "g2",
    src: "/images/placeholder-gallery-2.jpg",
    alt: "DJ performing at Konpa Groundz", // REPLACE: Client event photo
    category: "Konpa Groundz",
    orientation: "portrait",
    span: "tall",
  },
  {
    id: "g3",
    src: "/images/placeholder-gallery-3.jpg",
    alt: "Vin Danse workshop instruction", // REPLACE: Client event photo
    category: "Vin Danse",
    orientation: "landscape",
    span: "normal",
  },
  {
    id: "g4",
    src: "/images/placeholder-gallery-4.jpg",
    alt: "Vin Danse social dancing", // REPLACE: Client event photo
    category: "Vin Danse",
    orientation: "square",
    span: "normal",
  },
  {
    id: "g5",
    src: "/images/placeholder-gallery-5.jpg",
    alt: "Perle des Antilles venue decor", // REPLACE: Client event photo
    category: "Perle des Antilles",
    orientation: "landscape",
    span: "wide",
  },
  {
    id: "g6",
    src: "/images/placeholder-gallery-6.jpg",
    alt: "Konpa Groundz live performance", // REPLACE: Client event photo
    category: "Konpa Groundz",
    orientation: "portrait",
    span: "tall",
  },
  {
    id: "g7",
    src: "/images/placeholder-gallery-7.jpg",
    alt: "Perle des Antilles guests", // REPLACE: Client event photo
    category: "Perle des Antilles",
    orientation: "landscape",
    span: "normal",
  },
  {
    id: "g8",
    src: "/images/placeholder-gallery-8.jpg",
    alt: "Konpa Groundz VIP section", // REPLACE: Client event photo
    category: "Konpa Groundz",
    orientation: "square",
    span: "normal",
  },
  {
    id: "g9",
    src: "/images/placeholder-gallery-9.jpg",
    alt: "Vin Danse couple dancing", // REPLACE: Client event photo
    category: "Vin Danse",
    orientation: "portrait",
    span: "tall",
  },
  {
    id: "g10",
    src: "/images/placeholder-gallery-10.jpg",
    alt: "Konpa Groundz atmosphere", // REPLACE: Client event photo
    category: "Konpa Groundz",
    orientation: "landscape",
    span: "normal",
  },
  {
    id: "g11",
    src: "/images/placeholder-gallery-11.jpg",
    alt: "Perle des Antilles stage", // REPLACE: Client event photo
    category: "Perle des Antilles",
    orientation: "landscape",
    span: "wide",
  },
  {
    id: "g12",
    src: "/images/placeholder-gallery-12.jpg",
    alt: "Vin Danse group photo", // REPLACE: Client event photo
    category: "Vin Danse",
    orientation: "landscape",
    span: "normal",
  },
  {
    id: "g13",
    src: "/images/placeholder-gallery-13.jpg",
    alt: "Konpa Groundz bartender", // REPLACE: Client event photo
    category: "Konpa Groundz",
    orientation: "portrait",
    span: "normal",
  },
  {
    id: "g14",
    src: "/images/placeholder-gallery-14.jpg",
    alt: "Perle des Antilles crowd", // REPLACE: Client event photo
    category: "Perle des Antilles",
    orientation: "landscape",
    span: "normal",
  },
  {
    id: "g15",
    src: "/images/placeholder-gallery-15.jpg",
    alt: "Konpa Groundz entrance", // REPLACE: Client event photo
    category: "Konpa Groundz",
    orientation: "square",
    span: "normal",
  },
  {
    id: "g16",
    src: "/images/placeholder-gallery-16.jpg",
    alt: "Vin Danse dancers", // REPLACE: Client event photo
    category: "Vin Danse",
    orientation: "portrait",
    span: "tall",
  },
];

export const galleryCategories = [
  "All",
  "Konpa Groundz",
  "Vin Danse",
  "Perle des Antilles",
];
