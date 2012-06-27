# cssEaseLib

Easing library for CSS3 Transitions.

## Usage

``` html
<script src='cssEaseLib.js'></script>
```
``` javascript
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var t = document.getElementById('target');
    t.style.webkitTransitionDuration = '1000ms';
    t.style.webkitTransitionTimingFunction = cssEaseLib.easeInOutBack();
    t.style.webkitTransform = 'translate( 150px, 0px )';
  });
</script>
```

## License

Copyright(c) 2012 Masato WATANABE  
Licensed under the MIT license.

