import { Request, Response } from 'express';
import axios, { Method } from 'axios';

function getRandom(): number {
  if (Math.random() > 0.5) return 8083;
  return 8082;
}

export default async (req: Request, res:Response): Promise<void > => {
  const port = getRandom(); // 8083 or 8082
  const redirectUrl = `http://localhost:${port}${req.url}`;
  console.log(`balanced to ${port}`);

  let method: Method = 'GET';

  if (req.method === 'POST') method = 'POST';
  else if (req.method === 'DELETE') method = 'DELETE';
  else if (req.method === 'PUT') method = 'PUT';

  axios({
    method, url: redirectUrl, params: req.query, headers: req.headers, data: req.body,
  })
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => res.send(err));
};
