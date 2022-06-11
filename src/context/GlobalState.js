import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state kısmı

const initialState = {
  watchlist: [],
  watched: [],
};

//create context kısmı

export const GlobalContext = createContext(initialState);

//provider componenetler

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions

  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watched: state.watched,
        addMovieToWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
