import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

import Footer from '@/app/(marketing)/Footer';
import Button from '@/components/Button';
import BottomGradientBackground from './bottom-gradient-background.svg';
import TopGradientBackground from './top-gradient-background.svg';

export default function HomePage() {
  return (
    <div className="isolate flex h-screen flex-col justify-between bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <TopGradientBackground className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" />
      </div>
      <header className="px-6 pt-6 lg:px-8">
        <nav className="flex h-9 items-center justify-end" aria-label="Global">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <Button outline>Sign in</Button>
            </SignInButton>
          </SignedOut>
        </nav>
      </header>
      <main>
        <div className="relative px-6 lg:px-8">
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
                  <SignUpButton mode="modal">
                    <Button>Sign up</Button>
                  </SignUpButton>
                </SignedOut>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <BottomGradientBackground className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
