'use client'

import {HeroUIProvider} from '@heroui/react'
import {useRouter} from "next/navigation";

export function Providers({children}) {
  const router = useRouter();
  const useHref = (href) => process.env.BASE_PATH + href;

  return (
    <HeroUIProvider navigate={router.push} useHref={useHref}>
      {children}
    </HeroUIProvider>
  )
}