import assert from 'node:assert/strict';
import fs from 'node:fs';

const bridge = fs.readFileSync('functions/api/customer-service/[[path]].js', 'utf8');
const assistant = fs.readFileSync('src/components/CentralCustomerServiceAssistant.tsx', 'utf8');
const launchGate = fs.readFileSync('src/components/HeadOfficeLaunchGate.tsx', 'utf8');
const layout = fs.readFileSync('src/layouts/RootLayout.tsx', 'utf8');

assert.match(bridge, /HEAD_OFFICE_SUPPORT_CENTRE_ENABLED/);
assert.match(bridge, /CUSTOMEROPS_API_KEY/);
assert.match(bridge, /\/api\/v1\/platform\/support\//);
assert.match(bridge, /\/api\/v1\/platform\/support-control/);
assert.match(bridge, /sameOrigin/);
assert.match(bridge, /64_000/);
assert.match(bridge, /unavailableConfig/);
assert.match(bridge, /assistantEnabled: true/);
assert.match(bridge, /maintenanceEnabled: true/);
assert.match(bridge, /siteControls: \{ launchGate: \{ enabled: false \} \}/, 'The website must fail open when the Head Office connection is unavailable.');
assert.match(bridge, /contact@jagroupservices\.co\.uk/);
assert.match(bridge, /020 3834 2790/);
assert.doesNotMatch(bridge, /Bearer\s+[A-Za-z0-9._-]{20,}/);

assert.match(assistant, /JA Group Services Support Assistant/);
assert.match(assistant, /request_human/);
assert.match(assistant, /Head Office Customer Adviser/);
assert.match(assistant, /conversations\/\$\{encodeURIComponent\(sessionId\.current\)\}\/messages/);
assert.match(assistant, /AppearanceConfig/);
assert.match(assistant, /launcherColour/);
assert.match(assistant, /headerBackground/);
assert.match(assistant, /panelWidth/);
assert.match(assistant, /knowledgeLimit/);

assert.match(launchGate, /siteControls\?\.launchGate/);
assert.match(launchGate, /if \(!supplied\?\.enabled\) return/);
assert.match(launchGate, /Deliberately fail open/);
assert.match(launchGate, /z-\[10000\]/);
assert.match(launchGate, /Company No\. 16314179/);
assert.match(launchGate, /contact@jagroupservices\.co\.uk/);
assert.doesNotMatch(launchGate, /CUSTOMEROPS_API_KEY|Authorization:/);

assert.match(layout, /CentralCustomerServiceAssistant/);
assert.match(layout, /HeadOfficeLaunchGate/);
assert.equal((layout.match(/<HeadOfficeLaunchGate \/>/g) || []).length, 2, 'The gate must cover both browser and PWA layouts.');

console.log('JA Group Services central customer service controls and Launch Gate checks passed.');
