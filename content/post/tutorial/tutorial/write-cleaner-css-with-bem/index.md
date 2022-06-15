---
draft: false
title: Write Cleaner CSS with BEM 
titletc: BEM - 撰寫更好維護的 CSS
thumbnail:
  src: https://res.cloudinary.com/tridong/image/upload/q_auto,f_auto,dpr_auto/v1654515985/global/%E4%B8%89%E8%A7%92%E6%9D%B1%E6%9D%B1-%E5%93%81%E7%89%8C%E5%B1%95%E7%A4%BA%E5%B0%81%E9%9D%A2.png
  alt: 三角東東主視覺
cover: []
description: 維護 CSS 代碼並非一件容易的事，隨著代碼庫的擴增，命名、權重與繼承成了一件非常困難的事情。讓我們使用廣受歡迎的 BEM 命名法來改善這件事情。
date: 2022-06-06T19:49:26.640Z
lastUpdateDate: 2022-06-07 03:49
category: 教學
tag:
  - css
  - 前端開發
author:
  - name: 黃宗瑋
    image: https://res.cloudinary.com/tridong/image/upload/v1654503496/global/%E9%BB%83%E5%AE%97%E7%91%8B-%E9%A0%AD%E5%83%8F.jpg
    title: ""
---
## 前言

> 本篇文章需要對 CSS 有基本的認識。

[BEM](http://getbem.com/) 全名為 Block Element Modifier ，是一種 CSS 的命名法，幫助前端開發者更好的管理 CSS 與 HTML 在專案中的關係。它並非一定是最完美命名管理 CSS 的方式，但卻是絕大多數人的選擇，由於概念簡潔好懂，成效顯著，並且有著相對長遠的歷史被測試與應用過，相信你一定會在前端開發的某處看過它。

本篇文章會從理論深入，並搭配範例簡單說明如何運用。

* What is BEM
* Why BEM
* How-to BEM
* Why NOT BEM


## BEM 是什麼
* B - Block
* E - Element
* M - Modifier

BEM 是一種*元件為主的命名法*，將網頁上的任何元件看作是一塊塊功能獨立、可以被重複利用的*區塊(Block)*，並運用*元素(Element)* 來標註區塊不可分割的子項目，或運用 *修飾符(Modifier)* 創造不同功能樣式的區塊。

以上，聽起來非常的複雜？實際上僅是一些非常簡單的命名原則而已，首先遵循以下三個大原則，就是撰寫和規的 BEM CSS 的第一步。

1. 了解語意化網頁的重要性([MaintainableCSS](https://maintainablecss.com/))。
2. 了解模塊化網頁的特性 ([Atomic Desing](https://bradfrost.com/blog/post/atomic-web-design/))。
3. 學習 BEM 命名規範(文章內會說明)。

## 為什麼需要 BEM
1. 更好的描述網頁元件的功能。
2. 更好的交代網頁元件的架構。
3. 實現更低的權重避免選取衝突。

撰寫 CSS 必須要留意到權重與命名上的衝突，但當規模一大起來衝突變得不可避免，需要花非常多的時間去管理與重寫，於是何不放棄所有權重概念……？純粹使用單一 class 來選取就好了呢？
BEM 堅持這樣的規則 —— 「不使用任何 Class 以外的選取器」，純粹使用良好的命名規則來選取並應用樣式。

### 語意化網頁開發

``` html
<!-- 語意化的命名 class -->
<!-- 正確，`error` 有意義的描述元件 -->
<div class="error"></div>
<!-- 不正確，`red-text` 僅描述元件的外貌 -->
<div class="red-text"></div>
```

所有的 BEM CSS 都應該以*語意化*的方式來命名，如：button, form, header…… 而非無意義的命名或僅描述外貌與結果的命名，如：aaa, red, center…… 語意化的命名可以幫助開發者更好的描述元件的用途與關係，更好的撰寫出可長期維護與擴充的代碼。

### 模塊化網頁開發
網頁可以被視為一塊塊的元件(Component)並不是一件新鮮的事情，主要還是回歸到 [DRY](https://zh.wikipedia.org/zh-tw/%E4%B8%80%E6%AC%A1%E4%B8%94%E4%BB%85%E4%B8%80%E6%AC%A1) 原則(Don't repeat yourself)，將*重複的代碼整理並重複運用*是開發任何軟體時的基本常識。在網頁中設計與開發使用者介面更是如此。

## 區塊 Block

> 可以被重複使用的原件，就是 Block

區塊是可以被重複使用，最表層的原件。

``` html
<!-- `header` 區塊 -->
<header class="header">
    <!-- 嵌套的 `logo` 區塊 -->
    <div class="logo"></div>
    <!-- 嵌套的 `search-form` 區塊 -->
    <form class="searchForm"></form>
</header>
```
* Block 不應影響環境，舉例來說：不使用 ```margin``` 或 ```position```。這樣將會確保區塊可以被移動並且重複使用。
* Block 可以被嵌套在一塊，多少層次都是可行的。

## 元素 Element

> 隸屬於 Block 底下，無法被重複使用的元件，就是 Element

元素無法獨立存在，可以想像它是區塊中的一小部分，舉例來說：navbar 是一個區塊，但內部的 list 卻只能用在 navbar 中，因此將它定義為 navbar 的元素(navbar__list)。

``` html
<!-- `navbar` 區塊 -->
<nav class="navbar">
  <!-- `navbar`內的`brandName`元素 -->
  <span class="navbar__brandName">Brand Name</span>
  <!-- `navbar`內的`list`元素 -->
  <ul class="navbar__list">
    <!-- `navbar`內的`link`元素 -->
    <li class="navbar__link">Pricing</li>
    <li class="navbar__link">Contact</li>
  </ul>
</nav>
```
* Element 需在區塊後命名加上兩個底線(__)來表示。
* Element 永遠隸屬於某個區塊中，無法被單獨使用。
* Element 可以被嵌套在一塊，多少層次都是可行的。
* Element 無法被雙重疊加，舉例：```block__elem1__elem2```

## 修飾符 Modifier

> 描述區塊或元素附加的的外表樣式、狀態與行為。

舉例來說，一張卡片它的外貌特徵(Size / Theme)，或是狀態(disabled / Focused)，反應的行為(top-left)都可以被 Modifier 所附註上去。

* Modifier 需加上兩個連接號(--)來表示
* Modifier 僅描述區塊或元素被附加的樣式，無法被單獨使用。

``` html
<!-- 是 `focused` 狀態的 `searchForm` 區塊 -->
<form class="searchForm searchForm--focused">
    <input class="searchForm__input">
    <!-- 是 `disabled` 狀態的 `searchForm__button` -->
    <button class="searchForm__button searchForm__button--disabled">Search</button> 
</form>
```

## BEM 常見的問題

### 好像每個人的 BEM 都長得不太一樣？
BEM 的核心概念，便是 Block/Element/Modifier 至於要怎麼撰寫與區分它們，就依照個人或開發團隊喜好去改變了。本篇文章所有範例都添加了筆者的個人偏好(2 Dashes style + CamelCase)，可以參考[BEM Naming convention](https://en.bem.info/methodology/naming-convention/)來去了解各種範例。

### 應該使用區塊還是元素？
先創建區塊，再於裡面創建元素。

## 你可能不需要 BEM
讀完整篇文章，學會了使用 BEM 來命名 CSS，現在讓我們來推翻它。
它的缺點同時也是它的優點，造就了穩定好預測，可維護性高的代碼；而BEM 最被為人詬病的一點，就是過長過複雜的 class 名稱，以及失去使用各種選取器的便捷性。

> 如果專案並沒有這麼大，只是隨手寫個 CSS 那麼可能並不需要 BEM。

或是你是其它種類，比如說 Utility-First CSS 優先的開發模式的話，那麼從根本上你根本不需要 BEM ，不過這又是另一個篇章的話題了。


## 參考資料
* [BEM](https://en.bem.info/methodology/)
* [BEM 方法論](http://bem.webclown.net/quick-start/#%E4%BB%8B%E7%BB%8D)
* [BEM — The way you get maintainable CSS code](https://medium.com/@alexkoenig/bem-the-way-you-get-maintainable-css-code-8fb043e49f60)