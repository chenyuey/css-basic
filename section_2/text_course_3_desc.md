类选择器（Class Selector）是一种独立于HTML元素来指定样式的选择器。形如：

   .warning{
       color:red;
   }

我们通过class属性，将这个类与HTML元素关联在一起。

    <h1 class="warning">我是警告标题</h1>

    <p class="warning">我是警告内容</p>

这样h1元素和p元素的样式就可以设置color属性为red了。

类选择器可以与其他选择器搭配使用，比如还是上面的HTML代码，但是css我们写成：

   h1.warning{
       color:red;
   }


这样就只有h1元素样式的color属性被设置成red了。p元素没变化。

当我们期望类选择器是适用于所有元素的时候除了最开始的我们不加任何前缀的方式，还是可以加一个*的前缀，如

   *.warning{
       color:red;
   }

这跟不加*表达的含义是一样的，*在软件开发的各种表达式里都有通配（通用适配，即适用于所有）的意思。

