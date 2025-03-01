/*
 Navicat Premium Data Transfer

 Source Server         : localhost2
 Source Server Type    : MySQL
 Source Server Version : 100432
 Source Host           : 127.0.0.1:3306
 Source Schema         : testdb

 Target Server Type    : MySQL
 Target Server Version : 100432
 File Encoding         : 65001

 Date: 25/02/2025 11:16:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for todos
-- ----------------------------
DROP TABLE IF EXISTS `todos`;
CREATE TABLE `todos`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `task` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `completed` tinyint(1) NULL DEFAULT 0,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
