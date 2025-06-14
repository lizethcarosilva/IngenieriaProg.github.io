import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';

import express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';
import bootstrap from '../src/main.server';
import { ApplicationRef } from '@angular/core';

const app = express();
const distFolder = join(process.cwd(), 'dist/IngenieriaProg/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html'))
  ? 'index.original.html'
  : 'index.html';

app.engine('html', ngExpressEngine({ bootstrap }));

app.set('view engine', 'html');
app.set('views', distFolder);

app.get('*.*', express.static(distFolder, { maxAge: '1y' }));

app.get('*', (req, res) => {
  res.render(indexHtml, {
    req,
    providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
  });
});

const port = process.env['PORT'] || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
function ngExpressEngine(arg0: { bootstrap: () => Promise<ApplicationRef>; }): (path: string, options: object, callback: (e: any, rendered?: string) => void) => void {
  throw new Error('Function not implemented.');
}

