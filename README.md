> **EM DESENVOLVIMENTO!**

# Next.js + Tailwind CSS + PokeAP

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js and how to consume the api [PokeApi](https://pokeapi.co/docs/v2) using ssr

<h1 align="center">
    <img src="src/assets/logo-pokemon.png" width="100"/>
</h1>

<ol>
    <li><a href="#about">About</a></li>
        <li> <a href="#requirement">Requirements</a></li>
        <li> <a href="#howtouse">How to use</a> </li>
        <li> <a href="#resut">Development results</a> </li>
        <li> <a href="#reference">References</a></li>
</ol>

<h2 id="about">About this project</h2>

The central idea of this project is to build a front-end in Next.js/Tailwindcss for the consumption of an API. For this, [PokéApi v2](https://pokeapi.co/docs/v2) was chosen.

<h2 id="requirement">Requirements</h2>

You need [Node Js](https://nodejs.org/en/) installed on your machine.

<h2 id="howtouse">How to use</h2>

```bash
#clone this repository
$ git clone https://github.com/smartinsdev/next-poke.git

#Open the next-api folder and in the terminal run the command:
$ cd next-poke
$ npm install

#Then let the application "run" using the command below:
$ npm run dev

#The application will be opened on port:3000 - go to http://localhost:3000.

```

<h2 id="result">Development results</h2>

- Since the application is beginner level, it is simple, but it is geared towards using some basic concepts for consuming an API in Next. For example, the use of `getServerSideProps`.

<h2 id="reference">References</h2>

The application was developed according to the tutorial:

- [Build a Pokedex with NextJS and Tailwind CSS - SSR vs SSG](https://youtu.be/LMRAEUPkFXI)
