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
  { month: "February", forest: 186, fields: 80 },
  { month: "March", forest: 305, fields: 200 },
  { month: "April", forest: 237, fields: 120 },
  { month: "May", forest: 124, fields: 190 },
  { month: "June", forest: 240, fields: 130 },
  { month: "July", forest: 203, fields: 140 },
];

const chartConfig = {
  forest: {
    label: "Forest",
    color: "hsl(var(--chart-1))",
  },

  fields: {
    label: "Fields",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function SeedStackedAreaChart() {
  return (
    <Card className="w-full lg:w-1/2 h-fit sm:h-96 mt-5 sm:mt-0">
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>Seeds planted for the last 6 months.</CardDescription>
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
              dataKey="fields"
              type="natural"
              fill="var(--color-fields)"
              fillOpacity={0.4}
              stroke="var(--color-fields)"
              stackId="a"
            />
            <Area
              dataKey="forest"
              type="natural"
              fill="var(--color-forest)"
              fillOpacity={0.4}
              stroke="var(--color-forest)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
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
