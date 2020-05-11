import React from "react";
import AppPresenter from "./AppPresenter";
import context from "../../context";

const AppContainer = () => {
  return (
    <context.Provider>
      <AppPresenter />
    </context.Provider>
  );
};

export default AppContainer;
