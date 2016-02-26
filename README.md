# simple-grid

##Intro
Simple grid is a basic lightweight grid system built in Sass (SCSS). Simple grid does not include any presentational styles but is simply a grid system.


##Instruction CSS

To use Simple grid include `simple-grid.css` or `simple-grid.min.css` in the head of your html.

Typical class definitions of Simple grid look like this:

```html
<div class="grid">
    <div class="grid__column--1"></div>
    <div class="grid__column--2"></div>
</div>
```

The compiled CSS provides 12 columns and a grid max-width of 1280px with the following breakpoints:
- mobile: 0 -> 500px (default change of the size of all the column to 100% of the grid)
- tablet: 501px -> 1024px
- desktop: 1025px -> 1280px
- large-desktop -> 1440px


##Instructions SCSS

First you need to install [grunt](http://gruntjs.com/getting-started) and the dependencies.

```
cd simple-grid
npm install -g grunt-cli
npm install autoprefixer grunt-postcss grunt-contrib-watch grunt-contrib-sass
```

Once done you can change the variable in settings.scss (see the settings section for more details), then recompile the css file.

```
grunt
```

You have also the option of customize your grid using the provided mixins ```grid()``` and ```grid-column()``` and their options.
Examples:

```SCSS
.your-element-grid {
        @include grid();
}

.your-element-grid-column {
    @include grid-column(
        $nb-column: 1, // Control the number of columns
        $gutter: true, // Specify if there is a gutter or not (default: true)
        $size-break: 'mobile' // Size where it "breaks" ('mobile', 'tablet', 'desktop', 'large-desktop')
    );
}

```


##Settings

number of columns of your grid
```SCSS
$nb-grid-column: 12;
```

global gutter for the grid (if set to false, will remove the padding of all the columns).
```SCSS
$has-gutter: true;
```

gutter size in pixels
```SCSS
$column-gutter: 20;
```

max-width of your grid in pixels
```SCSS
$grid-width: 1280;
```

Variable to define from which breakpoint it will break (change the column size to 100%).
Four different variable are available: *mobile*, *tablet*, *desktop*, *large-desktop*
```SCSS
$global-size-break: "mobile";
```

Breakpoint size in pixels
```SCSS
$mobile-break: 500px;
$tablet-break: 1024px;
$desktop-break: 1280px;
$large-desktop-break: 1440px;
```
