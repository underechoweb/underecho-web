import type { ImageMetadata } from "astro";

export interface SlideCiudad {
  src: ImageMetadata["src"];
  city: string;
  alt: string;
}

import bogotaCaracas from "@/assets/carrusel/av-caracas-bogota-colombia.webp";
import medellin from "@/assets/carrusel/medellin-colombia-panorama.webp";
import cali from "@/assets/carrusel/cali-colombia-puente.webp";
import barranquilla from "@/assets/carrusel/edificio-aduana-barranquilla-colombia.webp";
import cartagenaSkyline from "@/assets/carrusel/skyline-bocagrande-cartagena-colombia.webp";
import bucaramanga from "@/assets/carrusel/panoramica-bucaramanga-santander-colombia.webp";
import bogotaSunset from "@/assets/carrusel/bogota-atardecer-panorama-colombia.webp";
import cartagena from "@/assets/carrusel/centro-historico-cartagena-colombia.webp";
import santaMarta from "@/assets/carrusel/santa-marta-costa-colombia.webp";

export const slidesCiudades: SlideCiudad[] = [
  { src: bogotaCaracas.src, city: "Bogotá", alt: "Avenida Caracas, Bogotá" },
  { src: medellin.src, city: "Medellín", alt: "Vista de Medellín" },
  { src: cali.src, city: "Cali", alt: "Vista de Cali" },
  { src: barranquilla.src, city: "Barranquilla", alt: "Edificio de la Aduana, Barranquilla" },
  { src: cartagenaSkyline.src, city: "Cartagena", alt: "Skyline Bocagrande, Cartagena" },
  { src: bucaramanga.src, city: "Bucaramanga", alt: "Panorámica de Bucaramanga" },
  { src: bogotaSunset.src, city: "Bogotá", alt: "Bogotá al atardecer" },
  { src: cartagena.src, city: "Cartagena", alt: "Centro histórico de Cartagena" },
  { src: santaMarta.src, city: "Santa Marta", alt: "Vista de Santa Marta" },
];
