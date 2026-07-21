export interface Historia {
  id: string;
  numero: string;
  titulo: string;
  autor: string;
  fecha: string;
  categoria: string;
  imagen: string;
  resumen: string;
  contenido: string[];
}

export const historias: Historia[] = [
  {
    id: "carretera-kilometro-17",
    numero: "017",
    titulo: "La carretera del kilómetro 17",
    autor: "Anonymous_17",
    fecha: "2008-06-12",
    categoria: "Aparición",
    imagen: "https://source.unsplash.com/900x450/?abandoned,road,fog,night",
    resumen:
      "Un conductor relata que en una carretera abandonada aparece una figura desconocida cada madrugada, siempre en el mismo punto exacto del camino.",
    contenido: [
      "Manejo esa carretera desde hace ocho años, siempre en el mismo horario, siempre de madrugada. Es mi ruta de trabajo y la conozco de memoria: cada curva, cada bache, cada señal oxidada.",
      "La primera vez que la vi fue un martes. Una figura parada exactamente en el kilómetro 17, del lado derecho del camino, inmóvil, mirando hacia el bosque. Pensé que era alguien varado y bajé la velocidad, pero antes de que pudiera detenerme por completo, ya no estaba.",
      "Desde entonces la he visto once veces. Siempre en el mismo punto. Nunca se mueve, nunca voltea hacia el auto. Un compañero de trabajo que hace la misma ruta me confirmó, sin que yo le contara nada, que él también la ha visto.",
      "Investigué el registro del tramo: en 1994 hubo un accidente fatal exactamente en ese kilómetro. Desde que lo supe, ya no sé si dejar de mirar hacia esa curva o seguir buscándola cada vez que paso.",
    ],
  },
  {
    id: "habitacion-nadie-usa",
    numero: "007",
    titulo: "La habitación que nadie usa",
    autor: "Archivo_Desconocido",
    fecha: "2011-11-03",
    categoria: "Lugar abandonado",
    imagen: "https://source.unsplash.com/900x450/?abandoned,house,dark,room",
    resumen:
      "Una antigua casa conserva una habitación cerrada durante años donde ocurren sucesos inexplicables cada vez que alguien intenta remodelarla.",
    contenido: [
      "La casa perteneció a mis abuelos. Cuando la heredamos, mis padres decidieron remodelarla por completo, excepto una habitación al fondo del pasillo que mi abuela siempre mantuvo cerrada con llave.",
      "El primer contratista que contratamos se negó a seguir trabajando después de pasar una tarde ahí. Dijo que las herramientas se movían solas y que sintió que alguien respiraba detrás de él constantemente.",
      "Decidimos abrirla nosotros mismos. Adentro no había nada fuera de lo común: una cama vieja, una cómoda, papel tapiz descolorido. Pero esa misma noche, los tres escuchamos pasos arrastrándose de un lado a otro del cuarto, aunque estaba vacío y con la puerta cerrada con seguro.",
      "Terminamos por sellar la puerta de nuevo, tal como estaba. No hemos vuelto a intentar remodelarla. Algunas noches, si el pasillo está en silencio, todavía se escuchan los pasos.",
    ],
  },
  {
    id: "hospital-ala-este",
    numero: "022",
    titulo: "El ala este del hospital abandonado",
    autor: "Enfermera_Turno_Noche",
    fecha: "2013-02-17",
    categoria: "Lugar abandonado",
    imagen: "https://source.unsplash.com/900x450/?abandoned,hospital,asylum,corridor",
    resumen:
      "Una exempleada de un hospital clausurado asegura que las luces del ala este se encienden solas cada aniversario del incendio que obligó a cerrarlo.",
    contenido: [
      "Trabajé quince años en ese hospital antes de que un incendio en el ala este obligara a clausurar toda la sección. Murieron tres pacientes esa noche porque no alcanzaron a evacuarlos a tiempo.",
      "El hospital reabrió meses después, pero el ala este quedó completamente sellada, sin electricidad, sin acceso autorizado. Aun así, cada año en la fecha exacta del incendio, el personal de guardia reporta ver las luces encendidas desde el estacionamiento.",
      "Yo misma lo vi dos veces antes de retirarme. Ventanas iluminadas en un piso que, según los planos, no tiene ni cableado activo desde hace más de una década.",
      "Un guardia de seguridad entró una vez a revisar, siguiendo protocolo, y aseguró haber escuchado el sonido de un monitor cardíaco pitando en una de las habitaciones vacías. Después de eso, la política del hospital cambió: nadie entra al ala este esa noche del año, bajo ninguna circunstancia.",
    ],
  },
  {
    id: "voz-radio-vieja",
    numero: "045",
    titulo: "La voz en la radio vieja",
    autor: "ColeccionistaVintage",
    fecha: "2015-09-30",
    categoria: "Psicofonía",
    imagen: "https://source.unsplash.com/900x450/?vintage,radio,old",
    resumen:
      "Un radio de los años 60 comprado en un mercado de segunda mano transmite, cada noche a la misma hora, una voz que repite un nombre desconocido.",
    contenido: [
      "Colecciono radios antiguas desde hace diez años. Compré esta pieza en particular, un modelo de los años sesenta, en un mercado de segunda mano sin saber nada de su procedencia.",
      "La restauré y la probé como cualquier otra pieza de mi colección. Sintonizaba estática normal, hasta que una noche, alrededor de las 2:14 de la madrugada, la estática se detuvo por completo y una voz femenina repitió un nombre tres veces seguidas: un nombre que no reconozco, que no le pertenece a nadie que yo conozca.",
      "Pensé que había captado alguna señal cruzada de radioaficionados. Pero ha pasado cada noche desde entonces, siempre a la misma hora exacta, siempre el mismo nombre, aunque desconecte la antena.",
      "Contacté a otros coleccionistas para preguntar si conocían el origen de este modelo específico. Nadie ha podido decirme nada, salvo que ese lote de radios provino de la liquidación de bienes de un hospital psiquiátrico cerrado en los años setenta.",
    ],
  },
  {
    id: "sendero-sin-salida",
    numero: "031",
    titulo: "El sendero sin salida",
    autor: "Excursionista_Perdido",
    fecha: "2017-04-08",
    categoria: "Suceso inexplicable",
    imagen: "https://source.unsplash.com/900x450/?dark,forest,trail,fog",
    resumen:
      "Un grupo de excursionistas relata haber caminado en círculos durante horas en un sendero que, según el mapa, era completamente recto.",
    contenido: [
      "Éramos cuatro, todos con experiencia en senderismo, todos con el mapa oficial de la reserva descargado y una brújula física de respaldo. El sendero que elegimos era simple: una línea recta de cuatro kilómetros hasta un mirador.",
      "Después de dos horas de caminata, el GPS de todos marcaba que seguíamos avanzando, pero el paisaje no cambiaba. Los mismos árboles, la misma roca partida, la misma señal de madera medio caída.",
      "Decidimos regresar sobre nuestros pasos siguiendo la brújula. Caminamos otras dos horas hacia lo que debía ser la entrada del sendero, y terminamos exactamente en el mismo punto donde habíamos notado el patrón por primera vez.",
      "Logramos salir ya entrada la noche, cuando uno de nosotros decidió simplemente caminar en línea recta ignorando por completo el sendero marcado, cortando entre la maleza. Ninguno de los cuatro ha vuelto a esa reserva desde entonces, y los guardabosques locales evitan hablar del tramo cuando se les pregunta directamente.",
    ],
  },
  {
    id: "llamada-a-las-tres",
    numero: "058",
    titulo: "La llamada de las tres de la mañana",
    autor: "InsomneCronico",
    fecha: "2019-01-22",
    categoria: "Suceso inexplicable",
    imagen: "https://source.unsplash.com/900x450/?old,telephone,vintage",
    resumen:
      "Un usuario documenta durante dos meses una llamada telefónica que recibe siempre a la misma hora desde un número que, al intentar rastrearlo, no existe.",
    contenido: [
      "Empecé a recibir la llamada un lunes cualquiera. Las 3:00 de la madrugada exactas, un número desconocido, sin identificador de llamadas. Contesté y solo había silencio, seguido de una respiración pausada, y colgaban después de exactamente veinte segundos.",
      "Pensé que era un error o una broma. Pero la llamada se repitió la noche siguiente, y la siguiente, siempre a la misma hora exacta, siempre el mismo patrón de silencio y respiración.",
      "Llevé el número a mi compañía telefónica para solicitar un rastreo. Me confirmaron que ese número no está asignado a ningún cliente activo ni ha existido en su sistema en los últimos quince años.",
      "Documenté cada llamada durante dos meses completos: fecha, duración exacta, todo. La única noche que no recibí la llamada fue la noche que decidí dormir en casa de un familiar, lejos de mi domicilio habitual. Volvió en cuanto regresé a dormir a mi propia casa.",
    ],
  },
  {
    id: "fotografia-familiar",
    numero: "063",
    titulo: "La fotografía familiar incompleta",
    autor: "Heredero_Anonimo",
    fecha: "2020-10-31",
    categoria: "Suceso inexplicable",
    imagen: "https://source.unsplash.com/900x450/?old,photograph,vintage,family",
    resumen:
      "En una fotografía familiar heredada de una abuela fallecida aparece una persona adicional que ningún familiar logra identificar ni recordar.",
    contenido: [
      "Al ordenar las pertenencias de mi abuela después de su fallecimiento, encontramos un álbum completo de fotografías familiares de los años setenta. Una en particular, tomada en una reunión navideña, muestra a toda la familia sentada a la mesa.",
      "Al fondo, detrás de mi abuelo, hay una persona de pie que ningún miembro vivo de la familia reconoce. No es un empleado, no es un vecino que alguien recuerde, no aparece en ninguna otra fotografía del álbum.",
      "Le mostré la imagen a mi tía, la hermana mayor de mi madre, quien estuvo presente en esa reunión. Ella asegura no recordar a nadie más en la mesa esa noche, y se negó a seguir mirando la fotografía después de examinarla un momento.",
      "Un experto en restauración fotográfica que consulté descartó cualquier manipulación o doble exposición en el negativo original. La persona, según él, estuvo físicamente presente frente a la cámara el día que se tomó la foto.",
    ],
  },
  {
    id: "psicofonia-sotano",
    numero: "071",
    titulo: "La psicofonía del sótano",
    autor: "InvestigadorEVP",
    fecha: "2022-03-15",
    categoria: "Psicofonía",
    imagen: "https://source.unsplash.com/900x450/?basement,dark,abandoned",
    resumen:
      "Una grabadora dejada en el sótano de una casa en venta capta, en completo silencio, una conversación entre dos voces que nadie más escuchó esa noche.",
    contenido: [
      "Como parte de mi trabajo evaluando propiedades antes de su venta, suelo pasar la noche en las casas para revisar condiciones estructurales. Esta vez decidí dejar una grabadora activa en el sótano, solo por curiosidad personal.",
      "Dormí en la planta superior, completamente solo en la propiedad. No escuché absolutamente nada durante la noche.",
      "Al revisar la grabación al día siguiente, encontré cuarenta minutos de silencio casi total, interrumpidos por lo que parecen ser dos voces distintas sosteniendo una conversación en volumen bajo. No logro distinguir palabras completas, pero el patrón de pregunta y respuesta es claramente audible.",
      "Envié el audio a un colega especializado en fenómenos de voz electrónica (EVP). Su análisis descartó interferencia de radio, tuberías o ruido ambiental. La casa, según el registro público, estuvo deshabitada durante los últimos seis años antes de mi visita.",
    ],
  },
];