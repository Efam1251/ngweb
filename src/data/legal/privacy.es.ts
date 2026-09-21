import { SITE } from "@/data/site";
import { LEGAL_VERSION } from "./constants";
import type { LegalDocument } from "./types";

export const privacyEs: LegalDocument = {
  kind: "privacy",
  version: LEGAL_VERSION,
  lastUpdated: "21 de septiembre de 2026",
  intro: `Esta Política de privacidad explica cómo ${SITE.name} (“nosotros”) recopila, usa, comparte y elimina información personal. Cubre este sitio web público y el sistema interno de gestión de casos que usamos para atender a los clientes. Este sitio no ofrece un acceso público para clientes.`,
  sections: [
    {
      id: "who-we-are",
      title: "Quiénes somos",
      blocks: [
        {
          type: "p",
          text: `${SITE.name} es una firma de consultoría de inmigración en Nashua, New Hampshire. No somos un bufete de abogados. Ayudamos a las personas a preparar casos migratorios y a entender sus opciones.`,
        },
        {
          type: "p",
          text: `Nuestro sitio público es ${SITE.url}. Puede escribirnos a ${SITE.email} o llamar al ${SITE.phone}.`,
        },
      ],
    },
    {
      id: "what-this-covers",
      title: "Qué cubre esta política",
      blocks: [
        {
          type: "p",
          text: "Esta política cubre tres lugares donde manejamos información personal:",
        },
        {
          type: "ul",
          items: [
            "Este sitio web público, incluido el formulario de consulta y el formulario de actualización de caso.",
            "Nuestro sistema interno de oficina, donde guardamos los expedientes de los clientes.",
            "Consultas oficiales de estado que hacemos ante el Servicio de Ciudadanía e Inmigración de EE. UU. (USCIS) con un número de recibo.",
          ],
        },
        {
          type: "p",
          text: "No hay un portal de clientes en este sitio. No puede crear una cuenta pública aquí. Si más adelante agregamos un acceso para clientes, actualizaremos esta política y pediremos su consentimiento activo antes de que lo use.",
        },
      ],
    },
    {
      id: "data-we-collect",
      title: "Los tipos de datos que recopilamos",
      blocks: [
        {
          type: "p",
          text: "Recopilamos solo lo necesario para una consulta o un caso. Los datos exactos dependen de su asunto. Pueden incluir:",
        },
        {
          type: "ul",
          items: [
            "Datos de identidad: nombre, fecha de nacimiento, lugar de nacimiento, nacionalidad, género, fotos y firmas.",
            "Números de gobierno: número de Seguro Social, número A, número de pasaporte, número de visa y números de recibo de USCIS.",
            "Datos de contacto: correo, teléfono, dirección postal e idioma preferido.",
            "Datos de familia y hogar: cónyuge, hijos, padres y otros parientes nombrados en una petición. Esto puede incluir fechas de nacimiento y estatus migratorio.",
            "Datos financieros: ingresos, declaraciones de impuestos, registros bancarios y formularios de patrocinio como el I-864.",
            "Historial migratorio: presentaciones previas, historial de viajes y avisos de USCIS, el Centro Nacional de Visas o un consulado de EE. UU.",
            "Información médica cuando un trámite lo exige: fechas de examen médico y copias de formularios como el I-693.",
            "Documentos del caso: escaneos de actas civiles, fotos, declaraciones juradas y otras pruebas que nos entregue.",
            "Datos de formularios del sitio: nombre, correo, teléfono, interés de servicio, número de caso o recibo y el mensaje que escribe aquí.",
            "Datos técnicos de este sitio: el idioma que elige (guardado en su dispositivo) y registros básicos del servidor para mantener el sitio. No recopilamos ubicación GPS precisa de su teléfono. No leemos su lista de contactos.",
          ],
        },
        {
          type: "p",
          text: "No recopilamos resultados de pruebas genéticas. El historial familiar que guardamos es la información de parentesco que usted nos da para un trámite migratorio.",
        },
      ],
    },
    {
      id: "how-we-use-data",
      title: "Cómo usamos sus datos",
      blocks: [
        {
          type: "p",
          text: "Usamos la información personal para:",
        },
        {
          type: "ul",
          items: [
            "Responder solicitudes de consulta y de actualización de caso.",
            "Evaluar elegibilidad y preparar presentaciones.",
            "Mantener un expediente organizado y un calendario de próximos pasos.",
            "Enviarle correos de estado y otros avisos del caso que usted pida.",
            "Consultar el estado público de un caso de USCIS con un número de recibo.",
            "Facturar nuestros servicios y guardar registros comerciales exigidos.",
            "Proteger nuestros sistemas, prevenir correo no deseado y atender incidentes de seguridad.",
            "Cumplir la ley y las obligaciones de conservación de registros.",
          ],
        },
        {
          type: "p",
          text: "No usamos sus datos para redes de publicidad. No vendemos ni alquilamos listas de correo.",
        },
        {
          type: "p",
          text: "No compartimos datos desidentificados, anonimizados o seudonimizados con otras empresas para su propio uso. Si alguna vez quisiéramos hacerlo, pediríamos primero su consentimiento activo.",
        },
      ],
    },
    {
      id: "who-we-share-with",
      title: "Con quién compartimos datos, y por qué",
      blocks: [
        {
          type: "p",
          text: "Compartimos información personal solo cuando hace falta para atenderle o cuando la ley lo exige. Los destinatarios incluyen:",
        },
        {
          type: "ul",
          items: [
            "USCIS y otras agencias del gobierno de EE. UU., cuando presentamos un caso o consultamos el estado. El sistema de estado de casos de USCIS recibe un número de recibo para leer el estado público de ese caso. USCIS usa esos datos bajo la ley federal, no bajo esta política.",
            "El Centro Nacional de Visas, consulados de EE. UU. y oficinas similares cuando su caso llega a esa etapa.",
            "Web3Forms, que entrega los mensajes de este sitio a nuestra bandeja de correo.",
            "Cloudflare, que aloja este sitio web público.",
            "Nuestros proveedores de correo, alojamiento, copias de seguridad y almacenamiento de documentos que ayudan a operar el sistema de oficina.",
            "Traductores, proveedores de examen médico u otros especialistas que usted apruebe cuando un trámite lo necesite.",
            "Un abogado o representante acreditado si usted nos pide involucrarlo.",
          ],
        },
        {
          type: "p",
          text: "No compartimos su expediente con anunciantes ni con corredores de datos.",
        },
      ],
    },
    {
      id: "we-do-not-sell",
      title: "No vendemos sus datos",
      blocks: [
        {
          type: "p",
          text: "No vendemos información personal a cambio de dinero ni de otra contraprestación de valor. No la vendemos con fines de lucro ni en ninguna otra transacción monetaria. El derecho de California de “no vender ni compartir” sigue aplicándose. Puede enviar esa solicitud al correo que aparece abajo. Como no vendemos ni compartimos datos para publicidad, confirmaremos ese hecho en nuestra respuesta.",
        },
      ],
    },
    {
      id: "your-choices",
      title: "Sus opciones de compartir datos, y los riesgos y límites",
      blocks: [
        {
          type: "p",
          text: "Usted elige qué enviar en este sitio. El formulario de consulta es opcional. Si no desea usarlo, escríbanos o llámenos.",
        },
        {
          type: "p",
          text: "Si se convierte en cliente, algunos envíos son necesarios para hacer el trabajo. No podemos presentar ante USCIS, consultar un número de recibo ni preparar una petición familiar sin los datos que esos pasos requieren.",
        },
        {
          type: "ul",
          items: [
            "Beneficio: compartir nos permite preparar un paquete completo y darle una actualización de estado.",
            "Riesgo: las agencias de gobierno y los proveedores que reciben datos pueden sufrir una filtración, como cualquier organización. Los expedientes migratorios también contienen hechos sensibles sobre usted y su familia.",
            "Límite: no podemos controlar cómo una agencia de gobierno usa los datos una vez presentada una solicitud lícita. Puede pedirnos que no hagamos una consulta opcional de estado de USCIS. Por lo general no se puede retirar un trámite que ya está ante el gobierno.",
          ],
        },
        {
          type: "p",
          text: "Puede rechazar elementos opcionales, como un formulario del sitio o una consulta de estado que no sea necesaria para preparar un trámite. Le diremos si una negativa impide continuar el trabajo.",
        },
      ],
    },
    {
      id: "family-impact",
      title: "Cómo el compartir datos puede afectar a familiares",
      blocks: [
        {
          type: "p",
          text: "Los casos de inmigración suelen incluir datos de otras personas. Una petición familiar, un formulario de patrocinio o un paquete financiero del hogar puede incluir a un cónyuge, un hijo, un padre o un miembro del hogar.",
        },
        {
          type: "p",
          text: "Si compartimos o conservamos ese expediente, la información de esos parientes forma parte de él. Borrar los datos de una persona puede estar limitado si el mismo archivo sigue siendo necesario para el caso de otra persona. Explicaremos ese límite si nos pide una eliminación.",
        },
        {
          type: "p",
          text: "No usamos datos de familia o del hogar para mercadear a parientes. No recopilamos datos de pruebas genéticas.",
        },
      ],
    },
    {
      id: "third-parties",
      title: "Terceros no pueden reutilizar sus datos sin su consentimiento",
      blocks: [
        {
          type: "p",
          text: "Los proveedores que procesan datos para nosotros solo pueden usarlos para prestar su servicio a nuestra firma. No pueden usar ni divulgar su información —incluidos datos desidentificados, anonimizados o seudonimizados— para sus propios fines sin su consentimiento activo.",
        },
        {
          type: "p",
          text: "Obligamos a esos proveedores por contrato a proteger los datos y a seguir los límites de esta política.",
        },
        {
          type: "p",
          text: "Las agencias de gobierno son distintas. USCIS y otras oficinas no son nuestros proveedores. No están sujetas a esta Política de privacidad. Siguen sus propias leyes. Compartimos con ellas solo lo que exige un trámite o una consulta de estado, o lo que usted nos pide enviar.",
        },
      ],
    },
    {
      id: "breach",
      title: "Si hay una filtración de datos",
      blocks: [
        {
          type: "p",
          text: "Si ocurre una filtración de su información personal, se lo notificaremos. Usaremos el correo que tengamos registrado. También llamaremos si tenemos un teléfono y el correo no es suficiente.",
        },
        {
          type: "p",
          text: "Lo haremos sin demora injustificada, y antes si la ley exige un plazo más corto. El aviso dirá lo que sabemos sobre lo ocurrido, qué información estuvo involucrada y qué puede hacer. Eso puede incluir vigilar sus cuentas, pedir una copia de un aviso gubernamental o llamarnos con preguntas.",
        },
      ],
    },
    {
      id: "retention",
      title: "Cuánto tiempo conservamos los datos, incluidos los inactivos",
      blocks: [
        {
          type: "p",
          text: "Mensajes de formularios del sitio: si no se convierte en cliente, conservamos el mensaje hasta 24 meses. Después lo tratamos como inactivo y podemos eliminarlo. Puede pedirnos que lo borremos antes.",
        },
        {
          type: "p",
          text: "Expedientes de clientes: los conservamos mientras trabajamos con usted. Cuando el asunto termina, guardamos registros al menos siete años, o más si la ley lo exige. Un período sin uso de este sitio no hace que un caso abierto esté inactivo.",
        },
        {
          type: "p",
          text: "Si un expediente de cliente no ha tenido actividad durante 24 meses y el asunto está cerrado, podemos pasarlo a archivo inactivo hasta que termine el plazo de conservación. Las copias de seguridad y de auditoría pueden permanecer hasta que esos sistemas se reciclen; luego se sobrescriben.",
        },
        {
          type: "p",
          text: "Los documentos que movemos a la papelera interna se eliminan a los 90 días, salvo que una solicitud de borrado o una retención legal indiquen lo contrario.",
        },
      ],
    },
    {
      id: "delete-your-data",
      title: "Cómo pedir la eliminación permanente",
      blocks: [
        {
          type: "p",
          text: `Escriba a ${SITE.email} con el asunto “Eliminar mis datos”. También puede llamar al ${SITE.phone} o escribir a ${SITE.addressLines.join(", ")}. Indique su nombre completo y el correo o teléfono que usó con nosotros.`,
        },
        {
          type: "p",
          text: "Completaremos la eliminación o la anonimización dentro de 30 días de una solicitud verificable, salvo que la ley nos obligue a conservar un registro. Si debemos conservar algo —por ejemplo, una copia de un trámite ya enviado a USCIS— le diremos qué conservamos y por qué.",
        },
        {
          type: "p",
          text: "Borrar un formulario del sitio suele ser sencillo. Borrar un expediente familiar puede estar limitado si el caso de otra persona aún depende de los mismos documentos.",
        },
      ],
    },
    {
      id: "close-account",
      title: "Cómo cerrar su cuenta o terminar la relación",
      blocks: [
        {
          type: "p",
          text: "Este sitio no crea una cuenta pública de usuario. No hay un acceso que cerrar aquí.",
        },
        {
          type: "p",
          text: `Para dejar de recibir mensajes del sitio, escriba a ${SITE.email} y pida que no lo contactemos para seguimiento o marketing. Para terminar una relación de cliente, use el mismo correo con el asunto “Cerrar mi expediente”. Confirmaremos dentro de 30 días. Aún podemos conservar registros que la ley nos exige guardar, como se describe arriba.`,
        },
      ],
    },
    {
      id: "sale-of-business",
      title: "Si vendemos la firma o hay un cambio de dueño",
      blocks: [
        {
          type: "p",
          text: "Si vendemos, fusionamos o cerramos el negocio, o si se transfiere la titularidad de los expedientes, se lo notificaremos. Usaremos el correo que tengamos registrado.",
        },
        {
          type: "p",
          text: "El nuevo dueño debe seguir esta Política de privacidad, o una política al menos igual de protectora. Si eso no es posible, usted puede elegir una de estas opciones para su información de salud, incluidas las fechas de examen médico y los registros del Formulario I-693:",
        },
        {
          type: "ul",
          items: [
            "Pedirnos que la eliminemos de forma segura.",
            "Pedirnos que la transmitamos a usted o a un proveedor que usted nombre.",
            "Pedirnos una copia que pueda descargar o recibir por correo seguro.",
          ],
        },
      ],
    },
    {
      id: "ccpa",
      title: "Derechos de privacidad de California (CCPA / CPRA)",
      blocks: [
        {
          type: "p",
          text: "Si reside en California, tiene derecho a saber qué información personal recopilamos, usamos y compartimos; a eliminarla, con las excepciones legales; a corregirla; a oponerse a la venta o al intercambio para publicidad entre contextos (nosotros no vendemos ni compartimos de esa forma); a limitar el uso de información personal sensible a lo necesario para los servicios que pidió; y a no recibir un trato discriminatorio por ejercer estos derechos.",
        },
        {
          type: "p",
          text: `Para ejercer estos derechos, escriba a ${SITE.email} con el asunto “Solicitud de privacidad de California”. Verificaremos su identidad y responderemos en 45 días, o le diremos si necesitamos más tiempo según permite la ley. Puede usar un agente autorizado. No le exigiremos crear una cuenta.`,
        },
      ],
    },
    {
      id: "policy-changes",
      title: "Cambios a esta política, y cómo pedimos su consentimiento",
      blocks: [
        {
          type: "p",
          text: "Cuando cambiemos esta Política de privacidad o nuestros Términos de servicio, no ocultaremos el cambio. Publicaremos la nueva versión en este sitio con una fecha y un número de versión nuevos. Agregaremos un resumen breve, en lenguaje sencillo, de lo que cambió al final de la página.",
        },
        {
          type: "p",
          text: "También enviaremos un correo a la dirección que tengamos cuando el cambio sea importante. En los formularios del sitio, deberá marcar una nueva casilla de consentimiento que nombre la nueva versión antes de enviar. Esa casilla es el consentimiento activo. Guardamos un registro de la versión y de la hora en que aceptó.",
        },
        {
          type: "p",
          text: "Si más adelante agregamos un acceso para clientes, bloquearemos ese acceso hasta que acepte la nueva versión.",
        },
      ],
    },
    {
      id: "children",
      title: "Menores",
      blocks: [
        {
          type: "p",
          text: "Este sitio no está dirigido a menores de 13 años. Podemos guardar información de un menor cuando un padre o tutor nos contrata para un caso familiar. En ese caso usamos los datos solo para el expediente.",
        },
      ],
    },
    {
      id: "contact",
      title: "Cómo contactarnos sobre privacidad",
      blocks: [
        {
          type: "p",
          text: `${SITE.name}, ${SITE.addressLines.join(", ")}. Correo ${SITE.email}. Teléfono ${SITE.phone}.`,
        },
        {
          type: "p",
          text: "Use este contacto para eliminación, cierre de expediente, solicitudes de California y preguntas sobre esta política.",
        },
      ],
    },
    {
      id: "version-history",
      title: "Resumen en lenguaje sencillo de los cambios",
      blocks: [
        {
          type: "p",
          text: `Versión ${LEGAL_VERSION} (21 de septiembre de 2026): Primera política publicada. Cubre el sitio público, nuestros expedientes internos, las consultas de estado de USCIS, la regla de que no vendemos datos, la eliminación en 30 días, los límites de expedientes familiares, el aviso de filtración y lo que ocurre si se vende la firma.`,
        },
      ],
    },
  ],
};
