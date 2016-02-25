# simple-grid

##Intro
Simple grid is a basic lightweight grid system is SCSS. There is no style, just the grid control system via a setting.scss file.


##Instruction CSS

You can use simple-grid by just including the simple-grid.css or simple-grid.min.css file in your html.
After, you just need to use it with the default classes defined:

```html
<div class="grid">
	<div class="grid__column--1"></div>
	<div class="grid__column--2"></div>
</div>
```

The already compilated CSS is not really flexible, and you can only have a 12 columns and a grid max-width of 1280px with the following breakpoints:
- mobile: 0 -> 500px (default change of the size of all the column to 100% of the grid)
-tablet: 501px -> 1024px
-desktop: 1025px -> 1280px
-large-desktop -> 1440px


##Instructions SCSS

First you need to install [grunt](http://gruntjs.com/getting-started) and the dependencies. 

```
cd simple-grid
npm install -g grunt-cli
npm install autoprefixer grunt-postcss grunt-contrib-watch grunt-contrib-sass
```

Once this is done you can change the variable in the settings.scss (see the settings section for more details), then recompile the css file.

```
grunt
```


##Settings
