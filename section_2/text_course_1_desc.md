CSS的语法规则由两个主要的部分构成：CSS选择器（selector），以及一条或多条声明（declaration）。

    selector {declaration1; declaration2; ... declarationN }

选择器标明了我们要操作的HTML元素。 每个声明用引号隔开，最后一个声明不用

而每一个声明由一个属性名和一个值组成。属性名和值被冒号分开。如下：

    selector {property: value}

property是您希望设置的样式属性的名字，也就是前文所说属性名。每个属性有一个值。这种匹配的方式又被成为键值对(key-value)的方式，在软件开发中

![图片展示CSS语法](http://www.w3school.com.cn/i/ct_css_selector.gif)

代码风格方面，一般来说，我们选择器单独占一行，{}内一行只写一个声明，冒号紧跟属性名，后面空一格写值。形如：

    h1 {
      font-size: 12px;
      color: black;
      font-family: sans-serif;
    }

接下来我们会重点讲一下选择器部分，先讲述最重要的三个选择器：元素选择器，类选择器和ID选择器


