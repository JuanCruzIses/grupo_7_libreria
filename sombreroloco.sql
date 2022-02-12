-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-02-2022 a las 18:04:51
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sombreroloco`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `autores`
--

CREATE TABLE `autores` (
  `autor_id` int(11) NOT NULL,
  `autor_nombre` varchar(100) DEFAULT NULL,
  `autor_biografia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `autores`
--

INSERT INTO `autores` (`autor_id`, `autor_nombre`, `autor_biografia`) VALUES
(1, 'San Román, José L.', NULL),
(2, 'Larenn, Luz', 'Luz Larenn es la escritora detrás de @elpatiodepochi, con decenas de miles de seguidores que celebraron sus novelas cortas Doble L, Los 28 días de Julia y Felicitas busca ser feliz, difundidas por las redes sociales. \r\nLuz llegó al mundo en 1986 y al poco tiempo ya estaba entre libros. Lectora ávida, comenzó a escribir en su adolescencia cuando, a los quince años, su profesora de Literatura la alentó a participar en un concurso de cuentos. Desde entonces ha participado activamente en numerosos talleres de escritura creativa. Es licenciada en Relaciones Públicas y ha trabajado como capacitadora y coach en empresas. Es mamá de Juana, esposa de Lito y dueña de India y Napoleón. '),
(3, 'Christie, Agatha', 'Agatha Mary Clarissa Miller (15 de septiembre de 1890 - 12 de enero de 1976), más conocida por el pseudónimo de Agatha Christie, fue una escritora y dramaturga británica especializada en el género policial, por cuyo trabajo tuvo reconocimiento a nivel internacional. A lo largo de su carrera, publicó 66 novelas policiales, 6 novelas rosas y 14 historias cortas —bajo el pseudónimo de Mary Westmacott—, además de incursionar como autora teatral en obras como La ratonera o Testigo de cargo.\nNacida en una familia de clase media alta, recibió una educación privada hasta su adolescencia y estudió en diversos institutos de París. Mientras trabajaba como enfermera durante la Primera Guerra Mundial, escribió su primera novela, El misterioso caso de Styles (1920), donde introdujo por primera vez el personaje del detective Hércules Poirot.'),
(4, 'Conan Doyle, Arthur', 'Arthur Ignatius Conan Doyle (22 de mayo de 1859 - 7 de julio de 1930) fue un escritor y médico británico, creador del célebre detective de ficción Sherlock Holmes. Fue un autor prolífico cuya obra incluye relatos de ciencia ficción, novela histórica, teatro y poesía.'),
(5, 'Silvera, Adam', 'Nació y se crió en el barrio del Bronx de Nueva York. Ha trabajado en la industria editorial como librero de literatura infantil, auxiliar de marketing en una empresa de promoción literaria y crítico de novelas infantiles y juveniles. Su primera novela, No me olvides (More happy than not), ha recibido excelentes críticas y numerosas menciones en prestigiosas publicaciones.'),
(6, 'Meyer, Marissa', 'Marissa Meyer es una escritora estadounidense nacida en Tacoma, sus obras más conocidas son las novelas Cinder y Winter primer y ante penúltimo libro de la saga literaria futurista Crónicas Lunares.'),
(7, 'Rowling, J. K.', 'Joanne Rowling (Yate, 31 de julio de 1965), quien escribe bajo los seudónimos J. K. Rowling y Robert Galbraith, es una escritora, productora de cine y guionista británica, conocida por ser la autora de la serie de libros Harry Potter, que han superado los quinientos millones de ejemplares vendidos.\r\nEste éxito literario supuso que la Sunday Times Rich List de 2008 estimase la fortuna de Rowling en 560 millones de libras, lo que la situó como la duodécima mujer más rica en el Reino Unido. Asimismo, Forbes ubicó a Rowling en el cuadragésimo puesto en su lista de las celebridades más poderosas de 20075 y la revista Time la seleccionó como «personaje del año» ese mismo año, resaltando la inspiración social, moral y política que les ha dado a los personajes de Harry Potter.\r\nRowling es una conocida filántropa que apoya instituciones de caridad como Comic Relief, One Parent Families y Multiple Sclerosis Society of Great Britain.'),
(8, 'Tajes, Magali', 'Magalí Giselle Tajes Parga (Buenos Aires, Argentina, 25 de octubre de 1988), más conocida como Magalí Tajes, es una escritora, comediante y psicóloga argentina que alcanzó gran popularidad tanto en su país como en Sudamérica (especialmente en Uruguay, Chile, Paraguay y Bolivia), con la característica de haberse hecho reconocida a través de su labor en redes sociales, especialmente Instagram. Sus seguidores son en su mayoría jóvenes de entre 18 y 35 años.'),
(9, 'Brooks-Dalton, Lily', 'Lily Brooks-Dalton nació y creció en Vermont, rodeada de amplios bosques y montañas. Quizá por eso su capacidad descriptiva de los entornos naturales sea tan increíblemente precisa y exuberante. Y quizá por esto último tomase la lucidísima decisión de comenzar a escribir: su primer libro, Motorcycles I’ve Loved (Riverhead, 2014), fue finalista de los Oregon Book Award. En él hace un repaso autobiográfico de su juventud a lomos de una motocicleta, su gran pasión. Su segundo libro, Good Morning, Midnight, la descubre como una novelista de un talento fuera de lo común, y ha sido traducida a una docena de idiomas,además de adaptada a la gran pantalla con George Clooney en la dirección. Quizá la novela más bella sobre un mundo que se termina y que, pese a todo, merece la pena habitar.'),
(10, 'Hatum, Andrés', 'Andrés Hatum es PhD de Warwick Business School en Inglaterra y profesor e la Escuela de Negocios de la Universidad Torcuato Di Tella. Ha escrito varios libros, como Mastering Creativity in Organizations (Edward Elgar, 2017), The New Workforce Challenge (Palgrave Macmillan, 2013) y Next Generation Talent Management (Palgrave Macmillan, 2010). Sus últimos libros en español son El antilíder (Vergara, 2018), Carreras extraordinarias para gente común (Vergara, 2019) y Gestión de personas en organizaciones innovadoras (Granica, 2021). Además, es consultor y colaborador en el diario La Nación y en el canal LN+.'),
(11, 'Hawkins, Paula', 'Paula Hawkins (Salisbury, Rodesia, 26 de agosto de 1972) es una periodista y escritora británica, también escribió bajo el seudónimo de Amy Silver, es la autora de las novelas La chica del tren, Escrito en el agua y A fuego lento.'),
(12, 'Jordan, Robert', 'Escritor americano, Robert Jordan fue el seudónimo utilizado por James Oliver Rigney para su carrera literaria, centrada en el género de la fantasía. Diplomado en Física en The Citadel, Jordan se alistó en el ejército de los Estados Unidos, participando durante este período en la guerra de Vietnam. Cuando regresó de allí se dedicó a la escritura.'),
(13, 'Gutierrez, Luci', 'Nació en Barcelona en 1977, y toma relaciones amorosas, la seducción y el comportamiento humano como inspiración.\r\n\r\nInició su carrera en 2007 para diarios como The New Yorker, The New York Times, Washington Post y The Wall Street Journal. En ese año, Luci residió una temporada en Nueva York y desde entonces también colabora con Newsweek, Forbes o Harvard Business Review.\r\nEgresada de la escuela La Massana de Barcelona, trabaja en publicidad, prensa y edición.\r\nSus intervenciones hechas a pulso con pincel digital, resaltan en las ilustraciones eróticas de Kamasutra o English is not easy.'),
(14, 'Smith, Wilbur', 'Wilbur Addison Smith (Broken Hill, 9 de enero de 1933-Ciudad del Cabo, 13 de noviembre de 2021) fue un escritor de novelas de aventuras, autor de superventas sudafricano. Sus relatos incluyen algunos ambientados en los siglos XVI y XVII sobre los procesos fundacionales de los estados del sur de África y aventuras e intrigas internacionales relacionadas con estos asentamientos. Sus libros por lo general pertenecen a una de tres series o sagas. Estas obras, que en parte son ficción, explican en parte el apogeo e influencia histórica de los blancos neerlandeses y británicos en el sur de África quienes acaban por proclamar este territorio rico en diamantes y oro como su hogar.'),
(15, 'Sanchez-Garnica, Paloma', '(Madrid, 1962) Es licenciada en Derecho y Geografía e Historia. Autora de El gran arcano (2006) y La brisa de Oriente (2009), su novela El alma de las piedras (2010) tuvo un gran éxito entre los lectores. Las tres heridas (2012) y, sobre todo, La sonata del silencio (2014), de la que se hizo una adaptación para una serie en TVE, supusieron su consagración entre la crítica y los lectores como una escritora de gran personalidad literaria. Con Mi recuerdo es más fuerte que tu olvido, de la que se han publicado cinco ediciones y que se ha traducido para todos los países de habla inglesa, obtuvo el Premio de Novela Fernando Lara 2016. Su última novela, La sospecha de Sofía (2019), que cuenta ya con diecinueve ediciones, ha confirmado una vez más la exitosa carrera literaria de Paloma Sánchez-Garnica.'),
(16, 'Dolina, Alejandro', 'Alejandro Ricardo Dolina (Morse, 20 de mayo de 1944) es un escritor, músico, conductor de radio y de televisión y actor argentino. Realizó estudios de derecho, música, letras e historia. Es principalmente conocido dentro y fuera de su país por sus obras literarias y su clásico programa radial La venganza será terrible.'),
(17, 'Sierra, Jordi i Fabra', 'Jordi Sierra i Fabra(Barcelona, 26 de julio de 1947) es un escritor español. Sus obras de literatura infantil y juvenil se han publicado en España y América Latina. También ha sido un estudioso de la música pop desde finales de los años 60. Fue uno de los fundadores del programa de la Cadena Ser \"El Gran Musical\".'),
(18, 'Matthews, Rupert O.', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE `generos` (
  `genero_id` int(11) NOT NULL,
  `genero_descripcion` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`genero_id`, `genero_descripcion`) VALUES
(1, 'Policiales'),
(2, 'Juveniles'),
(3, 'Humor'),
(4, 'Novelas'),
(5, 'Infantiles');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(10) UNSIGNED NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `item_libro_id` int(10) NOT NULL,
  `unit_price` int(10) UNSIGNED NOT NULL,
  `subtotal` int(10) UNSIGNED NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `items`
--

INSERT INTO `items` (`id`, `product_name`, `item_libro_id`, `unit_price`, `subtotal`, `quantity`, `image`, `user_id`, `order_id`, `createdAt`, `updatedAt`) VALUES
(81, 'VIEJAS DEUDAS', 0, 1780, 5340, 3, 'viejas-deudas.jpg', 19, 53, '2022-02-03 06:09:59', '2022-02-03 06:09:59'),
(82, 'ASESINATO EN EL ORIENTE EXPRESS', 0, 1000, 2000, 2, 'asesinato-oriente.jpg', 19, 53, '2022-02-03 06:09:59', '2022-02-03 06:09:59'),
(83, 'Á(R)MAME', 0, 2800, 16800, 6, 'armame.jpg', 19, 54, '2022-02-03 06:42:59', '2022-02-03 06:42:59'),
(84, 'HARRY POTTER Y LA PIEDRA FILOSOFAL', 0, 1899, 7596, 4, 'harry-potter.jpg', 19, 54, '2022-02-03 06:28:17', '2022-02-03 06:28:17'),
(85, 'ENGLISH IS NOT EASY', 0, 2750, 11000, 4, 'english-not-easy.jpg', 19, 54, '2022-02-03 06:28:17', '2022-02-03 06:28:17'),
(86, 'Á(R)MAME', 0, 2800, 16800, 6, 'armame.jpg', 19, 55, '2022-02-03 06:43:14', '2022-02-03 06:43:14'),
(87, 'VIEJAS DEUDAS', 1, 1780, 7120, 4, 'viejas-deudas.jpg', 19, 55, '2022-02-03 06:43:14', '2022-02-03 06:43:14'),
(88, 'CAOS', 26, 1999, 3998, 2, 'caos.jpg', 19, 55, '2022-02-03 06:43:14', '2022-02-03 06:43:14'),
(89, 'Á(R)MAME', 20, 2800, 2800, 1, 'armame.jpg', 19, 56, '2022-02-03 06:46:29', '2022-02-03 06:46:29'),
(90, 'RENEGADOS', 24, 1399, 1399, 1, 'renegados.jpg', 19, 56, '2022-02-03 06:46:29', '2022-02-03 06:46:29'),
(91, 'CAOS', 26, 1999, 1999, 1, 'caos.jpg', 19, 56, '2022-02-03 06:46:29', '2022-02-03 06:46:29'),
(92, 'Á(R)MAME', 20, 2800, 16800, 6, 'armame.jpg', 19, 58, '2022-02-03 06:48:40', '2022-02-03 06:48:40'),
(93, 'Á(R)MAME', 20, 2800, 14000, 5, 'armame.jpg', 19, 59, '2022-02-03 06:52:38', '2022-02-03 06:52:38'),
(94, 'ASESINATO EN EL ORIENTE EXPRESS', 21, 1000, 6000, 6, 'asesinato-oriente.jpg', 19, 60, '2022-02-03 06:53:22', '2022-02-03 06:53:22'),
(95, 'Á(R)MAME', 20, 2800, 2800, 1, 'armame.jpg', 19, 61, '2022-02-03 06:56:07', '2022-02-03 06:56:07'),
(96, 'VIEJAS DEUDAS', 1, 1780, 1780, 1, 'viejas-deudas.jpg', 19, 62, '2022-02-03 07:01:42', '2022-02-03 07:01:42'),
(97, 'VIEJAS DEUDAS', 1, 1780, 1780, 1, 'viejas-deudas.jpg', 19, 63, '2022-02-03 07:04:04', '2022-02-03 07:04:04'),
(98, 'VIEJAS DEUDAS', 1, 1780, 1780, 1, 'viejas-deudas.jpg', 19, 64, '2022-02-03 07:07:50', '2022-02-03 07:07:50'),
(99, 'VIEJAS DEUDAS', 1, 1780, 23140, 13, 'viejas-deudas.jpg', 19, 65, '2022-02-03 07:10:47', '2022-02-03 07:10:47'),
(100, 'HARRY POTTER Y LA PIEDRA FILOSOFAL', 25, 1899, 1899, 1, 'harry-potter.jpg', 20, 66, '2022-02-03 15:13:14', '2022-02-03 15:13:14'),
(107, 'CAOS', 26, 1999, 7996, 4, 'caos.jpg', 20, 67, '2022-02-05 07:52:58', '2022-02-05 07:52:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `libro_id` int(11) NOT NULL,
  `libro_genero_id` int(11) DEFAULT NULL,
  `libro_subgenero_id` int(11) DEFAULT NULL,
  `libro_autor_id` int(11) DEFAULT NULL,
  `libro_titulo` varchar(60) DEFAULT NULL,
  `libro_sinopsis` text DEFAULT NULL,
  `libro_paginas` int(11) DEFAULT NULL,
  `libro_editorial` varchar(50) DEFAULT NULL,
  `libro_precio` decimal(10,0) DEFAULT NULL,
  `libro_imagen` varchar(60) NOT NULL,
  `libro_stock` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`libro_id`, `libro_genero_id`, `libro_subgenero_id`, `libro_autor_id`, `libro_titulo`, `libro_sinopsis`, `libro_paginas`, `libro_editorial`, `libro_precio`, `libro_imagen`, `libro_stock`) VALUES
(1, 1, NULL, 1, 'VIEJAS DEUDAS', 'Un juez es hallado muerto en su casa, en lo que parece un crimen en ocasión de robo. No será fácil para el subcomisario Muran descubrir lo que realmente ha ocurrido. Dos historias paralelas transcurren entre los violentos años setenta y nuestro pasado reciente. Hay viejas deudas por saldar. Martín Muran sabe que cuanto más tiempo pase, menos probabilidades tiene de resolver un caso. En pocos días recorre lugares, interroga a sospechosos y acude a personas de confianza que lo ayudan a completar el rompecabezas. Siendo muy joven, en una encrucijada de su vida y sin medios económicos, había decidido ingresar a la academia de policía porque necesitaba un sueldo para sostenerse y además le daban la oportunidad de estudiar. Sin embargo, pronto se dio cuenta de que era un rastreador y un cazador nato, y se enamoró de su profesión. En pocos años se transformó en uno de los mejores detectives de homicidios. Muran es un hombre de piel dura, que no transa con el crimen, aunque a veces esto implique lidiar con sus superiores y con el establishment y hasta poner en riesgo su propia vida.', 230, 'PUCK', '1780', 'viejas-deudas.jpg', 30),
(20, 1, NULL, 2, 'Á(R)MAME', 'Dos mujeres, dos tiempos, un mismo crimen. Sin familia ni amigos y con licencia por estrés, la psicóloga Audrey Jordan se desliza lenta pero segura a la depresión. Hasta que un día, cuando menos se lo espera, un mensaje anónimo y el asesinato de una joven extrañamente parecida a ella le dan la posibilidad de asumir una nueva identidad. ¿Es posible reinventarnos? ¿Puede un giro del destino borrar nuestras acciones y elecciones, y las de nuestros padres? ¿O siempre habrá algo oscuro y persistente que nos persiga? Un thriller que no puede dejar de leerse y mantiene al lector en vilo, narrado con ritmo muy ágil y diálogos inteligentes. Una novela que sostiene el suspenso y la intriga, que se cruzan con conflictos personales que acechan desde el pasado, hasta un final sorprendente.', 290, 'BOOKET', '2800', 'armame.jpg', 30),
(21, 1, NULL, 3, 'ASESINATO EN EL ORIENTE EXPRESS', 'Un grupo de viajeros se ven atrapados en el Orient Express en plena tormenta de nieve. Entre ellos pronto se descubre un cadáver. El asesino tiene que ser uno de los presentes. Al detective más famoso de la historia le corresponde averiguar quién ha cometido el crimen.', 200, 'BOOKET', '1000', 'asesinato-oriente.jpg', 23),
(22, 1, NULL, 4, 'EL ARCHIVO DE SHERLOCK HOLMES', 'Sherlock Holmes es el detective más famoso de todos los tiempos. Alto, delgado, terriblemente inteligente, el solitario inglés sólo hallaba remedio a su aburrimiento resolviendo los casos policiales más complejos. El archivo de Sherlock Holmes (1927) es el último libro del gran detective, que sigue sorprendiendo con sus brillantes deducciones. Reúne los relatos “La aventura del cliente ilustre”, “La aventura del soldado de la piel decolorada”, “La aventura de la piedra preciosa de Mazarino”, “La aventura de Los Tres Gabletes”, “El vampiro de Sussex”, “La aventura de los tres Garrideb”, “El problema del puente de Thor”,  “La aventura del hombre que reptaba”, “La aventura de la melena del león”, “La aventura de la inquilina del velo”, “La aventura de Shoscombe Old Place” y “La aventura del fabricante de colores retirado”.', 352, 'PUCK', '1130', 'img-1640977490879.jpg', 30),
(24, 2, NULL, 6, 'RENEGADOS', 'Identidades secretas; poderes extraordinarios. Ella quiere venganza; él justicia. Los Renegados son un sindicato de prodigios; humanos con habilidades extraordinarias; quienes surgieron de las ruinas de una sociedad destrozada y establecieron paz y orden donde reinaba el caos. Como campeones de la justicia; ellos son un símbolo de esperanza y coraje para todos; excepto para los villanos que alguna vez derrocaron. Nova tiene una razón para odiar a los Renegados; y tiene como misión la venganza. A medida que se acerca a su objetivo; conoce a Adrian; un Renegado que cree en la justicia y en Nova. Pero la lealtad de ella pertenece a un villano que tiene el poder de destruirlos a ambos. De la autora No. 1 de The New York Times; Marissa Meyer; llega un mundo pleno de aventuras; pasión; peligros y traiciones.', 584, 'VRYA', '1399', 'renegados.jpg', 30),
(25, 2, NULL, 7, 'HARRY POTTER Y LA PIEDRA FILOSOFAL', 'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Se siente muy triste y solo; hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento; la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos; trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch; especie de fútbol aéreo que se juega montado sobre escobas; y hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero; sobre todo; conocerá los secretos que le permitirán cumplir con su destino. Pues; aunque no lo parezca a primera vista; Harry no es un chico común y corriente. ¡Es un verdadero mago!', 288, 'SALAMANDRA BOLSILLO', '1899', 'harry-potter.jpg', 30),
(26, 2, NULL, 8, 'CAOS', '¿Cuántos muros se tienen que saltar para llegar a un puente? ¿Cuántos universos hay que dejar morir para que nazca el propio? Caos. Una fiesta; varias habitaciones; tres tiempos: pasado errático; presente mágico; futuro incierto. Puertas que abren mundos y cierran miedos. Cinco colores jugando a adivinar de qué color pintás la vida. Historias dentro de historias. Disfraces desnudos. La risa como revolución. Miradas que buscan ojos en los que reconocerse. Espejos y corazones rotos. Caos. Mucho caos. Todas las personas que habitan en mí sacando a bailar a las que habitan en vos. ¡Que empiece la fiesta!', 240, 'SUDAMERICANA', '1999', 'caos.jpg', 30),
(27, 2, NULL, 9, 'EL CIELO DE MEDIANOCHE', 'Quizá la novela más bella sobre un mundo que se termina y que, pese a todo, merece la pena habitar. Augie es el último astrónomo en el Ártico. Todos los demás se han ido. Quedarse ya no es seguro, pero Augie no piensa irse a ningún otro sitio. Hasta que aparece Iris, una niña poco habladora y ajena al fin que parece acercarse, y las cosas cambian. ¿Cómo sacará a la niña de la región helada? Su única esperanza es una vieja radio, pero nadie recoge la senñal...Sully está, junto a sus colegas astronautas, perdida en el espacio. La misio´n espacial Aether lleva dos años en órbita y ahora espera instrucciones para el regreso a Tierra. Salvo que esas instrucciones no llegan, solo hay silencio. ¿Por qué todo el mundo en la Tierra parece haber desaparecido? Puede que, a estas alturas, Augie y Sully sean las únicas personas delante de una radio. Si tan solo consiguiesen contactar, tal vez lograsen ayudarse el uno al otro. Tal vez, con suerte, Sully e Iris podrían volver a casa. Y Augie encontrar la suya.', 103, 'BLACKIE BOOKS', '1980', 'cielo-medianoche.jpg', 30),
(29, 1, NULL, 11, 'LA CHICA DEL TREN', 'La chica del tren nos cuenta la historia de Rachel, una mujer con mil conflictos internos a cuestas, con problemas que retumban día a día en su cabeza, con un pasado que la persigue y la atormenta, con una vida que no la alimenta, sino que se la va tragando a cada segundo.', 192, 'BOOKET', '1400', 'chica-del-tren.jpg', 30),
(30, 2, NULL, 12, 'LA RUEDA DEL TIEMPO 2 (La gran cacería)', 'Rand ha sobrevivido a su primer enfrentamiento con los perversos seguidores del Oscuro, pero ni sus amigos ni él están a salvo, ya que el Señor del mal ha liberado a los Renegados, mientras los héroes de todas las eras se levantan de la tumba cuando el Cuerno de Valere los saca de su sueño. Al verse obligado a enfrentarse a las fuerzas de la oscuridad, Rand decide escapar de su destino. Pero la profecía tiene que cumplirse. Cada día que pasa aumenta la fuerza del Oscuro, que lucha con empeño por destruir su arcaica prisión para acabar con la Rueda y poner fin al tiempo. Si nadie se lo impide, hará añicos el Entramado que sustenta la realidad y el mundo estará perdido para siempre. Así pues, mientras Rand huye, el Entramado lo acerca a su sino… Por su calidad literaria, su ambicioso planteamiento y su monumental historia, La Rueda del Tiempo es la saga de fantasía más importante de los últimos años. El lector que inicie el camino junto a Rand, Mat y Perrin no podrá abandonar el viaje hasta su incierto y sorprendente final.', 720, 'MINOTAURO', '2490', 'rueda-del-tiempo.jpg', 30),
(31, 3, NULL, 13, 'ENGLISH IS NOT EASY', 'English Is Not Easy enlaza con extraordinario sentido del humor situaciones, dibujos y conceptos para que pases un rato genial mientras descubres que el inglés no es tan imposible de dominar como parece. En la vida hay quienes tienen facilidad para cocinar, cantar o hablar otra lengua, aunque también existen los que queman hasta el agua, los que desafinan incluso cuando tararean o los que a pesar de poner todo su esfuerzo —y dinero— no logran aprender otro idioma. Es muy probable que si tú tienes este libro entre las manos pertenezcas al último tipo de personas y estés harto de no avanzar. Luci Gutiérrez, la ilustradora estrella de publicaciones como The New Yorker y The New York Times, tenía el mismo problema y, a pesar de tomar cursos de verano, contratar a todos los profesores disponibles o viajar hasta el corazón mismo de la Gran Manzana para aprender in situ, todo parecía cada vez más confuso, así que comenzó a dibujar sus lecciones para recordarlas con facilidad.', 344, 'EDITORIAL PLANETA', '2750', 'english-not-easy.jpg', 30),
(32, 4, NULL, 14, 'LA GUERRA DE COURTNEY', 'Saffron Courtney y Gerhard von Meerbach parecen bendecidos por los dioses: bellos, ricos, enamorados. Pero, a poco de conocerse, Hitler desata sus fuerzas contra Polonia. Dos días más tarde, Gran Bretaña declara la guerra a Alemania y el horror explota en todo el mundo. De un momento al otro, los amantes se ven obligados a separarse y a luchar por sus vidas. Pese a su rechazo por el régimen, Gerhard pelea por Alemania, su patria, con el propósito secreto de hallar la forma de liberarla de Hitler. Pero cuando la unidad militar bajo su comando entra al infierno de la batalla de Stalingrado, comprende que sus chances de sobrevivir son escasas. Mientras tanto Saffron, recrutada por la Dirección de Operaciones Especiales para investigar cómo los nazis han infiltrado las redes aliadas, se convierte en blanco de la persecución del más despiadado de los espías. Enfrentados al mal en sus formas más espantosas, tendrán que tomar la decisión más difícil: sacrificarse por la causa o intentarlo todo para volver a estar juntos. Esperada secuela del gran bestseller Grito de guerra, esta nueva novela de Wilbur Smith retoma la célebre saga Courtney. La guerra de Courtney sumerge a los lectores en una historia épica y vibrante, con el sello inconfundible del maestro de la novela de aventuras.', 424, 'EMECÉ EDITORES', '2790', 'guerra-de-courtney.jpg', 30);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `pedido_id` int(11) NOT NULL,
  `pedido_usuario_id` int(11) DEFAULT NULL,
  `pedido_precio` decimal(10,0) DEFAULT NULL,
  `pedido_metodo_pago` varchar(60) DEFAULT NULL,
  `pedido_direccion` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`pedido_id`, `pedido_usuario_id`, `pedido_precio`, `pedido_metodo_pago`, `pedido_direccion`) VALUES
(53, 19, '7340', '1', 'santander 65, CP:1727, marcos paz, BA, AR'),
(54, 19, '26996', '1', 'brandsen 65, CP:1727, marcos paz, BA, AR'),
(55, 19, '27918', '1', 'santander 65, CP:1727, marcos paz, BA, AR'),
(56, 19, '6198', '1', 'santander 65, CP:1723, merlo, mariano acosta, BA, AR'),
(57, 19, '6800', '1', 'santander 65, CP:1723, merlo, mariano acosta, BA, AR'),
(58, 19, '16800', '1', 'santander 65, CP:1723, merlo, mariano acosta, BA, AR'),
(59, 19, '14000', '1', 'santander 65, CP:1727, marcos paz, BA, AR'),
(60, 19, '6000', '1', 'santander 65, CP:1727, marcos paz, BA, AR'),
(61, 19, '2800', '1', 'santander 65, CP:1727, marcos paz, BA, AR'),
(62, 19, '1780', '1', 'santander 65, CP:1727, marcos paz, BA, AR'),
(63, 19, '1780', '2', 'santander 65, CP:1727, marcos paz, BA, AR'),
(64, 19, '1780', '1', 'santander 65, CP:1727, marcos paz, BA, AR'),
(65, 19, '23140', '1', 'santander 65, CP:1727, marcos paz, BA, AR'),
(66, 20, '1899', '2', 'SANTANDER 881, CP:1723, Merlo, Mariano Acosta, BA, AR'),
(67, 20, '7996', '1', 'sana 661, CP:1723, Merlo, Mariano Acosta, BA, AR');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `questions_pregunta` varchar(200) NOT NULL,
  `questions_respuesta` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `questions`
--

INSERT INTO `questions` (`id`, `questions_pregunta`, `questions_respuesta`) VALUES
(12, 'Quienes Somos?', 'Somos una empresa dedicada a la venta de libros.'),
(13, 'Donde  estamos ubicados?', 'Estamos ubicados en avenida santafe al 5000.'),
(14, 'Desea comunicarse con nosotros?', 'Puede hacerlo de Lunes a Viernes , de las 09 hs a las 21 hs. Horario de corrido.'),
(75, 'hgfhfghfg???', 'hfghfghfghgfhfghfgh');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `rol_id` int(11) NOT NULL DEFAULT 2,
  `rol_descripcion` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`rol_id`, `rol_descripcion`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subgeneros`
--

CREATE TABLE `subgeneros` (
  `subgenero_id` int(11) NOT NULL,
  `subgenero_descripcion` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario_id` int(11) NOT NULL,
  `usuario_nombre` varchar(20) NOT NULL,
  `usuario_apellido` varchar(20) NOT NULL,
  `usuario_email` varchar(30) NOT NULL,
  `usuario_contrasenia` varchar(60) NOT NULL,
  `usuario_rol_id` int(11) NOT NULL,
  `usuario_imagen` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `usuario_nombre`, `usuario_apellido`, `usuario_email`, `usuario_contrasenia`, `usuario_rol_id`, `usuario_imagen`) VALUES
(1, 'Juan', 'Ises', 'juancruzises@gmail.com', '$2a$12$iSBkfZ2m6ooixJQlBso2cuzVqV7Z18aai.9RIWILRRteGmdiq9XhC', 1, 'demo'),
(7, 'Tomas', 'Ramirez', 'tomram@gmail.com', '$2a$12$lT/QW0p6VMQvuVzwrQUK2uT3MAj6nvKchMwQ6xWiR2l.Fef5sqmUe', 2, 'demo'),
(13, 'Perro', 'as', 'p@gmail.com', '$2a$12$mCfmOxCN4Xb4ycIEbcz2.u8sU8.HFB8xSg7Jv81z.8Y1DiMmpyiVa', 2, 'demo'),
(14, 'P', 'as', 'pas@gmail.com', '$2a$12$LdLSgRwiv0B6kcF8O9SxxuT243PRgw7xIVtsUKILNg7T16jKWrYz6', 2, 'demo'),
(15, 'asd', 'asd', 'asd@gmail.com', '$2a$12$Q7fTOS6gE//867hlRU42Z.39sMguUKogIEn0Ca6uz3IAcIxVSLfHa', 2, 'demo'),
(16, 'test', 'test', 't@gmail.com', '$2a$12$re9a8mtj1vRmWfR9qDGvh.X9oepzSlGJGk8VLqG2s4g6wGmo/J2py', 2, 'demo'),
(17, 'Juan', 'Ises', 'juancruz@gmail.com', '$2a$12$HcoUYTcOtadZb5XsIuBg9O2REyvGKX6CWP3bPyVgLU5AaOU/ftWJe', 1, 'demo'),
(18, 'test', 'test', 'test@gmail.com', '$2a$12$tytc/Eldy0Lrcn1T9WSlVeHR1rgeJxvSSwnwI2DwIfe9tqW6snGBa', 2, 'demo'),
(19, 'admin', 'admin', 'admin@gmail.com', '$2a$12$IC1oZKAIRE6pONrJ0EcRu.33LFRW1ppeAdNadpFZe5Gx682F0NS5y', 2, 'demo'),
(20, 'samiraadmin', 'admin', 'alvarez.rocio@yahoo.com.ar', '$2a$12$3i8QiOuQ1VqdXPOwW84FJeE3O.YnbsD2rScLQfkGw06KR833OHdwe', 1, 'demo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `autores`
--
ALTER TABLE `autores`
  ADD PRIMARY KEY (`autor_id`),
  ADD UNIQUE KEY `autor_id` (`autor_id`);

--
-- Indices de la tabla `generos`
--
ALTER TABLE `generos`
  ADD PRIMARY KEY (`genero_id`),
  ADD UNIQUE KEY `genero_id` (`genero_id`);

--
-- Indices de la tabla `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `user_id` (`user_id`) USING BTREE;

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`libro_id`),
  ADD UNIQUE KEY `libro_id` (`libro_id`),
  ADD KEY `libro_genero_id` (`libro_genero_id`),
  ADD KEY `libro_subgenero_id` (`libro_subgenero_id`),
  ADD KEY `libro_autor_id` (`libro_autor_id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`pedido_id`),
  ADD UNIQUE KEY `pedido_id` (`pedido_id`),
  ADD KEY `pedido_usuario_id` (`pedido_usuario_id`);

--
-- Indices de la tabla `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`) USING BTREE;

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`rol_id`),
  ADD UNIQUE KEY `rol_id` (`rol_id`);

--
-- Indices de la tabla `subgeneros`
--
ALTER TABLE `subgeneros`
  ADD PRIMARY KEY (`subgenero_id`),
  ADD UNIQUE KEY `subgenero_id` (`subgenero_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `usuario_id` (`usuario_id`),
  ADD KEY `usuario_rol_id` (`usuario_rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `autores`
--
ALTER TABLE `autores`
  MODIFY `autor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `generos`
--
ALTER TABLE `generos`
  MODIFY `genero_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `libro_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `pedido_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT de la tabla `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT de la tabla `subgeneros`
--
ALTER TABLE `subgeneros`
  MODIFY `subgenero_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `pedidos` (`pedido_id`),
  ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`usuario_id`);

--
-- Filtros para la tabla `libros`
--
ALTER TABLE `libros`
  ADD CONSTRAINT `libros_ibfk_1` FOREIGN KEY (`libro_genero_id`) REFERENCES `generos` (`genero_id`),
  ADD CONSTRAINT `libros_ibfk_2` FOREIGN KEY (`libro_subgenero_id`) REFERENCES `subgeneros` (`subgenero_id`),
  ADD CONSTRAINT `libros_ibfk_3` FOREIGN KEY (`libro_autor_id`) REFERENCES `autores` (`autor_id`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`pedido_usuario_id`) REFERENCES `usuarios` (`usuario_id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`usuario_rol_id`) REFERENCES `roles` (`rol_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
