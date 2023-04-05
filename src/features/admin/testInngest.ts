import inngest from '@/features/common/inngest';

const testInngestFunction = inngest.createFunction(
  { name: 'Prepare weekly digest' },
  { cron: 'TZ=Europe/Paris * * * * *' },
  async () => {
    await inngest.send({
      name: 'app/test.event',
      data: {
        foo: 'bara',
      },
    });
  }
);

export default testInngestFunction;
