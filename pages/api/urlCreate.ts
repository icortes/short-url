import { supabase } from '@/lib/supabaseClient';

export async function urlCreate(long_url: string): Promise<string> {
  try {
    const { data } = await supabase.from('urls').insert({ long_url }).select();
    if (data) {
      return data[0].long_url;
    }
    return 'No data available.';
  } catch (error) {
    throw new Error('invalid url');
  }
}
