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
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has a url defined and the url is not empty', function(){
            allFeeds.forEach(function(item){
                expect(item.url).toBeDefined();
                expect(item.url.length).not.toEqual(0);
            });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a name defined and the name is not empty', function(){
            allFeeds.forEach(function(item){
                expect(item.name).toBeDefined();
                expect(item.name.length).not.toEqual(0);
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {


        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('element is hidden by default', function(){
            //expect($(".slide-menu")).toBeHidden();
            //expect($('.menu-hidden').is(':visible')).toBe(true);
            expect($('.slide-menu').is(':visible')).toBe(true);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu changes visibility when the menu icon is clicked', function(){
            var menuIcon = $('.menu-icon-link');
            spyOnEvent('.menu-icon-link', 'click');
            $('.menu-icon-link').click();
            expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
            console.log("Menu clicked");
            expect($('.slide-menu').is(':visible')).toBe(true);
            spyOnEvent('.menu-icon-link', 'click');
            $('.menu-icon-link').click();
            console.log("Menu clicked again!!");
            expect($('.slide-menu').is(':visible')).toBe(false);

            //expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
            //$('.menu-icon-link').click();
            //expect($('.menu-hidden').is(':visible')).toBe(true);
            //expect('click').toHaveBeenTriggeredOn('.menu-icon-link');
          });
    });      
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
             loadFeed(0, function(){
                done();
             });   
        });

        it('calls loadFeed function and completes its work', function(done){
            var firstContainer = $('.feed');
            //console.log("Container : " + $(firstContainer).text());
            expect(firstContainer.length).not.toEqual(0);
            done();
         });
    });
         
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var initialContainer, newContainer;
         var firstArr, secArr;

         beforeEach(function(done){
            initialContainer = $('.feed');
            firstArr = $(initialContainer).text();
            //console.log("Initial container : " + $(initialContainer).text());
            loadFeed(2, function(){
                done();
             });   
        });

         it('new feed loaded by loadfeed function changes content', function(done){
            newContainer = $('.feed');
            //console.log("Second container : " + $(newContainer).text());
            secArr = $(newContainer).text();
            expect(firstArr).not.toEqual(secArr);
            done();
         });
    });     
}());
