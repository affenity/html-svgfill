html-svgfill
============

A script to load SVG in HTML and load bitmap alternative, only if SVG is not supported.

Usage:

**Needs Modernizr's SVG module to check for browser support**

```html
<div data-svgfill data-svg="images/common/image1.svg" data-bmp="images/common/image1.png" data-alt="image1-alt-text">
        <noscript>
            <img src="images/common/image1.png" alt="image1-alt">
        </noscript>
</div>
```

If you want to use inline SVG, simply use the <svg> xml code as data-svg value

```html
<div data-svgfill data-svg="[svg xml here]" data-bmp="images/common/image1.png" data-alt="image1-alt-text">
        <noscript>
            <img src="images/common/image1.png" alt="image1-alt">
        </noscript>
</div>
```

Note: You will need this script, only if you want to load your SVG in the HTML for certain reasons like making the fallback bitmap scale with viewport width. For css background image option, you can simply add svg and then the png like in the following example.

eg: To use as css background image without needing this script

```css
.logo{
  background: url('logo.svg');
}
.no-svg .logo{
  background: url('logo.png');
}
```
This will request png file, only if svg is not supported.

'no-svg' class is created on html element by modernizr SVG module, when SVG is not supported by the browser. 

