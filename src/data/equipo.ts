import type { MiembroEquipo } from "@/types";

import angelFierro from "@/assets/Nuestra gente/0.1. Angel Fierro/Angel-Fierro-Sin-fondo.webp";

export const miembrosEquipo: MiembroEquipo[] = [
  {
    id: 1,
    slug: "angel-fierro",
    name: "Juan Ángel Fierro Suarez",
    cargo: "Socio Fundador",
    area: "Director de Derecho Privado",
    telefono: "+57 323 6140187",
    email: "afierro.abog@gmail.com",
    foto: angelFierro.src,
    experienciaAcademica:
      "Abogado de la Universidad Nacional de Colombia y estudiante de la Especialización en Derecho de los Negocios de la Universidad Externado de Colombia. Es miembro del Colegio de Abogados Comercialistas (CAC) y del Instituto Colombiano de Derecho del Consumo (ICODECO), y miembro fundador de la Corporación Memorias para la Paz del Sur (COMPAS).",
    experienciaProfesional:
      "Como director de Fierro Fermat, cuenta con experiencia en derecho empresarial y del consumo —incluyendo relaciones de consumo financiero e inmobiliario— , con práctica en litigio y asesoría jurídica integral. Ha representado a personas naturales y empresas en la prevención y resolución de conflictos, en controversias contractuales y patrimoniales, y en la toma de decisiones jurídicas estratégicas, combinando rigor técnico, criterio jurídico y vocación de servicio.",
  },
];

export const miembrosEquipoMap = miembrosEquipo.reduce(
  (acc, miembro) => {
    acc[miembro.slug] = miembro;
    return acc;
  },
  {} as Record<string, MiembroEquipo>,
);
