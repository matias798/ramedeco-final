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


-- Volcando estructura de base de datos para rame_deco_db
CREATE DATABASE IF NOT EXISTS `rame_deco_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `rame_deco_db`;

-- Volcando estructura para tabla rame_deco_db.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla rame_deco_db.images
CREATE TABLE IF NOT EXISTS `images` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `path` varchar(64) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla rame_deco_db.payment_methods
CREATE TABLE IF NOT EXISTS `payment_methods` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla rame_deco_db.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(64) NOT NULL,
  `summary` varchar(64) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `product_detail` text DEFAULT NULL,
  `price` double(8,2) NOT NULL,
  `dimension` varchar(32) DEFAULT NULL,
  `main_image` varchar(64) NOT NULL,
  `stock` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla rame_deco_db.product_category
CREATE TABLE IF NOT EXISTS `product_category` (
  `product_id` bigint(20) unsigned NOT NULL,
  `category_id` tinyint(3) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  KEY `product_id_idx` (`product_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla rame_deco_db.purchases
CREATE TABLE IF NOT EXISTS `purchases` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `total` decimal(10,0) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `payment_method_id` smallint(5) unsigned NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `payment_method_id_idx` (`payment_method_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `payment_method_id` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_methods` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.


-- Volcando estructura para tabla rame_deco_db.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla rame_deco_db.scenes
CREATE TABLE IF NOT EXISTS `scenes` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `main_image` varchar(64) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla rame_deco_db.scene_category
CREATE TABLE IF NOT EXISTS `scene_category` (
  `scene_id_category` bigint(20) NOT NULL,
  `category_id_scene` tinyint(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla rame_deco_db.scene_details
CREATE TABLE IF NOT EXISTS `scene_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `position_left` tinyint(4) DEFAULT NULL,
  `position_top` tinyint(4) DEFAULT NULL,
  `description_left` tinyint(4) DEFAULT NULL,
  `description_top` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  `scene_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id_idx` (`product_id`),
  KEY `scene_id_idx` (`scene_id`),
  CONSTRAINT `product_id_scene_detail` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `scene_id` FOREIGN KEY (`scene_id`) REFERENCES `scenes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla rame_deco_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(64) DEFAULT NULL,
  `last_name` varchar(64) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `username` varchar(64) DEFAULT NULL,
  `address` varchar(64) DEFAULT NULL,
  `avatar` varchar(64) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `role_id` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id_idx` (`role_id`),
  CONSTRAINT `role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla rame_deco_db.purchase_details
CREATE TABLE IF NOT EXISTS `purchase_details` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `amount` int(11) NOT NULL,
  `subtotal` decimal(10,0) NOT NULL,
  `unit_price` decimal(10,0) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `purchase_id` bigint(20) unsigned NOT NULL,
  `product_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`id`,`purchase_id`,`product_id`),
  FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  FOREIGN KEY (`purchase_id`) REFERENCES `purchases` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.


/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
