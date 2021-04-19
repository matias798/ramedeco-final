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

USE `heroku_d395cdae7c166d3`;



-- Volcando datos para la tabla heroku_d395cdae7c166d3.images: ~51 rows (aproximadamente)
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

-- Volcando datos para la tabla heroku_d395cdae7c166d3.payment_methods: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
INSERT INTO `payment_methods` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Efectivo', NULL, NULL, NULL),
	(2, 'Tarjeta de débito', NULL, NULL, NULL),
	(3, 'Tarjeta de crédito', NULL, NULL, NULL);
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;

-- Volcando datos para la tabla heroku_d395cdae7c166d3.products: ~17 rows (aproximadamente)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;

-- Volcando datos para la tabla heroku_d395cdae7c166d3.product_category: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `product_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_category` ENABLE KEYS */;

-- Volcando datos para la tabla heroku_d395cdae7c166d3.purchases: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `purchases` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchases` ENABLE KEYS */;

-- Volcando datos para la tabla heroku_d395cdae7c166d3.purchase_details: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `purchase_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase_details` ENABLE KEYS */;

-- Volcando datos para la tabla heroku_d395cdae7c166d3.roles: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'admin', NULL, NULL, NULL),
	(2, 'user', NULL, NULL, NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

-- Volcando datos para la tabla heroku_d395cdae7c166d3.scenes: ~6 rows (aproximadamente)
/*!40000 ALTER TABLE `scenes` DISABLE KEYS */;


-- Volcando datos para la tabla heroku_d395cdae7c166d3.scene_category: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `scene_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `scene_category` ENABLE KEYS */;

-- Volcando datos para la tabla heroku_d395cdae7c166d3.scene_details: ~11 rows (aproximadamente)
/*!40000 ALTER TABLE `scene_details` DISABLE KEYS */;
-- Volcando datos para la tabla heroku_d395cdae7c166d3.users: ~4 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `username`, `address`, `avatar`, `created_at`, `updated_at`, `deleted_at`, `role_id`) VALUES
	(1, 'Jose', 'Jose', 'jose@dh.com', '$2b$10$7Nkuj.KThPXlHIUWZTo15eqS/KFs5BlYDCEwh14Q3ykwpyygGZhzO', 'admin', 'Argentina', '', NULL, NULL, NULL, 1),
	(2, 'Sebastien', 'Gouinlock', 'sgouinlock1@pcworld.com', '$2b$10$cFokXn3NUGDQJznGblPoh.UbVe5Koug7PWpRjreKD7boeqA01hfNK', 'sgouinlock1', '19641 Paget Street', '', NULL, NULL, NULL, 2),
	(3, 'Roslyn', 'Rembaud', 'rrembaud2@discuz.net', '$2b$10$7Nkuj.KThPXlHIUWZTo15eqS/KFs5BlYDCEwh14Q3ykwpyygGZhzO', 'user', '03 Cottonwood Drive', '', NULL, NULL, NULL, 2),
	(4, 'Robbie', 'Starling', 'rstarling3@digg.com', '$2b$10$FXajNU/ZDUsTeZ67IEuBSuM1Xo8P8xpJWO4S6Qtij73QFACjFN97y', 'rstarling3', '2 Mockingbird Place', '', NULL, NULL, NULL, 2);

INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (1,4,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (1,2,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (3,2,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (4,1,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (4,2,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (4,3,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (5,1,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (5,2,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (6,2,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (6,6,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (7,6,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (7,3,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (7,4,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (8,4,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (8,5,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (8,6,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (8,2,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (8,1,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (9,6,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (9,4,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (10,3,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (11,4,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (11,7,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (12,3,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (12,4,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (12,6,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (13,1,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (14,2,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (15,6,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (15,7,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (16,3,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (16,4,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (17,3,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (17,4,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (17,6,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (18,4,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (18,7,now(),now());
INSERT INTO heroku_d395cdae7c166d3.product_category(product_id,category_id,created_at,updated_at) values (18,6,now(),now());



/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
