学了前几部分的内容，我们综合起来实现一个经典的三栏（three column）的流式布局，流式布局（Fluid Layout或Liquid Layout）通过使用百分比设置各个部分的宽度来适应不同的分辨率。

实现流式布局的方法并不唯一，我们今天采用比较简单的一种方式来实现。

使用如下HTML代码

    <body>
      <header>Site name</header>
      <div id="container">
        <div id="sidebar">
          <h3>我是左边栏</h3>
          <ul>
            <li><a href="#">Section page 1</a></li>
            <li><a href="#">Section page 2</a></li>
            <li><a href="#">Section page 3</a></li>
            <li><a href="#">Section page 4</a></li>
          </ul>
        </div>
        <div id="main">
          <h3>我是主容器</h3>
          <p>
            Lorem ipsum dolor sit amet consect etuer adipi scing elit sed diam nonummy nibh euismod tinunt ut laoreet dolore magna aliquam erat volut. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      </div>
      <footer>
        Copy right
      </footer>  
    </body>

配合如下CSS   

    header {
     border: 1px solid red;
    }
    #container {
     border: 1px solid red;
     overflow: hidden;
    }
    #sidebar { 
     float: left;
     width: 16%; 
     padding: 0 2%; 
     background-color: #eee;
    }
    #main {
     float: left;
     width: 76%;
     padding: 0 2%;
    }
    footer {
     clear: both;
     border: 1px solid red;
    }

在浏览器中打开这个网页就可以看到：

![width_enough](http://course-image.qiniudn.com/section_4_course_5_1.PNG)

是不是很熟悉的结构，很多网页都采用这种布局方式，尝试缩小窗口，是不是发现页面仍然会保持原有的布局结构，也就是我们所说的流式布局。

布局还有好多种，比如两栏的、一栏的，实现方法也有多种，感兴趣的话就google一下吧~