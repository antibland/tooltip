# An Accessible jQuery Tooltip Plugin

Accessibility is one aspect often lacking from tooltip plugins. When a user hovers over some trigger element, it makes sense to reuse the text already contained in its `aria-label`.

## Example Markup

```html
<a
  href="#"
  class="tooltip"
  aria-haspopup="true"
  data-popup-content="Second popup with 5% <strong>real</strong> HTML">
  I also have a toolip
</a>
```

## Initialize

```javascript
$(".tooltip").tooltip(); // Initialize n tooltips
```
