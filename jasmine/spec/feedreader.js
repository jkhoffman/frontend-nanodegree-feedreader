/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed in the allFeeds
         * object and ensures it has a URL defined and that the
         * URL is not empty.
         */
        it('have a non-empty URL', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        });


        /* This test loops through each feed in the allFeeds
         * object and ensures it has a name defined and that the
         * name is not empty.
         */
        it('have a non-empty name', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        });
    });


    /* This test suite contains all of the menu-related tests
     */
    describe('The menu', function () {
        /* This test ensures that the menu element is hidden by
         * default. You'll have to analyze the HTML and the CSS to
         * determine how we're performing the hiding/showing of
         * the menu element.
         */
        it('is hidden by default', function () {
            expect($('body')).toHaveClass('menu-hidden');
        });

        /* This test ensures that the menu changes visibility when
         * the menu icon is clicked. This test has two expectations:
         * does the menu display when clicked and does it hide when
         * clicked again.
         */
        it('changes visibility when icon clicked', function () {
            $('.menu-icon-link').click();
            expect($('body')).not.toHaveClass('menu-hidden');

            $('.menu-icon-link').click();
            expect($('body')).toHaveClass('menu-hidden');
        });
    });


    /* This test suite covers the initial entries
     */
    describe('Initial Entries', function () {
        /* Load the feeds
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        /* This test ensures that, after the loadFeed function is called
         * and completes its work, there is at least a single .entry
         * element within the .feed container.
         */
        it('are not empty', function () {
            expect($('.feed')).toContainElement('.entry');
        });

        /* This test ensures that, after the loadFeed function is called
         * and completes its work, each .entry has an image.
         */
        it('all have images', function () {
            // loop through the entries
            $('.entry').each(function (index) {
                // expect each entry to contain an img
                expect($(this)).toContainElement('img');
            });
        });
    });


    describe('New Feed Selection', function () {
        var initialHtml;

        /* Load the second feed
         */
        beforeEach(function (done) {
            loadFeed(1, function () {
                initialHtml = $('.feed').html();
                done();
            });
        });

        /* This test ensures that when a new feed is loaded by the
         * loadFeed function that the content actually changes.
         */
        it('changes the feed content', function (done) {
            loadFeed(0, function () {
                expect($('.feed').html()).not.toBe(initialHtml);
                done();
            });
        });
    });
}());
