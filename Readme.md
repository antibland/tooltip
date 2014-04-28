# Another Tooltip?

Accessibility is one aspect often lacking from tooltip plugins. When a user hovers over some trigger element,
it makes snese to reuse the text already contained in its `aria-label`.

## Example Markup

```html
<a
  class="tooltip"
  id="one" href="#"
  aria-label="I'm the popup hover text">I'm a link
</a>
```

## Initialize

```javascript
$(".tooltip").tooltip(); // Initialize n tooltips
```
