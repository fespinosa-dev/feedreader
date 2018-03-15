/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */
    describe('RSS Feeds', function () {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
		/* It tests to make sure that each feed in the allFeeds object
		 * has a URL defined and that the URL is not empty.
		 */
        it('has url defined and it\'s not empty', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });
		/* 
		 * It tests to make sure that each feed in the allFeeds object
		 * has a name defined and that the name is not empty.
		 */
        it('has name defined and it\'s not empty', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });
    describe('The menu', function () {
        var body = null;
        beforeEach(function () {
            body = document.querySelector('body');
        });
		/**
		 * It tests to make sure the menu element is
		 * hidden by default.
		 */
        it('has element hidden by default', function () {
            expect(body.getAttribute('class')).toBe('menu-hidden');
        });
		/* 
		 * It tests to make sure that the mnenu changes
		 * visibility when the menu icon is clicked. 
		 */
        it('changes visibility when the menu icon is clicked', function () {
            let menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(body.getAttribute('class')).toBe('');
            menuIcon.click();
            expect(body.getAttribute('class')).toBe('menu-hidden');
        });
    });
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        it('should have at least a single .entry element within the .feed continer', function (done) {
            let container = document.querySelector('.feed');
            expect(container.children.length).toBeGreaterThan(0);
            done();
        });
    });
    describe('New Feed Selection', function () {
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });
        it('should actually change the content when loadFeed is loaded', function (done) {
            let initEntryTitlesCount = document.querySelectorAll('.feed h2');
            initEntryTitlesCount.forEach(entryTitle => {
                expect(entryTitle.innerText).not.toBe('');
            });
            done();
        });
    });
}());