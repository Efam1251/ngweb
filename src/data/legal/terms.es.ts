import { SITE } from "@/data/site";
import { LEGAL_VERSION } from "./constants";
import type { LegalDocument } from "./types";

export const termsEs: LegalDocument = {
  kind: "terms",
  version: LEGAL_VERSION,
  lastUpdated: "21 de septiembre de 2026",
  intro: `Estos Términos de servicio rigen el uso de ${SITE.url} y los servicios de consultoría relacionados de ${SITE.name}. Al usar este sitio o enviar un formulario, usted acepta estos términos. Nuestra Política de privacidad forma parte de estos términos.`,
  sections: [
    {
      id: "who-we-are",
      title: "Quiénes somos",
      blocks: [
        {
          type: "p",
          text: `${SITE.name} brinda consultoría de inmigración y apoyo en la preparación de documentos. No somos un bufete de abogados. No comparecemos en tribunales de inmigración. Publicar este sitio o responder una primera consulta no significa que nos convirtamos en su abogado.`,
        },
        {
          type: "p",
          text: `Puede escribirnos a ${SITE.email} o llamar al ${SITE.phone}. Nuestra oficina está en ${SITE.addressLines.join(", ")}.`,
        },
      ],
    },
    {
      id: "using-the-website",
      title: "Uso de este sitio",
      blocks: [
        {
          type: "p",
          text: "Puede leer nuestras páginas, pedir una consulta o (si ya es cliente) pedir una actualización de caso. Use el sitio solo para fines lícitos. No envíe información falsa, no busque fallas de seguridad ni envíe software dañino.",
        },
        {
          type: "p",
          text: "Este sitio no incluye un portal público de clientes. No puede abrir una cuenta de autoservicio aquí. Los expedientes se guardan en nuestro sistema interno de oficina.",
        },
      ],
    },
    {
      id: "forms-and-consent",
      title: "Formularios y consentimiento activo",
      blocks: [
        {
          type: "p",
          text: "Antes de enviar un formulario de consulta o de actualización de caso, debe marcar la casilla de que ha leído estos Términos de servicio y nuestra Política de privacidad. Esa marca es su consentimiento activo a la versión indicada en el formulario. Registramos la versión y la hora.",
        },
        {
          type: "p",
          text: "Enviar un formulario no garantiza que tomemos su caso. Responderemos con los datos de contacto que usted proporcione.",
        },
      ],
    },
    {
      id: "accuracy",
      title: "Su responsabilidad de dar información exacta",
      blocks: [
        {
          type: "p",
          text: "Los trámites migratorios dependen de hechos verdaderos y completos. Usted acepta darnos información exacta según su leal saber. Si algo cambia, avísenos de inmediato.",
        },
        {
          type: "p",
          text: "Usted es responsable de las decisiones que tome, incluso si presenta y qué pruebas incluye. Las agencias de gobierno toman sus propias decisiones. No podemos prometer una aprobación.",
        },
      ],
    },
    {
      id: "case-status",
      title: "Consultas de estado de USCIS",
      blocks: [
        {
          type: "p",
          text: "Si nos da un número de recibo de USCIS, podemos consultar el estado público de ese caso en el sistema oficial de USCIS. Lo hacemos para orientarle. USCIS opera ese sistema bajo sus propias reglas.",
        },
        {
          type: "p",
          text: "Puede pedirnos que no hagamos una consulta de estado opcional. Aún podemos necesitar el número de recibo para identificar su expediente.",
        },
      ],
    },
    {
      id: "privacy",
      title: "Privacidad",
      blocks: [
        {
          type: "p",
          text: "Nuestra Política de privacidad describe los datos que recopilamos, cómo los usamos, con quién los compartimos y cómo puede eliminarlos o cerrar su expediente. También explica que no vendemos información personal.",
        },
      ],
    },
    {
      id: "delete-and-close",
      title: "Eliminación de datos y cierre de la relación",
      blocks: [
        {
          type: "p",
          text: `No hay una cuenta del sitio que cerrar. Para eliminar información personal o terminar una relación de cliente, escriba a ${SITE.email} con el asunto “Eliminar mis datos” o “Cerrar mi expediente”. Completaremos una solicitud de eliminación verificable en 30 días, salvo los registros que la ley nos obliga a conservar.`,
        },
      ],
    },
    {
      id: "ownership-change",
      title: "Si la firma se vende o se cierra",
      blocks: [
        {
          type: "p",
          text: "Si se transfiere la titularidad de la firma o de los expedientes, se lo notificaremos. El comprador debe seguir nuestra Política de privacidad, o una política al menos igual de protectora. Si eso no es posible, puede pedirnos que eliminemos, transmitamos o le entreguemos una copia de su información de salud, incluidos los registros de examen médico.",
        },
      ],
    },
    {
      id: "intellectual-property",
      title: "Nuestro contenido",
      blocks: [
        {
          type: "p",
          text: "El texto, la marca y el diseño de este sitio nos pertenecen a nosotros o a nuestros licenciantes. No puede copiar el sitio para un servicio competidor. Puede compartir un enlace. Las tablas del Visa Bulletin que resumimos provienen de fuentes públicas del gobierno de EE. UU. Confirme siempre las fechas en el sitio oficial del gobierno antes de presentar.",
        },
      ],
    },
    {
      id: "disclaimers",
      title: "Avisos",
      blocks: [
        {
          type: "p",
          text: "El sitio se ofrece tal como está. Las reglas de inmigración cambian. Las páginas pueden tener errores o quedar desactualizadas. No garantizamos que el sitio esté siempre disponible o libre de defectos.",
        },
      ],
    },
    {
      id: "liability",
      title: "Límite de responsabilidad",
      blocks: [
        {
          type: "p",
          text: "En la medida máxima que permite la ley, no somos responsables de daños indirectos, incidentales o consecuentes que surjan del uso de este sitio. Para trabajo de consultoría pagado, cualquier límite de responsabilidad se indicará en los términos de contratación que firme con nosotros. Esos términos prevalecen si entran en conflicto con esta página.",
        },
      ],
    },
    {
      id: "changes",
      title: "Cambios a estos términos",
      blocks: [
        {
          type: "p",
          text: "Cuando cambiemos estos términos, publicaremos la nueva versión con una fecha y un número de versión nuevos. Incluiremos un resumen breve, en lenguaje sencillo, de lo que cambió. Le enviaremos un correo si el cambio es importante.",
        },
        {
          type: "p",
          text: "Pediremos consentimiento activo antes de que envíe un nuevo formulario del sitio bajo la nueva versión. Si más adelante agregamos un acceso para clientes, le pediremos que acepte los nuevos términos antes de usarlo.",
        },
      ],
    },
    {
      id: "governing-law",
      title: "Qué normas aplican",
      blocks: [
        {
          type: "p",
          text: "Estos términos siguen las normas del Estado de New Hampshire. Si un tribunal declara inaplicable una parte, el resto sigue vigente.",
        },
      ],
    },
    {
      id: "contact",
      title: "Contacto",
      blocks: [
        {
          type: "p",
          text: `${SITE.name}. ${SITE.addressLines.join(", ")}. ${SITE.email}. ${SITE.phone}.`,
        },
      ],
    },
    {
      id: "version-history",
      title: "Resumen en lenguaje sencillo de los cambios",
      blocks: [
        {
          type: "p",
          text: `Versión ${LEGAL_VERSION} (21 de septiembre de 2026): Primeros términos publicados. Cubren el uso del sitio, el consentimiento en formularios, las consultas de estado de USCIS, la eliminación y el cierre de expediente, y el aviso si se vende la firma.`,
        },
      ],
    },
  ],
};
