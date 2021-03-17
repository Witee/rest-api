import path from 'path';
import fs from 'fs';


const download = () => async (ctx, next) => {
  await next();
  const file = path.resolve('storage/aa.csv');
  ctx.body = fs.createReadStream(file);
  // const stream = fs.createReadStream(file);
};


export { download };
