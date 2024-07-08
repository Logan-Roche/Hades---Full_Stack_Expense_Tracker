"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function Header() {

  const { user, isSignedIn } = useUser();
  const path = usePathname();

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image src={'./Hades.svg'}
        alt='logo'
        width={250}
        height={150}
      />

      {isSignedIn ?
        <UserButton /> :
        <Link href='/sign-in'>
          <Button > Get Started </Button>
        </Link>
      }
    </div>
  )
}

export default Header