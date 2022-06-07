---
draft: false
title: Supercharge your CSS
titletc: 為你的 CSS 增添魔力 — SCSS / LESS / STYLUS
thumbnail:
  src:
    - https://res.cloudinary.com/tridong/image/upload/v1654515985/global/%E4%B8%89%E8%A7%92%E6%9D%B1%E6%9D%B1-%E5%93%81%E7%89%8C%E5%B1%95%E7%A4%BA%E5%B0%81%E9%9D%A2.png
  alt: 封面圖片替代文字(請填寫我)
cover: []
description: CSS 預處理器已經深深地改變了我們撰寫 CSS 的方式，成為前端開發必備的一項工具。隨著時間的轉變，我們仍然還需要它們嗎？
date: 2022-06-06T19:52:09.920Z
lastUpdateDate: 2022-06-07 03:52
category: 教學
tag:
  - 前端開發
author:
  - name: 黃宗瑋
    image: https://res.cloudinary.com/tridong/image/upload/v1654503496/global/%E9%BB%83%E5%AE%97%E7%91%8B-%E9%A0%AD%E5%83%8F.jpg
---


## 前言

本篇文章將解釋：

* 什麼是 CSS 預處理器(CSS Preprocessor)、提供什麼好處、為什麼需要它們？
* 有哪些預處理器可以選擇？
* 放眼預處理器的未來。

本篇文章需要你有關於 CSS 的基本知識：

## 什麼是「CSS預處理器」

在早期，CSS 並沒有複雜的邏輯與功能去撰寫可重複使用與好被管理的代碼，造成開發者們碰到了 *難管理、難擴增* 的難題，特別是在大型的專案中，於是便有預處理器用於解決這樣的問題。
*藉由預處理器延伸 CSS 的功能和語法來實現更為複雜的邏輯與更簡潔的代碼*。

當然了，瀏覽器依舊還是只認得 CSS ，並不了解任何預處理器語言的語法。因此我們仍需要將它「預」處理為 CSS 來使用。

{{< highlight Sass "linenos=table,hl_lines=2-3 15-17,linenostart=0 " >}}

<!-- Unable To Reuse -->

  <!-- Repeat -->

body
  font: 100% $font-stack
  color: $primary-color

{{< / highlight >}}

## 總結

## 參考資料

* [CSS Preprocessors – Sass vs LESS vs Stylus (With Examples)](https://www.lambdatest.com/blog/css-preprocessors-sass-vs-less-vs-stylus-with-examples/)