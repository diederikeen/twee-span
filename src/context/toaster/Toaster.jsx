import React, { createContext, useState, useContext } from "react";
import ToasterComponent from "./components/ToasterComponent";

const initialState = {
  setToaster: () => {},
  hideToaster: () => {},
  Toaster: () => {},
};

export const ToasterContext = createContext(initialState);

export const ToasterContextProvider = ({ children }) => {
  const [toasterProps, setToasterProps] = useState({
    visible: false,
    duration: 3000,
    content: "",
  });

  const setToaster = (props) =>
    setToasterProps((prev) => ({
      visible: true,
      ...props,
    }));

  const hideToaster = (props) =>
    setToasterProps((prev) => ({
      ...prev,
      visible: false,
      content: "",
    }));

  const Toaster = () => <ToasterComponent {...toasterProps} />;

  return (
    <ToasterContext.Provider
      value={{
        Toaster,
        setToaster,
        hideToaster,
      }}
    >
      {children}
    </ToasterContext.Provider>
  );
};

export const useToaster = () => {
  const { setToaster, hideToaster, Toaster } = useContext(ToasterContext);
  return {
    setToaster,
    hideToaster,
    Toaster,
  };
};
