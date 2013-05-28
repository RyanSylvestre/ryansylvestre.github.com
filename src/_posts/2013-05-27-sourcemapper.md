---
layout: post
title: Source Mappper
category: posts
---


My first deployed application on the chrome app store is called Source Mapper and you can get it [here](https://chrome.google.com/webstore/detail/source-mapper/enenhalmnhnpofkecebdmgnmmhfkhcpb).

It is a utility app to get the original source code from a source map packaged as a chrome application.
If you would like to get more information regarding sourcemaps I recommend checking out [this article](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps) on html5rocks.com.

Unfortunately it won't be useful to a tremendous amount of people. But I hope those niche users find it helpful. I know I did.

### What?
When provided a sourcemap URL, line number and column number sourcemapper will provide a code block of the source file with the line highlighted.
This has been most useful in conjunction with error logging compressed JS files.


### Limitations
The only (big) caveat being you will need both line and column numbers.
This can be difficult because window.onerror does not provide the column information needed to get the exact location in modern browsers.

There are various libraries that will wrap native functions with try/catches that could provide the column from error.stack.
Use at your own risk (not sure how I feel about them yet)

In my case (enterprise) we have mostly < IE8 users at the moment, during window.onerror it is possible to either A. Walk to callee and build a stack or B. Use window.error.errorcharacter to capture the column number. This is what I am going to be doing for the time being.

### Tested with
- Source Map Version 3
- JavaScript source files


### Links
- [Source on github](https://github.com/RyanSylvestre/sourceMapper)
- [Chrome Web Store](https://chrome.google.com/webstore/detail/enenhalmnhnpofkecebdmgnmmhfkhcpb)
- [Presentation I did for HartfordJS](http://ryansylvestre.github.io/presentations/source-maps)