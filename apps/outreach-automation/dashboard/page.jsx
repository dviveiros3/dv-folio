'use client';

import { useEffect, useState } from 'react';

/**
 * OUTREACH AUTOMATION DASHBOARD
 * Real-time tracking of leads, emails, and revenue
 */

export default function OutreachDashboard() {
  const [stats, setStats] = useState({
    totalLeads: 0,
    contacted: 0,
    responded: 0,
    booked: 0,
    closed: 0,
    revenue: 0
  });
  
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch real-time data
  useEffect(() => {
    fetchPipelineData();
    const interval = setInterval(fetchPipelineData, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);
  
  async function fetchPipelineData() {
    try {
      // In production, fetch from your backend
      // For now, use mock data
      const mockData = {
        totalLeads: 127,
        contacted: 89,
        responded: 23,
        booked: 8,
        closed: 3,
        revenue: 30000,
        recentLeads: [
          { name: 'John Smith', company: 'Allbirds', status: 'contacted', email: 'john@allbirds.com' },
          { name: 'Sarah Johnson', company: 'Warby Parker', status: 'responded', email: 'sarah@warbyparker.com' },
          { name: 'Mike Chen', company: 'Casper', status: 'booked', email: 'mike@casper.com' },
          { name: 'Lisa Park', company: 'Glossier', status: 'closed', email: 'lisa@glossier.com' },
        ]
      };
      
      setStats(mockData);
      setLeads(mockData.recentLeads || []);
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch pipeline:', error);
      setIsLoading(false);
    }
  }
  
  if (isLoading) {
    return <div className="p-8">Loading dashboard...</div>;
  }
  
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          🚀 Outreach Automation Dashboard
        </h1>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <StatCard label="Total Leads" value={stats.totalLeads} />
          <StatCard label="Contacted" value={stats.contacted} />
          <StatCard label="Responded" value={stats.responded} />
          <StatCard label="Booked" value={stats.booked} />
          <StatCard label="Closed" value={stats.closed} />
          <StatCard label="Revenue" value={`$${(stats.revenue / 1000).toFixed(0)}k`} highlight />
        </div>
        
        {/* Conversion Funnel */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Conversion Funnel</h2>
          <div className="space-y-3">
            <FunnelRow label="Leads Generated" count={stats.totalLeads} total={stats.totalLeads} />
            <FunnelRow label="Emails Sent" count={stats.contacted} total={stats.totalLeads} />
            <FunnelRow label="Responses" count={stats.responded} total={stats.totalLeads} />
            <FunnelRow label="Calls Booked" count={stats.booked} total={stats.totalLeads} />
            <FunnelRow label="Deals Closed" count={stats.closed} total={stats.totalLeads} />
          </div>
        </div>
        
        {/* Recent Leads Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <h2 className="text-xl font-semibold p-6 border-b">Recent Leads</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leads.map((lead, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{lead.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{lead.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={lead.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Automation Controls */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Automation Controls</h2>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Run Lead Gen Now
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
              Send Batch Emails
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
              Run Follow-ups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, highlight = false }) {
  return (
    <div className={`p-4 rounded-lg ${highlight ? 'bg-green-500' : 'bg-white'} shadow`}>
      <div className="text-sm text-gray-500 mb-1">{label}</div>
      <div className={`text-2xl font-bold ${highlight ? 'text-white' : 'text-gray-900'}`}>
        {value}
      </div>
    </div>
  );
}

function FunnelRow({ label, count, total }) {
  const percentage = total > 0 ? (count / total) * 100 : 0;
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span>{label}</span>
        <span>{count} ({percentage.toFixed(1)}%)</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    contacted: 'bg-blue-100 text-blue-800',
    responded: 'bg-yellow-100 text-yellow-800',
    booked: 'bg-purple-100 text-purple-800',
    closed: 'bg-green-100 text-green-800'
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${colors[status] || 'bg-gray-100 text-gray-800'}`}>
      {status}
    </span>
  );
}
