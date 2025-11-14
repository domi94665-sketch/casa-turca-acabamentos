
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

console.log('NEXT_PUBLIC_SANITY_PROJECT_ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log('NEXT_PUBLIC_SANITY_DATASET:', process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log('SANITY_API_TOKEN:', process.env.SANITY_API_TOKEN ? '***PRESENT***' : '***MISSING***');
