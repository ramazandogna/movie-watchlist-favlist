import React, { createContext, useReducer, useEffect } from "react";
import { AppReducer } from "./AppReducer";

//initial state kısmı

const initialState = {
  watchlist: [],
  watched: [],
};

//create context kısmı

export const GlobalState = createContext(initialState());

//provider componenetler

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{ watchlist: state.watchlist, watched: state.watched }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
