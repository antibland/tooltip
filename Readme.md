# An Accessible jQuery Tooltip Plugin

Accessibility is one aspect often lacking from tooltip plugins. When a user hovers over some trigger element, it makes sense to reuse the text already contained in its `aria-label`.

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

## Coming Next

An accessible tooltip generator would be more interesting than just a standalone demo. The generator could acccept blobs of text, HTML, and maybe an intro/exit transition or animation callback.
