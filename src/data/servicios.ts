import type { AreaPractica } from "@/types";
import derechoDeAutorImg from "@/assets/servicios/derecho-de-autor.webp";
import administrativoConstitucionalImg from "@/assets/servicios/administrativo-y-constitucional.webp";
import civilImg from "@/assets/servicios/civil.webp";
import derechoComercialImg from "@/assets/servicios/derecho-comercial.webp";
import familiaImg from "@/assets/servicios/familia.webp";
import consumidorImg from "@/assets/servicios/consumidor.webp";
import consumidorFinancieroImg from "@/assets/servicios/consumidor-financiero.webp";
import deportivoImg from "@/assets/servicios/deportivo.webp";
import responsabilidadFiscalImg from "@/assets/servicios/responsabilidad-fiscal.webp";
import laboralImg from "@/assets/servicios/laboral.webp";
import penalImg from "@/assets/servicios/penal.webp";
import insolvenciaImg from "@/assets/servicios/insolvencia.webp";
import seguridadSocialImg from "@/assets/servicios/seguridad-Social.webp";
import automovilisticoImg from "@/assets/servicios/automovilistico.webp";

export const areasPractica: AreaPractica[] = [
  {
    slug: "derechos-de-autor",
    title: "Derechos de Autor",
    description:
      "Protegemos la creación intelectual y los activos intangibles, asesorando en la defensa, gestión y explotación de los derechos de autor y derechos conexos.",
    image: derechoDeAutorImg.src,
    portafolio: [
      "Asesoría en derechos de autor",
      "Registro de obras",
      "Contratos de cesión y licenciamiento",
      "Litigio en materia de propiedad intelectual",
      "Protección de contenidos digitales",
      "Defensa frente a infracciones",
      "Acompañamiento ante autoridades competentes",
    ],
  },
  {
    slug: "derecho-administrativo-constitucional",
    title: "Derecho Administrativo y Constitucional",
    description:
      "Brindamos acompañamiento jurídico frente a la actuación del Estado y la protección de los derechos fundamentales, asesorando a personas naturales y jurídicas en sus relaciones con la administración pública y en la defensa de sus garantías constitucionales.",
    image: administrativoConstitucionalImg.src,
    portafolio: [
      "Asesoría jurídica en actuaciones administrativas",
      "Litigio administrativo",
      "Acciones constitucionales (tutela, derecho de petición, cumplimiento, populares, de grupo, etc.)",
      "Recursos en sede administrativa",
      "Contratación estatal",
      "Responsabilidad del Estado",
      "Conceptos jurídicos y acompañamiento preventivo",
    ],
  },
  {
    slug: "derecho-civil",
    title: "Derecho Civil",
    description:
      "Asistimos en la regulación y solución de conflictos derivados de las relaciones civiles, patrimoniales y contractuales, con un enfoque técnico, estratégico y orientado a soluciones eficaces.",
    image: civilImg.src,
    portafolio: [
      "Asesoría jurídica civil",
      "Litigio civil",
      "Elaboración y revisión de contratos",
      "Responsabilidad civil contractual y extracontractual",
      "Procesos declarativos y ejecutivos",
      "Obligaciones, bienes y derechos reales",
      "Cobro jurídico y negociación de obligaciones",
    ],
  },
  {
    slug: "derecho-comercial",
    title: "Derecho Comercial",
    description:
      "Acompañamos a empresas y emprendedores en el desarrollo de su actividad económica, ofreciendo soluciones jurídicas que faciliten la toma de decisiones y la gestión adecuada de los negocios.",
    image: derechoComercialImg.src,
    portafolio: [
      "Asesoría jurídica empresarial",
      "Litigio comercial",
      "Constitución y estructuración de sociedades",
      "Contratos mercantiles",
      "Gobierno corporativo",
      "Conflictos entre socios",
      "Títulos valores y procesos ejecutivos",
    ],
  },
  {
    slug: "derecho-de-familia",
    title: "Derecho de Familia",
    description:
      "Brindamos asesoría y representación en asuntos familiares con un enfoque humano, responsable y respetuoso, priorizando soluciones jurídicas que protejan los derechos y el bienestar de las personas involucradas.",
    image: familiaImg.src,
    portafolio: [
      "Asesoría jurídica en derecho de familia",
      "Litigio de familia",
      "Divorcios y cesación de efectos civiles",
      "Custodia, alimentos y régimen de visitas",
      "Procesos de filiación",
      "Sucesiones",
      "Acuerdos extrajudiciales y conciliación",
    ],
  },
  {
    slug: "proteccion-al-consumidor",
    title: "Protección al Consumidor",
    description:
      "Defendemos los derechos de quienes adquieren bienes y servicios en el marco de relaciones de consumo. Acompañamos a nuestros clientes frente a incumplimientos contractuales, productos defectuosos, publicidad engañosa, cláusulas abusivas y cualquier práctica que afecte el equilibrio entre consumidor y proveedor.",
    image: consumidorImg.src,
    portafolio: [
      "Asesoría jurídica en relaciones de consumo",
      "Representación en reclamaciones directas ante proveedores",
      "Litigio en procesos de protección al consumidor",
      "Acciones ante la Superintendencia de Industria y Comercio",
      "Revisión de condiciones contractuales y garantías",
      "Defensa frente a publicidad engañosa",
      "Conciliaciones y negociación de controversias",
    ],
  },
  {
    slug: "proteccion-al-consumidor-financiero",
    title: "Protección al Consumidor Financiero",
    description:
      "Brindamos acompañamiento especializado a clientes de bancos, compañías de seguros, fiduciarias y demás entidades del sector financiero, garantizando el respeto de sus derechos frente a prácticas abusivas, cobros indebidos, reportes injustificados y desequilibrios contractuales en productos financieros.",
    image: consumidorFinancieroImg.src,
    portafolio: [
      "Asesoría jurídica en materia financiera y bancaria",
      "Reclamaciones frente a entidades financieras",
      "Litigio en defensa del consumidor financiero",
      "Impugnación de cláusulas abusivas en contratos financieros",
      "Defensa ante reportes en centrales de riesgo",
      "Representación ante la Superintendencia Financiera",
      "Revisión de contratos de crédito, leasing y seguros",
      "Acompañamiento en procesos administrativos y judiciales",
    ],
  },
  {
    slug: "derecho-deportivo",
    title: "Derecho Deportivo",
    description:
      "Ofrecemos asesoría jurídica especializada en el ámbito deportivo, protegiendo los derechos e intereses de deportistas, clubes, entrenadores y organizaciones vinculadas al sector.",
    image: deportivoImg.src,
    portafolio: [
      "Asesoría jurídica deportiva",
      "Litigio deportivo",
      "Contratos de deportistas y entrenadores",
      "Régimen disciplinario deportivo",
      "Representación ante organismos deportivos",
      "Resolución de conflictos contractuales",
      "Acompañamiento normativo y regulatorio",
    ],
  },
  {
    slug: "derecho-disciplinario-responsabilidad-fiscal",
    title: "Derecho Disciplinario y Responsabilidad Fiscal",
    description:
      "Asumimos la defensa y asesoría en procesos disciplinarios y de responsabilidad fiscal, garantizando el respeto por el debido proceso y los derechos de los investigados.",
    image: responsabilidadFiscalImg.src,
    portafolio: [
      "Asesoría jurídica especializada",
      "Defensa en procesos disciplinarios",
      "Defensa en procesos de responsabilidad fiscal",
      "Representación ante órganos de control",
      "Recursos y actuaciones procesales",
      "Acompañamiento preventivo y cumplimiento normativo",
    ],
  },
  {
    slug: "derecho-laboral",
    title: "Derecho Laboral",
    description:
      "Asesoramos a empleadores y trabajadores en la gestión adecuada de las relaciones laborales, promoviendo soluciones jurídicas claras, preventivas y eficaces.",
    image: laboralImg.src,
    portafolio: [
      "Asesoría jurídica laboral",
      "Litigio laboral",
      "Contratos de trabajo",
      "Terminación de relaciones laborales",
      "Procesos ordinarios y ejecutivos laborales",
      "Seguridad social",
      "Acompañamiento en inspecciones laborales",
    ],
  },
  {
    slug: "derecho-penal",
    title: "Derecho Penal",
    description:
      "Brindamos defensa y asesoría penal con rigor técnico y responsabilidad, protegiendo los derechos fundamentales de nuestros clientes en todas las etapas del proceso penal.",
    image: penalImg.src,
    portafolio: [
      "Asesoría penal",
      "Defensa penal",
      "Representación de víctimas",
      "Audiencias preliminares y de juicio",
      "Medidas de aseguramiento",
      "Recursos y acciones penales",
      "Acompañamiento en investigaciones",
    ],
  },
  {
    slug: "insolvencia",
    title: "Insolvencia",
    description:
      "Asesoramos a personas naturales y empresas en situaciones de crisis económica, buscando soluciones jurídicas que permitan la reorganización o liquidación ordenada de las obligaciones.",
    image: insolvenciaImg.src,
    portafolio: [
      "Asesoría en insolvencia",
      "Procesos de insolvencia de persona natural",
      "Reorganización empresarial",
      "Negociación de deudas",
      "Representación ante autoridades competentes",
      "Acompañamiento integral del proceso",
    ],
  },
  {
    slug: "seguridad-social",
    title: "Seguridad Social",
    description:
      "Brindamos asesoría y representación jurídica en asuntos relacionados con el sistema de seguridad social, orientando a personas naturales y empleadores en la protección de sus derechos y en el cumplimiento adecuado de las obligaciones legales en materia de salud, pensiones y riesgos laborales.",
    image: seguridadSocialImg.src,
    portafolio: [
      "Asesoría jurídica en seguridad social",
      "Litigio en materia de seguridad social",
      "Reconocimiento y reliquidación de pensiones",
      "Afiliaciones, traslados y correcciones ante entidades del sistema",
      "Defensa frente a entidades administradoras",
      "Reclamaciones administrativas y judiciales",
      "Acompañamiento en controversias por incapacidades, invalidez y prestaciones económicas",
    ],
  },
  {
    slug: "seguros-automovilisticos-transito",
    title: "Seguros Automovilísticos y Tránsito",
    description:
      "Asesoramos y representamos a personas naturales y empresas en asuntos relacionados con seguros automovilísticos y normas de tránsito, brindando acompañamiento jurídico frente a siniestros, reclamaciones, responsabilidades y actuaciones administrativas, con un enfoque técnico y orientado a la defensa efectiva de los derechos de nuestros clientes.",
    image: automovilisticoImg.src,
    portafolio: [
      "Asesoría jurídica en seguros automovilísticos y tránsito",
      "Reclamaciones ante aseguradoras",
      "Litigio derivado de accidentes de tránsito",
      "Responsabilidad civil por accidentes",
      "Defensa en procesos contravencionales de tránsito",
      "Impugnación de comparendos y sanciones",
      "Acompañamiento en trámites ante autoridades de tránsito",
      "Conciliaciones y negociación de conflictos",
    ],
  },
];

export const areasDataMap = areasPractica.reduce(
  (acc, area) => {
    acc[area.slug] = area;
    return acc;
  },
  {} as Record<string, AreaPractica>,
);
