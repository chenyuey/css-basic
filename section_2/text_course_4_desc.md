CSS的第三个重要的选择器是ID选择器。
ID 选择器前面有一个 # 号，称为井号，英语中叫hash或sharp。形如：

    *#warning-title {
        font-weight: bold;
    }

跟类选择器一样，一般也不写*

    #warning-title {
        font-weight: bold;
    }

这个ID对应着HTML标签的ID属性

    <h1 id="warning-title">这是一个警告标题</h1>

这样h1元素样式的font-weight属性就被设置成bold了。

注意：

1. ID选择器也是大小写敏感的，而且也不支持空格，相关原则与类选择器一样，在此不再赘述。
2. 虽然ID选择器也可以与其他选择器配合使用，但是ID是用来标记html元素的唯一记号，所以请不要这样使用，同时请不要在一个页面使用超过一个同名ID。


