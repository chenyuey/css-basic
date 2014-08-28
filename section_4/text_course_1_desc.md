HTML的元素现实模型被称为盒子模型，任何一个在页面上显示的元素都会呈现为一个盒子形状

![盒子模型](http://course-image.qiniudn.com/css_basic_css_box_model.jpg)

盒子模型的的最内部分是实际的内容，直接包围内容的是内边距(padding)。
内边距的边缘是边框(border)。边框以外是外边距(margin)，内边距默认是透明的，因此不会遮挡其后的任何元素,包括元素的背景。

以边框为界，里面的叫内边距，外面的叫外边距，还是很好记吧，不过大家一般习惯使用英文术语，所以我们后面也尽量使用英语。

我们设置的宽高（width, height）属性，只是在设置内容部分的宽高。（IE5，6不是这样的，好在我们现在不用考虑他们了）

一个盒子的总宽 = width + padding-left + padding-right + border-left + border-right

高度也是类似，当然实际显示的时候你还得考虑margin，但是有些浏览器里margin是会叠加的，所以还要根据上下文来考虑。

那么我们来看一个css：

    .grid-item {
        border: 2px;
        padding-left: 10px;
        padding-right: 5px;
        width: 50px;
    }

