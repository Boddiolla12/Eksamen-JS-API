# Eksamen - Javascript / API

### Author:

- Oskar Gjelstad Rebård

---

## Introduction

- The intended usage of this application is for quickly browsing through the pokemons from mainly the first generation of pokemon.
- Users can register, login and save their favorite pokemons, which will be stored both locally and on a cloud server.

# API Information

## https://pokeapi.co/

- Used for getting pokemondata to display on the website. All the login data is stored in the endpoint url as follows: https://crudapi.co.uk/api/v1/user_data.

- The user can register an account, log in, save his favorite pokemon and display the pokemons on his own favorite page. If its neccesarry the user can also delete his/her account easily.

## https://crudapi.co.uk/

- Crudapi.co.uk is the backend this project is built with the Api endpoint: https://pokeapi.co/api/v2/pokemon. The endpoint consists of
- basic pokemon data about individual pokemons. I have chosen to limit the pokemon fetched to gen1, which is the 151 first pokemons. If the user want, they can increase the amount fetched up to 1301 by editing the url in the fetchPokemon function, which is the maximum.

---

### Trello

- Trello has been used to keep a brief overview of what functionality to implement in the application, throughout the assignment.

- https://trello.com/b/i6572IQF/eksamen-js-api

---

## Inspiration origins

- https://www.reddit.com/r/learnjavascript/

- https://www.youtube.com/watch?v=T-VQUKeSU1w&t=1582s

- https://www.youtube.com/watch?v=AUOzvFzdIk4

- https://stackoverflow.com/questions/73305218/fetch-data-from-http-in-js-using-fetch

- https://www.w3schools.com/js/js_object_constructors.asp

---

## Image origins

- https://manybackgrounds.com/background/blue-croconaw-pokemon-pwv8kigsela9lyxi.html

- https://www.myfreetextures.com/

- https://www.myfreetextures.com/orange-seamless-wood-texture-background-image/?utm_content=cmp-true

---

## Structure

- The application consists of 4 seperate html documents:

  1. Index.html = Home page, where the fetched pokemon is initally displayed.

  2. Favorites.html = Favorites page. If a user saves a pokemon to favorites it will be displayed here.

  3. Details.html = Details page, for extended information about a specific pokemon.

  4. Account.html = This is the user portal, where the user can register og log into his/her account.

---

## Page functionality

- The pokemons on these pages are displayed within cards. Which has two buttons for each element.

---

# Home page

- Each pokemon has a favorite button, which saves the specific pokemon to local storage aswell as the server, to be displayed on on the favorites page.

- Each pokemon also has a details button, which takes the user to the details page, where extended data is displayed for the respective pokemon. Does not save anything to the server or to local storage.

# Favorites page

- Each pokemon has a remove from favorites button, which removes the pokemon in question from local storage, then removes it from the backend. It also refreshes the display on favorites.html

- Each pokemon also has a details button, which takes the user directly to the details page, for the specific pokemon.

# Details page

- Each pokemondetails has a favorite button, which saves data to local storage, then saves it to the backend.

- Each pokemon also has a "go back" button, which takes the user back to the page he/she came from initially, when the details button was clicked.

- There are checks in place which validates if username already exists or wether the username or password is correct.

# Account page

- The username input is made not case sensitive, for userfriendliness. and to prevent creation of multiple users with the same name, but with different capitalization.

- The password IS case sensitive, so be careful what you type in. As there is no way to change your password without deleting your account!

- When a user is created, the user is assigned a \_uuid which is your ID. Whenever you log in, this \_uuid is matched with its respective username, to validate that the right user is logged in, in relation to their respective favoritePokemonIds.

- This functionality is what makes sure the page displays the correct favoritePokemon for your account.

## Sorting and filters

- The sorting functionality is consolidated into multiple dropdown menus.

- One sorts by ID, ascending to descending.

- One sorts alphabetically, ascending to descending.

- One sorts by type, ascending to descending.

- The last is a filter functionality, where the user can filter pokemon based on their type. You can only filter by one type at once, allthough a pokemon can have up to two types.

### Final notes

- Since username and passwords are not saved to cookies, or hashed/encrypted, I would recommend to not create users with passwords you as the user would want to keep secret, as this userloggin portal is not secured in the slightest.
