import React from "react";
import { getMovies } from "../movie_data";
import { Link, Outlet, NavLink } from "react-router-dom";

const Movies = () => {
  const movies = getMovies();

  return (
    <div>
      <h1>영화추천목록</h1>
      <div>
        {movies.map((movie) => (
          <NavLink
            to={`/movies/${movies.id}`}
            key={movie.id}
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "#ff9e1b" : "",
              };
            }}
          >
            <p>{movie.title}</p>
          </NavLink>
        ))}
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default Movies;
