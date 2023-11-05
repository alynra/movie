"use client";
import { useState, useEffect } from "react";
import axios from "@/lib/api";

const useGetMovies = (genre, page = 1) => {
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`/discover/movie?page=${page}&with_genres=${genre}`)
      .then((res) => setDataMovies(res.data))
      .catch((err) => console.log(err));
  }, [page, genre]);

  return dataMovies;
};

const useGetDetailMovie = (movie_id) => {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`/movie/${movie_id}`)
      .then((res) => setDataMovie(res.data))
      .catch((err) => console.log(err));
  }, [movie_id]);

  return dataMovie;
};

export { useGetMovies, useGetDetailMovie };
