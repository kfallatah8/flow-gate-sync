
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const analyticsData = [
  { date: '2025-04-13', rides: 45, completionRate: 95 },
  { date: '2025-04-14', rides: 52, completionRate: 98 },
  { date: '2025-04-15', rides: 49, completionRate: 92 },
  { date: '2025-04-16', rides: 63, completionRate: 97 },
  { date: '2025-04-17', rides: 58, completionRate: 95 },
  { date: '2025-04-18', rides: 64, completionRate: 96 },
  { date: '2025-04-19', rides: 55, completionRate: 94 },
];

const AnalyticsOverview = () => {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Weekly Performance Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={analyticsData}>
              <XAxis 
                dataKey="date" 
                tickFormatter={(str) => new Date(str).toLocaleDateString()}
              />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [value, name === 'rides' ? 'Total Rides' : 'Completion Rate']}
                labelFormatter={(label) => new Date(label).toLocaleDateString()}
              />
              <Area
                type="monotone"
                dataKey="rides"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
                name="Total Rides"
              />
              <Area
                type="monotone"
                dataKey="completionRate"
                stackId="2"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.3}
                name="Completion Rate"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsOverview;
