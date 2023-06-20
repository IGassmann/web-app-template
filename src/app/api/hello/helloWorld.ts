import inngest from '@/features/common/inngest';

export default inngest.createFunction(
  { name: 'Hello World' },
  { event: 'test/hello.world' },
  async ({ event, step }) => {
    await step.sleep('1s');
    return { event, body: `Hello, ${event.user.firstName}!` };
  }
);
