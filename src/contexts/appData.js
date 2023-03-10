//responsible for building a 'context' and 'context provider' that uses the imports from each of my data files...
//inside of appData make sure to render App.js... so wrap App in appData...

//https://reactjs.org/docs/context.html

//once created import the context into Projects (or where ever I need it) and then use 
//useContext hook which provides a link to the context provider...

//make sure use useContext hook to get the data and then use the data with array.map() to build the projects with...
import React from "react";
import { ModalData } from "../data/ModalData";
import { EducationData } from "../data/EducationData";
import { links } from "../data/appLinks";
import { ProjectData } from "../data/ProjectData";

//create a variable to store all of my data as an object so you can access specific types
const appDataContext = {
  modalData: ModalData,
  educationData: EducationData,
  appLinksData: links,
  projectData: ProjectData,
};

//creating a context whose initial values are appDataContext
export const AppContext = React.createContext(appDataContext);

//declaring a purely functional component that is a context provider
//destucturing the react 'children prop' from it's props and rendering it as a child of the context provider
export default function AppDataProvider({ children }) {

//the curlies allow you to embed JS inside a JSX statement and the result of the JS is baked into the JSX statement
//the {children} allows any children JSX that was declared inside the appDataProvider tag to be internally mapped
//as the only child of its AppContext.Provider component which in turn allows any of the children components
//to access that context through useContext() or constructor
  return (
    <AppContext.Provider value={appDataContext}>
      {children}
    </AppContext.Provider>
  )
}

// export default AppDataProvider;
