# The most starred repositories

## How to use

After cloning de repository you would need to run this command to make the
project works in a local environment.

`yarn install && yarn dev`

After that, you could go to your browser and write `http://localhost:3000/` to
see the project.

The project is hosted in this [link](https://stars-repositories.vercel.app/home)

## What the project is about

The project is an app where you can see the most starred repositories from
Github in the last seven days. The repositories' list shows you some data about
the repositories like numbers of starts, the name, the owner of the repository
and the description, that will appear when you put the cursor over the
repository row.

You have the option to add those repositories to a favourite list. Those
favourites repositories will be stored in the Local Storage of the browser and
will stay there even if they wouldn't be in the most starred repositories list
in the last seven days.

There is a link button to go to the Github repository.

Also, you have the option to filter the repositories by language. At the
beginning you can see the whole list of repositories and when you click on a
language button, you could see the repositories that have used this language.
