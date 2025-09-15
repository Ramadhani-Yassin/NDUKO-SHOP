-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 15, 2025 at 01:54 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nduko_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` decimal(20,8) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(4, 'Cosmetics', '2025-09-06 05:59:45', '2025-09-07 08:29:03'),
(5, 'Nafaka', '2025-09-06 05:59:45', '2025-09-07 08:30:47'),
(6, 'Spices', '2025-09-06 05:59:45', '2025-09-07 08:31:01'),
(7, 'Bidhaa za Ngano', '2025-09-06 05:59:45', '2025-09-07 08:31:51'),
(8, 'Madawa', '2025-09-06 05:59:45', '2025-09-07 08:32:13'),
(9, 'Soft Drinks', '2025-09-06 05:59:45', '2025-09-07 08:32:26'),
(11, 'Stationeries', '2025-09-06 05:59:45', '2025-09-07 08:33:38'),
(13, 'Electronics', '2025-09-06 05:59:45', '2025-09-07 08:35:06'),
(14, 'Hardware', '2025-09-06 05:59:45', '2025-09-07 08:35:29'),
(15, 'Candies | Pipi', '2025-09-06 05:59:45', '2025-09-07 08:36:04'),
(16, 'Home Products', '2025-09-06 05:59:45', '2025-09-07 08:37:26'),
(26, 'Kitchen', '2025-09-10 17:18:39', '2025-09-10 17:18:39');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `phone`, `address`, `photo`, `created_at`, `updated_at`) VALUES
(1, 'Ramah Yasyn', 'yasynramah@gmail.com', '0621060107', 'Tanzania', 'cafe-maruujpg-17574405298429.jpg', '2025-09-10 00:55:29', '2025-09-10 00:55:29');

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `salary` decimal(20,8) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `nid` varchar(255) DEFAULT NULL,
  `joining_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `amount` decimal(20,8) NOT NULL,
  `expense_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `name`, `description`, `amount`, `expense_date`, `created_at`, `updated_at`) VALUES
(7, 'GEAR', NULL, 20000.00000000, '2025-09-14', '2025-09-13 23:21:42', '2025-09-13 23:21:42'),
(8, 'GEAR', NULL, 200000.00000000, '2025-09-14', '2025-09-13 23:22:11', '2025-09-13 23:22:11'),
(9, 'GEAR', NULL, -66600.00000000, '2025-09-14', '2025-09-14 13:28:40', '2025-09-14 13:28:40');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_00_000000_create_settings_table', 1),
(2, '2014_10_00_000001_add_group_column_on_settings_table', 1),
(3, '2014_10_12_000000_create_users_table', 1),
(4, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(5, '2019_08_19_000000_create_failed_jobs_table', 1),
(6, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(7, '2024_06_26_020636_create_categories_table', 1),
(8, '2024_07_12_094131_create_suppliers_table', 1),
(9, '2024_07_17_094527_create_unit_types_table', 1),
(10, '2024_07_18_094528_create_products_table', 1),
(11, '2024_07_21_014022_create_expenses_table', 1),
(12, '2024_07_21_075714_create_employees_table', 1),
(13, '2024_07_21_112837_create_customers_table', 1),
(14, '2024_07_22_103204_create_salaries_table', 1),
(15, '2024_09_05_013146_create_carts_table', 1),
(16, '2024_09_13_101423_create_orders_table', 1),
(17, '2024_09_13_102312_create_order_items_table', 1),
(18, '2024_09_21_105318_create_transactions_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `order_number` varchar(255) NOT NULL,
  `sub_total` decimal(20,8) NOT NULL,
  `tax_total` decimal(20,8) DEFAULT NULL,
  `discount_total` decimal(20,8) DEFAULT NULL,
  `total` decimal(20,8) NOT NULL,
  `paid` decimal(20,8) NOT NULL,
  `due` decimal(20,8) NOT NULL,
  `profit` decimal(20,8) NOT NULL,
  `loss` decimal(20,8) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `order_number`, `sub_total`, `tax_total`, `discount_total`, `total`, `paid`, `due`, `profit`, `loss`, `status`, `created_at`, `updated_at`) VALUES
(3, NULL, 'O-JQmUS', 500000.00000000, 0.00000000, 0.00000000, 500000.00000000, 500000.00000000, 0.00000000, 80000.00000000, 0.00000000, 'paid', '2025-09-07 09:39:19', '2025-09-07 09:39:19'),
(4, NULL, 'O-mQeCB', 165000.00000000, 0.00000000, 0.00000000, 165000.00000000, 165000.00000000, 0.00000000, 21500.00000000, 0.00000000, 'paid', '2025-09-10 00:48:55', '2025-09-10 00:48:55'),
(5, NULL, 'O-olQEg', 105000.00000000, 0.00000000, 0.00000000, 105000.00000000, 105000.00000000, 0.00000000, 7000.00000000, 0.00000000, 'paid', '2025-09-10 00:51:10', '2025-09-10 00:51:10'),
(6, NULL, 'O-py5fc', 40000.00000000, 0.00000000, 40000.00000000, 0.00000000, 0.00000000, 0.00000000, 0.00000000, 38500.00000000, 'unpaid', '2025-09-10 00:52:44', '2025-09-10 00:52:44'),
(7, NULL, 'O-3V5U6', 40000.00000000, 0.00000000, 40000.00000000, 0.00000000, 0.00000000, 0.00000000, 0.00000000, 38500.00000000, 'unpaid', '2025-09-10 00:54:07', '2025-09-10 00:54:07'),
(8, NULL, 'O-XMZg2', 210000.00000000, 0.00000000, 0.00000000, 210000.00000000, 210000.00000000, 0.00000000, 14000.00000000, 0.00000000, 'paid', '2025-09-10 11:30:12', '2025-09-10 11:30:12'),
(9, NULL, 'O-56rJk', 40000.00000000, 0.00000000, 0.00000000, 40000.00000000, 40000.00000000, 0.00000000, 1500.00000000, 0.00000000, 'paid', '2025-09-10 16:08:41', '2025-09-10 16:08:41'),
(10, 1, 'O-12EFK', 3000.00000000, 0.00000000, 0.00000000, 3000.00000000, 3000.00000000, 0.00000000, 1000.00000000, 0.00000000, 'paid', '2025-09-10 18:36:33', '2025-09-10 19:03:12'),
(11, 1, 'O-z8mdZ', 43000.00000000, 0.00000000, 0.00000000, 43000.00000000, 43000.00000000, 0.00000000, 2500.00000000, 0.00000000, 'paid', '2025-09-10 18:46:13', '2025-09-10 19:03:35'),
(12, 1, 'O-7VD0i', 3000.00000000, 0.00000000, 0.00000000, 3000.00000000, 3000.00000000, 0.00000000, 1000.00000000, 0.00000000, 'paid', '2025-09-10 19:04:04', '2025-09-10 19:04:32'),
(13, 1, 'O-JutDu', 120000.00000000, 0.00000000, 0.00000000, 120000.00000000, 0.00000000, 120000.00000000, 0.00000000, 115500.00000000, 'unpaid', '2025-09-10 19:15:41', '2025-09-10 19:15:41'),
(14, 1, 'O-HV6la', 10500.00000000, 0.00000000, 0.00000000, 10500.00000000, 10500.00000000, 0.00000000, 900.00000000, 0.00000000, 'paid', '2025-09-11 14:02:17', '2025-09-11 14:02:17'),
(15, 1, 'O-tyHTC', 120000.00000000, 0.00000000, 0.00000000, 120000.00000000, 120000.00000000, 0.00000000, 4500.00000000, 0.00000000, 'paid', '2025-09-11 14:02:42', '2025-09-11 14:02:57'),
(16, NULL, 'O-a8AiB', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 63000.00000000, 0.00000000, 3000.00000000, 0.00000000, 'paid', '2025-09-13 00:58:54', '2025-09-13 00:58:54'),
(17, NULL, 'O-xJWtL', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 63000.00000000, 0.00000000, 3000.00000000, 0.00000000, 'paid', '2025-09-12 22:08:58', '2025-09-12 22:08:58'),
(18, NULL, 'O-7g7QM', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 63000.00000000, 0.00000000, 3000.00000000, 0.00000000, 'paid', '2025-09-12 22:16:56', '2025-09-12 22:16:56'),
(19, NULL, 'O-7BKxd', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 63000.00000000, 0.00000000, 3000.00000000, 0.00000000, 'paid', '2025-09-13 23:21:13', '2025-09-13 23:21:13'),
(20, NULL, 'O-Icesu', 252000.00000000, 0.00000000, 0.00000000, 252000.00000000, 252000.00000000, 0.00000000, 12000.00000000, 0.00000000, 'paid', '2025-09-14 13:29:31', '2025-09-14 13:29:31'),
(21, 1, 'O-ORyPR', 126000.00000000, 0.00000000, 126000.00000000, 0.00000000, 0.00000000, 0.00000000, 0.00000000, 120000.00000000, 'settled', '2025-09-14 13:30:08', '2025-09-14 13:33:27'),
(22, 1, 'O-5Losi', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 63000.00000000, 0.00000000, 3000.00000000, 0.00000000, 'paid', '2025-09-14 13:30:44', '2025-09-14 13:31:07'),
(23, NULL, 'O-8stb3', 5000.00000000, 0.00000000, 0.00000000, 5000.00000000, 5000.00000000, 0.00000000, 800.00000000, 0.00000000, 'paid', '2025-09-15 06:44:07', '2025-09-15 06:44:07'),
(24, NULL, 'O-B47Ze', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 63000.00000000, 0.00000000, 3000.00000000, 0.00000000, 'paid', '2025-09-15 06:44:50', '2025-09-15 08:17:40'),
(25, 1, 'O-calH7', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 0.00000000, 63000.00000000, 0.00000000, 0.00000000, 'cancelled', '2025-09-15 06:45:13', '2025-09-15 07:46:40'),
(26, 1, 'O-80Q5t', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 0.00000000, 63000.00000000, 0.00000000, 0.00000000, 'cancelled', '2025-09-15 06:46:19', '2025-09-15 08:27:19'),
(27, NULL, 'O-cjSE8', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 0.00000000, 63000.00000000, 0.00000000, 0.00000000, 'cancelled', '2025-09-15 06:47:33', '2025-09-15 07:45:55'),
(28, 1, 'O-tHyJ3', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 0.00000000, 63000.00000000, 0.00000000, 0.00000000, 'cancelled', '2025-09-15 06:47:57', '2025-09-15 07:45:53'),
(29, 1, 'O-RLmny', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 0.00000000, 63000.00000000, 0.00000000, 0.00000000, 'cancelled', '2025-09-15 07:15:33', '2025-09-15 07:45:51'),
(30, 1, 'O-2loGL', 63000.00000000, 0.00000000, 63000.00000000, 0.00000000, 0.00000000, 0.00000000, 0.00000000, 60000.00000000, 'settled', '2025-09-15 07:35:48', '2025-09-15 07:49:23'),
(31, NULL, 'O-mUO7W', 63000.00000000, 0.00000000, 0.00000000, 63000.00000000, 0.00000000, 63000.00000000, 0.00000000, 0.00000000, 'cancelled', '2025-09-15 07:38:11', '2025-09-15 08:26:58'),
(32, NULL, 'O-vY8VO', 63000.00000000, 0.00000000, 63000.00000000, 0.00000000, 0.00000000, 0.00000000, 0.00000000, 60000.00000000, 'settled', '2025-09-15 07:48:18', '2025-09-15 07:50:56'),
(33, 1, 'O-8wceh', 63000.00000000, 0.00000000, 63000.00000000, 0.00000000, 0.00000000, 0.00000000, 0.00000000, 60000.00000000, 'settled', '2025-09-15 07:48:30', '2025-09-15 07:50:04');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED DEFAULT NULL,
  `product_json` longtext NOT NULL,
  `quantity` decimal(20,8) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `product_json`, `quantity`, `created_at`, `updated_at`) VALUES
(3, 3, NULL, '{\"id\":148,\"category_id\":16,\"supplier_id\":5,\"name\":\"Chumvi\",\"product_number\":\"P-wVvWD\",\"description\":\"SALT\",\"product_code\":\"H0001\",\"root\":\"Dar Es Salaam\",\"buying_price\":10500,\"selling_price\":12500,\"buying_date\":\"2025-09-01 00:00:00\",\"unit_type_id\":20,\"quantity\":1600,\"photo\":\"http:\\/\\/localhost\\/storage\\/products\\/logo-png-17572485902630.png\",\"status\":\"active\",\"created_at\":\"2025-09-07T12:36:30.000000Z\",\"updated_at\":\"2025-09-07T12:37:54.000000Z\"}', 40.00000000, NULL, NULL),
(4, 4, NULL, '{\"id\":149,\"category_id\":5,\"supplier_id\":5,\"name\":\"NGANO - AZANIA\",\"product_number\":\"P-iZ2sH\",\"description\":\"Ngano\",\"product_code\":\"N-0001\",\"root\":\"Njombe\",\"buying_price\":38500,\"selling_price\":40000,\"buying_date\":\"2025-09-10 00:00:00\",\"unit_type_id\":17,\"quantity\":60,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/chwaka-house-logopng-17574209255023.png\",\"status\":\"active\",\"created_at\":\"2025-09-09T12:28:45.000000Z\",\"updated_at\":\"2025-09-09T12:28:45.000000Z\"}', 1.00000000, NULL, NULL),
(5, 4, NULL, '{\"id\":148,\"category_id\":16,\"supplier_id\":5,\"name\":\"Chumvi\",\"product_number\":\"P-wVvWD\",\"description\":\"SALT\",\"product_code\":\"H0001\",\"root\":\"Dar Es Salaam\",\"buying_price\":10500,\"selling_price\":12500,\"buying_date\":\"2025-08-31 14:00:00\",\"unit_type_id\":20,\"quantity\":1560,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/logo-png-17572485902630.png\",\"status\":\"active\",\"created_at\":\"2025-09-07T02:36:30.000000Z\",\"updated_at\":\"2025-09-07T02:39:19.000000Z\"}', 10.00000000, NULL, NULL),
(6, 5, NULL, '{\"id\":149,\"category_id\":5,\"supplier_id\":5,\"name\":\"NGANO - AZANIA\",\"product_number\":\"P-iZ2sH\",\"description\":\"Ngano\",\"product_code\":\"N-0001\",\"root\":\"Njombe\",\"buying_price\":38500,\"selling_price\":40000,\"buying_date\":\"2025-09-10 00:00:00\",\"unit_type_id\":17,\"quantity\":59,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/chwaka-house-logopng-17574209255023.png\",\"status\":\"active\",\"created_at\":\"2025-09-09T12:28:45.000000Z\",\"updated_at\":\"2025-09-09T17:48:55.000000Z\"}', 2.00000000, NULL, NULL),
(7, 5, NULL, '{\"id\":148,\"category_id\":16,\"supplier_id\":5,\"name\":\"Chumvi\",\"product_number\":\"P-wVvWD\",\"description\":\"SALT\",\"product_code\":\"H0001\",\"root\":\"Dar Es Salaam\",\"buying_price\":10500,\"selling_price\":12500,\"buying_date\":\"2025-08-31 14:00:00\",\"unit_type_id\":20,\"quantity\":1550,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/logo-png-17572485902630.png\",\"status\":\"active\",\"created_at\":\"2025-09-07T02:36:30.000000Z\",\"updated_at\":\"2025-09-09T17:48:55.000000Z\"}', 2.00000000, NULL, NULL),
(8, 6, NULL, '{\"id\":149,\"category_id\":5,\"supplier_id\":5,\"name\":\"NGANO - AZANIA\",\"product_number\":\"P-iZ2sH\",\"description\":\"Ngano\",\"product_code\":\"N-0001\",\"root\":\"Njombe\",\"buying_price\":38500,\"selling_price\":40000,\"buying_date\":\"2025-09-10 00:00:00\",\"unit_type_id\":17,\"quantity\":57,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/chwaka-house-logopng-17574209255023.png\",\"status\":\"active\",\"created_at\":\"2025-09-09T12:28:45.000000Z\",\"updated_at\":\"2025-09-09T17:51:10.000000Z\"}', 1.00000000, NULL, NULL),
(9, 7, NULL, '{\"id\":149,\"category_id\":5,\"supplier_id\":5,\"name\":\"NGANO - AZANIA\",\"product_number\":\"P-iZ2sH\",\"description\":\"Ngano\",\"product_code\":\"N-0001\",\"root\":\"Njombe\",\"buying_price\":38500,\"selling_price\":40000,\"buying_date\":\"2025-09-10 00:00:00\",\"unit_type_id\":17,\"quantity\":56,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/chwaka-house-logopng-17574209255023.png\",\"status\":\"active\",\"created_at\":\"2025-09-09T12:28:45.000000Z\",\"updated_at\":\"2025-09-09T17:52:44.000000Z\"}', 1.00000000, NULL, NULL),
(10, 8, NULL, '{\"id\":148,\"category_id\":16,\"supplier_id\":5,\"name\":\"Chumvi\",\"product_number\":\"P-wVvWD\",\"description\":\"SALT\",\"product_code\":\"H0001\",\"root\":\"Dar Es Salaam\",\"buying_price\":10500,\"selling_price\":12500,\"buying_date\":\"2025-08-31 14:00:00\",\"unit_type_id\":20,\"quantity\":1548,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/logo-png-17572485902630.png\",\"status\":\"active\",\"created_at\":\"2025-09-07T02:36:30.000000Z\",\"updated_at\":\"2025-09-09T17:51:10.000000Z\"}', 4.00000000, NULL, NULL),
(11, 8, NULL, '{\"id\":149,\"category_id\":5,\"supplier_id\":5,\"name\":\"NGANO - AZANIA\",\"product_number\":\"P-iZ2sH\",\"description\":\"Ngano\",\"product_code\":\"N-0001\",\"root\":\"Njombe\",\"buying_price\":38500,\"selling_price\":40000,\"buying_date\":\"2025-09-10 00:00:00\",\"unit_type_id\":17,\"quantity\":55,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/chwaka-house-logopng-17574209255023.png\",\"status\":\"active\",\"created_at\":\"2025-09-09T12:28:45.000000Z\",\"updated_at\":\"2025-09-09T17:54:07.000000Z\"}', 4.00000000, NULL, NULL),
(12, 9, NULL, '{\"id\":149,\"category_id\":5,\"supplier_id\":5,\"name\":\"NGANO - AZANIA\",\"product_number\":\"P-iZ2sH\",\"description\":\"Ngano\",\"product_code\":\"N-0001\",\"root\":\"Njombe\",\"buying_price\":38500,\"selling_price\":40000,\"buying_date\":\"2025-09-10 00:00:00\",\"unit_type_id\":17,\"quantity\":51,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/chwaka-house-logopng-17574209255023.png\",\"status\":\"active\",\"created_at\":\"2025-09-09T12:28:45.000000Z\",\"updated_at\":\"2025-09-10T04:30:12.000000Z\"}', 1.00000000, NULL, NULL),
(13, 10, NULL, '{\"id\":151,\"category_id\":15,\"supplier_id\":5,\"name\":\"Ivory\",\"product_number\":\"P-GYxFa\",\"description\":\"okay\",\"product_code\":\"C0001\",\"root\":\"kIBAIGWA\",\"buying_price\":2000,\"selling_price\":3000,\"buying_date\":\"2025-09-05 00:00:00\",\"unit_type_id\":21,\"quantity\":60,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-10T10:49:54.000000Z\",\"updated_at\":\"2025-09-10T10:49:54.000000Z\"}', 1.00000000, NULL, NULL),
(14, 11, NULL, '{\"id\":151,\"category_id\":15,\"supplier_id\":5,\"name\":\"Ivory\",\"product_number\":\"P-GYxFa\",\"description\":\"okay\",\"product_code\":\"C0001\",\"root\":\"kIBAIGWA\",\"buying_price\":2000,\"selling_price\":3000,\"buying_date\":\"2025-09-05 00:00:00\",\"unit_type_id\":21,\"quantity\":59,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-10T10:49:54.000000Z\",\"updated_at\":\"2025-09-10T11:36:33.000000Z\"}', 1.00000000, NULL, NULL),
(15, 11, NULL, '{\"id\":149,\"category_id\":5,\"supplier_id\":5,\"name\":\"NGANO - AZANIA\",\"product_number\":\"P-iZ2sH\",\"description\":\"Ngano\",\"product_code\":\"N-0001\",\"root\":\"Njombe\",\"buying_price\":38500,\"selling_price\":40000,\"buying_date\":\"2025-09-10 00:00:00\",\"unit_type_id\":17,\"quantity\":50,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/chwaka-house-logopng-17574209255023.png\",\"status\":\"active\",\"created_at\":\"2025-09-09T12:28:45.000000Z\",\"updated_at\":\"2025-09-10T09:08:41.000000Z\"}', 1.00000000, NULL, NULL),
(16, 12, NULL, '{\"id\":151,\"category_id\":15,\"supplier_id\":5,\"name\":\"Ivory\",\"product_number\":\"P-GYxFa\",\"description\":\"okay\",\"product_code\":\"C0001\",\"root\":\"kIBAIGWA\",\"buying_price\":2000,\"selling_price\":3000,\"buying_date\":\"2025-09-05 00:00:00\",\"unit_type_id\":21,\"quantity\":58,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-10T10:49:54.000000Z\",\"updated_at\":\"2025-09-10T11:46:13.000000Z\"}', 1.00000000, NULL, NULL),
(17, 13, NULL, '{\"id\":149,\"category_id\":5,\"supplier_id\":5,\"name\":\"NGANO - AZANIA\",\"product_number\":\"P-iZ2sH\",\"description\":\"Ngano\",\"product_code\":\"N-0001\",\"root\":\"Njombe\",\"buying_price\":38500,\"selling_price\":40000,\"buying_date\":\"2025-09-10 00:00:00\",\"unit_type_id\":17,\"quantity\":49,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/storage\\/products\\/chwaka-house-logopng-17574209255023.png\",\"status\":\"active\",\"created_at\":\"2025-09-09T12:28:45.000000Z\",\"updated_at\":\"2025-09-10T11:46:13.000000Z\"}', 3.00000000, NULL, NULL),
(18, 14, 160, '{\"id\":160,\"category_id\":15,\"supplier_id\":7,\"name\":\"Big boss\",\"product_number\":\"P-Vi1Mr\",\"description\":\"ZIPO\",\"product_code\":\"Cn007\",\"root\":\"Kibaigwa\",\"buying_price\":3200,\"selling_price\":3500,\"buying_date\":\"2025-08-29 00:00:00\",\"unit_type_id\":6,\"quantity\":36,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-10T15:31:54.000000Z\",\"updated_at\":\"2025-09-10T15:31:54.000000Z\"}', 3.00000000, NULL, NULL),
(19, 15, 163, '{\"id\":163,\"category_id\":7,\"supplier_id\":7,\"name\":\"Ngano Ya Azania\",\"product_number\":\"P-7o67y\",\"description\":\"Zipo\",\"product_code\":\"Hm0002\",\"root\":\"Kibaigwa\",\"buying_price\":38500,\"selling_price\":40000,\"buying_date\":\"2025-08-29 00:00:00\",\"unit_type_id\":17,\"quantity\":15,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-10T15:44:52.000000Z\",\"updated_at\":\"2025-09-10T15:44:52.000000Z\"}', 3.00000000, NULL, NULL),
(20, 16, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 00:00:00\",\"unit_type_id\":21,\"quantity\":25,\"photo\":\"https:\\/\\/chuga-kariakoo.ct.ws\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-11T15:21:24.000000Z\",\"updated_at\":\"2025-09-11T15:21:24.000000Z\"}', 1.00000000, NULL, NULL),
(21, 17, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":24,\"photo\":\"http:\\/\\/127.0.0.1:8001\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-13T03:58:54.000000Z\"}', 1.00000000, NULL, NULL),
(22, 18, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":23,\"photo\":\"http:\\/\\/127.0.0.1:8001\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-13T01:08:58.000000Z\"}', 1.00000000, NULL, NULL),
(23, 19, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":22,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-13T01:16:56.000000Z\"}', 1.00000000, NULL, NULL),
(24, 20, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":21,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-14T02:21:13.000000Z\"}', 4.00000000, NULL, NULL),
(25, 21, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":17,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-14T16:29:31.000000Z\"}', 2.00000000, NULL, NULL),
(26, 22, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":15,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-14T16:30:08.000000Z\"}', 1.00000000, NULL, NULL),
(27, 23, 170, '{\"id\":170,\"category_id\":11,\"supplier_id\":7,\"name\":\"Champion exercise\",\"product_number\":\"P-5M5vC\",\"description\":\"Zipo\",\"product_code\":\"Sn02\",\"root\":\"Kibaigwa\",\"buying_price\":4200,\"selling_price\":5000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":6,\"quantity\":33,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:07:35.000000Z\",\"updated_at\":\"2025-09-12T01:07:35.000000Z\"}', 1.00000000, NULL, NULL),
(28, 24, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":14,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-14T16:30:44.000000Z\"}', 1.00000000, NULL, NULL),
(29, 25, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":13,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-15T09:44:50.000000Z\"}', 1.00000000, NULL, NULL),
(30, 26, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":12,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-15T09:45:13.000000Z\"}', 1.00000000, NULL, NULL),
(31, 27, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":11,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-15T09:46:19.000000Z\"}', 1.00000000, NULL, NULL),
(32, 28, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":10,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-15T09:47:33.000000Z\"}', 1.00000000, NULL, NULL),
(33, 29, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":9,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-15T09:47:57.000000Z\"}', 1.00000000, NULL, NULL),
(34, 30, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":8,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-15T10:15:33.000000Z\"}', 1.00000000, NULL, NULL),
(35, 31, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":7,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-15T10:35:48.000000Z\"}', 1.00000000, NULL, NULL),
(36, 32, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":6,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-15T10:38:11.000000Z\"}', 1.00000000, NULL, NULL),
(37, 33, 174, '{\"id\":174,\"category_id\":16,\"supplier_id\":7,\"name\":\"Super wash\",\"product_number\":\"P-byWff\",\"description\":\"ZIPO\",\"product_code\":\"Hp5\",\"root\":\"Kibaigwa\",\"buying_price\":60000,\"selling_price\":63000,\"buying_date\":\"2025-08-29 10:00:00\",\"unit_type_id\":21,\"quantity\":5,\"photo\":\"http:\\/\\/127.0.0.1:8000\\/assets\\/img\\/default-image.jpg\",\"status\":\"active\",\"created_at\":\"2025-09-12T01:21:24.000000Z\",\"updated_at\":\"2025-09-15T10:48:18.000000Z\"}', 1.00000000, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` bigint(20) UNSIGNED NOT NULL,
  `supplier_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `product_number` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `product_code` varchar(255) DEFAULT NULL,
  `root` varchar(255) DEFAULT NULL,
  `buying_price` decimal(20,8) NOT NULL,
  `selling_price` decimal(20,8) NOT NULL,
  `buying_date` timestamp NULL DEFAULT NULL,
  `unit_type_id` bigint(20) UNSIGNED DEFAULT NULL,
  `quantity` decimal(20,8) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `category_id`, `supplier_id`, `name`, `product_number`, `description`, `product_code`, `root`, `buying_price`, `selling_price`, `buying_date`, `unit_type_id`, `quantity`, `photo`, `status`, `created_at`, `updated_at`) VALUES
(154, 15, 7, 'Ivory orange', 'P-ZrmOa', 'Active', 'Cn001', 'Kibaigwa', 1600.00000000, 2000.00000000, '2025-08-29 07:00:00', 6, 108.00000000, NULL, 'active', '2025-09-10 20:57:27', '2025-09-10 20:57:27'),
(155, 15, 7, 'Ivory mint', 'P-Zxg4L', 'Zipo', 'Cn002', 'Kibaigwa', 1600.00000000, 2000.00000000, '2025-08-29 07:00:00', 6, 108.00000000, NULL, 'active', '2025-09-10 21:00:28', '2025-09-10 21:00:28'),
(156, 15, 7, 'Ivory milk', 'P-1vXlb', 'Zipo', 'Cn003', 'Kibaigwa', 1900.00000000, 2000.00000000, '2025-08-29 07:00:00', 6, 108.00000000, NULL, 'active', '2025-09-10 21:02:31', '2025-09-10 21:02:31'),
(157, 15, 7, 'Big boom', 'P-1Ft9Q', 'Zipo', 'Cn004', 'Kibaigwa', 6600.00000000, 8000.00000000, '2025-08-29 07:00:00', 6, 48.00000000, NULL, 'active', '2025-09-10 21:11:33', '2025-09-10 21:11:33'),
(158, 15, 7, 'Assorted', 'P-XOLOQ', 'Zipo', 'Cn005', 'Kibaigwa', 1800.00000000, 2000.00000000, '2025-08-29 07:00:00', 6, 100.00000000, NULL, 'active', '2025-09-10 22:26:15', '2025-09-10 22:26:15'),
(159, 15, 7, 'Boom', 'P-BcqlX', 'ZIPO', 'Cn006', 'Kibaigwa', 1500.00000000, 2000.00000000, '2025-08-29 07:00:00', 6, 100.00000000, NULL, 'active', '2025-09-10 22:28:41', '2025-09-10 22:28:41'),
(160, 15, 7, 'Big boss', 'P-Vi1Mr', 'ZIPO', 'Cn007', 'Kibaigwa', 3200.00000000, 3500.00000000, '2025-08-29 07:00:00', 6, 33.00000000, NULL, 'active', '2025-09-10 22:31:54', '2025-09-11 14:02:17'),
(161, 15, 7, 'Veve', 'P-Ztvdz', 'ZIPO', 'Cn008', 'Kibaigwa', 1750.00000000, 2000.00000000, '2025-08-29 07:00:00', 6, 140.00000000, NULL, 'active', '2025-09-10 22:34:29', '2025-09-10 22:34:29'),
(162, 7, 7, 'Ngano ya safi', 'P-IExQW', 'ZIPO', 'Hm0001', 'Kibaigwa', 38000.00000000, 40000.00000000, '2025-08-29 07:00:00', 17, 60.00000000, NULL, 'active', '2025-09-10 22:41:53', '2025-09-10 22:41:53'),
(163, 7, 7, 'Ngano Ya Azania', 'P-7o67y', 'Zipo', 'Hm0002', 'Kibaigwa', 38500.00000000, 40000.00000000, '2025-08-29 07:00:00', 17, 12.00000000, NULL, 'active', '2025-09-10 22:44:52', '2025-09-11 14:02:42'),
(164, 7, 7, 'Ngano Ya Azam', 'P-0rcIZ', 'ZIPO', 'Hm0003', 'Kibaigwa', 39500.00000000, 41000.00000000, '2025-08-29 07:00:00', 17, 45.00000000, NULL, 'active', '2025-09-11 02:20:27', '2025-09-11 02:20:27'),
(165, 5, 8, 'Mchele gradeA', 'P-pyocL', 'Upo', 'Nk001', 'Tabora', 110000.00000000, 117500.00000000, '2025-09-05 07:00:00', 18, 6850.00000000, NULL, 'active', '2025-09-11 17:47:07', '2025-09-11 17:47:07'),
(166, 5, 8, 'Mchele gradeB', 'P-scRiI', 'Upo', 'Nk002', 'Tabora', 105000.00000000, 115000.00000000, '2025-09-05 07:00:00', 18, 2700.00000000, NULL, 'active', '2025-09-11 17:51:47', '2025-09-11 17:51:47'),
(167, 5, 8, 'Mchele gradeC', 'P-8kpx6', 'Upo', 'Nk003', 'Tabora', 105000.00000000, 110000.00000000, '2025-09-05 07:00:00', 18, 700.00000000, NULL, 'active', '2025-09-11 17:54:33', '2025-09-11 17:54:33'),
(168, 16, 7, 'Viberiti', 'P-zSMit', 'Vipo', 'HP0001', 'Kibaigwa', 37000.00000000, 40000.00000000, '2025-08-29 07:00:00', 21, 6.00000000, NULL, 'active', '2025-09-11 21:11:47', '2025-09-11 21:11:47'),
(169, 11, 7, 'Exercise s/line d/line', 'P-9s5qF', 'Zipo', 'Sn01', 'Kibaigwa', 1500.00000000, 2000.00000000, '2025-08-29 07:00:00', 6, 2700.00000000, NULL, 'active', '2025-09-11 21:32:28', '2025-09-11 21:32:28'),
(170, 11, 7, 'Champion exercise', 'P-5M5vC', 'Zipo', 'Sn02', 'Kibaigwa', 4200.00000000, 5000.00000000, '2025-08-29 07:00:00', 6, 32.00000000, NULL, 'active', '2025-09-11 22:07:35', '2025-09-15 06:44:07'),
(171, 16, 7, 'Sukari kg 25', 'P-cfGvX', 'ZIPO', 'Hp0002', 'Kibaigwa', 57000.00000000, 60000.00000000, '2025-08-29 07:00:00', 17, 30.00000000, NULL, 'active', '2025-09-11 22:09:58', '2025-09-11 22:09:58'),
(172, 16, 7, 'Royal wash', 'P-fkC6o', 'Zipo', 'Hp0003', 'Kibaigwa', 87000.00000000, 90000.00000000, '2025-08-29 07:00:00', 21, 17.00000000, NULL, 'active', '2025-09-11 22:16:28', '2025-09-11 22:16:28'),
(173, 16, 7, 'Wasafi soap', 'P-r42Xh', 'ZIPO', 'Hp0004', 'Kibaigwa', 87000.00000000, 90000.00000000, '2025-08-29 07:00:00', 21, 10.00000000, NULL, 'active', '2025-09-11 22:18:59', '2025-09-11 22:18:59'),
(174, 16, 7, 'Super wash', 'P-byWff', 'ZIPO', 'Hp5', 'Kibaigwa', 60000.00000000, 63000.00000000, '2025-08-29 07:00:00', 21, 4.00000000, NULL, 'active', '2025-09-11 22:21:24', '2025-09-15 07:48:30');

-- --------------------------------------------------------

--
-- Table structure for table `salaries`
--

CREATE TABLE `salaries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `employee_id` bigint(20) UNSIGNED NOT NULL,
  `amount` decimal(20,8) NOT NULL,
  `salary_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `val` text DEFAULT NULL,
  `group` varchar(255) NOT NULL DEFAULT 'default',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `name`, `val`, `group`, `created_at`, `updated_at`) VALUES
(1, 'currency_symbol', 'TZS', 'default', '2025-09-06 06:14:45', '2025-09-06 06:14:45');

-- --------------------------------------------------------

--
-- Table structure for table `suppliers`
--

CREATE TABLE `suppliers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `shop_name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `email`, `phone`, `address`, `photo`, `shop_name`, `created_at`, `updated_at`) VALUES
(5, 'Takbir Company Limited', 'takbir@gmail.com', '0753066086', 'Dar Es Salaam, Tanzania', 'logo-png-17572483556290.png', 'Takbir Enterprises', '2025-09-07 09:32:35', '2025-09-07 09:32:35'),
(7, 'Loveness', 'loveness@gmail.com', '0621060107', 'Kibaigwa', NULL, 'Loveness Shop', '2025-09-10 20:25:06', '2025-09-10 20:25:06'),
(8, 'Bige mchele', 'bigetabora @gmail.com', '0753703180', 'Tabora', NULL, 'Tabora one', '2025-09-11 17:17:50', '2025-09-11 17:17:50');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` bigint(20) UNSIGNED NOT NULL,
  `transaction_number` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `paid_through` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `order_id`, `transaction_number`, `amount`, `paid_through`, `created_at`, `updated_at`) VALUES
(3, 3, 'TRX-ps22g', '500000', 'cash', '2025-09-07 09:39:19', '2025-09-07 09:39:19'),
(4, 4, 'TRX-sy1e2', '165000', 'cash', '2025-09-10 00:48:55', '2025-09-10 00:48:55'),
(5, 5, 'TRX-ZDha9', '105000', 'cash', '2025-09-10 00:51:10', '2025-09-10 00:51:10'),
(6, 6, 'TRX-Skoqo', '0', 'cash', '2025-09-10 00:52:44', '2025-09-10 00:52:44'),
(7, 7, 'TRX-lVPPl', '0', 'gift_card', '2025-09-10 00:54:07', '2025-09-10 00:54:07'),
(8, 8, 'TRX-SdWEc', '210000', 'cash', '2025-09-10 11:30:12', '2025-09-10 11:30:12'),
(9, 9, 'TRX-WlMcF', '40000', 'cash', '2025-09-10 16:08:41', '2025-09-10 16:08:41'),
(10, 10, 'TRX-09KIs', '0', 'loan', '2025-09-10 18:36:33', '2025-09-10 18:36:33'),
(11, 11, 'TRX-H5oCT', '0', 'loan', '2025-09-10 18:46:13', '2025-09-10 18:46:13'),
(12, 10, 'TRX-7hEU2', '3000', 'cash', '2025-09-10 19:03:12', '2025-09-10 19:03:12'),
(13, 11, 'TRX-bRHgW', '43000', 'cash', '2025-09-10 19:03:35', '2025-09-10 19:03:35'),
(14, 12, 'TRX-jsLSq', '0', 'loan', '2025-09-10 19:04:04', '2025-09-10 19:04:04'),
(15, 12, 'TRX-64SDW', '3000', 'cash', '2025-09-10 19:04:32', '2025-09-10 19:04:32'),
(16, 13, 'TRX-sR5JG', '0', 'cash', '2025-09-10 19:15:41', '2025-09-10 19:15:41'),
(17, 14, 'TRX-Fi9wv', '10500', 'cash', '2025-09-11 14:02:17', '2025-09-11 14:02:17'),
(18, 15, 'TRX-JqjrI', '0', 'loan', '2025-09-11 14:02:42', '2025-09-11 14:02:42'),
(19, 15, 'TRX-6caOy', '120000', 'cash', '2025-09-11 14:02:57', '2025-09-11 14:02:57'),
(20, 16, 'TRX-jGauf', '63000', 'cash', '2025-09-13 00:58:54', '2025-09-13 00:58:54'),
(21, 17, 'TRX-endqB', '63000', 'cash', '2025-09-12 22:08:58', '2025-09-12 22:08:58'),
(22, 18, 'TRX-yygsZ', '63000', 'cash', '2025-09-12 22:16:56', '2025-09-12 22:16:56'),
(23, 19, 'TRX-i3TlH', '63000', 'cash', '2025-09-13 23:21:13', '2025-09-13 23:21:13'),
(24, 20, 'TRX-n94hJ', '252000', 'cash', '2025-09-14 13:29:31', '2025-09-14 13:29:31'),
(25, 21, 'TRX-X03Rb', '0', 'loan', '2025-09-14 13:30:09', '2025-09-14 13:30:09'),
(26, 22, 'TRX-w3bMN', '0', 'loan', '2025-09-14 13:30:45', '2025-09-14 13:30:45'),
(27, 22, 'TRX-rLX61', '63000', 'cash', '2025-09-14 13:31:07', '2025-09-14 13:31:07'),
(28, 23, 'TRX-dTptx', '5000', 'bank', '2025-09-15 06:44:07', '2025-09-15 06:44:07'),
(29, 24, 'TRX-jq2dF', '63000', 'cash', '2025-09-15 06:44:50', '2025-09-15 06:44:50'),
(30, 25, 'TRX-LeIv9', '0', 'loan', '2025-09-15 06:45:14', '2025-09-15 06:45:14'),
(31, 25, 'TRX-Vr8tf', '63000', 'cash', '2025-09-15 06:45:49', '2025-09-15 06:45:49'),
(32, 26, 'TRX-otWiu', '0', 'loan', '2025-09-15 06:46:19', '2025-09-15 06:46:19'),
(33, 26, 'TRX-AQdAx', '63000', 'cash', '2025-09-15 06:46:59', '2025-09-15 06:46:59'),
(34, 27, 'TRX-Ket6P', '63000', 'cash', '2025-09-15 06:47:34', '2025-09-15 06:47:34'),
(35, 28, 'TRX-ZWsEl', '0', 'loan', '2025-09-15 06:47:57', '2025-09-15 06:47:57'),
(36, 28, 'TRX-2qYh8', '63000', 'cash', '2025-09-15 06:48:19', '2025-09-15 06:48:19'),
(37, 29, 'TRX-EjEF1', '0', 'loan', '2025-09-15 07:15:33', '2025-09-15 07:15:33'),
(38, 29, 'TRX-ymLe5', '63000', 'bank', '2025-09-15 07:35:07', '2025-09-15 07:35:07'),
(39, 30, 'TRX-V4lQw', '0', 'loan', '2025-09-15 07:35:48', '2025-09-15 07:35:48'),
(40, 30, 'TRX-FpwM8', '63000', 'loan', '2025-09-15 07:36:01', '2025-09-15 07:36:01'),
(41, 31, 'TRX-0K1R7', '63000', 'bank', '2025-09-15 07:38:11', '2025-09-15 07:38:11'),
(42, 32, 'TRX-aWJrf', '63000', 'cash', '2025-09-15 07:48:18', '2025-09-15 07:48:18'),
(43, 33, 'TRX-dpe85', '0', 'loan', '2025-09-15 07:48:30', '2025-09-15 07:48:30'),
(44, 24, 'TRX-9LZcq', '63000', 'cash', '2025-09-15 08:17:40', '2025-09-15 08:17:40'),
(45, 31, 'TRX-1qagv', '63000', 'cash', '2025-09-15 08:17:46', '2025-09-15 08:17:46'),
(46, 26, 'TRX-LOHl0', '63000', 'bank', '2025-09-15 08:26:36', '2025-09-15 08:26:36');

-- --------------------------------------------------------

--
-- Table structure for table `unit_types`
--

CREATE TABLE `unit_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `symbol` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `unit_types`
--

INSERT INTO `unit_types` (`id`, `name`, `symbol`, `created_at`, `updated_at`) VALUES
(1, 'Piece', 'Pc', '2025-09-06 05:59:45', '2025-09-07 08:40:38'),
(2, 'Kilogram', 'Kg', '2025-09-06 05:59:45', '2025-09-07 08:40:49'),
(3, 'Gram', 'g', '2025-09-06 05:59:45', '2025-09-06 05:59:45'),
(4, 'Liter', 'l', '2025-09-06 05:59:45', '2025-09-06 05:59:45'),
(5, 'Milliliter', 'ml', '2025-09-06 05:59:46', '2025-09-06 05:59:46'),
(6, 'Dozzen', 'Dz', '2025-09-06 05:59:46', '2025-09-07 08:40:08'),
(10, 'Drum [20]', 'D20', '2025-09-07 08:42:57', '2025-09-07 08:42:57'),
(12, 'Drum [10]', 'D10', '2025-09-07 08:44:56', '2025-09-07 08:44:56'),
(13, 'Drum [5]', 'D5', '2025-09-07 08:45:47', '2025-09-07 08:45:47'),
(14, 'Bag [5]', 'B5', '2025-09-07 08:46:38', '2025-09-07 08:46:58'),
(15, 'Bag [10]', 'B10', '2025-09-07 08:47:57', '2025-09-07 08:47:57'),
(16, 'Bag [20]', 'B20', '2025-09-07 08:48:41', '2025-09-07 08:48:41'),
(17, 'Bag [25]', 'B25', '2025-09-07 08:49:22', '2025-09-07 08:49:22'),
(18, 'Bag [50]', 'B50', '2025-09-07 08:49:50', '2025-09-07 08:49:50'),
(19, 'Bag [100]', 'B1H', '2025-09-07 08:55:28', '2025-09-07 08:55:28'),
(21, 'Catton', 'Ct', '2025-09-10 17:38:53', '2025-09-10 17:38:53');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `photo`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'RAMADHANI RAMADHANI', 'yasynramah@gmail.com', NULL, '$2y$12$uUaEdJwJXzw9UJdWJDJLqeOpZ/qAKE0bzKOYfalb8fCH708LyJG9.', 'logo-png-17571501257791.png', NULL, '2025-09-06 06:13:04', '2025-09-06 06:15:25'),
(2, 'Japhary Nduko', 'japharynduko11@gmail.com', NULL, '$2y$12$QkdPGrq5FTNPgInPOvLoHuguaTJVe15/ejfgwImjjxS7xgfYqV22O', NULL, NULL, '2025-09-09 19:50:32', '2025-09-09 19:50:32'),
(3, 'Tatu', 'tatuyassin11@gmail.com', NULL, '$2y$12$AUtwn5HM8GgD6FQ768KjfuqdcCHabmdWK15SSPkhTvny7rhMBN36.', NULL, NULL, '2025-09-10 19:12:07', '2025-09-10 19:12:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `carts_user_id_foreign` (`user_id`),
  ADD KEY `carts_product_id_foreign` (`product_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `categories_name_unique` (`name`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `employees_email_unique` (`email`),
  ADD KEY `employees_name_index` (`name`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `expenses_amount_index` (`amount`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orders_order_number_unique` (`order_number`),
  ADD KEY `orders_customer_id_foreign` (`customer_id`),
  ADD KEY `orders_due_index` (`due`),
  ADD KEY `orders_profit_index` (`profit`),
  ADD KEY `orders_loss_index` (`loss`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_items_order_id_foreign` (`order_id`),
  ADD KEY `order_items_product_id_foreign` (`product_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_category_id_foreign` (`category_id`),
  ADD KEY `products_supplier_id_foreign` (`supplier_id`),
  ADD KEY `products_unit_type_id_foreign` (`unit_type_id`);

--
-- Indexes for table `salaries`
--
ALTER TABLE `salaries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `salaries_employee_id_foreign` (`employee_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_order_id_foreign` (`order_id`);

--
-- Indexes for table `unit_types`
--
ALTER TABLE `unit_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;

--
-- AUTO_INCREMENT for table `salaries`
--
ALTER TABLE `salaries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT for table `unit_types`
--
ALTER TABLE `unit_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `carts_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_product_id_foreign` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `products_supplier_id_foreign` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `products_unit_type_id_foreign` FOREIGN KEY (`unit_type_id`) REFERENCES `unit_types` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `salaries`
--
ALTER TABLE `salaries`
  ADD CONSTRAINT `salaries_employee_id_foreign` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_order_id_foreign` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
