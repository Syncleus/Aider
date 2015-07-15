#!/bin/sh

# Make the directories
mkdir -p dist/js/vendor
mkdir -p dist/css
mkdir -p dist/fonts

#copy the fonts
cp -f bower_components/octicons/octicons/octicons.ttf dist/css
cp -f bower_components/octicons/octicons/octicons.woff dist/css
cp -f bower_components/font-awesome/fonts/* dist/fonts

#copy the javascript
cp bower_components/angular/angular.min.js dist/js/vendor
cp bower_components/angular-ui-router/release/angular-ui-router.js dist/js/vendor
cp bower_components/angular-dropdowns/dist/angular-dropdowns.min.js dist/js/vendor
cp bower_components/headroom.js/dist/headroom.min.js dist/js/vendor
cp bower_components/headroom.js/dist/angular.headroom.min.js dist/js/vendor
cp bower_components/modernizr/modernizr.js dist/js/vendor
cp bower_components/d3/d3.min.js dist/js/vendor
cp bower_components/nvd3/nv.d3.min.js dist/js/vendor
cp bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.min.js dist/js/vendor
cp bower_components/highlightjs/highlight.pack.js dist/js/vendor
cp bower_components/angular-highlightjs/angular-highlightjs.min.js dist/js/vendor
cp bower_components/highlightjs-line-numbers.js/dist/highlightjs-line-numbers.min.js dist/js/vendor
