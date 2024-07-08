'use client'
import React, { useEffect } from 'react'
import { AreaChart, Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { remaining } from '@/app/(routes)/dashboard/budgets/_componets/BudgetItem'


function AreaChartDashboard({ budgetList, len }) {



    useEffect(() => {
        getRemaning();
    }, [])

    const getRemaning = () => {

        for (let i = 0; i < 4; i++) {
            console.log(remaining);
        }
    }

    return (
        <div className='border rounded-lg p-5'>
            <h2 className='font-bold text-lg'>Activity</h2>
            <ResponsiveContainer width={'80%'} height={300}>

                <BarChart
                    data={budgetList}
                    margin={{
                        top: 5,
                        right: 5,
                        left: 5,
                        bottom: 5
                    }}
                >
                    <XAxis dataKey='name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar name='Spent' dataKey='totalSpend' stackId="a" fill='#8B0000' />
                    <Bar name='Total Budget' dataKey='amount' stackId="b" fill='#B76060' />

                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AreaChartDashboard