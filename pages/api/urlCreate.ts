import { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';
import { supabase } from '@/lib/supabaseClient';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      let { body } = req;
      let original_url = body.original_url as string;

      let short_url = `${req.headers.host}/${nanoid(6)}`;

      res.status(200).send({ original_url, short_url });
    }
  } catch (err) {
    res.status(500).send('failed to load data');
  }
}
