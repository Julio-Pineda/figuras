document.addEventListener('DOMContentLoaded', () => {
    const alphabetContainer = document.querySelector('.alphabet-container');
    const trabalenguasContainer = document.querySelector('.trabalenguas-container');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const trabalenguas = {
    'A': [
        'Amanda, la afamada artista, anhelaba alcanzar aquel anhelado galardón. Anualmente, aplicaba a la academia, adjuntando acuarelas abstractas y autorretratos audaces. Aunque algunos académicos alababan su arte, otros, apáticos, aplazaban su aceptación, argumentando que su arte abstracto era apenas aceptable. Amanda, airada, aguardaba ansiosamente la anhelada aprobación.',
        'Armando, el aclamado arquitecto, apilaba altos arcos antiguos. Aspiraba a armar una asombrosa acrópolis. Atraía a aprendices aplicados, a quienes aleccionaba apasionadamente. Armando anhelaba que su arte, anclado en la antigüedad, asombrara a las almas apáticas. ¡Ah, qué anhelo tan arduo y admirable!',
        'Anastasia, la amable amazona, avanzaba audazmente a través de áridos arenales. Acompañada por su alazán alado, anhelaba hallar el ancestral amuleto. Aquel artefacto, aseguraban las antiguas leyendas, atesoraba arcanos asombrosos. Anastasia, armada con su arco y flechas, afrontaba la aventura con admirable arrojo y astucia.',
        'Aníbal, el albañil andaluz, andaba aclamando a la alcaldesa. Ansiaba la aprobación para ampliar su alquería. Aquella anacrónica edificación, ahora abandonada, amparaba antaño a animales y almas andariegas. Aníbal anhelaba arreglarla, anhelando albergar a artistas y artesanos. ¡Ah, qué ambiciosa aspiración la de Aníbal, el albañil andaluz!',
        'Además, la araña Ana, ávida aventurera, avanzaba airosa por el amplio alféizar. Atrapaba aladas sabandijas, aniquilando a aquellas alimañas. Su astucia arácnida, arma ancestral, asombraba a las aburridas avispas. Ana, la araña, anhelaba alcanzar la alta arboleda, anidando allá arriba, a salvo de amenazas.',
        'Aurelio, el astrónomo aficionado, anhelaba avistar auroras australes. Armado con artilugios antiguos, aguardaba apartado en la alta atalaya. Anotaba atentamente cada alteración atmosférica. Aunque anochecía, Aurelio, animado, aguardaba la aparición astral. ¡Admirable afán astronómico el de Aurelio, aguardando auroras australes!',
        'Adela, la arpista, acariciaba las afinadas arpas. Arrancaba armonías angelicales, atrayendo a almas abstraídas. Actuaba anualmente ante audiencias abarrotadas, anhelando aplausos atronadores. Adela, artista apasionada, anhelaba que su arte aliviara almas afligidas. ¡Arte admirable el de Adela, la arpista de armonías angelicales!',
        'Arturo, el aviador, afrontaba acrobacias aéreas asombrosas. Ascendía audazmente, atravesando algodonadas atmósferas. Aterrizaba apenas antes del alba, aclamado por amigos y admiradores. Arturo, as de la aviación, anhelaba aventuras aún más audaces. ¡Arrojo admirable el de Arturo, afrontando acrobacias aéreas asombrosas!'
    ],
    'B': [
        'El perro de San Roque no tiene rabo porque Ramón Ramírez se lo ha robado.',
        'Braulio, el bonachón barbero, bebía bebidas burbujeantes bajo el baobab. Blandía su brillante navaja, bromeando con los borrachos del bar. Buscaba bronca, pero Braulio, bonachón, buscaba brindarles un buen afeitado. ¡Bravo, Braulio, por buscar el bien y no la bronca, bebiendo bebidas burbujeantes bajo el baobab!',
        'Bárbara, la bibliotecaria, buscaba biografías de bolcheviques. Bajaba a la bodega, buscando entre baúles. Bárbara, boquiabierta, halló un bello broche de bronce. Brillaba bajo el bombillo, un broche bizantino. ¡Qué bien buscaba Bárbara, la bibliotecaria, que buscando biografías de bolcheviques, halló un bello broche de bronce!',
        'Benito, el boxeador, bailaba bulerías con brío. Balanceaba sus brazos, buscando el compás. Benito, un bigardo bonachón, besaba a su bella bailaora. Brindaban con brandy, bajo la buganvilla. ¡Bravo, Benito, por bailar bulerías con brío, balanceando tus brazos y besando a tu bella bailaora bajo la buganvilla!',
        'Bernardo, el biólogo, buceaba buscando bivalvos bioluminiscentes. Bajaba valientemente, bordeando barreras coralinas. Burbujas brotaban, borboteando bellamente. Bernardo, boquiabierto, observaba el brillante ballet biológico. ¡Bendita biodiversidad la que Bernardo buscaba buceando, buscando bivalvos bioluminiscentes bajo las barreras coralinas!',
        'Beatriz, la botanista, bordaba blusas con bellas begonias. Buscaba brotes brillantes, botones blancos y bayas bermejas. Bordaba con bastante buen tino, buscando un balance bellísimo. Beatriz, bendecida con buen gusto, brindaba belleza bordando blusas con begonias. ¡Bellísimo bordado el de Beatriz, la botanista de las begonias!',
        'Bruno, el bombero, bajaba por la barra bastante rápido. Buscaba la bomba, bramando bravuconadas. Blandía la brillante boca de riego, bañando el balcón. Bruno, bombero valiente, buscaba brechas, batallando bravamente contra las brasas. ¡Bravo, Bruno, bombero bonachón, batallando bravamente contra las brasas!',
        'Belisario, el bibliófilo, buscaba un breviario bizantino. Bajó a la bodega, buscando bajo bultos. Boquiabierto, Belisario besó el bello libro. ¡Bendito hallazgo! Belisario, bibliófilo beato, buscaba el breviario bizantino bajo bultos y lo besó boquiabierto. ¡Bienaventurado Belisario, bibliófilo buscador!',
        'Bartolomé, el bufón, bailaba bulerías burlescas. Blandía bastones, botaba botas y balbuceaba bobadas. Buscaba la bulla, el barullo, el bullicio. Bartolomé, bufón bonachón, brindaba buen humor. ¡Benditas bobadas las de Bartolomé, el bufón que bailaba bulerías burlescas buscando la bulla!'
    ],
    'C': [
        'Cuesta le cuesta subir la cuesta, y en medio de la cuesta, va y se acuesta. El cuestista de la cuesta, que en la cuesta se acuesta, cuando la cuesta le cuesta, ¡vaya cuestista el de la cuesta! Cansado y con calambres, casi coronando la cumbre, contempla cómo la cuesta le costó.',
        'Cecilia, la célebre científica, coleccionaba células cancerígenas. Concienzudamente, calculaba su crecimiento, buscando curas con compuestos químicos. Cientos de colegas celebraban sus conclusiones. Cecilia, convencida, continuaba su cruzada contra el cáncer, creando conocimiento crucial. ¡Qué capacidad científica la de Cecilia, creando curas con ciencia y conciencia!',
        'Camilo, el carpintero, cortaba cedro con su caladora. Creaba cómodas, catres y curiosos cofres. Cobraba cantidades considerables, comprando clavos y cola con cautela. Sus clientes, contentos, colmaban su cartera. Camilo, carpintero competente, construía con cuidado y cariño, creando cosas colosales.',
        'Candelaria, la cocinera, cocinaba cocos con canela. Creaba cremosos caramelos, croquetas crujientes y coloridas compotas. Compraba sus condimentos en el comercio cercano. Cientos de comensales celebraban sus creaciones culinarias. Candelaria, con su cuchara y caldero, conquistaba corazones con cada cucharada.',
        'Clemente, el ciclista, competía en carreras campestres. Cruzaba caminos complicados, con cuestas y curvas cerradas. Con coraje y constancia, coronaba cumbres. Celebraba cada campeonato, cubierto de cicatrices. Clemente, ciclista campeón, conquistaba cada carrera con coraje y corazón.',
        'Casimiro, el coleccionista, compraba cuadros cubistas. Contemplaba con calma cada color, cada contorno. Cientos de cuadros colgaban, creando un caos cromático. Casimiro, conocedor convencido, consideraba cada compra cuidadosamente. ¡Curiosa colección la de Casimiro, colmada de cuadros cubistas cuidadosamente comprados!'
    ],
    'D': [
        'El que poco coco come, poco coco compra; el que poca capa se tapa, poca capa se compra. Como yo poco coco como, poco coco compro y como poca capa me tapo, poca capa me compro.',
        'Donato, el domador, domaba dos dragones díscolos. Día tras día, dedicaba denodados esfuerzos. Daba de comer a las dos bestias, domesticando su desdén. Donato, decidido, demostraba su dominio, danzando entre dentelladas. ¡Digno de admiración el don de Donato, domando dragones con dedicación y destreza!',
        'Diana, la diseñadora, dibujaba delicados diseños. Desplegaba destreza, detallando cada doblez. Diseñaba vestidos de día, de noche y de domingo. Distribuía sus diseños a distintos destinos. Diana, dueña de su destino, dedicaba su don al diseño, dejando destellos de divinidad en cada dibujo.',
        'Demetrio, el detective, desentrañaba difíciles delitos. Descubría detalles determinantes, deduciendo desenlaces. Durante días, deambulaba, buscando datos. Desenmascaraba a delincuentes, devolviendo la dicha a los desdichados. Demetrio, detective decidido, dedicaba su vida a descubrir la verdad, desenredando dudas y dando descanso a las almas.',
        'Dámaso, el dramaturgo, describía dramas desgarradores. Daba diálogos profundos a sus desdichados personajes. Dirigía a divas y a donjuanes, depurando detalles. Después del debut, descansaba, dejando que el destino decidiera. Dámaso, dueño de un don divino, dedicaba sus días a dar vida a dramas, describiendo el dolor.',
        'David, el deportista, descendía dunas desérticas. Dominaba diestramente su deslizador, desafiando desniveles. Durante el día, dedicaba devoción a dicha disciplina. David, deportista de élite, demostraba su don, descendiendo dunas desérticas. ¡Destreza deslumbrante la de David, descendiendo dunas con devoción y dominio!'
    ],
    'E': [
        'Erre con erre, guitarra; erre con erre, carril: rápido ruedan los carros, rápido el ferrocarril.',
        'Ernesto, el escritor, escribía extensos ensayos. En ellos, exploraba enigmas existenciales. Enfatizaba en el efecto de las emociones, explicando ejemplos elocuentes. Esperaba entregar esperanza, erradicando el error. Ernesto, erudito eminente, empleaba su entendimiento para enseñar, esperando enriquecer el espíritu de sus lectores.',
        'Elena, la ecologista, evaluaba el estado de los ecosistemas. Emprendía expediciones, estudiando especies en peligro de extinción. Exigía enérgicamente el cese de la explotación. Elena, ejemplo de entereza, esperaba educar a la gente, enseñando a respetar el entorno. ¡Excelente empresa la de Elena, entregando su energía a la ecología!',
        'Esteban, el escultor, esculpía enormes estatuas de ébano. Empleaba herramientas especiales, extrayendo expresiones etéreas. Exhibía sus esculturas en exposiciones europeas. Esperaba eternizar la esencia de la existencia. Esteban, espíritu excelso, expresaba emociones en el ébano, entregando al espectador espléndidas esculturas.',
        'Elisa, la empresaria, exportaba especias exóticas. Enviaba embarques enteros a enormes emporios extranjeros. Evaluaba los egresos e ingresos, esperando excelentes excedentes. Elisa, empresaria ejemplar, empleaba estrategias efectivas, expandiendo su empresa en el extranjero. ¡Éxito empresarial el de Elisa, exportando especias exóticas!',
        'Evaristo, el electricista, examinaba enmarañados entramados eléctricos. Encontraba errores, empleando equipos especiales. Evitaba electrocuciones, ejecutando el trabajo expertamente. Evaristo, electricista eficiente, entendía perfectamente la energía. ¡Excelente electricista Evaristo, ejecutando expertamente el examen de entramados eléctricos!'
    ],
    'F': [
        'Fui a la ferretería a por un fierro, pero el ferretero no tenía el fierro que yo quería.',
        'Fabián, el fotógrafo, fotografiaba fantásticas flores. Enfocaba finamente sus frágiles filamentos. Frecuentaba frondosos bosques, buscando formas fascinantes. Fabricaba fantásticas fotografías, famosas en festivales. Fabián, fotógrafo fenomenal, fusionaba su febril fantasía con la flora, forjando formidables fotografías.',
        'Fidel, el filósofo, formulaba formidables frases. Fustigaba a los farsantes, defendiendo la fe en el futuro. Fundamentaba sus ideas en firmes fundamentos. Frecuentemente, ofrecía foros, fomentando el flujo de ideas. Fidel, filósofo frontal, forjaba el futuro con la fuerza de su filosofía, enfrentando a los fanáticos.',
        'Florencia, la farmacéutica, fabricaba fórmulas magistrales. Facilitaba fármacos a familias con fiebres y fatigas. Fiscalizaba las fechas de vencimiento, funcionando eficientemente. Florencia, farmacéutica fiel, ofrecía alivio a los afligidos, fortaleciendo a los frágiles. ¡Fantástica labor la de Florencia, facilitando fármacos y fortaleza!',
        'Facundo, el faquir, flotaba sobre filosas falcatas. Fascinaba a la ferviente fanaticada, fingiendo no sentir nada. Frecuentaba ferias famosas, forjando su fama. Facundo, un fenómeno, ofrecía funciones fantásticas, desafiando la física y el filo. ¡Formidable faquir Facundo, flotando sin temor sobre las filosas falcatas!',
        'Fulgencio, el fumigador, fumigaba frenéticamente fincas infestadas. Fórmulas fulminantes fluían, formando fantasmagóricas figuras. Fumigaba filoxeras, fastidiosos fitófagos. Fulgencio, fumigador formidable, finalizaba la faena felizmente. ¡Fenomenal faena la de Fulgencio, fumigando frenéticamente fincas infestadas de filoxeras!'
    ],
    'G': [
        'Galo, el granjero, gritaba alegremente mientras sus gallinas grises y gordas, glotonas, giraban y gorjeaban. Galo les daba granos generosamente, y las gallinas, agradecidas, garantizaban huevos gigantescos. ¡Qué granja genial la de Galo, el granjero generoso, donde las gallinas grises y gordas giran y gorjean alegremente gracias a los granos que Galo les da!',
        'Gregorio, el geólogo, gozaba explorando grutas gigantescas. Golpeaba gentilmente las geodas, generando gemas genuinas. Guardaba sus hallazgos en grandes gabinetes. Gregorio, geólogo genial, gustaba de investigar la geografía, glorificando la grandeza geológica. ¡Geólogo genial Gregorio, generando gemas genuinas al golpear geodas!',
        'Gabriela, la gimnasta, giraba grácilmente. Ganaba galardones gracias a su agilidad y gracia. Gustaba de entrenar en el gimnasio, generando gestos grandiosos. Gabriela, gimnasta gloriosa, gozaba de gran prestigio, ganándose el genuino cariño del gentío. ¡Gráciles giros los de Gabriela, la gimnasta gloriosa que ganaba galardones!',
        'Gaspar, el gastrónomo, guisaba gustosos guisos. Generalmente, agregaba generosas guarniciones. Gustaba de agasajar a sus amigos, garantizando grandes banquetes. Gaspar, gastrónomo genial, generaba gratas sensaciones, ganándose el galardón al mejor anfitrión. ¡Gustosos guisos los que guisaba Gaspar, el gastrónomo genial!',
        'Gervasio, el guitarrista, gemía junto a su guitarra. Generaba grandiosas melodías, rasgando las cuerdas con garra. Gustaba de los géneros gitanos, ganándose la vida con su arte. Gervasio, guitarrista genial, generaba emociones genuinas, llegando al corazón de la gente con su guitarra. ¡Grandiosas guitarras las de Gervasio, el guitarrista gitano!',
        'Gaudencio, el guardabosques, galopaba guardando el gran bosque. Gobiaba a los gamos, guiaba a las grullas y gruñía a los gorrones. ¡Gigantesca gestión la de Gaudencio, el guardabosques que galopaba guardando el gran bosque y guiando a los gamos y grullas!'
    ],
    'H': [
        'El hipopótamo Hipo está con hipo. ¿Quién le quita el hipo al hipopótamo Hipo?',
        'Héctor, el herrero, heredó el honorable oficio. Hacía herraduras y herramientas, con hierro y habilidad. Horas y horas, golpeaba el hierro caliente, hasta hacerlo dócil. Héctor, hombre honesto y humilde, honraba a sus ancestros, haciendo un trabajo impecable. ¡Hala, Héctor, qué habilidad la tuya con el hierro!',
        'Hilda, la historiadora, hurgaba en hechos históricos. Hallaba hilos conductores entre hitos y hombres. Hojeaba horas y horas, buscando huellas del pasado. Hilda, historiadora honesta, hilvanaba historias, honrando la memoria de los héroes. ¡Hurra por Hilda, la historiadora que honra la historia!',
        'Hugo, el hortelano, cultivaba hortalizas en su huerto. Habas, hierbas y hinojo, crecían hermosos. Hugo, hombre habilidoso, ahuyentaba a las hormigas con humo. Hacía honor a la tierra, cosechando hortalizas saludables. ¡Qué huerto más hermoso el de Hugo, el hortelano habilidoso!',
        'Helena, la heroína, habitaba en un humilde hogar. Hacía hazañas heroicas, sin esperar honores. Ayudaba a los huérfanos y a los heridos. Helena, heroína humilde, era un halo de esperanza para los desamparados. ¡Honor a Helena, la heroína de corazón humilde!',
        'Horacio, el humorista, hilvanaba hilarantes historias. Hablaba de hadas, de hamsters y de huevos huecos. Hacía reír a hombres, a hienas y hasta a hipopótamos. Horacio, humorista genial, henchía de felicidad los corazones. ¡Hilarantes historias las de Horacio, el humorista que hablaba de hadas y hamsters!'
    ],
    'I': [
        'Si la sierva que te sirve, no te sirve como sierva, de qué sirve que te sirvas de una sierva que no sirve.',
        'Inés, la ingeniera, ideaba increíbles inventos. Investigaba incesantemente, impulsada por su imaginación. Ideaba instrumentos innovadores, imposibles de imitar. Inés, ingeniera ilustre, inspiraba a otros con su ingenio, imaginando un futuro infinito. ¡Increíble ingenio el de Inés, la ingeniera innovadora!',
        'Isidro, el ilusionista, impresionaba a la ingenua infancia. Imitaba imposibles ilusiones, incitando la imaginación. Invitaba a los niños a su isla de la fantasía. Isidro, ilusionista inimitable, inspiraba sonrisas, iluminando la inocencia. ¡Ilusiones increíbles las de Isidro, el ilusionista sin igual!',
        'Irene, la intérprete, interpretaba intrincados idiomas. Iba y venía, de importantes cumbres a íntimas reuniones. Su impecable interpretación impresionaba a los invitados. Irene, intérprete internacional, interconectaba individuos, inspirando el intercambio de ideas. ¡Impresionante Irene, la intérprete incansable!',
        'Ignacio, el inspector, investigaba intrincados incidentes. Interrogaba a individuos, buscando indicios. Inspeccionaba informes, identificando inconsistencias. Ignacio, inspector implacable, impartía justicia, imputando a los infractores. ¡Implacable Ignacio, el inspector que investiga con inteligencia!',
        'Ismael, el impresor, imprimía impresionantes imágenes. Introducía tinta índigo, ilustrando idílicas islas. Inspeccionaba individualmente cada impresión. Ismael, impresor impecable, inmortalizaba instantes. ¡Impresionantes imágenes las que imprimía Ismael, el impresor impecable que ilustraba idílicas islas!'
    ],
    'J': [
        'Juan junta juncos junto a la zanja.',
        'Julián, el jardinero, juntaba jazmines y jacintos. Junto al jilguero, que jugueteaba en el jardín, Julián trabajaba jubililoso. Jamás se quejaba, pues su jardín era su joya. ¡Qué jardín tan jovial el de Julián, el jardinero que juntaba jazmines y jacintos junto al jilguero!',
        'Josefina, la joyera, juntaba jades y jacintos. Justo al lado del joyero, donde guardaba sus joyas, Josefina juntaba sus gemas. Jamás se cansaba de juntar joyas, pues era su gran pasión. ¡Qué joyas tan justas y bellas las de Josefina, la joyera que juntaba jades y jacintos!',
        'Jeremías, el jinete, jineteaba su jaca jerezana. Junto a los juncos, la jaca de Jeremías saltaba zanjas. Jamás se caía, pues Jeremías era un jinete genial. ¡Qué jinete tan genial Jeremías, que jineteaba su jaca jerezana junto a los juncos sin jamás caerse!',
        'Jacinto, el jugador, jugaba juegos de naipes. Junto a sus amigos, Jacinto jugaba y bromeaba. Jamás hacía trampas, pues Jacinto era un jugador justo. ¡Qué jugador tan justo Jacinto, que jugaba juegos de naipes junto a sus amigos sin jamás hacer trampas!',
        'Javier, el jubilado, viajaba jueves y viernes. Juntaba jarras japonesas y joyas jordanas. Jamás se jactaba, solo gozaba. Javier, jubilado jovial, justificaba sus viajes. ¡Joviales viajes los de Javier, el jubilado que juntaba jarras japonesas y joyas jordanas!'
    ],
    'K': [
        'Kiosquero, ¿qué kiosco quieres? Quiero un kiosco que no sea kiosco.',
        'Karina, la karateca, practicaba katas en el tatami. Con kimono y ki, Karina noqueaba a sus oponentes. Su técnica era un espectáculo, un kilométrico despliegue de fuerza y destreza. Karina, karateca de élite, era un kilogramo de pura dinamita. ¡Kárate de kilates el de Karina!',
        'Kevin, el kayakista, remaba kilómetros en su kayak. Sorteaba los rápidos del río, con un kilo de coraje en cada brazo. Su kayak, un kilogramo de fibra de carbono, volaba sobre las aguas. Kevin, kayakista intrépido, era un kilovatio de energía pura. ¡Kayakismo kilométrico el de Kevin!',
        'Katiuska, la kinesióloga, conocía el cuerpo humano al dedillo. Con sus manos, de un kilogramo de sensibilidad, aliviaba contracturas y dolores. Su conocimiento era un kilovatio de sabiduría, un kilómetro de experiencia. Katiuska, kinesióloga excepcional, era un kilo de bondad. ¡Kinesiología de kilates la de Katiuska!',
        'Kurt, el koala, comía kilos de eucalipto. Dormitaba en las ramas, con un kilogramo de pereza en su cuerpo. Su pelaje, de un kilo de suavidad, lo protegía del frío. Kurt, koala tranquilo, era un kilovatio de paz. ¡Koala de kilates Kurt!',
        'Klaus, el kiosquero, vendía kétchup y kiwis. Kilogramos de caramelos, kioscos de revistas y koalas de peluche. Klaus, kiosquero amable, conocía a todos sus clientes. ¡Kiosco kilométrico el de Klaus, el kiosquero que vendía kétchup, kiwis y koalas de peluche!'
    ],
    'L': [
        'Lía liga listones lilas, los lía y los alisa, los alisa y los lía. Luego, Lía leía la lista de listones lilas que había liado y alisado. La lista era larga, larguísima, y Lía, leyendo la lista, se liaba. ¡Qué lío de listones lilas liados y alisados por Lía mientras leía la larga lista!',
        'Laura, la lavandera, lavaba la lana en la laguna. Luego, la lana lavada, Laura la liaba y la llevaba a la loma. Allá, la lana se secaba, limpia y liviana. ¡Linda lana la que lavaba Laura, la lavandera, en la laguna, para luego liarla y llevarla a la loma!',
        'Leopoldo, el leñador, talaba laureles en la ladera. Luego, los laureles talados, Leopoldo los liaba y los llevaba a la aldea. Allá, los laureles se vendían, a buen precio. ¡Largos laureles los que talaba Leopoldo, el leñador, en la ladera, para luego liarlos y llevarlos a la aldea!',
        'Lola, la locutora, leía las noticias locales. Lo leía todo, largo y tendido, con voz clara y potente. Lola, locutora leal, informaba a la localidad, con lujo de detalles. ¡Larga vida a Lola, la locutora local que lo leía todo largo y tendido!',
        'Luis, el luchador, luchaba en la lona. Libraba luchas legendarias, con llave y candado. Luis, luchador leal, siempre saludaba a su rival, con la mano en alto. ¡Luchas limpias las de Luis, el luchador leal que luchaba en la lona con llave y candado!',
        'Lorenzo, el malabarista, lanzaba limones y lentejas. Los lanzaba alto, muy alto, luego los recogía con la lengua. Lorenzo, el loco, lograba lo imposible. ¡Locuras las de Lorenzo, el malabarista que lanzaba limones y lentejas y los recogía con la lengua!'
    ],
    'M': [
        'Me han dicho que has dicho un dicho, un dicho que he dicho yo. Ese dicho que te han dicho que yo he dicho, no lo he dicho; y si yo lo hubiera dicho, estaría muy bien dicho por haberlo dicho yo.',
        'Mariana, la maga, manipulaba misteriosas marionetas. Moviendo sus manos, las marionetas bailaban y cantaban. Mariana, maga magnífica, maravillaba a la multitud, con su magia y su misterio. ¡Mágicas marionetas las de Mariana, la maga que manipulaba misterios!',
        'Mario, el marinero, manejaba su majestuoso velero. Mareas y monzones, Mario los dominaba con maestría. Millas y millas, Mario navegaba, con el mar como su mejor amigo. ¡Magnífico marinero Mario, que manejaba su majestuoso velero en medio de mareas y monzones!',
        'Mónica, la modelo, mostraba magníficos modelos. Maquillaje y melena, Mónica los lucía con maestría. Millones de miradas, Mónica atraía, con su monumental belleza. ¡Maravillosa modelo Mónica, que mostraba magníficos modelos con su maquillaje y su melena!',
        'Miguel, el músico, componía magníficas melodías. Metrónomo y melodía, Miguel los manejaba con maestría. Millones de notas, Miguel combinaba, con su monumental talento. ¡Melodías maravillosas las de Miguel, el músico que componía con metrónomo y melodía!',
        'Marcos, el mecánico, montaba motores monumentales. Manipulaba martillos, mangueras y muchas más máquinas. Mantenía minuciosamente cada mecanismo. Marcos, mecánico meticuloso, mejoraba motores magníficamente. ¡Magnífico mecánico Marcos, montando motores monumentales minuciosamente!'
    ],
    'N': [
        'Nadie nota nunca nada, no; nadie nota nunca nada, no; nadie nota nunca nada, no.',
        'Nicanor, el narrador, narraba novelas nocturnas. Nudos y nexos, Nicanor los narraba con naturalidad. Noche tras noche, Nicanor narraba, con una narración que nunca nadie olvidaba. ¡Narraciones notables las de Nicanor, el narrador que narraba novelas nocturnas con nudos y nexos!',
        'Nora, la nadadora, nadaba sin ninguna novedad. Nado de espalda, nado de pecho, Nora los nadaba con naturalidad. Nadie nadaba como Nora, la nadadora que nadaba sin ninguna novedad. ¡Nado notable el de Nora, la nadadora que nadaba con naturalidad!',
        'Néstor, el negociante, negociaba negocios notables. Números y nombres, Néstor los negociaba con naturalidad. Nadie negociaba como Néstor, el negociante que negociaba negocios notables. ¡Negocios notables los de Néstor, el negociante que negociaba con naturalidad!',
        'Norma, la novelista, escribía novelas notables. Nombres y narraciones, Norma los escribía con naturalidad. Nadie escribía como Norma, la novelista que escribía novelas notables. ¡Novelas notables las de Norma, la novelista que escribía con naturalidad!',
        'Nacho, el nutricionista, notaba notables necesidades nutritivas. Necesitaba nueces, naranjas y nabos. Nunca negaba un nutritivo manjar. Nacho, nutricionista nato, nos nutría notablemente. ¡Notable nutricionista Nacho, notando necesidades nutritivas y necesitando nueces, naranjas y nabos!'
    ],
    'O': [
        'Otorrinolaringólogo, otorrinolaringóloga, otorrinolaringología.',
        'Olga, la orfebre, forjaba ornamentos de oro. Ópalos y onix, Olga los engarzaba con primor. Obras de orfebrería, Olga las ofrecía, con orgullo y honor. ¡Ornamentos opulentos los de Olga, la orfebre que forjaba con ópalos y onix!',
        'Omar, el orador, ofrecía ocurrentes opiniones. Oraciones y observaciones, Omar las ofrecía con optimismo. Olas de aplausos, Omar obtenía, con su oratoria original. ¡Opiniones oportunas las de Omar, el orador que ofrecía oraciones y observaciones con optimismo!',
        'Ofelia, la oficinista, ordenaba oficios y documentos. Oficinas y ordenadores, Ofelia los organizaba con esmero. Órdenes y ofertas, Ofelia las procesaba, con orden y prontitud. ¡Oficios organizados los de Ofelia, la oficinista que ordenaba con esmero!',
        'Oscar, el oculista, observaba ojos con atención. Oftalmoscopios y optotipos, Oscar los utilizaba con precisión. Ojos miopes y astigmáticos, Oscar los corregía, con lentes y operaciones. ¡Ojos sanos los que dejaba Oscar, el oculista que observaba con oftalmoscopios y optotipos!',
        'Octavio, el oficinista, odiaba los lunes. Ojeaba oficios, ordenaba papeles y obedecía órdenes. Ocasionalmente, oía ópera, olvidando la oficina. ¡Oh, pobre Octavio, el oficinista que odiaba los lunes, ojeaba oficios, ordenaba papeles y oía ópera ocasionalmente!'
    ],
    'P': [
        'Pepe pela patatas para una tortilla y para la ensalada. Pela que pela, pela que pela... y se empapa en patatas. Pepe, el pelador de patatas, pica y prepara las patatas. Pero, ¿para quién pela Pepe tantas patatas? Para su prima Pepa, que pacientemente espera la tortilla y la ensalada de patatas que Pepe pela.',
        'Pedro, el pintor, pintaba paisajes parisinos. Puentes y parques, Pedro los pintaba con pasión. Pinceles y paletas, Pedro los preparaba con primor. ¡Paisajes preciosos los de Pedro, el pintor que pintaba puentes y parques parisinos con pinceles y paletas!',
        'Paula, la poeta, publicaba poemas preciosos. Palabras y párrafos, Paula los pulía con primor. Páginas y páginas, Paula publicaba, con su pluma prodigiosa. ¡Poemas perfectos los de Paula, la poeta que publicaba palabras y párrafos pulidos con primor!',
        'Pablo, el panadero, preparaba panes para el pueblo. Paciencia y primor, Pablo ponía en su preparación. Panes y pasteles, Pablo horneaba, para el placer de la gente. ¡Panes perfectos los de Pablo, el panadero que preparaba con paciencia y primor para el pueblo!',
        'Pilar, la pianista, practicaba piezas para piano. Partituras y pedales, Pilar los manejaba con precisión. Piezas populares y piezas clásicas, Pilar las interpretaba, con pasión y primor. ¡Piezas preciosas las de Pilar, la pianista que practicaba con partituras y pedales!',
        'Pascual, el pastor, paseaba por prados pampeanos. Pastoreaba pequeños ponis y peludas ovejas. Pacientemente, prevenía posibles peligros. Pascual, pastor prudente, protegía su preciado rebaño. ¡Prudente pastor Pascual, paseando por prados pampeanos, protegiendo pequeños ponis y peludas ovejas!'
    ],
    'Q': [
        'El queso que quiero es un queso que no sea ni muy queso ni poco queso.',
        'Quique, el químico, quemaba quinina en el quemador. ¡Qué quemazón la de la quinina que quemaba Quique, el químico, en el quemador! Quique, químico quisquilloso, quería saber qué quedaba de la quinina quemada. ¡Quisquilloso químico Quique, quemando quinina en el quemador!',
        'Queta, la taquillera, quitaba los billetes de la taquilla. ¡Qué quitada de billetes la de Queta, la taquillera, en la taquilla! Queta, taquillera quejumbrosa, se quejaba de que le quedaban pocos billetes que quitar. ¡Quejumbrosa taquillera Queta, quitando billetes de la taquilla!',
        'Quirino, el quiosquero, quería un quiosco en Quito. ¡Qué quiosco quería Quirino, el quiosquero, en Quito! Quirino, quiosquero quijotesco, quería un quiosco que vendiera quesos de Quinsaloma. ¡Quijotesco quiosquero Quirino, queriendo un quiosco en Quito que vendiera quesos!',
        'Quica, la peluquera, quitaba los pelos con una máquina. ¡Qué quitada de pelos la de Quica, la peluquera, con la máquina! Quica, peluquera quejica, se quejaba de que le quedaban muchos pelos que quitar. ¡Quejica peluquera Quica, quitando pelos con la máquina!',
        'Quintín, el marqués, quería un quinquenio de quietud. Quebrantado por querellas, quemado por quehaceres, Quintín quería quererse un poquito. ¡Pobre marqués Quintín, queriendo un quinquenio de quietud, quebrantado por querellas y quemado por quehaceres!'
    ],
    'R': [
        'Por la calle de Carretas pasaba un perrito; pasó una carreta, le pilló el rabito. Pobre perrito, cómo lloraba por su rabito. El carretero, arrepentido, corrió a socorrerlo, pero el rabito del perrito ya no tenía remedio. ¡Rápido, rápido, que el perrito necesita un remedio para su rabito roto por la carreta!',
        'Ramón, el relojero, reparaba relojes raros. Ruedas y resortes, Ramón los revisaba con rigor. Relojes de pulsera y relojes de pared, Ramón los reparaba, con rapidez y primor. ¡Relojes restaurados los de Ramón, el relojero que reparaba con ruedas y resortes!',
        'Rosa, la reportera, redactaba reportajes reales. Rumores y realidades, Rosa los relataba con rigor. Reportajes de radio y reportajes de revista, Rosa los redactaba, con rapidez y primor. ¡Reportajes rigurosos los de Rosa, la reportera que redactaba con rumores y realidades!',
        'Roberto, el rey, reinaba en un reino remoto. Riquezas y recursos, Roberto los repartía con rigor. Reyes y reinas, Roberto los recibía, con respeto y primor. ¡Reino rico el de Roberto, el rey que reinaba con riquezas y recursos!',
        'Rita, la risueña, reía con ganas. Risas y carcajadas, Rita las regalaba con generosidad. Riendo y riendo, Rita recorría el mundo, repartiendo alegría. ¡Risas radiantes las de Rita, la risueña que reía con risas y carcajadas!',
        'Renato, el corredor, recorría rutas rurales. Rápidamente respiraba, resistiendo repechos rocosos. Rompía récords, recibiendo reconocimientos. Renato, corredor robusto, representaba a su región. ¡Robusto corredor Renato, recorriendo rutas rurales, rompiendo récords y recibiendo reconocimientos!'
    ],
    'S': [
        'Si Sansón no sazona su salsa con sal, le sale sosa; le sale sosa su salsa a Sansón si la sazona sin sal.',
        'Susana, la secretaria, sellaba sobres sin cesar. Sellos y sobres, Susana los seleccionaba con sigilo. Seiscientos sesenta y seis sobres, Susana sellaba, sentada en su silla. ¡Sobres sellados los de Susana, la secretaria que seleccionaba con sigilo!',
        'Sergio, el sastre, cosía sacos de seda. Sedas y satenes, Sergio los seleccionaba con sabiduría. Sacos, chalecos y sombreros, Sergio cosía, con su saber y su aguja. ¡Sacos sublimes los de Sergio, el sastre que cosía con sedas y satenes!',
        'Sara, la sirena, surcaba los siete mares. Salpicando salitre, Sara seducía a los marineros. Sus cantos suaves y seductores, se oían a lo lejos. ¡Sirena seductora Sara, que surcaba los siete mares salpicando salitre!',
        'Simón, el soldado, servía en el servicio secreto. Silencioso y sigiloso, Simón se infiltraba en las filas enemigas. Secretos y sospechas, Simón descubría, con su astucia y su valor. ¡Soldado sigiloso Simón, que servía en el servicio secreto!',
        'Salomón, el sabio, solucionaba situaciones sumamente serias. Sus sentencias, siempre sensatas, sorprendían a sus súbditos. Siempre sonreía, mostrando su serenidad. ¡Sabio Salomón, solucionando situaciones serias con sentencias sensatas y sorprendente serenidad!'
    ],
    'T': [
        'Tengo una gallina pinta, piririnca, piriranca, con sus pollitos pintos, piririncos, pirirancos. Si ella no fuese pinta, piririnca, piriranca, no criaría los pollitos pintos, piririncos, pirirancos.',
        'Tomás, el torero, toreaba toros tremendos. Temple y talento, Tomás tenía para torear. Trajes de luces y capotes, Tomás lucía, en las tardes de toros. ¡Torero talentoso Tomás, que toreaba toros tremendos con temple y talento!',
        'Teresa, la tejedora, tejía tapices de tela. Telas y telares, Teresa tenía para tejer. Tapices de todos los tamaños, Teresa tejía, con sus manos de artista. ¡Tapices tremendos los de Teresa, la tejedora que tejía con telas y telares!',
        'Tito, el titiritero, tenía un teatro de títeres. Títeres de trapo y de tela, Tito tenía para sus funciones. Títeres que cantaban y bailaban, Tito presentaba, para el deleite de todos. ¡Títeres talentosos los de Tito, el titiritero!',
        'Tatiana, la taxista, transportaba turistas por toda la ciudad. Taxis y tarifas, Tatiana conocía a la perfección. Turistas de todas partes, Tatiana transportaba, con su trato amable y su sonrisa. ¡Taxista trabajadora Tatiana, que transportaba turistas por toda la ciudad!',
        'Timoteo, el tramoyista, transportaba trastos tras el telón. Tarimas, telones y taburetes. ¡Tanto trasto transportaba Timoteo, el tramoyista, tras el telón! Timoteo, trabajador tenaz, terminaba totalmente transpirado. ¡Tenaz tramoyista Timoteo, transportando trastos tras el telón!'
    ],
    'U': [
        'Un tubo tiraba un tubo y otro tubo lo detuvo. Hay tubos que tienen tubos pero este tubo no tuvo tubo.',
        'Úrsula, la usurera, usaba su fortuna para usurpar. Urgía a sus deudores, usando su poder sin escrúpulos. Un sinfín de víctimas, Úrsula acumulaba, con su usura y su crueldad. ¡Usurera universal Úrsula, que usaba su fortuna para usurpar!',
        'Ulises, el urbanista, urbanizaba una urbe única. Utilizaba técnicas ultramodernas, para una urbanización útil y universal. Una urbe para todos, Ulises diseñaba, con su ingenio y su visión. ¡Urbanista universal Ulises, que urbanizaba una urbe única con técnicas ultramodernas!',
        'Ubaldo, el ufólogo, buscaba OVNIs en el universo. Utilizaba un telescopio ultrapotente, para sus investigaciones. Un sinfín de noches, Ubaldo pasaba, buscando vida en otros mundos. ¡Ufólogo universal Ubaldo, que buscaba OVNIs en el universo con un telescopio ultrapotente!',
        'Urraca, la urraca, hurtaba objetos brillantes. Utilizaba su astucia, para sus hurtos urbanos. Un sinfín de joyas, Urraca acumulaba, en su nido de urraca. ¡Urraca universal, que hurtaba objetos brillantes con su astucia!',
        'Urbano, el último de la fila, usaba un uniforme único. Usurpaba usualmente el puesto de Uriel. ¡Urbano, el último de la fila, usando un uniforme único y usurpando usualmente el puesto de Uriel! ¡Qué usual usurpación la de Urbano!'
    ],
    'V': [
        'El vino vino, pero el vino no vino vino. El vino vino vinagre.',
        'Valeria, la violinista, vibraba con su violín. Valses y vivaldis, Valeria interpretaba con virtuosismo. Viajaba por el vasto mundo, llevando su música a todos los vientos. ¡Violinista virtuosa Valeria, que vibraba con su violín interpretando valses y vivaldis!',
        'Víctor, el viajero, visitaba villas y valles. Vientos y veredas, Víctor vencía con valentía. Vivencias y visiones, Víctor vivía, en sus viajes por el vasto mundo. ¡Viajero valiente Víctor, que visitaba villas y valles venciendo vientos y veredas!',
        'Verónica, la vendedora, vendía verduras frescas. Vainitas y berenjenas, Verónica vendía en su puesto. Voces y vítores, Verónica recibía, por sus verduras de primera. ¡Vendedora valiosa Verónica, que vendía vainitas y berenjenas frescas!',
        'Valentín, el veterinario, velaba por la vida de los animales. Vacas y venados, Valentín vacunaba con vocación. Victorias y vivencias, Valentín vivía, salvando vidas de animales. ¡Veterinario valiente Valentín, que velaba por la vida de vacas y venados!',
        'Vicente, el viticultor, vendimiaba verdes viñedos. Vaciaba vigorosamente las vides, vertiendo el vino en vasijas. ¡Valiosa vendimia la de Vicente, el viticultor que vendimiaba verdes viñedos y vertía el vino en vasijas! ¡Viva el vino de Vicente!'
    ],
    'W': [
        'Walter Walrus walrused with his walrus wife.',
        'Wendy, la webmaster, trabajaba en la World Wide Web. Websites y widgets, Wendy diseñaba con esmero. Waffles y whisky, Wendy consumía, mientras trabajaba en su web. ¡Webmaster trabajadora Wendy, que diseñaba websites y widgets en la World Wide Web!',
        'William, el windsurfista, volaba sobre las olas. Viento y velocidad, William dominaba con maestría. Wetsuit y tabla, William usaba, para sus aventuras en el agua. ¡Windsurfista valiente William, que volaba sobre las olas con viento y velocidad!',
        'Wanda, la escritora, escribía en su laptop. Word y Wikipedia, Wanda usaba para sus novelas. Whisky y walkman, Wanda tenía, para inspirarse mientras escribía. ¡Escritora trabajadora Wanda, que escribía en su laptop con Word y Wikipedia!',
        'Wallace, el wombat, vagaba por el bosque. Walabíes y walaroos, Wallace encontraba en su camino. Waterpolo y waterpolo, Wallace jugaba, en el arroyo del bosque. ¡Wombat aventurero Wallace, que vagaba por el bosque encontrando walabíes!',
        'Washington, el watchman, vigilaba el western warehouse. Walkie-talkie en mano, Washington vigilaba atentamente. ¡Watchman vigilante Washington, vigilando el western warehouse con su walkie-talkie! ¡Qué trabajo tan agotador el de Washington!'
    ],
    'X': [
        'Xilófono, xilofonista, xilofonía.',
        'Ximena, la xenófoba, exhibía una inexplicable xenofobia. Exageraba los defectos de los extranjeros, expresando su repudio con éxito. ¡Exagerada xenofobia la de Ximena, la xenófoba que exhibía su repudio con éxito! ¡Qué inexplicable xenofobia la de Ximena!',
        'Xóchitl, la xochimilca, navegaba en su trajinera. Xilófonos y marimbas, se oían en el paseo. Xochimilco, un lugar mágico, donde Xóchitl vivía feliz. ¡Xochimilca feliz Xóchitl, que navegaba en su trajinera entre xilófonos y marimbas!',
        'Xavier, el taxista, conducía su taxi por Xalapa. Xalapeños y turistas, Xavier transportaba con esmero. ¡Excelente taxista Xavier, que conducía su taxi por Xalapa transportando xalapeños y turistas! ¡Xavier, el taxista experto de Xalapa!',
        'Xenón, el gas noble, existe en la atmósfera. Xilografía y xerografía, son técnicas de impresión. ¡Extrañas palabras con X, como xenón, xilografía y xerografía! ¡Qué léxico tan extenso!',
        'Xerxes, el monarca, examinaba los textos del hexateuco. Exigía explicaciones exactas, exasperando a los exégetas. Su éxito era axiomático. ¡Exigente Xerxes, examinando los textos del hexateuco y exasperando a los exégetas con sus exactas exigencias!'
    ],
    'Y': [
        'Yo no quiero que tú me quieras porque yo te quiero a ti. Queriéndome o sin quererme, yo te quiero porque sí.',
        'Yolanda, la yeyé, ya no baila el yeyé. Yace en su yate, comiendo yogur y yemas. ¡Y qué yate yeyé el de Yolanda, la yeyé que ya no baila el yeyé y yace comiendo yogur y yemas! ¡Pobre Yolanda yeyé!',
        'Yayo, el payaso, ya no hace payasadas. Yace en el hospital, con un yeso en el pie. ¡Y qué yeso tan grande el de Yayo, el payaso que ya no hace payasadas y yace en el hospital! ¡Pronta recuperación para Yayo!',
        'Yara, la yegua, ya no corre por el campo. Yace en el establo, comiendo yerba y yuca. ¡Y qué yegua tan perezosa Yara, que ya no corre por el campo y yace en el establo comiendo yerba y yuca! ¡Vamos, Yara, a correr!',
        'Yago, el yudoca, ya no practica judo. Yace en el tatami, con un esguince en el tobillo. ¡Y qué esguince tan inoportuno el de Yago, el yudoca que ya no practica judo y yace en el tatami! ¡Ánimo, Yago!',
        'Yeyo, el playero, yacía en la playa de Yucatán. Ayer comió yuca yoyó y hoy yace harto. ¡Pobre Yeyo, el playero, que yacía en la playa de Yucatán harto de yuca yoyó! ¡Ya no más yuca para Yeyo!'
    ],
    'Z': [
        'Zorro, zorro, pide socorro con un gorro.',
        'Zacarías, el zapatero, zapateaba en su zapatería. Zapatos y zapatillas, Zacarías arreglaba con celo. Zumbidos y zapateos, se oían en la zapatería de Zacarías. ¡Zapatero trabajador Zacarías, que zapateaba en su zapatería arreglando zapatos y zapatillas con celo!',
        'Zoila, la zoóloga, cuidaba de los animales del zoológico. Zorrillos y zarigüeyas, Zoila alimentaba con esmero. Zarpazos y zumbidos, Zoila esquivaba, con su amor por los animales. ¡Zoóloga valiente Zoila, que cuidaba de zorrillos y zarigüeyas!',
        'Zenón, el zanquero, caminaba por la plaza. Zancos y zapatillas, Zenón usaba para su espectáculo. Zancadas y saltos, Zenón daba, para el deleite de la gente. ¡Zanquero ágil Zenón, que caminaba por la plaza con zancos y zapatillas!',
        'Zulema, la zalamera, zalamereaba a todo el mundo. Zalamerías y zumbas, Zulema decía sin cesar. ¡Zalamera empedernida Zulema, que zalamereaba a todo el mundo con sus zalamerías y zumbas! ¡Cuidado con Zulema!',
        'El zepelín de Ezequiel zigzagueaba sobre Zaragoza. Zozobraba y zumbaba, amenazando con un zarpazo. ¡Qué zozobra la del zepelín de Ezequiel, que zigzagueaba y zumbaba sobre Zaragoza! ¡Sálvese quien pueda del zarpazo!'
    ]
};

    alphabet.forEach(letter => {
        const letterElement = document.createElement('div');
        letterElement.classList.add('alphabet-letter');
        letterElement.dataset.letter = letter;
        letterElement.textContent = letter;
        letterElement.addEventListener('click', () => {
            showTrabalenguas(letter);
        });
        alphabetContainer.appendChild(letterElement);

        const trabalenguasItem = document.createElement('div');
        trabalenguasItem.classList.add('trabalenguas-item');
        trabalenguasItem.id = `trabalenguas-${letter}`;
        
        const heading = document.createElement('h3');
        heading.textContent = letter;
        trabalenguasItem.appendChild(heading);

        const paragraphs = trabalenguas[letter];
        if (paragraphs) {
            paragraphs.forEach((p, index) => {
                const card = document.createElement('div');
                card.classList.add('trabalenguas-card');
                card.dataset.letter = letter;
                card.dataset.index = index;

                const paragraph = document.createElement('p');
                paragraph.textContent = p;
                card.appendChild(paragraph);

                const buttonWrapper = document.createElement('div');
                buttonWrapper.classList.add('button-wrapper');
                const button = document.createElement('button');
                button.classList.add('completed-button');
                button.textContent = 'Marcar como hecho';
                button.addEventListener('click', () => {
                    toggleCompleted(letter, index);
                });
                buttonWrapper.appendChild(button);
                card.appendChild(buttonWrapper);

                trabalenguasItem.appendChild(card);
            });
        }
        
        trabalenguasContainer.appendChild(trabalenguasItem);
    });

    function showTrabalenguas(letter) {
        const allTrabalenguas = document.querySelectorAll('.trabalenguas-item');
        allTrabalenguas.forEach(item => {
            item.classList.remove('active');
        });

        const selectedTrabalenguas = document.getElementById(`trabalenguas-${letter}`);
        if (selectedTrabalenguas) {
            selectedTrabalenguas.classList.add('active');
        }

        const allLetters = document.querySelectorAll('.alphabet-letter');
        allLetters.forEach(item => {
            item.classList.remove('active');
        });

        const selectedLetter = document.querySelector(`.alphabet-letter[data-letter="${letter}"]`);
        if (selectedLetter) {
            selectedLetter.classList.add('active');
        }
    }

    function createSparks(element) {
        for (let i = 0; i < 20; i++) {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            spark.style.top = `${Math.random() * 100}%`;
            spark.style.left = `${Math.random() * 100}%`;
            spark.style.animationDelay = `${Math.random() * 0.5}s`;
            element.appendChild(spark);
            setTimeout(() => {
                spark.remove();
            }, 1000);
        }
    }

    function toggleCompleted(letter, index) {
        const card = document.querySelector(`.trabalenguas-card[data-letter="${letter}"][data-index="${index}"]`);
        if (card) {
            card.classList.toggle('completed');
            const button = card.querySelector('.completed-button');
            if (card.classList.contains('completed')) {
                button.textContent = 'Desmarcar';
                createSparks(card);
            } else {
                button.textContent = 'Marcar como hecho';
            }
            saveCompletedStatus();
        }
    }

    function saveCompletedStatus() {
        const completed = [];
        const completedCards = document.querySelectorAll('.trabalenguas-card.completed');
        completedCards.forEach(card => {
            completed.push({
                letter: card.dataset.letter,
                index: card.dataset.index
            });
        });
        localStorage.setItem('completedTrabalenguas', JSON.stringify(completed));
    }

    function loadCompletedStatus() {
        const completed = JSON.parse(localStorage.getItem('completedTrabalenguas'));
        if (completed) {
            completed.forEach(item => {
                const card = document.querySelector(`.trabalenguas-card[data-letter="${item.letter}"][data-index="${item.index}"]`);
                if (card) {
                    card.classList.add('completed');
                    const button = card.querySelector('.completed-button');
                    if (button) {
                        button.textContent = 'Desmarcar';
                    }
                }
            });
        }
    }

    loadCompletedStatus();

});
