-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01/06/2024 às 18:03
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
(17, '1717245528237.jpg', '/uploads/1717245528237.jpg'),
(18, '1717245636299.jpg', '/uploads/1717245636299.jpg'),
(19, '1717245646583.jpg', '/uploads/1717245646583.jpg'),
(20, '1717245661613.jpg', '/uploads/1717245661613.jpg'),
(21, '1717245675103.webp', '/uploads/1717245675103.webp'),
(22, '1717245684142.jpg', '/uploads/1717245684142.jpg'),
(23, '1717245694414.jpg', '/uploads/1717245694414.jpg'),
(24, '1717245702109.jpg', '/uploads/1717245702109.jpg'),
(25, '1717245711206.jpg', '/uploads/1717245711206.jpg'),
(26, '1717245720266.jpg', '/uploads/1717245720266.jpg'),
(27, '1717245733138.jpg', '/uploads/1717245733138.jpg');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
