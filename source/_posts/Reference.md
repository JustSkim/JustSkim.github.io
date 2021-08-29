---
title: typora中的锚点与引用

categories:

- MarkDown

- typora的特殊使用


tags: 
- markdown
- typora
---
# 在markdown编辑器Typora中使用锚点与引用



## 点击链接，打开网页，跳转相关url

在之前写博客的时候，一直被引用参考文献的问题所困扰，[Markdown官方语法教程相关页面](https://markdown.com.cn/basic-syntax/links.html)中给对于引用和链接跳转出了以下的方法，

> ### 引用类型链接
>
> 引用样式链接是一种特殊的链接，它使URL在Markdown中更易于显示和阅读。参考样式链接分为两部分：与文本保持内联的部分以及存储在文件中其他位置的部分，以使文本易于阅读。
>
> #### [# ](https://markdown.com.cn/basic-syntax/links.html#链接的第一部分格式)链接的第一部分格式
>
> 引用类型的链接的第一部分使用两组括号进行格式设置。第一组方括号包围应显示为链接的文本。第二组括号显示了一个标签，该标签用于指向您存储在文档其他位置的链接。
>
> 尽管不是必需的，可以在第一组和第二组括号之间包含一个空格。第二组括号中的标签不区分大小写，可以包含字母，数字，空格或标点符号。
>
> 以下示例格式对于链接的第一部分效果相同：
>
> - `[hobbit-hole][1]`
> - `[hobbit-hole] [1]`
>
> #### [# ](https://markdown.com.cn/basic-syntax/links.html#链接的第二部分格式)链接的第二部分格式
>
> 引用类型链接的第二部分使用以下属性设置格式：
>
> 1. 放在括号中的标签，其后紧跟一个冒号和至少一个空格（例如`[label]:`）。
> 2. 链接的URL，可以选择将其括在尖括号中。
> 3. 链接的可选标题，可以将其括在双引号，单引号或括号中。
>
> 以下示例格式对于链接的第二部分效果相同：
>
> - `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle`
> - `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"`
> - `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle 'Hobbit lifestyles'`
> - `[1]: https://en.wikipedia.org/wiki/Hobbit#Lifestyle (Hobbit lifestyles)`
> - `[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> "Hobbit lifestyles"`
> - `[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> 'Hobbit lifestyles'`
> - `[1]: <https://en.wikipedia.org/wiki/Hobbit#Lifestyle> (Hobbit lifestyles)`
>
> 可以将链接的第二部分放在Markdown文档中的任何位置。有些人将它们放在出现的段落之后，有些人则将它们放在文档的末尾（例如尾注或脚注）。

[此处被“ctrl+鼠标左键”点击后，调用浏览器跳转至百度首页][98]

[点击此处不能实现跳转][99]

**References**
注意参考文献reference是可数名词

[98]:  https://www.baidu.com "百度"
[99]: "谷歌"

这种方式适合于带有链接的参考文献，如果想在点击链接后，跳转至markdown文件末尾的脚注中（再进一步决定是否跳转脚注指向的参考文献中的url链接），我们需要采用下面的办法。



### 实现页内跳转


页内跳转：从一篇文章的一个地方（锚点）跳到该篇文章的另一个地方（页内链接）

一些网上资料中，介绍这样一种markdown文档中实现页面内部跳转的方式：

> 先定义要跳转的锚点——这一部分放在我们的正文中
>
> ```<span id="your_anchor">在别处点击后，您要跳转到此锚点处</span>```

> 然后是定义链接（点击后跳转到对应的锚点）——这一部分通常放在末尾作为参考文献
> ```[锚点]（#your_anchor）```



但实际上，在markdown编辑器typora中，这个方式存在缺陷，具体原因为：需要使用**a**标签而不能为其他标签，诸如span，div等，比如下面的例子：

<a href="#anchor">a标签中的文本，“ctrl+左键”可以跳转到锚点</a>

<span style="color:green"><a href="#anchor" style="text-decoration:none">在这一个链接中，a标签被嵌套于一个div标签中，也可以跳转到与上面链接一样关联的锚点。同时我们通过设置a标签的style属性来去除此链接的下划线</a></span>

<span href="#anchoro">这一个span标签中的链接就没办法跳转了</span>



[Typora官方文档的此页面](https://support.typora.io/Links/#html-a-tag)中给出了a标签在这种情况下的使用方法：

> #### HTML `<a>` tag
>
> You could also use raw HTML to add links, for example
>
> ```
> <a href="http://www.google.com" target="__blank">Link to Google</a>
> 
> <a name="anchor"></a> Anchor
> 
> <a href="#anchor">Link to Anchor</a>
> ```
>
> 
>
> ------
>
> For link towards a website, we suggest you **DO NOT ommit URL protocols** like `https://` or `http://`, or it may be interpreted as relative link by Typora or other Markdown egines, or after export/publish.

<a name="anchor">这里是我们预先定义的锚点</a>





注意，以上这几种方式只能实现单向跳转。如果想要实现word编辑论文中，参考文献式的双向跳转，需要参照[markdown官方教程中的脚注语法](https://markdown.com.cn/extended-syntax/footnotes.html)[^1]：

> 脚注使您可以添加注释和参考，而不会使文档正文混乱。当您创建脚注时，带有脚注的上标数字会出现在您添加脚注参考的位置。读者可以单击链接以跳至页面底部的脚注内容。
>
> 要创建脚注参考，请在方括号（`[^1]`）内添加插入符号和标识符。标识符可以是数字或单词，但不能包含空格或制表符。标识符仅将脚注参考与脚注本身相关联-在输出中，脚注按顺序编号。
>
> 在括号内使用另一个插入符号和数字添加脚注，并用冒号和文本（`[^1]: My footnote.`）。您不必在文档末尾添加脚注。您可以将它们放在除列表，块引号和表之类的其他元素之外的任何位置。
>
> ```text
> Here's a simple footnote,[^1] and here's a longer one.[^bignote]
> 
> [^1]: This is the first footnote.
> 
> [^bignote]: Here's one with multiple paragraphs and code.
> 
>     Indent paragraphs to include them in the footnote.
> 
>     `{ my code }`
> 
>     Add as many paragraphs as you like.
> ```
>
> 呈现的输出如下所示：
>
> Here's a simple footnote,[^1] and here's a longer one.[^bignote]
>
> [^1]: This is the first footnote.
> [^bignote]: Here's one with multiple paragraphs and code.

注意，这里末尾的参考文献中，编号为1的脚注之所以有两个箭头指向链接，是因为我们在本篇博客中使用了两个同名为“1”的链接，我们可以从这里看出，脚注具有顺序性。

**一个值得注意的点**

编写作为锚点的位于末尾的参考文献时，如果要附上url链接，格式写作如下形式：

``` markdown
[^anchor]: [文章标题](url) 
```

其中，不仅第二个方括号和冒号之间要空一格，由于**\[文本]\(url)**是markdown的一种链接语法，为了让参考文献也拥有向url跳转的箭头功能，需要在(url)后空一格，箭头才能显现，否则就无法实现双向的跳转。



## Reference

[^1]: [markdown官方教程中的脚注语法](https://markdown.com.cn/extended-syntax/footnotes.html)



