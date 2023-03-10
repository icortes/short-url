import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '@/lib/supabaseClient';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  try {
    if (req.method === 'POST') {
      let { body } = req;
      let original_url = body.original_url as string;
      console.log(req.method);
      console.log(original_url);
      res.status(200).send(original_url);
    }
  } catch (err) {
    res.status(500).send('failed to load data');
  }
}
