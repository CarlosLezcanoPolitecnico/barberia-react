-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2023 a las 23:38:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `barberia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barberos`
--

CREATE TABLE `barberos` (
  `id_barbero` int(11) NOT NULL,
  `nombres` varchar(50) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `cargo` varchar(50) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `calificacion` int(11) DEFAULT NULL CHECK (`calificacion` >= 1 and `calificacion` <= 5)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `barberos`
--

INSERT INTO `barberos` (`id_barbero`, `nombres`, `apellidos`, `cargo`, `descripcion`, `calificacion`) VALUES
(1, 'Julian', 'Esteban', 'Barbero', '333prueba descripcion', NULL),
(2, 'Samuel', 'Arango', 'Barbero', '333prueba descripcion', NULL),
(3, 'Camilo', '', 'Barbero', '333prueba descripcion', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `citas`
--

CREATE TABLE `citas` (
  `id_cita` int(11) NOT NULL,
  `nombre_cliente` varchar(50) NOT NULL,
  `telefono_cliente` varchar(15) DEFAULT NULL,
  `fecha_cita` varchar(30) NOT NULL,
  `barbero` varchar(50) NOT NULL,
  `hora_cita` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `citas`
--

INSERT INTO `citas` (`id_cita`, `nombre_cliente`, `telefono_cliente`, `fecha_cita`, `barbero`, `hora_cita`) VALUES
(2, 'carlos', '8923342', '11 de noviembre', 'julian', '1 pm'),
(3, 'diego', '758923', '11 de noviembre', 'samuel', '2pm'),
(6, 'julian', '54235', '12 de octubre', 'camilo', '2 om');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios_corte`
--

CREATE TABLE `servicios_corte` (
  `id_servicio` int(11) NOT NULL,
  `servicio` varchar(50) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios_corte`
--

INSERT INTO `servicios_corte` (`id_servicio`, `servicio`, `descripcion`, `precio`) VALUES
(1, 'Corte Sencillo', 'Corte sencillo en el cual solo se usan máquinas para cortar el cabello.', 12000.00),
(2, 'Corte Sencillo Cejas', 'Corte sencillo en el cual solo se usan máquinas para cortar el cabello y las cejas.', 15000.00),
(3, 'Corte Sencillo Barba', 'Corte sencillo en el cual solo se usan máquinas para cortar el cabello y la barba.', 18000.00),
(4, 'Corte Full', 'Corte sencillo en el cual se usan máquinas para cortar el cabello, las cejas y la barba.', 20000.00),
(5, 'Corte Avanzado', 'Corte avanzado en el cual se usan tijeras para cortar el cabello, además de máquinas. Recomendado para cabello largo.', 13000.00),
(6, 'Corte Avanzado Cejas', 'Corte avanzado en el cual se usan tijeras para cortar el cabello, máquinas y se realiza un cuidado especial en las cejas con un lubricante especial. Recomendado para cabello largo.', 16000.00),
(7, 'Corte Avanzado Barba', 'Corte en el cual se aplica un aceite especial a la barba para suavizar y dar brillo.', 20000.00),
(8, 'Luxury Full Service', 'Todos los servicios anteriores incluidos.', 25000.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `usuario` varchar(30) NOT NULL,
  `contrasena` varchar(30) NOT NULL,
  `nombres` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `usuario`, `contrasena`, `nombres`) VALUES
(1, 'carloslezcano', '123', 'Carlos Esteban Lezcano Tobon');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `barberos`
--
ALTER TABLE `barberos`
  ADD PRIMARY KEY (`id_barbero`);

--
-- Indices de la tabla `citas`
--
ALTER TABLE `citas`
  ADD PRIMARY KEY (`id_cita`);

--
-- Indices de la tabla `servicios_corte`
--
ALTER TABLE `servicios_corte`
  ADD PRIMARY KEY (`id_servicio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `barberos`
--
ALTER TABLE `barberos`
  MODIFY `id_barbero` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `citas`
--
ALTER TABLE `citas`
  MODIFY `id_cita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `servicios_corte`
--
ALTER TABLE `servicios_corte`
  MODIFY `id_servicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
