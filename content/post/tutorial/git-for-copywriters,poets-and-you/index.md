---
draft: false
title: Git for copywriters, poets and you
titletc: 用 Git 寫一首詩，打一段文
thumbnail:
  src:
    - https://res.cloudinary.com/tridong/image/upload/v1654515985/global/%E4%B8%89%E8%A7%92%E6%9D%B1%E6%9D%B1-%E5%93%81%E7%89%8C%E5%B1%95%E7%A4%BA%E5%B0%81%E9%9D%A2.png
  alt: 封面圖片替代文字(請填寫我)
description: 文字工作者，備份自己的心血結晶是一件重要的事，而 Git 能夠幫助你這一點。不管你所在的領域。
date: 2022-06-18T18:11:10.978Z
lastUpdateDate: 2022-06-19 02:11
category: 教學
tag:
  - git
author:
  - name: 黃宗瑋
    image: https://res.cloudinary.com/tridong/image/upload/v1654503496/global/%E9%BB%83%E5%AE%97%E7%91%8B-%E9%A0%AD%E5%83%8F.jpg
---
## 前言
{{<hint>}}
並不需要會寫程式才能用 Git
{{</hint>}}

[Git](https://git-scm.com/) 的用途廣泛，*大多時候都被用於管理程式碼*，被全球的開發者們廣泛的使用。想藉由本篇文章推廣 Git 其實在不同領域同樣也能發揮它強大的威力 —— *記錄你所寫的東西*。教學將會以*如何用 Git 備份你的詩*為例，以有趣實在的案例為主要導向。以下是章節目錄。

* 😟 問題痛點
* 🤔 Git 與 GitHub 是什麼？
* ✔️ 提供什麼好處、為什麼需要它們？
* 🔎 如何使用 Git？

## 問題痛點

舉例來說，寫了一篇文章，在電腦中撰寫完後，假如……

* 想要分享給其他人。
* 想要回去看看昨天寫的進度。
* 想要和不同人一起合作撰寫同一篇文章。

你可能就會會碰上麻煩，為了備份，要重複的複製貼上相同的檔案，每一次！造成了以下的問題。

* 佔用大量的硬碟空間。
* 沒辦法回顧甚至回朔檔案。
* 沒辦法讓不同人各自對同一個檔案進行編輯。

而 Git 就是因應這樣的問題而誕生的一款*軟體*，它會記錄下每一次文件在編輯後的更動內容，並讓你輕鬆的回顧或回朔，與其他人分享或同步進度，造就了：

* 使用更少量的空間達成備份目的
* 更好的文件撰寫體驗
* 更好的合作體驗

這也是為什麼軟體開發領域中，學習 Git 是不可少的一項技能，也是最常被提及的一項基本技術。



## Git 與 GitHub 是什麼？

### Git
{{<hint cite="Git" citeSrc="https://git-scm.com/">}}
Git 是一款開源且免費的分散式版本管理系統。
{{</hint>}}

分散式版本管理系統，舉例來說，就像是能夠複製圖書館中的每一份文件與歷史紀錄到你的電腦上，經過修改後，再傳回原本的圖書館；而可能會有很多人共同使用同個圖書館，在最後上傳回去的時候才決定誰寫的東西要保留或刪除。

Git 大致就是這樣的軟體來實踐以上功能，這樣的作法讓撰寫文件合作上具有高度的效率。

### GitHub
{{<hint cite="Git" citeSrc="https://git-scm.com/">}}
GitHub 是微軟提供的一項服務，線上存放 Git 的地方。
{{</hint>}}

[GitHub](https://github.com/)是 Microsoft 旗下的服務，使用 Git 作為版本控制軟體，除此之外也是世界上最大的代碼代管網站和開源社群。相似的服務還有 [GitLab](https://about.gitlab.com/)、[BitBucket](https://bitbucket.org/product)。