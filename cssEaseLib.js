/*!
 * cssEaseLib - Easing library for CSS3 Transitions
 * Version: 0.0.1
 * https://github.com/7vsy/cssEaseLib
 *
 * Copyright(c) 2012 Masato WATANABE <7vsyml@gmail.com>
 * MIT Licensed
 */

var cssEaseLib = function() {}

// static methods

cssEaseLib.linear = function(){
  return "linear";
}
cssEaseLib.ease = function(){
  return "ease";
}
cssEaseLib.easeIn = function(){
  return "ease-in";
}
cssEaseLib.easeOut = function(){
  return "ease-out";
}
cssEaseLib.easeInOut = function(){
  return "ease-in-out";
}


cssEaseLib.easeInExpo = function(){
  return cssEaseLib.custom( 1, 0.05, 0.8, 0.04 );
}
cssEaseLib.easeOutExpo = function(){
  return cssEaseLib.custom( 0.2, 1, 0.2, 1 );
}
cssEaseLib.easeInOutExpo = function(){
  return cssEaseLib.custom( 1, 0, 0, 1 );
}

cssEaseLib.easeInBack = function(){
  return cssEaseLib.custom( 0.6, -0.3, 0.7, 0.05 );
}
cssEaseLib.easeOutBack = function(){
  return cssEaseLib.custom( 0.2, 0.9, 0.3, 1.3 );
}
cssEaseLib.easeInOutBack = function(){
  return cssEaseLib.custom( 0.7, -0.6, 0.3, 1.6 );
}


/**
 * Custom Ease
 * @method custom
 * @param {Integer} 
 * @param {Integer} 
 * @param {Integer} 
 * @param {Integer} 
 * @return {String} for transitionTimingFunction 
 **/
cssEaseLib.custom = function( x1, y1, x2, y2 ){
  return "cubic-bezier(" + x1 + "," + y1 + "," + x2 + "," + y2 + ")";
}
