CSS为了使用方面，规定了一些属性是可以被继承的，即父元素设置了某属性，子元素也会有该属性。就像之前演示过的color。

下面是会被继承的css样式属性。

    azimuth, border-collapse, border-spacing,
    caption-side, color, cursor, direction, elevation,
    empty-cells, font-family, font-size, font-style,
    font-variant, font-weight, font, letter-spacing,
    line-height, list-style-image, list-style-position,
    list-style-type, list-style, orphans, pitch-range,
    pitch, quotes, richness, speak-header, speaknumeral,
    speak-punctuation, speak, speechrate,
    stress, text-align, text-indent, texttransform,
    visibility, voice-family, volume, whitespace,
    widows, word-spacing

惊呆了是吧，看起来好多啊。
嗯，不过我们是互联网一代，所以你不需要记住所有的，用的时候现查就可以了。当然你得记住几个重要分类。

文本相关属性

    font-family, font-size, font-style,
    font-variant, font-weight, font, letter-spacing,
    line-height, text-align, text-indent, texttransform,word-spacing

列表相关属性

    list-style-image, list-style-position,
    list-style-type, list-style

还有一个color属性之前讲过了。

拔高小知识: font-size是比较特殊的，他可以按相对值进行继承。这个特性会广泛应用于响应式设计相关的屏幕适配技术。
等我们讲CSS Mobile的时候再来讲这个内容。