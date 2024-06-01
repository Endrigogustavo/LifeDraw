-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01/06/2024 às 02:44
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `lifedraw`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `imagens`
--

CREATE TABLE `imagens` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `caminho` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `imagens`
--

INSERT INTO `imagens` (`id`, `nome`, `caminho`) VALUES
(1, 'gojo', 'm'),
(2, 'Gojo', 'w'),
(3, '_wallpaper_____satoru_gojo____jujutsu_kaisen_by_dwayn_kin_dee1piy.png', 'uploads\\fdad24e40e91fb815f3cd0d8cbff38dd'),
(4, 'minato card.jpg', '1717179321087.jpg'),
(5, 'hunter_x_drrr_ed_background_by_kugukiugu_d2nj03p-pre.jpg', '1717179636319.jpg'),
(6, 'rainden.jpg', '1717179866021.jpg'),
(7, 'hunter_x_drrr_ed_background_by_kugukiugu_d2nj03p-pre.jpg', 'undefined_1717200093883.jpg'),
(8, '1717200750396.jpg', '/uploads/1717200750396.jpg'),
(9, '1717200906493.jpg', '/uploads/1717200906493.jpg'),
(10, '1717201462685.jpg', '/uploads/1717201462685.jpg'),
(11, '1717201472155.jpg', '/uploads/1717201472155.jpg');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `imagens`
--
ALTER TABLE `imagens`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `imagens`
--
ALTER TABLE `imagens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
