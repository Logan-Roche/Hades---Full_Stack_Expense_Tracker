import React from 'react'
import { AreaChart, Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'


function AreaChartDashboard({ budgetList }) {
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
                    <Bar name='Total Budget' dataKey='amount' stackId="a" fill='#B76060' />

                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AreaChartDashboard