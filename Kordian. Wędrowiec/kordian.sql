-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Maj 14, 2024 at 06:39 AM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kordian`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `autorzy`
--

CREATE DATABASE `kordian` ;

CREATE TABLE `autorzy` (
  `IDA` int(11) NOT NULL,
  `Imie` varchar(255) NOT NULL,
  `Nazwisko` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autorzy`
--

INSERT INTO `autorzy` (`IDA`, `Imie`, `Nazwisko`) VALUES
(1, 'Patryk', 'Sojka');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `skargi`
--

CREATE TABLE `skargi` (
  `IDS` int(11) NOT NULL,
  `Tresc` varchar(255) NOT NULL,
  `Imie` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skargi`
--

INSERT INTO `skargi` (`IDS`, `Tresc`, `Imie`) VALUES
(1, 'f', 'daf');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `autorzy`
--
ALTER TABLE `autorzy`
  ADD PRIMARY KEY (`IDA`);

--
-- Indeksy dla tabeli `skargi`
--
ALTER TABLE `skargi`
  ADD PRIMARY KEY (`IDS`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `autorzy`
--
ALTER TABLE `autorzy`
  MODIFY `IDA` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `skargi`
--
ALTER TABLE `skargi`
  MODIFY `IDS` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
