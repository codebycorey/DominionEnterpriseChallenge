# Dominion Enterprise Challenge
A skill challenge that Dominion Enterprises gave me for me to do for a chance at an internship.

##  Languages Used
 * HTML5
 * CSS3
 * Javascript

**Valid HTML5 using [W3 validator](validator.w3.org).**

## Task Manager
This requires Grunt v0.4.5

If you do not have grunt, you can find it [here](http://gruntjs.com/).

### Grunt Commands
Run default with `grunt`

`cssmin` is used to remove unneeded white space and empty lines to reduce file size.
The new minified file is created with the extension `.min.css`

`watch` to notice a change in the css file and then executes the `cssmin` command automatically minify the file without calling the command yourself.

## Exercise Rules:
 * JavaScript can only be used for setTimeout and adding CSS classes.
 * Do not use any JavaScript DOM libraries (jQuery, Prototype, Mootools, etc.) since you are only doing simple tasks.  You may use RequireJS (http://requirejs.org/) and/or Grunt if you want to impress.
 * All animations will be done in CSS3
 * HTML should validate against HTML5 doctype
 * All elements must be completely fluid, scaling to a minimum browser width of 320 pixels.

### Additional Details:
 * The page should initially be shown, wait 3 seconds and then display the overlay.  After 5 seconds, the overlay should disappear.
 * The overlay content (white box with text) will slide in from the right hand side of the page.
 * It is definitely a bonus if you utilize Grunt (for any tasks pertinent to the exercise - http://gruntjs.com/).
 * Please do not use tables.


