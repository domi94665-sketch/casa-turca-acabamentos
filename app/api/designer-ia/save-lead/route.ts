import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function getUserFromAuthHeader(request: NextRequest) {
  const auth = request.headers.get('authorization') || '';
  const token = auth.startsWith('Bearer ') ? auth.split(' ')[1] : auth;
  if (!token) return null;
  try {
    const { data, error } = await supabase.auth.getUser(token as string);
    if (error) return null;
    return data?.user || null;
  } catch (err) {
    return null;
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = await getUserFromAuthHeader(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { name, email, phone } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { data, error } = await supabase.from('designer_leads').insert([
      {
        user_id: user.id,
        name,
        email,
        phone,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: 'Lead saved successfully', data },
      { status: 201 }
    );
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
