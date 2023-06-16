-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 16-06-2023 a las 13:18:56
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `baseDeDatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `post_id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `comentario` varchar(2000) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `post_id`, `usuario_id`, `comentario`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, 1, 'La torta que compré estaba deliciosa, la masa suave y esponjosa, y el relleno de chocolate era simplemente divino. Definitivamente volveré a comprar aquí.', '2023-04-11 11:23:35', '2023-04-11 11:23:35', NULL),
(2, 8, 3, 'No me gustó mucho la torta que compré aquí. La masa estaba muy seca y el relleno tenía un sabor extraño. Realmente esperaba algo mejor por el precio que pagué.', '2023-04-11 11:23:35', '2023-04-11 11:23:35', NULL),
(3, 5, 2, 'La torta fue simplemente espectacular. El sabor era delicioso, la masa estaba fresca y el relleno de frutas estaba muy bien distribuido. Sin duda alguna, recomiendo este lugar para comprar tortas.', '2023-04-11 11:23:35', '2023-04-11 11:23:35', NULL),
(4, 4, 5, 'La torta superó todas mis expectativas. La masa estaba suave y esponjosa, el relleno era delicioso y la presentación era hermosa. Definitivamente volveré a comprar aquí.', '2023-04-11 11:23:35', '2023-04-11 11:23:35', NULL),
(5, 1, 8, 'Muy rica la chocotorta', '2023-06-09 20:07:04', '2023-06-09 20:07:04', NULL),
(20, 2, 8, 'No me gustó el relleno', '2023-06-09 20:10:11', '2023-06-09 20:10:11', NULL),
(22, 4, 8, 'Me encanta', '2023-06-09 20:29:37', '2023-06-09 20:29:37', NULL),
(23, 4, 8, 'Me encanta', '2023-06-09 20:31:48', '2023-06-09 20:31:48', NULL),
(24, 5, 7, 'No me gustó el relleno', '2023-06-09 20:41:00', '2023-06-09 20:41:00', NULL),
(25, 12, 7, 'muy acida', '2023-06-09 20:41:20', '2023-06-09 20:41:20', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_de_usuarios`
--

CREATE TABLE `tabla_de_usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(200) NOT NULL,
  `usuario` varchar(200) NOT NULL,
  `contrasennia` varchar(250) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `documento` int(11) NOT NULL,
  `foto_perfil` varchar(300) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tabla_de_usuarios`
--

INSERT INTO `tabla_de_usuarios` (`id`, `email`, `usuario`, `contrasennia`, `fecha_nacimiento`, `documento`, `foto_perfil`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'juan.luanardo@gmail.com', 'Juan Luanardo', 'juanito1999', '1999-04-01', 35603546, 'https://img.freepik.com/fotos-premium/retrato-estudio-primer-plano-hombre-mulato-serio_2221-2988.jpg', '2023-04-11 11:23:19', '2023-06-09 20:26:08', NULL),
(2, 'marucha55@hotmail.com', 'María Fajuardi', 'peperosa111', '1955-08-26', 13589334, 'https://attend.ieee.org/argencon-2020/wp-content/uploads/sites/171/anonimo-perfil-640x640.png', '2023-04-11 11:23:19', '2023-06-09 20:30:37', NULL),
(3, 'paolap@gmail.com', 'Paola Pinpolón', 'nazasanti2004', '1972-10-30', 22639741, 'https://attend.ieee.org/argencon-2020/wp-content/uploads/sites/171/anonimo-perfil-640x640.png', '2023-04-11 11:23:19', '2023-06-09 20:30:45', NULL),
(4, 'echarri.miguel@gmail.com', 'Miguel Echarri', 'miguelitoboca1234', '2000-03-21', 40649802, 'https://attend.ieee.org/argencon-2020/wp-content/uploads/sites/171/anonimo-perfil-640x640.png', '2023-04-11 11:23:19', '2023-06-09 20:31:01', NULL),
(5, 'betty.garcia@hotmail.com', 'Beatriz García', 'beaflores', '1960-12-25', 15790123, 'https://attend.ieee.org/argencon-2020/wp-content/uploads/sites/171/anonimo-perfil-640x640.png', '2023-04-11 11:23:19', '2023-06-09 20:31:11', NULL),
(6, 'lgarciabes@udesa.com.ar', 'lu', '$2a$10$6AkkWS2K/RHk9SD3cjClweMLylc.S2s03n7lyJqqvh4If9fweC8DG', '2003-11-20', 5647654, 'https://attend.ieee.org/argencon-2020/wp-content/uploads/sites/171/anonimo-perfil-640x640.png', '2023-06-05 14:41:26', '2023-06-09 20:31:21', NULL),
(7, 'martu@gmail.com', 'martu123', '$2a$10$98E6aLhAQHC5JFTXeSzgsuntrM4WNeXIKtd1VgLOBBFdisOIFKtNC', '2003-07-04', 45394929, 'https://img.freepik.com/foto-gratis/primer-plano-retrato-mujer-joven-moderna-estilo-luz-natural-maquillada-sonriendo-camara-luciendo-segura-pie-contra-fondo-blanco_176420-53620.jpg', '2023-06-05 14:46:59', '2023-06-09 20:19:31', NULL),
(8, 'clara@gmail.com', 'clari1234', '$2a$10$zDmMgohPuOAm6KwkH3ZEvuopwycbXYFVUcnIonKJZA.d3AD5H1u8u', '2004-04-16', 443453542, 'https://static.vecteezy.com/system/resources/previews/001/832/768/large_2x/close-up-portrait-of-a-woman-free-photo.jpg', '2023-06-05 15:28:57', '2023-06-12 15:22:35', NULL),
(9, 'pili@mail.com', 'pili123', '$2a$10$QVRupbNdo0BzWX2lLbtlz.VrXkxW.qnjMMyBUVIVrStBP5zm8ydPW', '2023-06-07', 33456235, 'https://attend.ieee.org/argencon-2020/wp-content/uploads/sites/171/anonimo-perfil-640x640.png', '2023-06-06 13:20:03', '2023-06-09 20:31:33', NULL),
(10, 'lugarcia@gmail.com', 'lu123', '$2a$10$BZaRXQRQAhmHyePRdloUc.6Y3jX08MItEP6yckWtWH0.cmChdky3q', '2023-06-09', 44912854, 'https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1610/vadymvdrobot161000119/63607070-retrato-de-primer-plano-de-una-chica-sonriente-bastante-joven-casual-mirando-a-c%C3%A1mara-aislada-en-el.jpg', '2023-06-12 15:30:20', '2023-06-12 15:34:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_productos`
--

CREATE TABLE `tabla_productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `imagen` varchar(300) NOT NULL,
  `nombre_producto` varchar(250) NOT NULL,
  `descripcion_producto` varchar(1000) NOT NULL,
  `fecha_carga` datetime NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tabla_productos`
--

INSERT INTO `tabla_productos` (`id`, `usuario_id`, `imagen`, `nombre_producto`, `descripcion_producto`, `fecha_carga`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 1, '/images/products/chocotorta.jpg', 'Chocotorta', 'La chocotorta se elabora con galletas de chocolate, crema de queso, dulce de leche y café.', '2031-03-23 00:00:00', '2023-04-11 11:23:30', '2023-04-11 11:23:30', NULL),
(2, 2, '/images/products/cheescakearandanos.jpg', 'Cheesecake de Arandanos', 'El cheesecake de arándanos se elabora con queso crema, azúcar, huevos, vainilla y arándanos frescos. La base de la tarta es de galletas trituradas mezcladas con mantequilla derretida.', '2031-03-23 00:00:00', '2023-04-11 11:23:30', '2023-04-11 11:23:30', NULL),
(3, 3, '/images/products/rogel.jpg', 'Rogel', 'El rogel se elabora con harina, mantequilla, huevos, azúcar, dulce de leche y coco rallado.', '2031-03-23 00:00:00', '2023-04-11 11:23:30', '2023-04-11 11:23:30', NULL),
(4, 4, '/images/products/frutilla.jpg', 'Torta de Frutilla', 'La torta de frutillas es un postre elaborado con ingredientes básicos como harina, huevos, azúcar, leche, mantequilla y frutillas frescas.', '2031-03-23 00:00:00', '2023-04-11 11:23:30', '2023-04-11 11:23:30', NULL),
(5, 5, '/images/products/oreo.jpg', 'Torta Oreo', 'La torta Oreo es un postre delicioso elaborado con ingredientes simples como galletas Oreo, queso crema, azúcar y crema batida.', '2031-03-23 00:00:00', '2023-04-11 11:23:30', '2023-04-11 11:23:30', NULL),
(6, 1, '/images/products/pastafrola.jpg', 'Pasta frola de membrillo', 'La pasta frola de membrillo se elabora con ingredientes simples como harina, mantequilla, azúcar, huevos y dulce de membrillo.', '2031-03-23 00:00:00', '2023-04-11 11:23:30', '2023-04-11 11:23:30', NULL),
(7, 2, '/images/products/ricota.jpg', 'Torta de Ricota', 'La torta de ricota es un postre italiano elaborado con queso ricota, huevos, azúcar, harina y esencia de vainilla.', '2031-03-23 00:00:00', '2023-04-11 11:23:30', '2023-04-11 11:23:30', NULL),
(8, 3, '/images/products/marquise.jpg', 'Marquise', 'La marquise es un postre de origen francés elaborado con chocolate, mantequilla, huevos y azúcar.', '2031-03-23 00:00:00', '2023-04-11 11:23:30', '2023-04-11 11:23:30', NULL),
(9, 4, '/images/products/tiramisu.jpg', 'Tiramisú', 'El tiramisú es un postre italiano que se elabora con ingredientes simples como queso mascarpone, bizcochos de soletilla, café, huevos y cacao en polvo.', '2031-03-23 00:00:00', '2023-04-11 11:23:30', '2023-04-11 11:23:30', NULL),
(10, 5, '/images/products/tortachocolate.jpg', 'Torta de chocolate', 'La torta de chocolate es un postre clásico que se elabora con ingredientes simples como harina, azúcar, huevos, mantequilla, chocolate y cacao en polvo.', '2031-03-23 00:00:00', '2023-04-11 11:23:30', '2023-04-11 11:23:30', NULL),
(12, 8, 'https://www.tasteofhome.com/wp-content/uploads/2018/01/World-s-Best-Lemon-Pie_EXPS_DIYD21_4439_E05_13_1b.jpg', 'Lemon Pie', 'Torta de limón, ácida y dulce, con merengue.', '2023-06-02 00:00:00', '2023-06-05 17:09:48', '2023-06-12 12:35:05', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `comentarios_ibfk_2` (`post_id`);

--
-- Indices de la tabla `tabla_de_usuarios`
--
ALTER TABLE `tabla_de_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- Indices de la tabla `tabla_productos`
--
ALTER TABLE `tabla_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `tabla_de_usuarios`
--
ALTER TABLE `tabla_de_usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tabla_productos`
--
ALTER TABLE `tabla_productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `tabla_de_usuarios` (`id`),
  ADD CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`post_id`) REFERENCES `tabla_productos` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `tabla_productos`
--
ALTER TABLE `tabla_productos`
  ADD CONSTRAINT `tabla_productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `tabla_de_usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


