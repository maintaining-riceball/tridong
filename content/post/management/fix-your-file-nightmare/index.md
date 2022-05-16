---
draft: false
cover:
  - https://ucarecdn.com/8a2c5749-f12c-42a4-89f2-1027fd1947e1/noroot.png
title: Fix Your File Nightmare
titletc: 分類好頭疼！如何擺脫檔案整理惡夢
description: 我們每天都會囤積大量的文件、筆記、素材、累積下來就像亂糟糟的房間一樣需要整理，這裡是我們如何管理專案文件的方法……
toc: false
date: 2021-08-11T11:26:35+08:00
lastUpdateDate: 2022-05-09 03:12
category: 教學
tag:
  - 檔案
author:
  - name: 黃宗瑋
    title: 設計師
    image: https://ucarecdn.com/fac8f771-2639-4043-bbdc-6452fb6498cc/黃宗瑋-頭像.jpg
---
##  為什麼需要管理檔案？

身為創作者，每天都會囤積大量的文件、筆記、素材、累積下來就像亂糟糟的房間一樣需要整理；本次文章想分享我們團隊是如何建立一個系統應對基本的檔案分工與備份的流程，徹底解決三個你我都可能會遇見的問題。

* 規範 — 團隊檔案命名都亂成一團，每次找檔案都花很多時間……
* 版本 — 我覺得還是第一版比較好，可以回去嗎……
* 備份 — 電腦壞掉、硬碟摔壞，多年的資料付諸流水……

## 好的檔案管理達成哪些事情？

以上提及的三個問題，都是基於缺少一套系統的方式去處理檔案之間的關聯，以及疏忽備份檔案的重要性，讓辛苦創作的成果成為一團還要花時間去整理這一場爛攤子。


* 每個檔案可以記錄相關的資訊，具體有……
  * 時間
  * 版本
  * 檔案名稱
  * 更動內容
  * 編輯人

![test](https://ucarecdn.com/c839e29d-8db3-4eba-9a38-f53b19646db3/fileorganizenaming.jpg)


## 整理檔案初入門

## 一些踩過的坑，可以避免問題的小撇步

### 使用英文 (ASCII編碼內字元)

* 讓不同語系的人也能閱讀。
* 些許程式處理中文檔案會因編碼不同而導致出錯。
  (現在幾乎沒有軟體會出現這樣的差錯，斟酌狀況使用。)

### 善用開頭第一字元來管理檔案順序

使用命名來排序會以：數字 → 英文 a~z 來排列清單。
因此可以善用開頭第一個字母來安排檔案的順序，範例如下：

* 1_Design
* 2_Paint
* 3_Photography

### 不使用空格、大寫、特殊字元

不在檔案名稱中使用空格、特殊字元、易解讀錯誤字元，如：「. ” / \ : ; | = , < ? > & $ # ! ‘ { } ( ).oO0」。

* 空格難以被判斷數量。
* 些許程式語言、命令列介面會需要使用特殊字元、空格來執行功能，使用空格會導致出錯。
* 避免在大小寫敏感的環境造成混亂，(如：是About還是about？統一使用小寫，就沒有以上問題。

### 設計檔和素材盡量分離

許多軟體都有嵌入素材的功能，建議移交印刷時再嵌入，如果檔案管理做得好就不用怕圖檔遺失的問題。主要有以下幾個優點：

* 原始圖檔好找，可能其他地方也要用到這些圖片，嵌入後仍要一個一個抓來輸出，分離就沒有這項問題。
* 同樣一張圖片可以被連結進多個設計檔，更少的檔案尺寸。
* 設計檔案不臃腫。

### 避免使用含糊的版本標註

常見的含糊的版本標註有如：
Final、Update、fix…… 不使用固定的形容詞來描述，使用正確的版本號加附註作了那些修改。

### 標註檔案版本

v 為 version 的意思，v1 = version 1，第一版。
設計開發時過程不一定是線性的，有可能會有版本A、版本B、版本C……
線性命名版本會是這樣：

v1、v2、v3 → v30

而有需要可以進一步這樣標註：

v1-1 → 版本1第2版

v1-5 → 版本1第5版

v2-1 → 版本2第1版

v2-1-4 → 版本2之3版之4版

當然版本標註太多層會很混亂，盡量三層以內就好。

### 語意化版本命名 Semantic Versioning

更進階一點可以參考隔壁工程師們的[語意化版本命名](https://semver.org/)。簡單來說這是一種命名方式標註開發的版本、功能、漏洞修復，或許可以參考這樣的命名規範。

## 最後提醒

一個完善的檔案系統是可被預測，易於學習的，維護需要使用者間的溝通協商。有時候人會犯錯、偷懶，都會慢慢增加後續維護整體專案的成本！參考本篇文章，制定一個團隊間的默契、規則即可。

## 參考資料

* [How to keep your design files neat and tidy](https://99designs.com/blog/tips/how-to-keep-your-design-files-neat-and-tidy/)
* [What technical reasons exist for not using space characters in file names?](https://superuser.com/questions/29111/what-technical-reasons-exist-for-not-using-space-characters-in-file-names)
* [Is it problematic to include spaces in file names?](https://qanda.digipres.org/1053/is-it-problematic-to-include-spaces-in-file-names)
* [Naming Standard: File and Folder Names](https://www.csudh.edu/web-services/web-standards/file-folder-naming/)
* [The complete guide about design systems: Engineering](https://medium.com/ci-t/the-complete-guide-about-design-systems-engineering-cd332cf520f2)