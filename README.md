# final-project

Primary audience:
	Anyone who enjoys eating out regularly & trying new restaurants. 

Problem being solved:
	If you have a multitude of restaurants on your to-try list, its hard to know if you’re close to one unless you happen to remember where it is. With my application, you will be able to see all the restaurants you want to try on a convenient map so you can see if you happen to be close to one when you are out and about.

Requirements:

At least 3 client side routes
	Search route to see search results from yelp
	Map route to see restaurants displayed on google maps map
	Restaurant list route to see restaurants displayed in list form 

At least 1 GET, 1 POST, 1 PUT or PATCH, and 1 DELETE AJAX request
	GET: list of restaurants
	POST: upload a new restaurant to the list
	PATCH: update/edit restaurant info such as address or notes
	DELETE: remove restaurant from the to-try list

Use of a CSS loading indicator for when AJAX requests are processing
Each page has a unique title using this addon
	Search title could be based on search query and map and list could be different as well

3 practical acceptance tests
3 practical integration tests

-definitely doable 

Cleanly formatted code. Don’t just make the code work. Make it also easy to read. This includes proper indentation, consistent casing (camelCase is the JavaScript convention), consistent spacing, and readable variable and function names.

Your project should be styled so that it presents a good user experience and looks organized and professional.
Frontend and API are deployed to Heroku
Travis CI integration with all tests passing
Notifications using Toastr
a success notification when something is successfully updated, deleted, or created
	-could be done when new restaurants are added to the to-try list or edited
an error notification when an AJAX call fails
	-if the restaurant could not be found on google maps or could not be deleted from the list

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd final-project`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
