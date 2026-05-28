const fs = require('fs');
const path = require('path');

const outPath = path.join(__dirname, '..', 'src', 'environments', 'environment.prod.ts');

const serviceId = process.env.EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const templateId = process.env.EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const publicKey = process.env.EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

const content = `export const environment = {
  production: true,
  emailjs: {
    serviceId: '${serviceId}',
    templateId: '${templateId}',
    publicKey: '${publicKey}'
  }
};
`;

fs.writeFileSync(outPath, content, { encoding: 'utf8' });
console.log('Wrote', outPath);
