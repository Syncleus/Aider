#!/bin/sh
mkdir -p dist/js/vendor
mkdir -p dist/css
mkdir -p dist/fonts
cp -f bower_components/octicons/octicons/octicons.ttf dist/css
cp -f bower_components/octicons/octicons/octicons.woff dist/css
cp -f bower_components/font-awesome/fonts/* dist/fonts
cp bower_components/angular/angular.min.js dist/js/vendor
cp bower_components/angular-ui-router/release/angular-ui-router.js dist/js/vendor
cp bower_components/angular-dropdowns/dist/angular-dropdowns.min.js dist/js/vendor
cp bower_components/headroom.js/dist/headroom.min.js dist/js/vendor
cp bower_components/headroom.js/dist/angular.headroom.min.js dist/js/vendor
cp bower_components/modernizr/modernizr.js dist/js/vendor
cp bower_components/d3/d3.min.js dist/js/vendor
cp bower_components/nvd3/nv.d3.min.js dist/js/vendor
cp bower_components/angularjs-nvd3-directives/dist/angularjs-nvd3-directives.min.js dist/js/vendor
