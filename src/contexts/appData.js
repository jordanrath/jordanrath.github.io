import React from "react";
import { EducationData } from "../data/EducationData";
import { links } from "../data/appLinks";
import { ProjectData } from "../data/ProjectData";

//create a variable to store all of my data as an object so you can access specific types
const appDataContext = {
  educationData: EducationData,
  appLinksData: links,
  projectData: ProjectData,
};

//creating a context whose initial values are appDataContext
export const AppContext = React.createContext(appDataContext);

//destucturing the react 'children prop' from it's props and rendering it as a child of the context provider
export default function AppDataProvider({ children }) {

  return (
    <AppContext.Provider value={appDataContext}>
      {children}
    </AppContext.Provider>
  )
}
