import type { AreaPractica } from "@/types";
import empresaComercioImg from "@/assets/servicios/derecho_de_la_empresa_y_el_comercio.png";
import consumidorImg from "@/assets/servicios/del_consumidor.png";
import consumidorFinancieroImg from "@/assets/servicios/del_consumidor_financiero.png";
import civilFamiliaImg from "@/assets/servicios/civil_y_de_familia.png";
import inmobiliarioImg from "@/assets/servicios/derecho_inmobiliario.png";
import segurosTransitoImg from "@/assets/servicios/seguros_automovilisticos_y_transito.png";

export const areasPractica: AreaPractica[] = [
  {
    slug: "derecho-de-la-empresa-y-el-comercio",
    title: "Derecho de la Empresa y el Comercio",
    description:
      "Brindamos asesoría y acompañamiento jurídico a empresas, sociedades y empresarios en la estructuración de sus negocios, la organización de sus relaciones societarias y el desarrollo de sus actividades económicas. Intervenimos en la prevención y resolución de conflictos, la gestión de riesgos jurídicos y la protección de los intereses de la empresa, con soluciones orientadas a fortalecer su estructura legal y respaldar la toma de decisiones.",
    image: empresaComercioImg.src,
    portafolio: [
      "Asesoría jurídica empresarial y societaria",
      "Constitución, estructuración y transformación de sociedades",
      "Reformas estatutarias y organización societaria",
      "Gobierno corporativo y deberes de administradores",
      "Contratos empresariales y mercantiles",
      "Conflictos societarios y controversias entre socios",
      "Responsabilidad de administradores y representantes legales",
      "Litigios comerciales y societarios",
      "Títulos valores y procesos ejecutivos",
      "Disolución y liquidación de sociedades",
    ],
  },
  {
    slug: "proteccion-del-consumidor",
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
    slug: "derecho-inmobiliario",
    title: "Derecho Inmobiliario",
    description:
      "Asesoramos y representamos a personas y empresas en asuntos relacionados con la adquisición, financiación, desarrollo y transferencia de bienes inmuebles. Acompañamos la revisión jurídica de inmuebles y proyectos inmobiliarios, así como la gestión de controversias con constructoras, promotoras, fiduciarias y otros intervinientes en negocios inmobiliarios, procurando la protección de los derechos e intereses patrimoniales de nuestros clientes.",
    image: inmobiliarioImg.src,
    portafolio: [
      "Asesoría jurídica",
      "Protección y representación del consumidor inmobiliario",
      "Revisión jurídica y estudio de títulos de bienes inmuebles",
      "Análisis de promesas de compraventa, contratos y documentos de vinculación a proyectos inmobiliarios",
      "Reclamaciones frente a constructoras, promotoras y fiduciarias",
      "Controversias relacionadas con encargos fiduciarios y patrimonios autónomos inmobiliarios",
      "Desistimiento de negocios inmobiliarios y solicitudes de devolución de recursos",
      "Incumplimientos contractuales, retrasos en la entrega y controversias sobre proyectos de vivienda",
      "Negociación, conciliación y reclamaciones extrajudiciales",
      "Litigios y representación judicial en conflictos inmobiliarios",
      "Compraventa, transferencia y saneamiento jurídico de bienes inmuebles",
      "Revisión de riesgos jurídicos en operaciones inmobiliarias",
    ],
  },
  {
    slug: "derecho-civil-y-de-familia",
    title: "Derecho civil y de Familia",
    description:
      "Brindamos asesoría y representación jurídica en asuntos civiles, patrimoniales, contractuales y familiares, abordando cada caso con rigor técnico, criterio profesional y responsabilidad. Acompañamos la gestión de relaciones jurídicas, la protección de derechos e intereses patrimoniales y la resolución de controversias, procurando soluciones acordes con las particularidades de cada asunto.",
    image: civilFamiliaImg.src,
    portafolio: [
      "Asesoría jurídica",
      "Litigio",
      "Elaboración, revisión y negociación de contratos",
      "Responsabilidad civil contractual y extracontractual",
      "Obligaciones, cobro jurídico y procesos ejecutivos",
      "Bienes, propiedad y derechos reales",
      "Procesos declarativos y controversias patrimoniales",
      "Divorcios y cesación de efectos civiles del matrimonio religioso",
      "Custodia, cuidado personal, alimentos y régimen de visitas",
      "Filiación, reconocimiento e impugnación",
      "Sucesiones y conflictos hereditarios",
      "Acuerdos familiares, negociación y conciliación",
    ],
  },
  {
    slug: "seguros-automovilisticos-transito",
    title: "Seguros Automovilísticos y Tránsito",
    description:
      "Asesoramos y representamos a personas naturales y empresas en asuntos relacionados con seguros automovilísticos, pólizas SOAT, accidentes de tránsito y responsabilidad civil derivada de estos eventos. Brindamos acompañamiento jurídico en reclamaciones indemnizatorias, controversias con aseguradoras y actuaciones administrativas, orientado a la protección de los derechos e intereses de nuestros clientes. Contamos con especial atención en la reclamación de indemnizaciones por incapacidad permanente, muerte y gastos funerarios derivados de accidentes de tránsito, acompañando a las víctimas y sus familiares en la gestión de las prestaciones e indemnizaciones que legalmente correspondan.",
    image: segurosTransitoImg.src,
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
