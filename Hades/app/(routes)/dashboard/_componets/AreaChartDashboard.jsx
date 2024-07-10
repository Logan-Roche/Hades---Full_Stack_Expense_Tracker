"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

import React, { useEffect } from 'react'


function AreaChartDashboard({ budgetList }) {



    const chartConfig = {
        totalSpend: {
            label: "Total Spent",
            color: "#8B0000",
        },
        amount: {
            label: "Total Budget",
            color: "#B76060",
        },
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={budgetList}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}

                        />
                        <YAxis
                            dataKey="amount"
                        />
                        <ChartTooltip
                            className="bg-white"
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar name="Total Spent" dataKey="totalSpend" fill="#8B0000" radius={4} />
                        <Bar name="Budget Amount" dataKey="amount" fill="#B76060" radius={4} />
                    </BarChart>

                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default AreaChartDashboard

/**
 * 
 * <div className='border rounded-lg p-5'>
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
 */