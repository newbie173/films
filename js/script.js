"use strict";

const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "");




const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

let filmTitle = prompt("Укажите пожалуйста один из последних просмотренных фильмов","");
let filmRate = prompt(`Оцените фильм ${filmTitle} по десятибальной шкале`,"");

personalMovieDB.movies[filmTitle] = filmRate;

filmTitle = prompt("Укажите пожалуйста ещё один фильм","");
filmRate = prompt(`Оцените фильм ${filmTitle} по десятибальной шкале`,"");

personalMovieDB.movies[filmTitle] = filmRate;

console.log(personalMovieDB);