import type { NextPage } from 'next';
import { SignIn } from '@clerk/nextjs';

const SignUpPage: NextPage = () => (
  <div className="flex min-h-full justify-center py-12 sm:py-40">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  </div>
);

export default SignUpPage;
