import type { NextPage } from 'next';
import { SignUp } from '@clerk/nextjs';

const SignUpPage: NextPage = () => (
  <div className="flex min-h-full justify-center py-12 sm:py-40">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  </div>
);

export default SignUpPage;
