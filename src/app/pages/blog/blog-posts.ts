export interface ArticleBlock { type: string; text: string; }
export interface BlogPost { author: string; id: number; title: string; slug: string; label: string; excerpt: string; image: string; blocks: ArticleBlock[]; }
export const BLOG_POSTS: BlogPost[] = [
  {
    "id": 1,
    "title": "No es falta de voluntad: entendiendo los atracones",
    "blocks": [
      {
        "type": "image",
        "text": "assets/articulos/blog/0-image1.jpeg"
      },
      {
        "type": "paragraph",
        "text": "Cuando hablamos de atracones, suele aparecer una palabra que hace daño: control."
      },
      {
        "type": "paragraph",
        "text": "«Debería poder controlarme». «Antes tenía fuerza de voluntad»."
      },
      {
        "type": "paragraph",
        "text": "«Entiendo cómo debería comer, pero no puedo parar»."
      },
      {
        "type": "paragraph",
        "text": "Y después de este momento y estos pensamientos viene la culpa."
      },
      {
        "type": "paragraph",
        "text": "Solemos pensar que fallamos, que es falta de disciplina o incluso que algo está mal con nosotros. Pero esto va mucho más allá, es un ciclo formado por pensamientos, emociones y conductas reforzadas con el tiempo. En palabras simples, es lo siguiente:"
      },
      {
        "type": "image",
        "text": "assets/articulos/blog/0-image2.png"
      },
      {
        "type": "paragraph",
        "text": "Si bien este es un ciclo, suele comenzar con algo en particular: la restricción. Esta puede ser a través de un pensamiento («No debo comer esto») o a través de una situación “no se compra eso en mi casa”. En ese momento algunos alimentos adquieren la categoría de prohibido, malo o incluso peligrosos. Y cuando algo está prohibido nuestro cerebro ocupa una gran parte de su tiempo pensando en ello."
      },
      {
        "type": "paragraph",
        "text": "Y cuando hay una conducta o un momento de “debilidad” en el que cedes al deseo, el cerebro se relaja, se libera dopamina y la respuesta cognitiva es “ya arruiné la dieta, así que da igual lo que coma ahora”."
      },
      {
        "type": "paragraph",
        "text": "Esto puede generar un episodio de atracón: se suele creer, sentir y decir «No podía parar» y se experimenta una sensación de culpa, debilidad, angustia y falta de fuerza de voluntad. Muchas veces después de esto se busca compensar con distintas conductas que pueden hacernos daño."
      },
      {
        "type": "image",
        "text": "assets/articulos/blog/0-image3.jpeg"
      },
      {
        "type": "paragraph",
        "text": "Por eso, a través de la psicología se trabaja lo que ocurre antes, durante y después de un episodio, y cómo podríamos modificar nuestros pensamientos, sin centrarnos en los episodios ya que los atracones suelen ser el síntoma visible de un ciclo que comenzó mucho antes."
      },
      {
        "type": "paragraph",
        "text": "Porque no se trata únicamente de modificar una conducta alimentaria, sino de intervenir sobre los pensamientos, emociones y patrones conductuales que contribuyen a mantenerla."
      }
    ],
    "image": "assets/articulos/blog/0-image1.jpeg",
    "slug": "entendiendo-los-atracones",
    "label": "Conducta alimentaria",
    "excerpt": "Comprende el ciclo de los atracones y el papel de los pensamientos y las emociones.",
    "author": "Lic. Lucía Pinell"
  },
  {
    "id": 2,
    "title": "¿Tu dieta podría estar impactando en la salud de tu piel? Nutrientes clave para deshacerte del acné",
    "blocks": [
      {
        "type": "paragraph",
        "text": "El acné es una afección cutánea bastante frecuente que ocasiona una inflamación de la piel. Esta afección ocurre con mayor frecuencia en adolescentes y adultos jóvenes, pero puede llegar a quedarse hasta la edad adulta en algunos casos. La mayoría de las veces, los brotes ocurren en la cara, pero también pueden salir en la espalda, el pecho y los hombros."
      },
      {
        "type": "paragraph",
        "text": "Las causas para la aparición del acné pueden deberse a diversos factores, entre ellos el exceso de grasa en los poros, la acumulación de células muertas, bacterias, las hormonas, antecedentes familiares, entre otros."
      },
      {
        "type": "paragraph",
        "text": "Sin embargo, un factor que no es causante directo pero que ha demostrado ser clave en la aparición y empeoramiento del acné, es la alimentación."
      },
      {
        "type": "image",
        "text": "assets/articulos/blog/1-image1.jpeg"
      },
      {
        "type": "credit",
        "text": "Foto de Barbara Krysztofiak en Unsplash"
      },
      {
        "type": "heading",
        "text": "¿Cómo influye la dieta?"
      },
      {
        "type": "paragraph",
        "text": "El acné es mucho más común en países occidentales que en otros lugares, y la razón principal es la composición de la dieta."
      },
      {
        "type": "paragraph",
        "text": "La dieta occidental suele ser baja en Omega-3 y rica en hidratos de carbono refinados, azúcares, lácteos, grasas saturadas y carnes. Esta combinación de alimentos activa señales en el cuerpo que aumentan la inflamación en la piel, haciendo que los poros se obstruyan y las lesiones empeoren."
      },
      {
        "type": "paragraph",
        "text": "Los alimentos de alto índice glucémico —harinas refinadas, dulces, azúcar— y los lácteos activan la producción excesiva de insulina y una hormona llamada IGF-1, que estimula la producción de hormonas andrógenas que provocan el acné; bloquean la FOXO1, una proteína protectora que controla la producción de grasa y el crecimiento celular."
      },
      {
        "type": "paragraph",
        "text": "Esta dieta también altera la microbiota intestinal, por lo que la permeabilidad intestinal aumenta y promueve las enfermedades inflamatorias en la piel, incluyendo los casos graves de acné."
      },
      {
        "type": "heading",
        "text": "Nutrientes clave para ayudar con el acné"
      },
      {
        "type": "image",
        "text": "assets/articulos/blog/1-image2.jpeg"
      },
      {
        "type": "credit",
        "text": "Foto de Clark Douglas en Unsplash"
      },
      {
        "type": "paragraph",
        "text": "Vitamina C: estimula la producción de colágeno para la reparación de la piel. Además, tiene un efecto antioxidante ante daños provocados por el estrés oxidativo, responsable del envejecimiento de las células."
      },
      {
        "type": "paragraph",
        "text": "Fuentes alimentarias: frutas (naranjas, mandarinas, limón, pomelo, kiwi, piña, frutillas, frutos rojos), verduras y hortalizas (pimentones, tomate, brócoli, espinacas, nabo) y tubérculos como la papa."
      },
      {
        "type": "paragraph",
        "text": "Vitamina A: ayuda a la formación y al mantenimiento de dientes, tejidos blandos, membranas mucosas y la piel."
      },
      {
        "type": "paragraph",
        "text": "Fuentes alimentarias: huevo, hígado, carne, leche fortificada, frutas y verduras de color amarillo y naranja, vegetales de hoja verde (espinaca, acelga, rúcula)."
      },
      {
        "type": "paragraph",
        "text": "Vitamina D: reduce la producción excesiva de sebo y ayuda a renovar las células."
      },
      {
        "type": "paragraph",
        "text": "Fuentes alimentarias: yema de huevo, lácteos fortificados, pescados grasos, hígado."
      },
      {
        "type": "paragraph",
        "text": "Vitamina E: antioxidante, protege las paredes celulares."
      },
      {
        "type": "paragraph",
        "text": "Fuentes alimentarias: aceites vegetales poliinsaturados (soya, maíz), verduras de hoja verde, germen de trigo, productos de grano integral, hígado, yema de huevo, nueces y semillas."
      },
      {
        "type": "paragraph",
        "text": "Omega-3: antiinflamatorio, disminuye el daño oxidativo y el envejecimiento prematuro causado por el sol."
      },
      {
        "type": "paragraph",
        "text": "Fuentes alimentarias: pescados grasos como las sardinas, atún, caballa y anchoas, semillas de linaza, chía, nueces y aceites como el de canola o soja."
      },
      {
        "type": "heading",
        "text": "Conclusión"
      },
      {
        "type": "paragraph",
        "text": "El acné es una afección multifactorial y por la misma razón, el tratamiento debe ser multidisciplinario. Una persona con acné debe reducir el índice glucémico de la dieta, limitar lácteos y aumentar el consumo de estos nutrientes clave para el control de los brotes."
      },
      {
        "type": "paragraph",
        "text": "Es por esto que la alimentación es un pilar muy importante dentro del tratamiento dermatológico, y la intervención debe ser personalizada para abordar el factor inflamatorio, hormonal y metabólico del acné."
      }
    ],
    "image": "assets/articulos/blog/1-image1.jpeg",
    "slug": "alimentacion-y-acne",
    "label": "Nutrición y piel",
    "excerpt": "Cómo se relacionan la alimentación y la salud de la piel.",
    "author": "Lic. María René Nuñez"
  },
  {
    "id": 3,
    "title": "Fibra alimentaria: la batalla de la nutrición que estás ignorando",
    "blocks": [
      {
        "type": "paragraph",
        "text": "En los últimos años, las tendencias en redes sociales han llevado a un consumo casi obsesivo de alimentos altos en proteínas. Muchos influencers dedicados al fitness venden patrones de alimentación basados en este nutriente; dietas como la cetogénica o dietas muy bajas en carbohidratos, que son promovidas en internet como opciones para la pérdida de peso. Y, si bien la proteína es importante en nuestra dieta —es el nutriente que nos ayuda a construir y reparar tejido—, hay un nutriente que estas dietas suelen dejar fuera: la fibra."
      },
      {
        "type": "image",
        "text": "assets/articulos/blog/1-image3.jpeg"
      },
      {
        "type": "credit",
        "text": "Foto de Sollange Brenis en Unsplash"
      },
      {
        "type": "heading",
        "text": "¿Qué es la fibra?"
      },
      {
        "type": "paragraph",
        "text": "La fibra es un tipo de carbohidrato que se encuentra en una variedad de alimentos como frutas, vegetales, legumbres, granos enteros y semillas. A diferencia de otros nutrientes, que se digieren y absorben, la fibra alimentaria no puede ser absorbida por el cuerpo."
      },
      {
        "type": "heading",
        "text": "¿Toda la fibra es igual?"
      },
      {
        "type": "paragraph",
        "text": "No, existen dos tipos principales de fibra: soluble e insoluble. Ambas son importantes en nuestra dieta, pero puedes necesitar más o menos cantidad de una de ellas dependiendo del caso."
      },
      {
        "type": "paragraph",
        "text": "La fibra soluble es un tipo de fibra que se disuelve en agua. Forma un gel en el estómago que ralentiza la digestión y puede ayudar a reducir el colesterol y glucosa en sangre."
      },
      {
        "type": "paragraph",
        "text": "Mientras que la fibra insoluble, como su nombre lo indica, no se disuelve en agua. Este tipo de fibra favorece el movimiento intestinal y aumenta el volumen de las heces. Es útil para el estreñimiento o personas que no evacuan frecuentemente."
      },
      {
        "type": "heading",
        "text": "¿Es la fibra realmente tan importante?"
      },
      {
        "type": "paragraph",
        "text": "La respuesta es sí. Las guías alimentarias sugieren aproximadamente 14–15 g de fibra por cada 1000 kcal, o lo que es 28–30 g de fibra diaria para el adulto promedio. Actualmente, el consumo de fibra dietaria se sitúa alrededor de 8 g por cada 1000 kcal, e incluso menos en algunos casos."
      },
      {
        "type": "paragraph",
        "text": "Este nutriente es el encargado de regular muchas funciones de nuestro organismo, y al estar ausente en las dietas habituales, suelen aparecer problemas como estreñimiento frecuente, hemorroides, diverticulitis, y además, las dietas bajas en fibra se han asociado a una mayor probabilidad de desarrollar cáncer de colon."
      },
      {
        "type": "paragraph",
        "text": "Por otro lado, una dieta con un adecuado contenido de fibra puede ayudarnos a regular los niveles de glucosa en sangre y los niveles de colesterol. Además, puede tener efectos positivos sobre la salud cardiovascular, la pérdida de peso, la presión arterial y la inflamación."
      },
      {
        "type": "heading",
        "text": "Entonces… ¿debo dejar de darle importancia a la proteína?"
      },
      {
        "type": "paragraph",
        "text": "No. Ambos nutrientes son importantes para el día a día. La proteína es un nutriente con función principalmente estructural; se encarga de la construcción de músculo y de células nuevas, por lo que su presencia en la dieta diaria es indispensable. Sin embargo, si la dieta no está equilibrada, la falta de fibra en una dieta alta en proteínas puede causar problemas estomacales como estreñimiento, hinchazón y gases."
      },
      {
        "type": "heading",
        "text": "Conclusión"
      },
      {
        "type": "paragraph",
        "text": "La clave para una alimentación saludable no está en obsesionarse con un solo nutriente, sino en encontrar el equilibrio. Mientras que la proteína es indispensable para los músculos y células, la fibra mantiene a nuestro sistema digestivo y metabólico funcionando."
      },
      {
        "type": "paragraph",
        "text": "Dejarse llevar por modas de internet que eliminan los carbohidratos de forma extrema solo va a alejarte de una buena salud. Para evitar problemas como estreñimiento o inflamación, y asegurar beneficios en tu corazón y peso ideal, debes combinar ambos: proteínas de calidad y una buena dosis de fibra."
      },
      {
        "type": "paragraph",
        "text": "Cada cuerpo es diferente, y lo que le sirve a uno no siempre es lo que tú necesitas. Si quieres descubrir el balance de fibra y proteínas para llegar a tus metas, visita nuestra sección de servicios para que diseñemos tu plan a medida."
      }
    ],
    "image": "assets/articulos/blog/1-image3.jpeg",
    "slug": "fibra-alimentaria",
    "label": "Hábitos saludables",
    "excerpt": "Descubre por qué la fibra es importante y cómo equilibrarla con la proteína.",
    "author": "Lic. María René Nuñez"
  }
];
