# cms_project
This is an experimental cms system. Content is edited in place. The front end is in angularJS and the backend is in sailsJS

There are currently a bunch of dependenices, some stylings, and two important front-end documetns

  index.html:
    This document is styled in github and has three 'cms-container's, each with a 'cms-form' and 'cms-display' and a 'cms-icon'     for toggling between the "editing" state of each field. The html itself has not content. The content is injected by angular     from a JSON object
    
  test.js:
    This document has angular code adds the linke ths textAngular functionality to our index.html (this aspect is pretty      
    straightforward and takes up very little of the code) a lot of this code is some tweaks to the angular app that allows
    a JSON object to be injected into the page and also gets the value of each form field when it is switced out of "edit" mode
