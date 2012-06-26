# cssEaseLib

Easing library for CSS3 Transitions.

## Usage

``` html
<script src='cssEaseLib.js'></script>
```
``` javascript
<script>
  $(selector).css({
    '-webkit-transition-duration' : '1000ms',
    '-webkit-transition-timing-function' : cssEaseLib.easeInOutBack,
    '-webkit-transform' : 'translate( 150px, 0px )'
  });
</script>
```

## License

Copyright(c) 2012 Masato WATANABE  
Licensed under the MIT license.

