'use client'
import Image from 'next/image'
import Link from 'next/link'
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'


function SideNav() {
    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: PiggyBank,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: ReceiptText,
            path: '/dashboard/expenses'
        },
        {
            id: 4,
            name: 'Plaid',
            icon: ShieldCheck,
            path: '/dashboard/plaid'
        },
    ]

    const path = usePathname();

    return (
        <div className='h-screen p-5 border shadow-sm'>
            <Image src={'/Hades.svg'}
                alt='logo'
                width={200}
                height={150}
            />
            <div className='mt-5'>
                {menuList.map((menu) => (
                    <Link key={menu.id} href={menu.path}>
                        <h2 key={menu.id} className={`flex gap-2 item-center text-gray-500 mb-2
                            font-medium p-5 cursor-pointer rounded-md hover:text-primary hover:bg-red-100
                            ${path == menu.path && 'text-primary bg-red-100'}`}>
                            <menu.icon />
                            {menu.name}
                        </h2>
                    </Link>
                ))}
            </div>
            <div className='fixed bottom-10 p5 flex gap-2 items-center'>
                <UserButton />
                Profile
            </div>
        </div>
    )
}

export default SideNav