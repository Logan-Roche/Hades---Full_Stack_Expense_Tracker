"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


function Header() {

  const { user, isSignedIn } = useUser();
  const path = usePathname();

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image src={'./Hades.svg'}
        alt='logo'
        width={250}
        height={150}
        className=''
      />

      {isSignedIn ?
        <UserButton /> :
        <div className=' hidden sm:block '>
          <AlertDialog >
            <AlertDialogTrigger
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
            >
              Get Started</AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle>Attention</AlertDialogTitle>
                <AlertDialogDescription>
                  To continue without an account use provided Test Account.<br />
                  Username: test_user<br />
                  Password: hades_test

                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <a
                    href="/sign-in"
                  >
                    Get Started
                  </a>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      }
    </div>
  )
}

export default Header