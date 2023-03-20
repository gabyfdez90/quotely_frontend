# quotely_frontend
Quotely is a web service to store your favorite book quotes. This repo contains a React app that communicates through an API to manage CRUD operations.

![Screenshot 2023-03-20 at 06-33-40 Vite React](https://user-images.githubusercontent.com/117080861/226255252-6773e3b5-fdb3-4273-89ba-c519f33c42ad.png)

## Tecnologies
* HTML
* CSS
* Tailwind
* JavaScript
* React
* Vite
* GIT

## Functionalities
The main purpuse of Quotely is to serve a CRUD workflow: create, read, update, delete registers froma database. 

This React app is tailored designed to complement a [Laravel backend project] (https://github.com/gabyfdez90/quotely_api_laravel), which perform all the relationships with a MariaDB database.

![Screenshot 2023-03-20 at 06-29-16 Vite React](https://user-images.githubusercontent.com/117080861/226256332-f741edf5-089a-4921-a3e9-c472ab16b4d8.png)

## Views

It is structured in four principal views

* A HomePage, that presents the product and its purpose.
* Collection, in which we can recover all the quotes availables in table.
* Add Quote, a formulary to enter a new registry to the database.
* Song description, that shows more information about an specific quote recovered by id.
* Edit Quote, a very similar form to update an existent registry.
* Delete, to confirm the deletion of a quote.

![Screenshot 2023-03-20 at 06-30-25 Vite React](https://user-images.githubusercontent.com/117080861/226258560-8eeb3fe0-835b-4374-a046-f647bf900034.png)


* Genre, it will filter all the quotes by genre.
* Author, it will filter all the quotes by author.

## Installation

To clone this repo, you could follow these steps:

* After cloning, check the config in package-lock.json file and node_modules.
* Install dependencies through CLI, among them: tailwindcss, flowbite-tailwind, react-icons, react-router-dom.
* Start the project with `npm run dev`.



