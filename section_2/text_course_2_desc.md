元素选择器就是以HTML标签（又叫HTML元素）作为目标的选择器。
这种选择器的目的，是改变某类元素的默认样式。比如

    h1 {
      font-size: 12px;
    }

如果写了上面的css，那么所有的h1标签的font-size属性都会设置为12px。

但是CSS属性的影响有的不是只面对这个元素，比如color，当我们设置一个元素的color为一个值的时候，他所有子元素的color都会变成这个值。

当这种情况下，如：

CSS代码：

    div {
        color: red;
    }

HTML代码：

    <div>
        <h1>我在div里</h1>
        <h2>我在div里</h2>
    </div>
    <p>我在div外</p>


