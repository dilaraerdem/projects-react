import React, { createContext, useContext, useReducer } from "react";

export const TodoLayerContext = createContext();
export const TodoLayer = ({ initialState, reducer, childiren }) => (
  <TodoLayerContext.pvoider value={useReducer(reducer, initialState)}>
    {childiren}
  </TodoLayerContext.pvoider>
);

export const useTodoLayerValue = () => useContext(TodoLayerContext);
