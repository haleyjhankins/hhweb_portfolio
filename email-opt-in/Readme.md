## Developer Notes ##
This module uses Gulp for compression of the assets within it.

**DO NOT STORE FILES DIRECTLY INTO /dist!  
This folder should be generated based on assets in the other folders. Failing to head this message can result in lost files after a `gulp clean`**

When you are making changes to any of the JS files you will need to recreate the dist/js/bundle.min.js . There are a few ways to do this.  

* Make your changes then run `gulp scripts` from terminal  
This regenerates the dist files based on the files in /js. This would need to be done after every change.

* From terminal run `gulp watch` and then make your changes  
This command watches the files in /js and on a change occurring it recreates the dist files.

* From terminal run `gulp`  
This runs the default command set which is to run `scripts` and `watch`.  

### Additional Commands ###
`gulp clean` This command deletes everything in the dist folder.

## Installation

To Install this run the following command;  
`npm install -g gulp`
# gulp-starter-jan-19
