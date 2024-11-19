import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wallet, ArrowUpRight, ArrowDownRight, DollarSign, TrendingUp } from 'lucide-react';

export default function BankingView() {
  // Placeholder data - in reality, this would come from your backend
  const accountBalance = 2500.00;
  const pendingBalance = 150.00;
  const recentTransactions = [
    { id: 1, type: 'deposit', amount: 500, description: 'Deposit from Bank', date: '2024-03-15' },
    { id: 2, type: 'withdrawal', amount: -50, description: 'NFL Bet Placement', date: '2024-03-14' },
    { id: 3, type: 'winning', amount: 125, description: 'Bet Payout', date: '2024-03-13' },
  ];

  return (
    <div className="space-y-6">
      {/* Account Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium text-purple-100">Available Balance</CardTitle>
            <Wallet className="h-5 w-5 text-purple-200" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white">${accountBalance.toFixed(2)}</div>
            <p className="text-sm text-purple-200 mt-2">
              Pending: ${pendingBalance.toFixed(2)}
            </p>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-gray-900/50 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-purple-100">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg transition-colors">
                <ArrowDownRight className="h-5 w-5" />
                <span>Deposit</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg transition-colors">
                <ArrowUpRight className="h-5 w-5" />
                <span>Withdraw</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-gray-900/50 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-purple-100">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map(transaction => (
              <div 
                key={transaction.id}
                className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-full ${
                    transaction.type === 'deposit' ? 'bg-green-500/20 text-green-500' :
                    transaction.type === 'withdrawal' ? 'bg-red-500/20 text-red-500' :
                    'bg-purple-500/20 text-purple-500'
                  }`}>
                    {transaction.type === 'deposit' ? <ArrowDownRight className="h-5 w-5" /> :
                     transaction.type === 'withdrawal' ? <ArrowUpRight className="h-5 w-5" /> :
                     <TrendingUp className="h-5 w-5" />}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{transaction.description}</p>
                    <p className="text-xs text-gray-400">{transaction.date}</p>
                  </div>
                </div>
                <div className={`font-medium ${
                  transaction.amount > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Account Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-900/50 border-purple-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-100">Total Winnings</CardTitle>
            <DollarSign className="h-4 w-4 text-purple-200" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">$1,234.56</div>
            <p className="text-xs text-purple-200 mt-1">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/50 border-purple-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-100">Active Bets</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-200" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5</div>
            <p className="text-xs text-purple-200 mt-1">Total value: $250.00</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-900/50 border-purple-500/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-purple-100">Win Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-purple-200" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">62%</div>
            <p className="text-xs text-purple-200 mt-1">Last 30 days</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}