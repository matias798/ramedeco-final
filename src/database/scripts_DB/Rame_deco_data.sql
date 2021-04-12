-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.17-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla rame_deco_db.categories: ~8 rows (aproximadamente)
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Accesorios', NULL, NULL, NULL),
	(2, 'Dormitorios', NULL, NULL, NULL),
	(3, 'Exteriores', NULL, NULL, NULL),
	(4, 'Interiores', NULL, NULL, NULL),
	(5, 'Baño', NULL, NULL, NULL),
	(6, 'Living', NULL, NULL, NULL),
	(7, 'Oficina', NULL, NULL, NULL),
	(8, 'Ofertas', NULL, NULL, NULL);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.images: ~51 rows (aproximadamente)
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` (`id`, `path`, `created_at`, `updated_at`, `deleted_at`, `product_id`) VALUES
	(1, '1_1.webp', NULL, NULL, NULL, 1),
	(2, '1_2.webp', NULL, NULL, NULL, 1),
	(3, '1_3.webp', NULL, NULL, NULL, 1),
	(7, '3_1.webp', NULL, NULL, NULL, 3),
	(8, '3_2.webp', NULL, NULL, NULL, 3),
	(9, '3_3.webp', NULL, NULL, NULL, 3),
	(10, '4_1.webp', NULL, NULL, NULL, 4),
	(11, '4_2.webp', NULL, NULL, NULL, 4),
	(12, '4_3.webp', NULL, NULL, NULL, 4),
	(13, '5_1.webp', NULL, NULL, NULL, 5),
	(14, '5_2.webp', NULL, NULL, NULL, 5),
	(15, '5_3.webp', NULL, NULL, NULL, 5),
	(16, '6_1.webp', NULL, NULL, NULL, 6),
	(17, '6_2.webp', NULL, NULL, NULL, 6),
	(18, '6_3.webp', NULL, NULL, NULL, 6),
	(19, '7_1.webp', NULL, NULL, NULL, 7),
	(20, '7_2.webp', NULL, NULL, NULL, 7),
	(21, '7_3.webp', NULL, NULL, NULL, 7),
	(22, '8_1.webp', NULL, NULL, NULL, 8),
	(23, '8_2.webp', NULL, NULL, NULL, 8),
	(24, '8_3.webp', NULL, NULL, NULL, 8),
	(25, '9_1.webp', NULL, NULL, NULL, 9),
	(26, '9_2.webp', NULL, NULL, NULL, 9),
	(27, '9_3.webp', NULL, NULL, NULL, 9),
	(28, '10_1.webp', NULL, NULL, NULL, 10),
	(29, '10_2.webp', NULL, NULL, NULL, 10),
	(30, '10_3.webp', NULL, NULL, NULL, 10),
	(31, '11_1.webp', NULL, NULL, NULL, 11),
	(32, '11_2.webp', NULL, NULL, NULL, 11),
	(33, '11_3.webp', NULL, NULL, NULL, 11),
	(34, '12_1.webp', NULL, NULL, NULL, 12),
	(35, '12_2.webp', NULL, NULL, NULL, 12),
	(36, '12_3.webp', NULL, NULL, NULL, 12),
	(37, '13_1.webp', NULL, NULL, NULL, 13),
	(38, '13_2.webp', NULL, NULL, NULL, 13),
	(39, '13_3.webp', NULL, NULL, NULL, 13),
	(40, '14_1.webp', NULL, NULL, NULL, 14),
	(41, '14_2.webp', NULL, NULL, NULL, 14),
	(42, '14_3.webp', NULL, NULL, NULL, 14),
	(43, '15_1.webp', NULL, NULL, NULL, 15),
	(44, '15_2.webp', NULL, NULL, NULL, 15),
	(45, '15_3.webp', NULL, NULL, NULL, 15),
	(46, '16_1.webp', NULL, NULL, NULL, 16),
	(47, '16_2.webp', NULL, NULL, NULL, 16),
	(48, '16_3.webp', NULL, NULL, NULL, 16),
	(49, '17_1.webp', NULL, NULL, NULL, 17),
	(50, '17_2.webp', NULL, NULL, NULL, 17),
	(51, '17_3.webp', NULL, NULL, NULL, 17),
	(52, '18_1.webp', NULL, NULL, NULL, 18),
	(53, '18_2.webp', NULL, NULL, NULL, 18),
	(54, '18_3.webp', NULL, NULL, NULL, 18);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.payment_methods: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
INSERT INTO `payment_methods` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Efectivo', NULL, NULL, NULL),
	(2, 'Tarjeta de débito', NULL, NULL, NULL),
	(3, 'Tarjeta de crédito', NULL, NULL, NULL);
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.products: ~17 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` (`id`, `title`, `summary`, `description`, `product_detail`, `price`, `dimension`, `main_image`, `stock`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Dosel', 'Dosel, motivo conejo', 'Este dosel, instalado a una altura segura, transforma la cuna en un espacio acogedor. Es fácil de montar, no incluye telas que cuelguen y está confeccionado con poliéster reciclado: un punto a favor del medio ambiente.', 'Tejido que deja traspasar la luz y permite crear ambiente sin oscurecer.El tejido es de poliéster 100%, un material duradero que ha sido probado para garantizar que no contiene substancias ni aditivos dañinos', 700.00, '45 cm x 79cm x 100cm', '1_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(3, 'Estructura de Cama', 'Estructura de Cama abatible, blanco155x210 cm', 'Esta cama proporciona un amplio espacio de almacenaje que no ocupa nada. Solo tienes que levantar el somier y meter tus cosas dentro. La puedes poner en el centro de la habitación o con el cabecero contra la pared.', 'En el espacio de almacenaje que queda debajo de la mesa se puede guardar de todo, desde mantas y cojines hasta ropa o incluso la tabla de planchar.Completa con cajas y separadores para organizar bien los objetos pequeños. En las series STUK, SKUBB y STORSTABBE encontrarás productos diseñados específicamente para esto.', 10000.00, '210cm x 155cm x 30cm', '3_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(4, 'Manta', 'Colcha, blanco230x250 cm', 'Esta colcha te permite renovar con un solo gesto tu habitación, y además hace las veces de manta. El suave tejido de algodón es agradable y confortable.', 'Esta colcha de algodón abriga y es cómoda y decorativa.La colcha encaja en camas de 140 cm con 45 cm aprox. de caída por cada lado.', 3000.00, '250cm x 230cm', '4_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(5, 'Protector para Colchon', 'Protector de colchón 90x200 cm', 'Este protector de colchón fino e impermeable mantiene tu colchón en perfecto estado e impide que se manche. No se mueve del sitio y prolongará la vida útil de tu colchón.', 'Un protector de colchón confeccionado con poliéster reciclado y una capa de material impermeable.Los protectores de colchón que separan las sábanas de los colchones protegen de las manchas y la suciedad y alargan la vida de los colchones.', 2000.00, '90cm x 200cm', '5_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(6, 'Armario', 'Armario con 3 puertas, blanco117x190 cm', 'excelente armario ideal para dormitorio o depósito', 'El hogar debe ser seguro para toda la familia, por eso incluimos un herraje de seguridad que permite fijar el armario a la pared.La puerta de espejo se puede colocar a la derecha, izquierda o en el centro.', 7000.00, '117cm x 190cm x50.2cm', '6_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(7, 'Silla', 'Silla, fresno', 'Un modelo de estilo artesanal tan cómodo como resistente, ideal para todas las actividades que se desarrollan alrededor de la mesa, como comer, jugar, dibujar o hacer los deberes.', 'Una silla sólida ideal para todas las actividades que se desarrollan alrededor de una mesa.Resulta muy cómoda gracias a las dimensiones generosas del asiento y al respaldo alto, que proporciona una buena sujeción a la espalda.', 2000.00, '80cm x 44cm x 39cm', '7_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(8, 'Lámpara de techo', 'Lámpara de techo, beige38 cm', 'La lámpara de techo VÄXJÖ es de aluminio liso, con un diseño clásico y emite una luz suave y sin reflejos. Además, ocupa poco espacio durante el transporte, lo que es una ventaja para el medio ambiente y tu bolsillo.', 'Esta lámpara emite una buena luz directa sobre la mesa y crea una agradable iluminación ambiental para cenar.La bombilla se vende aparte. IKEA recomienda la bombilla LED E27 globo ópalo blanco.', 1000.00, '38cm diametro', '8_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(9, 'Estantería armario/cajn, pino/gris', 'Estantería armario/cajn, pino/gris rejilla134x30x179 cm', 'Almacenaje amplio para el salón o el garaje con baldas de madera abiertas, cajones de metal y un armario con puertas de malla. Personaliza tu combinación IVAR añadiéndole ganchos, cajones o baldas.', 'Puedes combinar el mueble con una solución de almacenaje IVAR o usarlo de manera independiente.Para reducir la producción de residuos, se hacen unos agujeros pequeños en la plancha de metal, que después se estira hasta convertirse en una rejilla.', 7000.00, '134cm x 30cm x 179cm', '9_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(10, 'Barbacoa de carbon', 'Barbacoa de carbón, ac inox', 'Si te gustan las barbacoas tradicionales, lo que necesitas es una parrilla de carbón. Puedes usarla sola o con los carritos de la misma serie, perfectos para crear una cocina al aire libre con el espacio para preparar y guardar cosas que necesitas.', 'Tiene un termómetro integrado en la tapa para que puedas comprobar la temperatura de cocción sin tener que abrirla.Para obtener la temperatura de cocción deseada, regula el flujo de aire a través de la válvula de acero inoxidable de la tapa y la de la parte frontal de la barbacoa.', 3000.00, '74cm x 109 cm x 54cm', '10_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(11, 'Estanteria', 'Estantería, negro100x136 cm', 'de metal y madera', 'Al ser de metal y madera maciza, cada estantería es una pieza única.Un sólo módulo puede ser suficiente en un espacio limitado o la base de una gran solución si cambian tus necesidades.', 8000.00, '100cm x 136cm x 60cm', '11_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(12, 'Mesa de centro', 'Mesa de centro, chapa fresno118x50 cm', 'Estamos muy orgullosos de nuestra serie LISABO, que ha ganado el prestigioso premio internacional Red Dot Award por su diseño. Los productos que incluye son resistentes, duraderos y fáciles de montar, y ofrecen un aspecto ligero y artesanal.', 'El tablero de chapa de fresno y las patas de abedul macizo aportan un toque cálido y acogedor a la estancia.Fácil de montar, porque cada pata solo lleva un herraje.', 2000.00, '118cm x 50cm x50cm', '12_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(13, 'Manta, azul claro', 'Manta, azul claro 130x170 cm', 'Esta colcha de punto de algodón y acrílico en color azul claro te proporcionará abrigo y calidez mientras te relajas en el balcón o en el sofá del salón. Una inyección de color de tacto suave y agradable.', 'Una colcha de punto con un tacto muy suave.El algodón es un material natural suave que requiere pocos cuidados y se puede lavar a máquina.', 1000.00, '130cm x 170cm', '13_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(14, 'Colchón Sommier', 'Colchón de muelles, firme/beige oscuro, 140x200 cm', 'La firmeza y la suavidad se ponen de acuerdo para ofrecerte lo mejor. Un apoyo firme combinado con una capa generosa de relleno blando para proporcionar un confort superior.', 'Los muelles Bonnell proporcionan un apoyo completo para el cuerpo que garantiza un buen descanso.Una gruesa capa de relleno flexible aporta confort y soporte.', 6500.00, '140cm x 200cm', '14_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(15, 'Mueble TV', 'Mueble TV, blanco120x41x53 cm', 'mueble para TV, completo, amplio, con una estética ideal para espacios abiertos y luminosos', 'Este mueble de TV tiene unos cajones grandes ideales para tener los mandos a distancia, cables y demás accesorios de televisión bien organizados.La salida para cables de la parte posterior permite ocultarlos manteniéndolos a mano.', 4000.00, '120cm x 41cm x 53cm', '15_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(16, 'Silla Modelo Granero', 'Silla, tinte envejecido claro/blanco', 'INGOLF Silla, tinte envejecido claro/blanco.La serie INGOLF queda igual de bien en la cocina que en el comedor, el dormitorio o el pasillo. Su construcción de madera maciza resiste bien los golpes.', 'La madera maciza es un material natural muy resistente.Para mayor estabilidad, vuelve a apretar los tornillos unas dos semanas después del montaje y cuando sea necesario.', 800.00, '43 cm x 53 cm x 91 cm', '16_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(17, 'Juego de Mesa y Sillas', 'Mesa con 4 sillas, blanco/abedul152/223x95 cm', 'Esta amplia mesa de comedor de madera presenta un aspecto tradicional y pronto se convertirá en el lugar de reunión por excelencia de la casa. Gracias a su estructura resistente y su sencillo mecanismo de extensión, durará mucho en plena forma.', 'Amplio espacio para 6 comensales. Por eso es ideal para familias.Esta mesa de comedor de madera aportará un toque natural al comedor. Su rústico acabado blanco realza la belleza de la veta.', 10000.00, '152/223x95cm', '17_main.webp', 1, '2021-02-01 00:00:00','2021-02-01 00:00:00', NULL),
	(18, 'Sofá Cama', 'Sofá 3 plazas, +chaiselongue/Tallmyra blanco/negro', '', 'Puedes situar la sección de chaiselongue a la derecha o a la izquierda del sofá y cambiarla cuando quieras.Puedes usar el espacio que hay debajo del módulo de esquina para guardar cosas, como la ropa de cama.', 8000.00, '268cm x 100cm x 162cm', '18_main.webp', 1, now(),now(), NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.product_category: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.purchases: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.purchase_details: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `purchase_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase_details` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.roles: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'admin', NULL, NULL, NULL),
	(2, 'user', NULL, NULL, NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.scenes: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `scenes` DISABLE KEYS */;
INSERT INTO `scenes` (`id`, `main_image`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'dormitorio.webp', NULL, NULL, NULL),
	(2, 'bedroom_pointer.webp', NULL, NULL, NULL),
	(3, 'bedroom_pointer2.webp', NULL, NULL, NULL),
	(4, 'exterior_pointer.webp', NULL, NULL, NULL),
	(5, 'livingroom_pointer.webp', NULL, NULL, NULL),
	(6, 'livingroom_pointer2.webp', NULL, NULL, NULL);
/*!40000 ALTER TABLE `scenes` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.scene_category: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `scene_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `scene_category` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.scene_details: ~11 rows (aproximadamente)
/*!40000 ALTER TABLE `scene_details` DISABLE KEYS */;
INSERT INTO `scene_details` (`id`, `position_left`, `position_top`, `description_left`, `description_top`, `created_at`, `updated_at`, `deleted_at`, `product_id`, `scene_id`) VALUES
	(1, 45, 40, 25, 25, NULL, NULL, NULL, 1, 1),
	(3, 65, 75, 45, 67, NULL, NULL, NULL, 3, 2),
	(4, 10, 65, 5, 57, NULL, NULL, NULL, 4, 2),
	(5, 35, 63, 15, 55, NULL, NULL, NULL, 5, 2),
	(6, 30, 50, 10, 40, NULL, NULL, NULL, 6, 3),
	(7, 80, 70, 40, 60, NULL, NULL, NULL, 7, 3),
	(8, 80, 13, 40, 13, NULL, NULL, NULL, 8, 3),
	(9, 10, 45, 7, 30, NULL, NULL, NULL, 10, 4),
	(10, 40, 65, 10, 55, NULL, NULL, NULL, 9, 5),
	(11, 60, 35, 27, 25, NULL, NULL, NULL, 11, 6),
	(12, 80, 65, 40, 55, NULL, NULL, NULL, 12, 6);
/*!40000 ALTER TABLE `scene_details` ENABLE KEYS */;

-- Volcando datos para la tabla rame_deco_db.users: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `username`, `address`, `avatar`, `created_at`, `updated_at`, `deleted_at`, `role_id`) VALUES
	(1, 'Jose', 'Jose', 'jose@dh.com', '$2b$10$7Nkuj.KThPXlHIUWZTo15eqS/KFs5BlYDCEwh14Q3ykwpyygGZhzO', 'admin', 'Argentina', '', NULL, NULL, NULL, 1),
	(2, 'Sebastien', 'Gouinlock', 'sgouinlock1@pcworld.com', '$2b$10$cFokXn3NUGDQJznGblPoh.UbVe5Koug7PWpRjreKD7boeqA01hfNK', 'sgouinlock1', '19641 Paget Street', '', NULL, NULL, NULL, 2),
	(3, 'Roslyn', 'Rembaud', 'rrembaud2@discuz.net', '$2b$10$7Nkuj.KThPXlHIUWZTo15eqS/KFs5BlYDCEwh14Q3ykwpyygGZhzO', 'user', '03 Cottonwood Drive', '', NULL, NULL, NULL, 2),
	(4, 'Robbie', 'Starling', 'rstarling3@digg.com', '$2b$10$FXajNU/ZDUsTeZ67IEuBSuM1Xo8P8xpJWO4S6Qtij73QFACjFN97y', 'rstarling3', '2 Mockingbird Place', '', NULL, NULL, NULL, 2);

INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (1,4,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (1,2,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (3,2,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (4,1,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (4,2,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (4,3,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (5,1,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (5,2,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (6,2,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (6,6,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (7,6,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (7,3,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (7,4,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (8,4,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (8,5,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (8,6,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (8,2,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (8,1,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (9,6,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (9,4,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (10,3,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (11,4,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (11,7,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (12,3,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (12,4,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (12,6,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (13,1,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (14,2,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (15,6,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (15,7,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (16,3,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (16,4,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (17,3,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (17,4,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (17,6,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (18,4,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (18,7,now(),now());
INSERT INTO rame_deco_db.product_category(product_id,category_id,created_at,updated_at) values (18,6,now(),now());



/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
