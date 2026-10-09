import React,{useState} from 'react';
import {Bookmark,Check,MessageSquare,UserPlus} from 'lucide-react';
import {useNavigate,useParams} from 'react-router-dom';
import {useApp} from '../app/context';
import {Badge,Button,Card,Info,Page} from '../components/ui';
import {NotFound} from './NotFound';

export function BrokerDetail(){
 const {id}=useParams();const {brokers,setBrokers,emit,toast}=useApp();const navigate=useNavigate();
 const broker=brokers.find(item=>item.id===id);const [note,setNote]=useState(()=>localStorage.getItem('skylink-broker-note-'+id)||'');
 if(!broker)return <NotFound/>;
 const update=(field:'following'|'saved')=>{setBrokers(list=>list.map(x=>x.id===broker.id?{...x,[field]:!x[field]}:x));emit(field==='following'?'BROKER_CONNECTION_UPDATED':'TRUSTED_COUNTERPARTY_UPDATED',broker.id,`${broker.name} ${broker[field]?'removed':'added'} ${field==='following'?'from network connections':'as trusted counterparty'}`);toast('Relationship workspace updated')};
 return <Page title={broker.name} sub={`${broker.company} · ${broker.location}`} actions={<><Button variant="secondary" icon={Bookmark} onClick={()=>update('saved')}>{broker.saved?'Saved':'Save Counterparty'}</Button><Button icon={MessageSquare} onClick={()=>navigate('/messages')}>Message Broker</Button></>}>
  <div className="grid-2"><Card title="Verified Professional Profile"><Info label="Company" value={broker.company}/><Info label="Primary markets" value={(broker.markets||[broker.location]).join(', ')}/><Info label="Aircraft specialty" value={broker.specialty}/><Info label="Languages" value={(broker.languages||['English',broker.location.includes('Dubai')?'Arabic':'French']).join(', ')}/><Info label="Time zone" value={broker.timezone||'UTC+04:00'}/><Info label="Experience" value={broker.experience||'Acquisition, leasing and charter'}/><Info label="Contact preference" value={broker.contactPreference||'Secure message first'}/><Badge value={broker.verified?'Company & identity verified':'Verification pending'}/></Card>
  <Card title="Trust & Relationship"><Info label="Trust level" value={broker.trustLevel||'Institutional'}/><Info label="Mutual connections" value={String(broker.mutualConnections??Math.max(2,Math.round(broker.connections/8)))}/><Info label="Response" value={broker.response}/><Info label="Previous collaboration" value={`${Math.max(1,Math.round(broker.connections/12))} transactions`}/><p>{broker.biography||`${broker.name} advises verified international counterparties across ${broker.specialty.toLowerCase()} opportunities.`}</p><Button icon={UserPlus} onClick={()=>update('following')}>{broker.following?'Connected':'Connect / Follow'}</Button></Card></div>
  <Card title="Private Relationship Note"><textarea className="note-area" value={note} onChange={e=>setNote(e.target.value)} placeholder="Preferred partner, market expertise, last interaction..."/><div className="card-actions"><Button icon={Check} onClick={()=>{localStorage.setItem('skylink-broker-note-'+broker.id,note);emit('BROKER_NOTE_SAVED',broker.id,'Private relationship note saved');toast('Private note saved')}}>Save Private Note</Button></div></Card>
 </Page>;
}
