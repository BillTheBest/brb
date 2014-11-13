# brb learning keen

![Big red button page](http://cl.ly/image/1b3g110I1y2X/Screen%20Shot%202014-11-13%20at%202.41.31%20PM.png)

brb, a.k.a. the big red button, is a 15-minute tutorial that shows you how to use [Keen IO](https://keen.io/).

In this tutorial you'll learn how to:

+ Track clicks of the big red button.
+ Visualize clicks in the workbench on [keen.io](https://keen.io/):

![Workbench](http://cl.ly/image/2F322K3h3J2r/workbench.png)

+ Visualize clicks on a [custom dashboard](https://github.com/keen/dashboards):

![Custom Dashboard](http://cl.ly/image/0M1Z3W3I4606/bluebuttonpress.png)

+ Explore click data on the command line with [keen-cli](https://github.com/keen/keen-cli):

![keen-cli](http://cl.ly/image/3J3q3q3J182X/Screen%20Shot%202014-11-13%20at%202.49.05%20PM.png)

### Preparation

There a few things you should do before starting.

+ Clone this repository.

```
$ git clone git@github.com:keen/brb.git
```

+ Sign up for a [Keen IO account](https://keen.io/signup) and create a new project called *brb*. This is optional, but to follow along interactively you'll need to have a Keen IO project ID and API keys handy.
+ One you have your project ID and API keys, paste them into the following files in the `brb` directory:
	+ `.env`
	+ `index.html`
	+ `dashboard/dashboard.js`
	
+ Install a static site hosting tool like [Divshot](https://divshot.com) so you can open HTML pages in your browser:

```
$ npm install -g divshot-cli
```

+ Serve the site: 

```
$ divshot server
```

+ Open a browser window to [localhost:3474](http://localhost:3474).

If everything is working, you should see the big red button.

### Start the Tutorial

Head over to [Getting Started With Keen IO](https://www.codementor.io/keen-io-tutorial/keen-io-getting-started-custom-analytics) on Codementor.io. You'll find video, text, and code examples that will walk you through the whole thing.

[![](http://cl.ly/image/252c0Z1d3U3Q/Screen%20Shot%202014-11-13%20at%203.01.18%20PM.png)](https://www.codementor.io/keen-io-tutorial/keen-io-getting-started-custom-analytics)

### Support

We're happy to answer any questions about this tutorial, just drop us a line at [support@keen.io](mailto:support@keen.io).

### Inspiration

![Nope](http://cl.ly/image/3D45001c1f1J/big-red-nope-button.gif)
