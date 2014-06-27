无论在任何一种情况下，只要你在样式上加了important，那么他最大，前面所有的规则都忽略
加了important的代码样子如下：

    p {
        color: white !important;
    }

根据以上规则，请看下面的代码

HTMl部分：

    <section id="content">
         <p class="abstract" style="color: blue;">这里是Abstract</p>
         <p>这里是普通的</p>
    </section>

CSS部分：

    #content p {
        color: red
    }

    .abstract {
        color: black !important;
    }



