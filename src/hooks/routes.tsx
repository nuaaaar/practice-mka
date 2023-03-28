import useUser from '@/contexts/user';
import { useRouter } from 'next/router';
import React from 'react'

export function withPublic(Component: any) {
  return function WithPublic(props: any) {
    const userContext = useUser();
    const router = useRouter();

    if (userContext.user) {
      if (typeof window !== 'undefined') {
        router?.push('/');
      }
    }

    return <Component userContext={userContext} {...props}/>
  }
}

export function withProtected(Component: any) {
  return function WithProtected(props: any) {
    const userContext = useUser();
    const router = useRouter();

    if (!userContext.user) {
      if (typeof window !== 'undefined') {
        router?.push('/login');
      }
    }

    return <Component userContext={userContext} {...props}/>
  }
}
