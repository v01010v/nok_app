# NOK EasySearch

This is a web application that uses DataTables to display and manage information about deceased individuals and their relatives. <br>
The application includes a Jotform funeral planning submission form, allowing users to add new entries to the database.<br>
The database allows a user to search for, display, print, and export any data regarding the deceased and their next-of-kin(s).<br>

******************************************************************************************************************

**Technologies Used**

The following technologies are used in this application:

HTML: used for structuring the submission form and the DataTables table on the web page.<br>
JSON: used to store the data submitted through the form.<br>
JavaScript: used to initialize and customize the DataTables table and export button.<br>

******************************************************************************************************************

**Application Functionality**

The main functionality of this application includes:

Providing a Jotform funeral planning form for users to enter data about the deceased and their relatives.<br>
Storing itemized date including date of death, names of the deceased and their relatives, and contact information for the relatives.<br>
Storing the data submitted through the form in a JSON file.<br>
Displaying the stored data in a searchable database table on the web page.<br>
Providing the option to selectively display certain categories of data.<br>
Providing the option to print the current selection of the table.<br>
Providing a button that allows users to export the table to Excel and CSV format.<br>

******************************************************************************************************************

**How to Use**

To use this application, follow these steps:


Add desired forms to jotform<br>
Select which fields to be included in export in SETTINGS -> INTEGRATIONS<br>
Adjust Google Sheet and Google Apps Script to accommodate any changes to headings/added categories<br>
Submit a funeral planning form<br>
Form submission populates a new row of a Google Sheet<br>
Google Apps Script converts the Google Sheet to a JSON file and sends it to the website<br>
Javascript processes the JSON into an HTML table<br>
DataTables displays the HTML table as a searchable database<br>

******************************************************************************************************************

**Code Structure**

The code for this application is organized as follows:

***'jotform:'*** the custom funeral planning submission form that records the data for new entries.<br>
***'google sheet:'*** the spreadsheet to which jotform data is recorded via built-in jotform integration.<br>
***'index.html:'*** the main HTML file that includes the the DataTables table.<br>
***'data.json:'*** the JSON file that stores the data submitted through the form.<br>
***'datatables.min.js:'*** the modified DataTables library that includes the custom export button.<br>
***'app.js:'*** the JavaScript file that parses JSON.<br>

******************************************************************************************************************

**More Information**

For more information about this application, contact the developer at **jbeutz@gmail.com.**
