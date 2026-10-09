import React from 'react';
import {MessageSquare} from 'lucide-react';
import {useNavigate,useParams} from 'react-router-dom';
import {useApp} from '../app/context';
import {Badge,Button,Card,Info,Page} from '../components/ui';
import {NotFound} from './NotFound';

export function BrokerDetail(){
 const {id}=useParams();
 const {brokers}=useApp();
 const navigate=useNavigate();
 const broker=brokers.find(item=>item.id===id);
 if(!broker)return <NotFound/>;
 return <Page title={broker.name} sub={`${broker.company} · ${broker.location}`} actions={<Button icon={MessageSquare} onClick={()=>navigate('/messages')}>Message Broker</Button>}>
  <div className="grid-2">
   <Card title="Broker Profile">
    <Info label="Company" value={broker.company}/>
    <Info label="Location" value={broker.location}/>
    <Info label="Specialty" value={broker.specialty}/>
    <Info label="Verification" value={broker.verified?'Verified':'Pending'}/>
   </Card>
   <Card title="Network Performance">
    <Info label="Rating" value={broker.rating?String(broker.rating):'New'}/>
    <Info label="Response" value={broker.response}/>
    <Info label="Connections" value={String(broker.connections)}/>
    <Info label="Aircraft represented" value={String(broker.inventory)}/>
    <Badge value={broker.status||'Active'}/>
   </Card>
  </div>
 </Page>;
}
