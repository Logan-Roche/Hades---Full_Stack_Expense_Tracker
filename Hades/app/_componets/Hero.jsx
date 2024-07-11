import React from 'react'
import Image from 'next/image'
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
import { Router } from 'next/navigation'


function Hero() {
  return (
    <section className="bg-background flex items-center flex-col">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">


        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Manage Your Expenses
            <strong className="font-extrabold text-primary sm:block"> Control Your Money </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start Creating your Budget and Save Money
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <AlertDialog >
              <AlertDialogTrigger
                className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-black focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              >
                Get Started</AlertDialogTrigger>
              <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                  <AlertDialogTitle>Attention</AlertDialogTitle>
                  <AlertDialogDescription>
                    To continue without an account, use provided test account.<br />
                    Username: test_user<br />
                    Password: hades_test

                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <a href='/sign-in'                    >
                      Get Started
                    </a>

                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>


          </div>
        </div>
      </div>
      <Image src={'/Dashboard.png'} alt='dashboard'
        width={1000}
        height={700}
        className='m-5 rounded-xl border-2'
      />
    </section>
  )
}

export default Hero