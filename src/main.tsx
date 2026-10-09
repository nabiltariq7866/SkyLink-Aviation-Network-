import React from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import "./styles/app.css";
import "./styles/settings.css";
import "./styles/pipeline.css";
import "./styles/network.css";
import "./styles/matches.css";
import "./styles/aircraft.css";
import "./styles/dashboard.css";
import "./styles/layout.css";

createRoot(document.getElementById("root")!).render(<React.StrictMode><RouterProvider router={router}/></React.StrictMode>);
