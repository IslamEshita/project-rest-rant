# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## User Stories

- As a user, I need a homepage which will display the name of the app and some nice image.
- As a user, I need a places page that would give a short synopsis a restaurant

## Color Schemes

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
