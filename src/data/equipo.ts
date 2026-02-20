import type { MiembroEquipo } from "@/types";

import angelFierro from "@/assets/Nuestra gente/0.1. Angel Fierro/Angel-Fierro-Sin-fondo.webp";
import alejandroGrimaldo from "@/assets/Nuestra gente/0.2. Alejandro Grimaldo/Alejandro-Grimaldo-sin-fondo.webp";
import jhonPena from "@/assets/Nuestra gente/0.3. Jhon A. Peña/Jhon-A.-Peña-sin-fondo.webp";

export const miembrosEquipo: MiembroEquipo[] = [
  {
    id: 1,
    slug: "angel-fierro",
    name: "Angel Fierro",
    cargo: "Socio Fundador",
    area: "Director de Derecho Privado",
    telefono: "+57 323 6140187",
    email: "afierro.abog@gmail.com",
    foto: angelFierro.src,
    experienciaAcademica:
      "Abogado egresado de la Universidad Nacional de Colombia, conciliador extrajudicial en Derecho y operador en insolvencia, miembro del Colegio de Abogados Comercialistas.",
    experienciaProfesional:
      "Con tres años de experiencia profesional en las áreas de derecho civil, comercial y de consumo, con práctica en litigio y asesoría jurídica integral. He acompañado a personas naturales y empresas en la prevención y resolución de conflictos, la gestión de controversias contractuales y patrimoniales, y la toma de decisiones jurídicas estratégicas, combinando rigor técnico, criterio jurídico y un enfoque orientado a resultados.",
  },
  {
    id: 2,
    slug: "alejandro-grimaldo",
    name: "Alejandro Grimaldo",
    cargo: "Socio Fundador",
    area: "Director de Operaciones",
    telefono: "+57 323 6140742",
    email: "rozogrimaldo.abog@gmail.com",
    foto: alejandroGrimaldo.src,
    experienciaAcademica:
      "Abogado egresado de la Universidad Nacional de Colombia.",
    experienciaProfesional:
      "Con cinco años de experiencia asesorando empresas de forma integral en sus procesos comerciales y laborales. Cuento con experiencia en la rama judicial y he prestado soluciones jurídicas a clientes con un enfoque sólido en derecho civil, comercial y corporativo, orientado a la prevención de riesgos y a la toma de decisiones estratégicas.",
  },
  {
    id: 3,
    slug: "jhon-pena",
    name: "Jhon A. Peña",
    cargo: "Socio Fundador",
    area: "Director de Derecho Público",
    telefono: "+57 323 6140873",
    email: "jhonap.abog@gmail.com",
    foto: jhonPena.src,
    experienciaAcademica: "Abogado de la Universidad Nacional de Colombia.",
    experienciaProfesional:
      "Con experiencia en litigio penal, laboral y administrativo. Mi ejercicio profesional se ha centrado en la representación estratégica de casos orientados a la protección de derechos y al acceso a la justicia, mediante la formulación de estrategias jurídicas sólidas y garantistas, diseñadas a partir de las particularidades de cada caso.",
  },
];

export const miembrosEquipoMap = miembrosEquipo.reduce(
  (acc, miembro) => {
    acc[miembro.slug] = miembro;
    return acc;
  },
  {} as Record<string, MiembroEquipo>,
);
