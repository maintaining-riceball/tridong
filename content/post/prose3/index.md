---
draft: false
titletc: asd
toc: false
client: tester
cover:
  - https://ucarecdn.com/a4464ad0-fe1b-4372-99c5-e3f6fb3c318b/
  - https://ucarecdn.com/77027b90-bf20-410d-994a-8abd3b43ed51/
  - https://ucarecdn.com/961e699b-ff0f-4370-942f-ce38487090ac/
  - https://ucarecdn.com/4360c587-6197-46d2-a370-c90534591f7e/
  - https://ucarecdn.com/7f8ad75c-15c8-44f1-90b5-c1127a8c7f92/
  - https://ucarecdn.com/271ded8c-88fd-4728-b3fc-3f401b57b579/
  - https://ucarecdn.com/736b63d0-b269-4833-af6e-8f069bdeec0c/-/crop/659x303/0,324/-/preview/
title: Prose
date: 2021-12-18T11:10:36+08:00
language: en
tag:
  - 1
  - 2
description: A test with @tailwindcss/typography & Prose
---

## A Test with Tailwind Prose Classes   

With the new [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) module I can add prose modifiers that will render to the output HTML. This allows you to style HTML tags individually with i.e. `prose-h*:text-color-*00`

# this is a H1 header 
## this is a H2 header
### this is a H3 header
#### this is a H4 header   

You can change link colors too and define hover with `prose prose-a:text-pink-700 hover:prose-a:text-cyan-700` - example: 
[gohugo.io](https://gohugo.io) 

##### Note that in standard prose code snippets show the ` for some reason. So in standard prose you get:

&#96;`<code>Something</code>`&#96;

But I want want:

`<code>Something</code>`

So I modified the `tailwind.config.js` to:

    module.exports = {
    content: ['./layouts/**/*.html'],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        "code::before": {content: ''},
                        "code::after": {content: ''}
                    }
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
    }

Remove those extra lines you want the &#96;`ticks`&#96;. Tailwind uses them on their website.

Click for more about: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)  

### ~~ The End ~~
