---
title: DB 设计总结
date: 2023-07-09 22:47:51
tags:
	- leveldb
    - rocksdb
updated: 2021-10-23 17:47:00
categories:
	- 数据库
---

本文主要是总结最近学习数据库过程中的一些心得，以及一些数据库的设计思想。

<!-- more -->

---

## 1. EC 与 RAID

### 1.1 EC

EC（Erasure Code）是一种数据冗余技术，通过对数据进行编码，使得数据可以在部分数据丢失的情况下进行恢复。EC 与 RAID 的区别在于，RAID 通常是在硬件层面进行的，而 EC 通常是在软件层面进行的。

纠删码是一种数据冗余技术，本质上利用了多余的校验信息使得部分数据出现错误的时候，利用冗余信息进行恢复。但是这里涉及一个问题，如何知道数据是否损坏，这个可以使用块内的校验码。如果某一块坏掉了，那么如何恢复呢。我们假设只要一个冗余块，那么很简单，利用异或和构建一个块就可以了。但是如果有多个冗余块，那么就需要利用矩阵运算来进行恢复。只要选取合适的矩阵就可以实现任意冗余块的恢复。

### 1.2 RAID

RAID（Redundant Array of Independent Disks）是一种磁盘阵列技术，通过将多个磁盘组合起来，形成一个逻辑上的磁盘，从而提高磁盘的性能和可靠性。RAID 有多种实现方式，这里主要介绍 RAID 0、RAID 1、RAID 5、RAID 6。

- RAID 0：将数据分成多个块，然后分别存储在不同的磁盘上，这样可以提高读写性能，但是可靠性很差，只要有一个磁盘损坏，那么整个数据就无法恢复。
- RAID 1：将数据分成两份，然后分别存储在不同的磁盘上，这样可以提高读性能，但是写性能很差，而且成本也比较高。
- RAID 5：将数据分成多个块，然后分别存储在不同的磁盘上，同时还有一个校验块，这样可以提高读写性能，而且成本也比较低，但是可靠性不高，只要有一个磁盘损坏，那么整个数据就无法恢复。
- RAID 6：将数据分成多个块，然后分别存储在不同的磁盘上，同时还有两个校验块，这样可以提高读写性能，而且成本也比较低，但是可靠性比 RAID 5 高，只要有两个磁盘损坏，那么整个数据就无法恢复。

## 2. LSM 树

LSM 树（Log-Structured Merge-Tree）是一种基于日志的数据结构，主要用于实现键值存储。LSM 树的主要思想是将数据分成多个层，每一层都是一个有序的日志，然后将数据写入到最顶层，当最顶层的日志满了之后，将数据写入到下一层，以此类推。当查询数据的时候，从最顶层开始查找，如果没有找到，那么就继续查找下一层，以此类推。当然，为了提高查询性能，可以在每一层都建立一个索引，这样就可以快速定位到数据所在的位置。