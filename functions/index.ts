const { https } = require('firebase-functions');
const { default: next } = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, conf: { distDir: '.next' } });
const handle = app.getRequestHandler();

exports.nextApp = https.onRequest((req: any, res: any) => {
  return app.prepare().then(() => handle(req, res));
});