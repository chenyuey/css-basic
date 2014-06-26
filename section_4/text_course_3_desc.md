上节我们学习了float: right和float: left的效果，当我们使用float的时候，我们要知道他的表现是与父级元素宽度(width)相关的。

比如下面的代码
    <!-- HTML -->
    <article>
        <img class="float-right" src="right.jpg" alt="靠右的图片" />
        <img class="float-left" src="left.jpg" alt="靠左的图片" />
    </article>

    //...
    //CSS
    .float-right {
        float: right;
    }
    .float-left {
        float: left;
    }

如果article的width足够，那么会显示成下面的样子：

![width_enough](http://course-image.qiniudn.com/course_4_section_3_1.JPG)

如果article的宽度不够，就会显示成下面的样子：

![width_not_enough](http://course-image.qiniudn.com/course_4_section_3_2.JPG)

为什么是“靠左的图片”被挤得换行了？完全是因为HTML里谁写在前面，谁就显示在上面的缘故。
如果我们想让后写的显示在先写的前面，要多花不少功夫，让它看起来显示在前面了。这个我们以后有机会再讲。