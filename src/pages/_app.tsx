import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/config/firebase.config';
import { UserProvider } from '@/contexts/user';
import { AuthProvider } from '@/contexts/auth';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <UserProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </UserProvider>
  )
}
