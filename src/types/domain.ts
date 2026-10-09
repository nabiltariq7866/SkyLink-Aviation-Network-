export type UserRole='Super Admin'|'Broker'|'Operator'|'Aircraft Owner'|'Aviation Advisor'|'Buyer'|'Compliance Admin';
export type DisclosureLevel='Teaser'|'Verified Counterparty'|'Approved / NDA';
export type DealStage='New Requirement'|'Sourcing'|'Matches Identified'|'Broker Contacted'|'Aircraft Under Review'|'NDA / Documents'|'LOI'|'Negotiation'|'Closed';
export type Aircraft={id:string;model:string;manufacturer:string;year:number;location:string;price:number;capacity:number;range:number;status:string;broker:string;verified:boolean;type:string;hours:number;engine:string;match:number;description?:string;serial?:string;registration?:string;disclosure?:DisclosureLevel};
export type Requirement={id:string;title:string;client:string;models:string[];budget:number;passengers:number;range:number;location:string;deal:string;status:string;privacy:string;matches:number;notes?:string};
export type Broker={id:string;name:string;company:string;location:string;specialty:string;verified:boolean;rating:number;response:string;connections:number;inventory:number;status?:string};
export type Alert={id:string;title:string;message:string;severity:'High'|'Medium'|'Low';time:string;read:boolean;type?:string;resourceId?:string};
export type Deal={id:string;name:string;aircraft:string;buyer:string;stage:string;value:number;updated:string;aircraftId?:string;requirementId?:string;participants?:string[];documents?:string[];tasks?:string[]};
