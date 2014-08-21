布局定位最重要的四个css属性float, clear, position和display。
再配上我们前面学会的盒子模型的几个属性width, height, padding, margin, border。

这些就是页面布局的全部工具了。你看到的所有页面都是用他们配合实现的，万变不离其宗。

首先我们从float开始讲，float有三个值：

    float: left / right / none

我们把每一个元素想象成浮在水面上的冰块，用float来控制他们靠左还是靠右。但是让他们靠左他们就会靠到盒子的最左边了，靠右也是一样。
当我们面对下面的HTML：

     <article>
         <img src="head_image.jpg" alt="头图" />
         <p>把我想象成一段非常长的文字 ，至少有五百字吧。</p>
    </article>

设置了如下的css

    img {
         float: left;
    }

那么现实效果则如下所示：

![float_left](http://course-image.qiniudn.com/course_4_section_2_1.JPG)

这就是传说中的“图文混排”了。那么如果我们想现实效果如下图所示：

![float_right](http://course-image.qiniudn.com/course_4_section_2_2.JPG)

float应该怎么设计呢？
