import inngest from '@/features/common/inngest';

const testInngestFunction = inngest.createFunction(
  { name: 'Prepare weekly digest 2' },
  { cron: 'TZ=Europe/Paris * * * * *' },
  async () => {
    await inngest.send({
      name: 'app/test.event',
      data: {
        foo: 'bar',
      },
    });
  }
);

export default testInngestFunction;
