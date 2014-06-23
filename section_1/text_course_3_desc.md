CSS 的另一种引入法就是直接写在style标签里，如：

    <style>
        h1 {
          font-size: 12px;
        }
    </style>

一般要求写在head标签里，形如：

    <head>
        <style>
            h1 {
              font-size: 12px;
            }
        </style>
    </head>

不写在head标签里有些浏览器会报错。