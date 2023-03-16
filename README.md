# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## User Stories

- As a user, I need a homepage which will display the name of the app and some nice image that would serve as the landing page.
- As a user, I need a page that would give a short synopsis of all reviewed restaurant, as well as the number of reviews.
- As a user, I need a page that has all the details of a particular restaurant.
- As a user, I need a page that would let me see all the reviews of a given restuarant
- As a user, I need a page that would let me post a review for a given restaurant

## Color Schemes

The following colors were chosen (using Colormind.io):
![Color Scheme 1](/assets/color_scheme/colors_1.png)
![Color Scheme 2](/assets/color_scheme/colors_2.png)

## Wire Frames

This section will be done in the future.

## Routes

The following routes will be supported by the REST-Rant app.

| Method | Path                     | Purpose                                          |
| ------ | ------------------------ | ------------------------------------------------ |
| GET    | /                        | Home page                                        |
| GET    | /places                  | Places index page                                |
| POST   | /places                  | Create new place                                 |
| GET    | /places/new              | Form page for creating a new place               |
| GET    | /places/:id              | Details about a particular place                 |
| PUT    | /places/:id              | Update a particular place                        |
| GET    | /places/:id/edit         | Form page for editing an existing page           |
| DELETE | /places/:id              | Delete a particular place                        |
| POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
| GET    | \*                       | 404 page(matches any route not defined above)    |
