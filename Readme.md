# An Accessible jQuery Tooltip Plugin

Accessibility is one aspect often lacking in web development. Tooltip popups should happen when a user hovers or focuses over a given target element.

## Example Markup

```html
<a
  href="#"
  class="tooltip"
  aria-haspopup="true"
  aria-describedby="tip1">
  <span
    class="anchor-text"
    role="presentation">I contain a tooltip
  </span>
</a>

<div role="tooltip" id="tip1" aria-hidden="true">
  Tooltip text goes <strong>here</strong>
</div>
```

## Initialize

```javascript
$(".tooltip").tooltip(); // Initialize n tooltips
```
