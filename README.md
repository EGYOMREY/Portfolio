# My online Portfolio
[Direct Link](https://egyomrey.github.io/Portfolio/build/index.html)
How this project was built


## 1. Styling

- Done with Sassy CSS, complied and minified to css with [Gulp](https://gulpjs.com/)
- Followed a basic [7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)

**Final Sass folder structure:**
 <pre>
sass/  
|  
|– abstracts/  
|   |– _variables.scss 
|   |– _mixins.scss
|  
|– base/  
|   |– _base.scss  
|   |– _typography.scss  
|  
|– components/  
|   |– _buttons.scss     
|  
|– layout/  
|   |– _navigation.scss  
|   |– _grid.scss         
|   |– _header.scss       
|   |– _footer.scss       
|   |– _about-me.scss     
|   |– _project.scss     
|  
|– vendors/  
|   |– _normalize.scss   
|  
– main.scss           
 </pre>

## 2. Gulp plugins used:
 <pre>
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concatify = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin = require('gulp-htmlmin');
</pre>




