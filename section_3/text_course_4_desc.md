CSS的样式覆盖，在选择器不同的情况下，我们给每种选择器制定一个权值，计算命中一个元素的所有选择器的总权值，值高者获胜

- 元素选择器： 1
- 类选择起器： 10
- ID选择器：  100
- 内联选择器： 1000

比如

    #nav .current a{ }

该选择器的权值为100 + 10 + 1 = 111

根据以上规则，请看下面的代码

HTMl部分：

    <section id="content">
         <p class="abstract">这里是Abstract</p>
         <p>这里是普通的</p>
    </section>

CSS部分：

    #content p {
        color: red
    }

    .abstract {
        color: black;
    }

