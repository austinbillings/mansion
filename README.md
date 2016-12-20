![Mansion Logo](http://austinbillings.com/projects/Mansion.png)

**Mansion** is a flexbox-based CSS grid, layout, and breakpoint framework, written in LESS, for responsive layout classes that just make sense.

## Installation

You can install using bower:
```bash
bower install mansion --save
```
Or, clone this repo:
```bash
git clone https://github.com/austinbillings/mansion
```
Use the task runner of your choice to build `mansion.css` into your dependency stack (I recommend Gulp), or just include the CSS file in your HTML:
```html
<link rel="stylesheet" href="bower_components/mansion/dist/mansion.css" />
```
Alternatively, include `mansion.less` in your own LESS files.
```css
@import '../bower_components/mansion/src/mansion.less';
```
Kowabunga, dude.

## Overview

*Certain parts of Mansion will feel familiar if you're used to using **Bootstrap** for your layouts, and all those other little goodies that come with it. *

**Mansion** is a system of CSS classes used in generating webpage and app layouts, based on the idea of a grid composed of various rows and columns (although 'round these parts, we call columns *stacks* to differentiate them from individual cell elements).

**Mansion** is comprised not only of a flexbox grid system, but also contains responsive breakpoint-based LESS prefixes and CSS show/hide classes for instantly responsive HTML.

###

### `.grid` & `.grid-fluid`
