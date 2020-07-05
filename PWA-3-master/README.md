# PWA-2
## Main goal 
We need to build an offline first application with client side storage. For that we need to cover the following topics.
+ indexedDB
	- Storing information into `indexedDB`
	- Retrieving information from `indexedDB`
	- Importent functions
		1. `getAll()` : For getting complete information from indexedDB.
		2. `get()` : For retrieving particular information based on `keyPath`.
		3. `map()` : Alternative to For-loop.
		4. `put()` : Updating information in indexedDB
		5. `add()` : Adding information in indexedDB.
+ serviceWorker
	- Registering of serviceWorker.
	- Installing the serviceWorker.
	- Offline cache storage using `fetch` API
	- Activation of serviceWorker (optional)
+ manifest.JSON
	- Creating icons.
	- Modifying `index.html` (including `manifest.JSON` file along with icons)
	- Referrence (`favicon-generator.org`).

## File Structure

For working on the PWA-2 concepts, we need to focus on the following file structure.
+ Root folder
	- index.html ( root file ).
	- create.html
	- resume.html
	- sw.js (service worker)
	+ CSS
		- style.css
	+ JS
		- main.js (for storing information into `indexedDB`)
		- get.js (For retrieving information from `indexedDB`)
	+ images
		- User defined images
		- icons for manifest.JSON

## Implementation

Note : Focus on semantic tags and css rules from udacity.
semantice tags
+ header
+ section
+ article
+ sidebar
+ footer
+ nav
+ aside

### Morning session (Day-1)

1. Discuss about PWA-1 concepts (git and GitHub, flex-boxes, XMLHttpRequest, JSON, LightHouse tool, Google developer console, JavaScript basic concepts.)

2. Modifying `index.html`
	- Creating html structure along with `lang` attribute and `DOCTYPE`.
	- Adding meta tags (for responsive design and charecterset.)
	- Adding header section with the text of **Resume Builder**.
	- Adding external stylesheet (css/style.css) using `link` tag.
3. Modifying `style.css` (css/style.css)
	- Implementing styles for header section
4. Creating form in `create.html`

### Afternoon session (Day-1)

1. Introduction to `noSql` ( **noSql=FMS + DBMS** )
2. Checking browser compatability for `indexedDB`.
3. Creating indexedDB with version.
4. Creating objectStore and implimentation of indexedDB events
	+ onupgradeneeded
	+ onsuccess
	+ onerror
5. Store form data into `indexedDB` using `put()` || `add()`.

### Morining session (Day-2)

1. Retrieving information from `indexedDB` using `get()`
2. Creating cards by using the information from `indexedDB` in `index.html`
3. Passing parameters to `resume.html` from `index.html` through URL.

### Afternoon session (Day-2)

1. Creating complete resume by using information from indexedDB and parameter passed through URL.
	+ Create cardviews leftCard(Profile) && rightCard(Content)
	+ Follow the color contrast for maintaining accessibility.
2. Introduction to serviceWorker
	+ Registration
	+ installation
	+ Cache storage (`fetch`)
	+ Activation.

### Morning session (Day-3)

1. Implementing serviceWorker and its life-cycle events.
2. Checking offline storage.
3. introduction to `manifest.JSON`

### Afternoon session (Day-3)
1. implementation of `manifest.JSON` and pushing of the project into gitHub.
2. Conducting exam and getting feedback from the students <br /> <br />
																			                                                                 - _Hanuman_
