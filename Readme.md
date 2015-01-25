# An Accessible jQuery Tooltip Plugin

Accessibility is one aspect often lacking in web development. When a user hovers over some trigger element, it makes sense to reuse the text already contained in its `aria-label`.

## Example Markup

```html
<a
  href="#"
  class="tooltip"
  aria-haspopup="true"
  data-tooltip-content="Tooltip with 5% <strong>real</strong> HTML">
  I contain a toolip
</a>
```

## Initialize

```javascript
$(".tooltip").tooltip(); // Initialize n tooltips
```
