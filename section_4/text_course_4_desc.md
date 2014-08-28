当我们进行浮动的时候，浮动块会高于不浮动的父级，按照正式的说法叫所在的物理位置脱离普通流。
比如下面的HTML代码

    <div id="main">

        <div id="sidebar">我是左边栏</div>

        <div id="container">我是主容器</div>

    </div>

配合上下面的CSS

    #main {
        width: 600px;
        padding: 20px;
    }

    #sidebar {
        background-color: #FF6600;
        float: left;
        width: 130px;
    }

    #container {
        background-color: #FFFF33;
        float: right;
        width: 420px;
    }

我们就会看到这种奇怪的情况（高度塌陷）：

![width_enough](http://course-image.qiniudn.com/section_4_course_4_1.JPG)

这时我们加一个clear的div

    <div id="main">

        <div id="sidebar">我是左边栏</div>

        <div id="container">我是主容器</div>

        <div style="clear:both;"></div>
    </div>

就会显示成下面的样子了：

![width_not_enough](http://course-image.qiniudn.com/section_4_course_4_2.JPG)

以上就是clear最常见的用法，按照官方说法，clear属性规定元素的哪一侧不允许其他浮动元素。但是这个功能与display属性协同会产生不同的效果。
所以初学者来讲，只要记住这一种用法就好了。