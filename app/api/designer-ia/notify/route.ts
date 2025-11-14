import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Email service for sales team notification
// You can use SendGrid, Resend, or another email provider
async function notifySalesTeam(leadName: string, leadEmail: string, imageUrl: string) {
  // Example: Send email to sales@casaturca.com
  // This is a placeholder - integrate with your email service
  console.log(`[NOTIFICATION] New design request from ${leadName} (${leadEmail})`);
  console.log(`[NOTIFICATION] Image URL: ${imageUrl}`);
  
  // TODO: Integrate with SendGrid, Resend, or email service
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const { leadId, imageUrl, designOutput } = await request.json();

    if (!leadId || !imageUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Get lead data
    const { data: leadData, error: fetchError } = await supabase
      .from('designer_leads')
      .select('*')
      .eq('id', leadId)
      .single();

    if (fetchError || !leadData) {
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    // Save design result
    const { error: insertError } = await supabase.from('design_results').insert([
      {
        lead_id: leadId,
        image_url: imageUrl,
        design_output: designOutput,
        created_at: new Date().toISOString(),
      },
    ]);

    if (insertError) {
      console.error('Supabase insert error:', insertError);
    }

    // Notify sales team
    await notifySalesTeam(leadData.name, leadData.email, imageUrl);

    return NextResponse.json(
      { success: true, message: 'Design saved and team notified' },
      { status: 201 }
    );
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
