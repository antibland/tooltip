# An Accessible jQuery Tooltip Plugin

Accessibility is one aspect often lacking in web development. Tooltip popups should happen when a user hovers or focuses over a given target element.

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
