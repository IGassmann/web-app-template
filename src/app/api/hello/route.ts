import { NextResponse } from 'next/server';

import inngest from '@/features/common/inngest';

export async function GET() {
  const firstName = 'Inngest';
  await inngest.send({
    name: 'test/hello.world',
    data: {},
    user: {
      firstName,
    },
  });

  return NextResponse.json({ name: `Hello ${firstName}!` });
}
