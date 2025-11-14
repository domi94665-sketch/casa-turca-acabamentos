import Replicate from 'replicate';
import { NextRequest, NextResponse } from 'next/server';

const replicateToken = process.env.REPLICATE_API_TOKEN;

if (!replicateToken) {
  throw new Error('Missing REPLICATE_API_TOKEN');
}

const replicate = new Replicate({
  auth: replicateToken,
});

export async function POST(request: NextRequest) {
  try {

    // Authenticate request
    const auth = request.headers.get('authorization') || '';
    const token = auth.startsWith('Bearer ') ? auth.split(' ')[1] : auth;
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { data: user, error: userErr } = await supabase.auth.getUser(token as string);
    if (userErr || !user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { imageUrl, style } = await request.json();

    if (!imageUrl) {
      return NextResponse.json({ error: 'Missing imageUrl' }, { status: 400 });
    }

    // Using a realistic interior design model
    // You may need to adjust the model based on what's available on Replicate
    const output = await replicate.run(
      'openai/dall-e-3',
      {
        input: {
          prompt: `Transform this room with luxury finishes. Style: ${style || 'Modern Luxury'}. Turkish ceramics, marble, gold accents, premium materials. Professional architectural visualization.`,
          image: imageUrl,
          num_outputs: 1,
          size: '1024x1024',
        },
      }
    );

    return NextResponse.json({ success: true, output }, { status: 200 });
  } catch (err) {
    console.error('Replicate error:', err);
    return NextResponse.json({ error: 'Failed to process image' }, { status: 500 });
  }
}
