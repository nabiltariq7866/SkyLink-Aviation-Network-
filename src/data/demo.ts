import type {Aircraft,Requirement,Broker,Alert,Deal} from "../types/domain";

export const aircraft:Aircraft[]=[
{id:'ac-001',model:'Global 7500',manufacturer:'Bombardier',year:2022,location:'London, UK',price:56,capacity:17,range:7700,status:'Available',broker:'James Whitmore',verified:true,type:'Acquisition',hours:620,engine:'GE Passport',match:96},
{id:'ac-002',model:'G650ER',manufacturer:'Gulfstream',year:2021,location:'Dubai, UAE',price:52,capacity:15,range:7500,status:'Available',broker:'Omar Al-Farsi',verified:true,type:'Acquisition',hours:810,engine:'Rolls-Royce BR725',match:94},
{id:'ac-003',model:'Global 6500',manufacturer:'Bombardier',year:2020,location:'New York, USA',price:39,capacity:14,range:6600,status:'Under Discussion',broker:'Sarah Mitchell',verified:true,type:'Lease',hours:1120,engine:'GE Passport',match:88},
{id:'ac-004',model:'G700',manufacturer:'Gulfstream',year:2024,location:'Dallas, USA',price:78,capacity:19,range:7750,status:'Available',broker:'Daniel Cole',verified:true,type:'Acquisition',hours:180,engine:'Pearl 700',match:91},
{id:'ac-005',model:'Falcon 10X',manufacturer:'Dassault',year:2024,location:'Paris, France',price:64,capacity:16,range:7500,status:'Available',broker:'Luc Moreau',verified:true,type:'Acquisition',hours:210,engine:'Rolls-Royce Pearl 10X',match:86},
{id:'ac-006',model:'Global 5500',manufacturer:'Bombardier',year:2019,location:'Singapore',price:31,capacity:13,range:5900,status:'LOI Submitted',broker:'Mei Tan',verified:true,type:'Lease',hours:1860,engine:'BR710',match:82},
{id:'ac-007',model:'G600',manufacturer:'Gulfstream',year:2022,location:'Miami, USA',price:47,capacity:14,range:6500,status:'Available',broker:'Alex Morgan',verified:true,type:'Charter',hours:760,engine:'PW815GA',match:84},
{id:'ac-008',model:'Global 8000',manufacturer:'Bombardier',year:2025,location:'Toronto, Canada',price:82,capacity:19,range:8000,status:'Invite Only',broker:'James Whitmore',verified:true,type:'Acquisition',hours:95,engine:'GE Passport',match:98}
];
export const requirements:Requirement[]=[
{id:'rq-001',title:'Long-range Gulfstream acquisition',client:'Private Family Office',models:['G650ER','G700'],budget:55,passengers:12,range:6500,location:'Middle East / Europe',deal:'Acquisition',status:'Active Sourcing',privacy:'Anonymous buyer',matches:12},
{id:'rq-002',title:'Global 7500 European delivery',client:'Northstar Aviation Advisory',models:['Global 7500','Global 8000'],budget:70,passengers:14,range:7000,location:'Europe',deal:'Acquisition',status:'Matches Found',privacy:'Selected counterparties',matches:8},
{id:'rq-003',title:'Executive charter fleet',client:'Atlas Charter Group',models:['G600','Global 6500'],budget:45,passengers:10,range:5500,location:'North America',deal:'Lease',status:'Under Discussion',privacy:'Broker-only',matches:6},
{id:'rq-004',title:'Immediate ultra-long-range option',client:'Anonymous Buyer',models:['G650ER','Global 7500'],budget:60,passengers:16,range:7200,location:'Dubai / London',deal:'Acquisition',status:'Active Sourcing',privacy:'Invite-only',matches:15}
];
export const brokers:Broker[]=[
{id:'br-001',name:'Omar Al-Farsi',company:'Falcon Gate Aviation',location:'Dubai, UAE',specialty:'Gulfstream / Middle East',verified:true,rating:4.9,response:'8 min',connections:42,inventory:18},
{id:'br-002',name:'James Whitmore',company:'Whitmore Aviation Partners',location:'London, UK',specialty:'Bombardier Global',verified:true,rating:4.8,response:'12 min',connections:67,inventory:24},
{id:'br-003',name:'Sarah Mitchell',company:'AeroBridge Capital',location:'New York, USA',specialty:'Acquisition Advisory',verified:true,rating:4.9,response:'21 min',connections:54,inventory:16},
{id:'br-004',name:'Luc Moreau',company:'JetSource Europe',location:'Paris, France',specialty:'Dassault / Europe',verified:true,rating:4.7,response:'18 min',connections:31,inventory:11},
{id:'br-005',name:'Mei Tan',company:'Pacific Jet Advisory',location:'Singapore',specialty:'Asia-Pacific Leasing',verified:true,rating:4.6,response:'32 min',connections:29,inventory:9}
];
export const deals:Deal[]=[
{id:'dl-001',name:'Project Meridian',aircraft:'Global 7500 · London',buyer:'Northstar Aviation Advisory',stage:'NDA / Documents',value:56,updated:'18 min ago'},
{id:'dl-002',name:'Project Atlas',aircraft:'G650ER · Dubai',buyer:'Private Family Office',stage:'Aircraft Under Review',value:52,updated:'42 min ago'},
{id:'dl-003',name:'Project Horizon',aircraft:'G700 · Dallas',buyer:'International Executive Group',stage:'LOI',value:78,updated:'2 hr ago'},
{id:'dl-004',name:'Project Pacific',aircraft:'Global 5500 · Singapore',buyer:'Atlas Charter Group',stage:'Negotiation',value:31,updated:'4 hr ago'}
];
export const initialAlerts:Alert[]=[
{id:'al-001',title:'New 98% aircraft match',message:'Global 8000 in Toronto matches an active requirement.',severity:'High',time:'4 min ago',read:false},
{id:'al-002',title:'Aircraft status changed',message:'Global 5500 moved to LOI Submitted.',severity:'Medium',time:'18 min ago',read:false},
{id:'al-003',title:'New verified broker',message:'A Gulfstream specialist joined the Dubai network.',severity:'Low',time:'1 hr ago',read:true},
{id:'al-004',title:'Price guidance updated',message:'G650ER Dubai seller revised guidance to $52M.',severity:'Medium',time:'2 hr ago',read:true}
];
export type DemoEvent={type:string;resourceId:string;message:string;timestamp:string};
export function createDemoEvent(type:string,resourceId:string,message:string):DemoEvent{return {type,resourceId,message,timestamp:new Date().toISOString()};}
export function persistDemoEvent(event:DemoEvent){const key='skylink-audit-events';const current=JSON.parse(localStorage.getItem(key)||'[]');localStorage.setItem(key,JSON.stringify([event,...current].slice(0,200)));}

// Expanded Phase 1 demo dataset. Records are deterministic and intentionally synthetic.
const demoModels=[['Bombardier','Global 7500',7700,17,56,'GE Passport'],['Bombardier','Global 6500',6600,14,39,'GE Passport'],['Bombardier','Global 5500',5900,13,31,'BR710'],['Bombardier','Global 8000',8000,19,82,'GE Passport'],['Gulfstream','G650ER',7500,15,52,'Rolls-Royce BR725'],['Gulfstream','G700',7750,19,78,'Pearl 700'],['Gulfstream','G600',6500,14,47,'PW815GA'],['Dassault','Falcon 10X',7500,16,64,'Pearl 10X']] as const;
const demoLocations=['London, UK','Dubai, UAE','New York, USA','Paris, France','Singapore','Miami, USA','Toronto, Canada','Dallas, USA','Zurich, Switzerland','Hong Kong'];
const demoBrokers=['James Whitmore','Omar Al-Farsi','Sarah Mitchell','Luc Moreau','Mei Tan','Daniel Cole','Alex Morgan','Priya Shah','Thomas Reed','Elena Rossi'];
for(let i=aircraft.length;i<150;i++){const m=demoModels[i%demoModels.length];aircraft.push({id:`ac-${String(i+1).padStart(3,'0')}`,manufacturer:m[0],model:m[1],year:2018+(i%8),location:demoLocations[i%demoLocations.length],price:m[4]+((i%9)-4)*2,capacity:m[3],range:m[2],status:['Available','Available','Available','Under Discussion','Invite Only','LOI Submitted'][i%6],broker:demoBrokers[i%demoBrokers.length],verified:i%7!==0,type:['Acquisition','Lease','Charter'][i%3],hours:450+(i*73)%4200,engine:m[5],match:70+(i*7)%30,disclosure:i%5===0?'Approved / NDA':'Verified Counterparty'});}
const requirementModels=['Global 7500','G650ER','G700','Global 8000','Global 6500'];
for(let i=requirements.length;i<40;i++){const model=requirementModels[i%requirementModels.length];requirements.push({id:`rq-${String(i+1).padStart(3,'0')}`,title:`Institutional ${model} sourcing mandate ${i+1}`,client:['Northstar Aviation Advisory','Private Family Office','Atlas Charter Group','International Executive Group'][i%4],models:[model,i%2?'G650ER':'Global 7500'],budget:40+(i%18)*3,passengers:10+(i%9),range:5800+(i%5)*450,location:['Middle East / Europe','Europe','North America','Asia-Pacific'][i%4],deal:['Acquisition','Lease','Charter'][i%3],status:['Active Sourcing','Matches Found','Under Discussion','LOI stage'][i%4],privacy:['Anonymous buyer','Selected counterparties','Broker-only','Invite-only'][i%4],matches:4+(i*3)%18});}
for(let i=brokers.length;i<100;i++){brokers.push({id:`br-${String(i+1).padStart(3,'0')}`,name:`Aviation Professional ${i+1}`,company:`Global Aviation Partners ${i+1}`,location:demoLocations[i%demoLocations.length],specialty:['Bombardier Global','Gulfstream','Acquisition Advisory','Charter','Leasing'][i%5],verified:i%6!==0,rating:4+(i%10)/10,response:`${8+(i%40)} min`,connections:12+(i*7)%120,inventory:4+(i*5)%28,status:i%6===0?'Pending Verification':'Verified'});}
for(let i=deals.length;i<10;i++){deals.push({id:`dl-${String(i+1).padStart(3,'0')}`,name:`Project Network ${i+1}`,aircraft:`${requirementModels[i%requirementModels.length]} · ${demoLocations[i%demoLocations.length]}`,buyer:`Institutional Buyer ${i+1}`,stage:['Sourcing','Matches Identified','Broker Contacted','NDA / Documents','LOI','Negotiation'][i%6],value:35+(i%15)*4,updated:`${i+1} hr ago`,participants:['Brett Roberts','James Whitmore'],documents:i%2?['Aircraft_Specification.pdf']:[],tasks:['Confirm buyer mandate','Review aircraft specifications']});}
