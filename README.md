# Mostarad 
is a web application that enables students to efficiently report lost items and browse found ones. It provides a simple and intuitive platform for searching, listing, and connecting with others to retrieve lost belongings on campus.


## Team Members

- Joud Alshehri  2206342  (login page& home page)
- Hanin Aldosary 2206369  (support page)
- Shjoon Albishi 2209374  (lost page)
- Eithar Mahdali 2206594  (Account page)
- Amanh Almohdar 2206687  (form page)

##  Technologies Used

- React.js  
- JavaScript  
- Node.js + Express  
- HTML & CSS  
- Multer (for image uploads)


## How Mustarad Works

### 1. User Authentication

We began by creating a database that stores each student's username and password. These credentials are used to log in through the login page. Upon submission, PHP is used to validate the entered credentials by comparing them with the stored data in the database.


### 2. Home Page

The home page offers a simple and clear explanation of the system's concept and purpose, helping users quickly understand what the platform is for.


### 3. Account Page

The Account page allows users to manually enter and update their personal information through a user-friendly form. The form includes the following fields:

* Full Name
* College
* University ID
* Phone Number

When the user clicks the Save Changes button, a confirmation message appears to inform them that their changes have been successfully saved.


### 4. Support Page

The Support page is divided into three main interactive sections:

* Documentation
* Frequently Asked Questions (FAQ)
* Contact

Each section expands when its respective button is clicked, revealing the relevant help content. These sections use a reusable component that displays questions and answers in a collapsible and interactive format for a better user experience.


### 5. Lost Items Page

The Lost Items page presents lost items within the university in a clean, organized, and user-friendly layout. It features:

* Lost items displayed as cards containing:

  * Image of the item
  * Type of item
  * Location
  * A "Details" button

Users can easily filter items by category (All, Devices, Clothing, Other) or use the search bar to find specific items by typing keywords. The design helps users locate their lost items quickly and efficiently.


### 6. Form Page

After logging in, users can access the Report Lost Items page, where they can fill out a detailed form to report a lost item. The form includes:

* Name of the item
* Type of item (selected from a dropdown menu)
* Date and time the item was found
* Location where it was found
* Option to upload a related file or image

Once the form is completed, clicking the “Submit” button sends the information to the system's database for processing and tracking.


### Navigation Menu

A consistent top navigation menu is available on all pages of the platform, providing quick access to:

* Home
* Report
* Lost Items
* Support

This menu ensures smooth navigation and a unified user experience across the entire system.