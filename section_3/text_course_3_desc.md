如果在同一个级别里，几乎只有一个规则，后写的覆盖先写的。所谓后写的会覆盖先写的表现在文件上就是代码行号更靠下的 -_-b

按照上面的规则，我们看看下面的代码：

    //这是写在外部文件style.css里的
    h1 {
         color: #ffffff;
    }

    h1 {
         color: #dddadd;
    }

    //这是写在html里的
    <head>
         <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
        <h1>我的颜色到底是啥？</h1>
    </body>
