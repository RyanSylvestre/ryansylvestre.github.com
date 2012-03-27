# JavaScript App Performance Testing

!SLIDE left

# JavaScript App Performance Testing

#### Ryan Sylvestre
#### rjsylvestre@gmail.com

!SLIDE left

# About me

* Travelers since 2008
* Currently working in Personal Insurance
* Full time JavaScript for past 15 months

!SLIDE left

# Current Application

* Single page app
* ~50,000 lines of JS code
* Very aggressive performance SLA's
* IE7+ support

!SLIDE left

# Current Process

* Dev team monitoring new feature impact on performance
* Log of areas we are monitoring with potential improvements ready
* Performance Testing Team (seperate from dev)

!SLIDE left

# What is this about?

* The What When and How to test your js application
* Basic overview of DynaTrace

!SLIDE left

# What to test

* Major app events
* Initialization
* "Page" transitions
* Any noticable issues when running through the app

!SLIDE left

# When to test

* Early and Often (especially if you have SLA's)
* Anytime you notice performance degradation
* Introducing new code to hotspots

!SLIDE left

# Available tools

* Built in profiliers (Chrome/IE)
* DynaTrace (Firefox/IE)
* Firebug (Firefox)

!SLIDE left

# DynaTrace

* [http://ajax.DynaTrace.com/ajax/en/](http://ajax.DynaTrace.com/ajax/en/)
* Free and Premium versions
* Works in Firefox and IE
* See methods, with method arguments and their return values
* Calls are traced into the DOM so read/write execution can be easily optimized


!SLIDE left

# DynaTrace Cont.

* Low level instrumentation through a plugin
* Capable of tracing through native methods
* Sessions saved for later analysis

!SLIDE

# Configuration

![DynaTrace Configuration](images/DT-Config.JPG)

!SLIDE

# Navigation

![DynaTrace Sidebar](images/DT-FileMenu.JPG)

!SLIDE

# Pure Paths

![Pure Paths](images/DT-Main.JPG)

!SLIDE

# Activities

![Activities](images/DT-Activities.JPG)

!SLIDE left

# Great now what?
#### What to look out for
* Have goals and tackle those sections
* Sort by JS and start investigating
* Dig into noticable areas from hands on testing
* Run multiple tests and compare

!SLIDE left

# JS, Total, Exec Time ???

* JS[ms] - JS time spent running that method (including all sub calls)
* Total[ms] - Total overall time running that method
* Exec Time[ms] - Time spent running (not including sub methods)

!SLIDE

# General Tips
## STOP DOING THINGS YOU DONT NEED TO

!SLIDE

# Seriously tho...
## STOP DOING THINGS YOU DONT NEED TO

!SLIDE left

# Other tips

* Return early and often
* Have a solid caching strategy
* Utilize MVVM pattern with lots of UI behavior

!SLIDE left

# The Evil DOM

* Limit DOM touches
* Know when and where to use jQuery
* calls such as .empty() can be very expensive

!SLIDE left

# When to Hyper-optimize

* The code is necessary
* Perhaps its called often / in a loop

!SLIDE left

# My Lessons Learned

* Always ask "Is this necessary?"
* Cache everything as much as possible
* Never store state on the DOM
* Work off the DOM as much as possible
* Heck... avoid the DOM at all costs

!SLIDE left

# TODO

* Automation
* Mobile

!SLIDE

# Remember
#### Always performance tweak responsibly
