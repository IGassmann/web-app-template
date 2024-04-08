import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

import Footer from '@/app/(marketing)/Footer';

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col justify-between bg-white">
      <header className="px-6 pt-6 lg:px-8">
        <nav className="flex h-9 items-center justify-end" aria-label="Global">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">Sign in</SignInButton>
          </SignedOut>
        </nav>
      </header>
      <main>
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pb-32 pt-20 sm:pb-40 sm:pt-48">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                Web App Template
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                An opinionated template for building web apps.
              </p>
              <div className="mt-8 flex sm:justify-center">
                <SignedOut>
                  <SignUpButton mode="modal">Sign up</SignUpButton>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
