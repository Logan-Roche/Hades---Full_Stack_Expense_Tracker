"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation';
import { Products } from 'plaid';
import React, { useCallback, useEffect, useState } from 'react'
import { usePlaidLink } from 'react-plaid-link';
import { plaidClient } from '@/lib/plaid';


function PlaidLink({ user, variant }) {

    const router = useRouter();

    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
            const data = await createLinkToken(user);

            setToken(data?.linkToken);
        }

        getLinkToken();
    }, [user])

    const onSuccess = useCallback(async (public_token) => {
        //await exchangePublicToken({
        //    publicToken: public_token,
        //    user,
        //})

        router.push('/')
    }, [user])

    const config = {
        token,
        onSuccess,
    };

    const { open, ready } = usePlaidLink(config);

    const createLinkToken = async (user) => {
        try {
            const tokenParams = {
                user: {
                    client_user_id: user.$id
                },
                client_name: user.name,
                products: ['auth'],
                language: 'en',
                country_codes: ['US'],
            }
            const response = await plaidClient.linkTokenCreate(tokenParams);

            return parseStringify({ linkToken: response.data.link_tokem })

        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>
            {variant === 'primary' ? (
                <Button
                    onClick={() => open}
                    disabled={!ready}
                >
                    Connect Bank
                </Button>
            ) : variant === 'ghost' ? (
                <Button>
                    Connect Bank
                </Button>
            ) : (
                <Button>
                    Connect Bank
                </Button>
            )}
        </div>
    )
}

export default PlaidLink