"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "February", corporation: 200, individual: 80 },
  { month: "March", corporation: 250, individual: 200 },
  { month: "April", corporation: 237, individual: 120 },
  { month: "May", corporation: 124, individual: 250 },
  { month: "June", corporation: 200, individual: 130 },
  { month: "July", corporation: 240, individual: 140 },
];

const chartConfig = {
  corporation: {
    label: "Corporation",
    color: "hsl(var(--chart-1))",
  },

  individual: {
    label: "Individual",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function FundStackedAreaChart() {
  return (
    <Card className="w-full lg:w-1/2 h-fit sm:h-96 mt-5 sm:mt-0">
      <CardHeader>
        <CardTitle>Fund Chart - Stacked</CardTitle>
        <CardDescription>
          Donations received for the last 6 months.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="individual"
              type="natural"
              fill="var(--color-individual)"
              fillOpacity={0.4}
              stroke="var(--color-individual)"
              stackId="a"
            />
            <Area
              dataKey="corporation"
              type="natural"
              fill="var(--color-corporation)"
              fillOpacity={0.4}
              stroke="var(--color-corporation)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 3.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              February - July 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
