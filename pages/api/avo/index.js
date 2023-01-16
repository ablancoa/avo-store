import Database from '@database/db.js';
const allAvos = async (request, response) => {
  const db = new Database();
  const allEntries = await db.getAll();
  const length = allEntries.length;

  response.status = 200;
  response.setHeader('Content-type','application/json');
  response.end(JSON.stringify({data: allEntries, length}));
}

export default allAvos;