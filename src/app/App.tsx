import React from "react";
import {Outlet} from "react-router-dom";
import {AppProvider} from "./context";
import {Layout} from "../components/layout";

export function RootApp(){return <AppProvider><Layout/></AppProvider>}
export function PageOutlet(){return <Outlet/>}
