# lab-02


User Acceptance Tests
Overview
In labs 2 and 3, you and your partner(s) will be using the provided JSON files to create a photo gallery. You will style it using floats.

You have the option of using the provided index.html file, but it is not a requirement.

Resources
page-1.json
index.html
Time Estimate
For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Number and name of feature: ____3 features_1. Display Images, 2. Filter Images, 3. Style the app._

Estimate of time needed to complete: 2 hours per feature

Start time: __1349 20210209___

Finish time: _1439____

Actual time needed to complete: __1 hour___
Add this information to your README.

Feature #1: Display images
Estimate of time needed to complete: 2 hours 

Start time: 1439

Finish time: 1700

Actual time needed to complete: 2.5 hours
Why are we implementing this feature?
As a user, I want to view the images on the page so that I can browse the photo collection.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the photo gallery should display all of the images in the gallery
How are we implementing it?
Use AJAX, specifically $.ajax(), to read the provided JSON file.
Each object should become a new instance of a constructor function. Refer to the data to determine the necessary properties.
Use jQuery to make a copy of the HTML template of the photo component. For each object, fill in the duplicated template with its properties, then append the copy to the DOM.

Feature #2: Filter images
Estimate of time needed to complete: 2 hours 

Start time: 1700 20210209

Finish time: 1430 20210210

Actual time needed to complete: 3 hours
Why are we implementing this feature?
As a user, I want to be able to filter the images so that I can view only images that match a keyword.
What are we going to implement?
Given that a user clicks on the dropdown menu When the user selects one of the options Then only the images whose keyword matches the option should be displayed
How are we implementing it?
Create a <select> element which contains unique <option> elements extracted dynamically from the JSON file, one for each keyword.
Use an event handler to respond when the user chooses an option from the select menu. Hide all of the images, then show those whose keyword matches the option chosen.
  

Feature #3: Style the application
Estimate of time needed to complete: 2 hours 

Start time: 1430

Finish time: 1500

Actual time needed to complete: 30mins
Why are we implementing this feature?
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in rows across the screen

How are we implementing it?
Style your application using floats.
Utilize at least one Google font.
Stretch Goal: Sort the images
Why are we implementing this feature?
As a user, I want to be able to sort the images so there is an order to how they render.
What are we going to implement?
Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

How are we implementing it?
Add the ability for the user to sort the images by either title or by number of horns.
Sort the images by one of the properties on page load. This should also apply to the second page of images.
Submission Instructions
Complete your Feature Tasks for the day
Create a Pull Request (PR) back to the master branch of your repository
On Canvas, submit a link to your PR and a link to your deployed application on GitHub pages. Add a comment in your Canvas assignment which includes the following:
A question within the context of today’s lab assignment
An observation about the lab assignment, or related ‘Ah-hah!’ moment
How long you spent working on this assignment




Feature 1: Pagination
Estimate of time needed to complete: 2 hours 

Start time: 1500

Finish time: 1630

Actual time needed to complete: 1.5 hours
Why are we implementing this feature?
As a user, I want to have the ability to view additional images so that my view does not become cluttered.
What are we going to implement?
Given that a user opens the application in the browser When the user clicks on a button or link to another page Then the other set of images should be dynamically displayed

How are we implementing it?
Add navigation for the user to switch between two pages. Each page should render a unique set of images from one of the two provided JSON files.
Reset the filters, then repopulate them using only keywords from the images currently being displayed.


Feature 2: Templating
Estimate of time needed to complete: 2 hours 

Start time: 1600

Finish time: 1500

Actual time needed to complete: 1 hour
Why are we implementing this feature?
As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.
What are we going to implement?
Given that a user opens the application in the browser When the images are displayed on the screen Then each image should be rendered according to a template

How are we implementing it?
Create the appropriate Mustache template in your HTML with the same <h2>, <img>, and <p> elements as the jQuery template from the prior lab.
Refactor the method that renders your images to use Mustache instead of making a copy with jQuery.


Feature 3: Styling with Flexbox
Estimate of time needed to complete: 2 hours 

Start time: 1350

Finish time: 1430

Actual time needed to complete: 40mins
Why are we implementing this feature?
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.
What are we going to implement?
Given that a user opens the application in the browser When the user navigates to the home page Then the images should be displayed in columns, as screen width allows

How are we implementing it?
Refactor your CSS to use Flexbox instead of floats. You are welcome to use a combination of floats and Flexbox, as you see fit.


Feature 4: Sort the images
Estimate of time needed to complete: 2 hours 

Start time: Not started

Finish time: TBD

Actual time needed to complete: Infinity
Why are we implementing this feature?
As a user, I want to be able to sort the images so that there is an order to their rendering.
What are we going to implement?
Given that a user is presented with sort options When the user clicks on one option Then the images should be sorted accordingly

How are we implementing it?
Add the ability for the user to sort the images by either title or by number of horns.
Sort the images by one of the properties on page load. This should also apply to the second page of images.