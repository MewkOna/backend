let suppliers = [{ "id": "1", "nombre": "Proveedor A", "razonSocial": "Razón A", "direccion": "Dirección A" },
{ "id": "2", "nombre": "Proveedor B", "razonSocial": "Razón B", "direccion": "Dirección B" }]; // Simulated database

exports.getSuppliers = async (ctx) => {
  ctx.body = suppliers;

  console.log(suppliers , 'rerkkekjtrekrtjer')
};

exports.addSupplier = async (ctx) => {
  const { nombre, razonSocial, direccion } = ctx.request.body;
  const newSupplier = { id: suppliers.length + 1, nombre, razonSocial, direccion };
  suppliers.push(newSupplier);
  ctx.status = 201;
  ctx.body = newSupplier;
  newSupplier.nombre
  console.log(newSupplier ,'esto es lo que imprime')
  ctx.set('Access-Control-Allow-Origin', '*'); 
};

exports.deleteSupplier = async (ctx) => {
  const id = parseInt(ctx.params.id);
  suppliers = suppliers.filter(supplier => supplier.id !== id);
  ctx.status = 204;
  ctx.set('Access-Control-Allow-Origin', '*'); 
};