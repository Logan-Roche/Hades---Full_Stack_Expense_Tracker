"use client"
import PlaidLink from '@/app/(auth)/PlaidLink'
import { useUser } from '@clerk/nextjs';
import React from 'react'

function page() {

    const { user } = useUser();

    return (
        <div>
            <PlaidLink user={user} variant="primary" />
        </div>
    )
}

export default page