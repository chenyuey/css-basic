这里的答案是

    <head><style type='text/css'>h1 { font-size: 12px; } </style></head>

虽然设置了type属性，写成一行，但不影响正确性。正常使用时，大都设置type属性。

聪明的读者应该已经发现了，写在style标签里的css代码似乎比写在标签的style属性的css代码多了些动。
是的，因为写在style标签里的css代码不知道自己指定的是哪个具体的HTML标签，所以要加上这些东西。
写在最前面的叫做CSS选择器，这个我们在CSS基础语法一章再讲。