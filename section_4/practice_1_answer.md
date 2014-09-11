答案如下：

    header {
      border: 1px solid red;
    }
    .container {
      border: 1px solid red;
      overflow: hidden;
    }
    .sidebar { 
      float: left;
      width: 16%; 
      padding: 0 2%; 
      background-color: #eee;
    }
    .main {
      float: left;
      width: 76%;
      padding: 0 2%;
    }
    footer {
      clear: both;
      border: 1px solid red;
    }
    
你可以看到这样的效果：

![width_enough](http://course-image.qiniudn.com/section_4_course_5_1.PNG)

很多网页都采用这种三栏的布局方式，如果尝试缩小窗口，会发现页面仍然会保持原有的布局结构，也就是我们所说的流式布局。

布局还有好多种，比如两栏的、一栏的，实现方法也有多种，感兴趣的话就google一下吧~    
        