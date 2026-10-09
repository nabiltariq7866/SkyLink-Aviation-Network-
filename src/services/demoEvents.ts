import {recordEvent} from './demoStore';
export type DemoEvent={type:string;resourceId:string;message:string;timestamp:string};
export function createDemoEvent(type:string,resourceId:string,message:string):DemoEvent{return {type,resourceId,message,timestamp:new Date().toISOString()};}
export function persistDemoEvent(event:DemoEvent){recordEvent(event.type,event.resourceId,event.message);}
