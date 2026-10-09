import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const projectRoot=path.dirname(fileURLToPath(import.meta.url));
const root=path.join(projectRoot,'src');
const files=[];
const walk=d=>{for(const f of fs.readdirSync(d)){const p=path.join(d,f);if(fs.statSync(p).isDirectory())walk(p);else if(/\.(ts|tsx)$/.test(f))files.push(p)}};walk(root);
const read=f=>fs.readFileSync(f,'utf8');
const source=files.map(read).join('\n');
const router=read(path.join(root,'router.tsx'));
const checks=[
 ['No native select controls', !/<select\b|<\/select>/i.test(source)],
 ['No TODO or placeholder implementation markers', !/TODO|not implemented|coming soon/i.test(source)],
 ['Browser router', /createBrowserRouter/.test(router) && /RouterProvider/.test(read(path.join(root,'main.tsx')))],
 ['Reusable custom dropdown', /CustomDropdown/.test(read(path.join(root,'components/ui/CustomDropdown.tsx'))) && /CustomDropdown as Dropdown/.test(read(path.join(root,'components/ui/index.tsx')))],
 ['Recharts', /from ['"]recharts['"]/.test(source)],
 ['Local persistence', /localStorage/.test(source)],
 ['Audit event service', /recordEvent/.test(source) && /skylink-audit-events/.test(read(path.join(root,'services/demoStore.ts')))],
 ['Cross-module workflow service', /recomputeRequirements/.test(read(path.join(root,'services/workflow.ts'))) && /buildMatchAlerts/.test(read(path.join(root,'services/workflow.ts')))],
 ['Aircraft status event propagation', /updateAircraftStatus/.test(read(path.join(root,'app/context.tsx'))) && /requirementsRecalculated/.test(read(path.join(root,'app/context.tsx')))],
 ['Requirement create/update workflow', /createRequirement/.test(read(path.join(root,'app/context.tsx'))) && /updateRequirement/.test(read(path.join(root,'app/context.tsx')))],
 ['18 business areas documented', read(path.join(projectRoot,'README.md')).includes('18')],
 ['Demo acceptance flow documented', fs.existsSync(path.join(projectRoot,'DEMO_FLOW.md'))],
];
const routeNames=['aircraft','requirements','matches','network','deal-rooms','messages','copilot','alerts','relationships','search','comparison','pipeline','disclosure','integrations','governance','analytics','security','reports','settings'];
for(const r of routeNames) checks.push([`Route /${r}`,new RegExp(`path:\"${r}\"`).test(router)]);

const context=read(path.join(root,'app/context.tsx'));
checks.push(['Context provider exposes disclosure/task actions', /value=\{\{\.\.\.value,disclosure,requestDisclosure,approveDisclosure,(?:revokeDisclosure,)?markAlertRead,addDealTask,completeDealTask\}\}/.test(context)]);
checks.push(['Synthetic aviation dataset', /for\(let i=aircraft.length;i<150/.test(read(path.join(root,'data/demo.ts'))) && /for\(let i=requirements.length;i<40/.test(read(path.join(root,'data/demo.ts'))) && /for\(let i=brokers.length;i<100/.test(read(path.join(root,'data/demo.ts')))]);
checks.push(['Generated aviation visual asset', fs.existsSync(path.join(projectRoot,'public/assets/skylink-ai-aviation-suite.png'))]);
checks.push(['Dynamic transaction timeline', /activeIndex/.test(read(path.join(root,'components/ui/index.tsx'))) && /activeIndex=\{idx\}/.test(read(path.join(root,'pages/DealRooms.tsx')))]);

let failed=0;
for(const [name,ok] of checks){console.log(`${ok?'PASS':'FAIL'}  ${name}`);if(!ok)failed++;}
console.log(`Checked ${files.length} TypeScript/TSX files.`);
process.exit(failed?1:0);
