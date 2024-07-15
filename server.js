const fs = require('fs');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const router = require('./routes/supplierRoutes');

const app = new Koa();
//const router = new Router();

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:4200');
  ctx.set('Access-Control-Allow-Methods', 'GET, POST, DELETE');
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  await next();
});

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

// Ruta para consultar una lista de proveedores paginada
router.get('/api/proveedores', ctx => {
  const proveedores = JSON.parse(fs.readFileSync('bd2.json')).proveedores;
  ctx.body = proveedores;
  ctx.set('Access-Control-Allow-Origin', '*'); 
});


router.get('/suppliers', ctx => {
  const proveedores2 = JSON.parse(fs.readFileSync('bd2.json')).proveedores2;
  ctx.body = proveedores2;
  ctx.set('Access-Control-Allow-Origin', '*'); 
});

// Middleware para manejar solicitudes JSON
app.use(bodyParser());
// Ruta para obtener el nombre del usuario 
router.get('/api/usuarios', ctx => {
  const usuarios = JSON.parse(fs.readFileSync('bd.json')).usuarios;
  ctx.body = usuarios;
  ctx.set('Access-Control-Allow-Origin', '*'); 
});

//Ruta para crear la version de la aplicacion 

router.get('/api/version', ctx => {
  ctx.body = { version: '1.0.0' };
  ctx.set('Access-Control-Allow-Origin', '*'); 
});


// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.use(router.routes()).use(router.allowedMethods());
app.listen(PORT, () => {
  console.log(`Servidor Koa escuchando en el puerto ${PORT}`);
});
