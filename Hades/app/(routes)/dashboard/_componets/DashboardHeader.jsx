import { UserButton } from '@clerk/nextjs'
import React from 'react'

import { Link } from '@radix-ui/react-navigation-menu'
import CollapsedSideNav from './CollapsedSideNav'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
      <div className='lg:hidden xl:hidden md:hidden '>
        <CollapsedSideNav></CollapsedSideNav>
      </div>
      <div></div>
      <div>
        <UserButton />
      </div>
    </div>
  )
}

export default DashboardHeader