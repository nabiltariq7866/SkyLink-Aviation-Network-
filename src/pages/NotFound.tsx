import React from "react";
import {useNavigate} from "react-router-dom";
import {Archive,ArrowLeft} from "lucide-react";
import {Page,Card,Empty,Button} from "../components/ui";
export function NotFound(){const navigate=useNavigate();return <Page title="Page not found" sub="The requested workspace does not exist."><Card><Empty icon={Archive} title="Nothing here" sub="Use the navigation to return to a valid workspace."/><div className="center-action"><Button icon={ArrowLeft} onClick={()=>navigate('/')}>Back to Dashboard</Button></div></Card></Page>}
