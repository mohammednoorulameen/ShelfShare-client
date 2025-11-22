import {
  Users,
  BookOpen,
  Wallet,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

const Overview = () => {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <h2 className="text-xl font-semibold text-slate-800 tracking-tight">
        Overview
      </h2>

      {/* ===== Stats Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Users */}
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow transition">
          <div className="flex items-center justify-between">
            <Users className="w-6 h-6 text-blue-600" />
            <span className="text-green-600 flex items-center text-xs font-medium">
              <ArrowUpRight className="w-3 h-3" /> 12%
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-3 text-slate-900">1,245</h3>
          <p className="text-xs text-slate-500 mt-1">Total Vendors</p>
        </div>

        {/* Books */}
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow transition">
          <div className="flex items-center justify-between">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <span className="text-green-600 flex items-center text-xs font-medium">
              <ArrowUpRight className="w-3 h-3" /> 8%
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-3 text-slate-900">6,320</h3>
          <p className="text-xs text-slate-500 mt-1">Total Books</p>
        </div>

        {/* Revenue */}
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow transition">
          <div className="flex items-center justify-between">
            <Wallet className="w-6 h-6 text-emerald-600" />
            <span className="text-green-600 flex items-center text-xs font-medium">
              <ArrowUpRight className="w-3 h-3" /> 5%
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-3 text-slate-900">₹4,85,400</h3>
          <p className="text-xs text-slate-500 mt-1">Total Revenue</p>
        </div>

        {/* Growth */}
        <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow transition">
          <div className="flex items-center justify-between">
            <TrendingUp className="w-6 h-6 text-orange-500" />
            <span className="text-green-600 flex items-center text-xs font-medium">
              <ArrowUpRight className="w-3 h-3" /> 22%
            </span>
          </div>
          <h3 className="text-2xl font-bold mt-3 text-slate-900">+920</h3>
          <p className="text-xs text-slate-500 mt-1">Monthly Growth</p>
        </div>
      </div>

      {/* ===== Revenue Chart Section ===== */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        <h3 className="font-semibold text-slate-800 mb-4">
          Revenue Analytics
        </h3>

        {/* Replace with Recharts or chart.js later */}
        <div className="h-56 flex items-center justify-center text-slate-400 text-sm">
          📊 Chart Coming Soon
        </div>
      </div>

      {/* ===== Recent Vendors Table ===== */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
        <h3 className="font-semibold text-slate-800 mb-4">
          Recent Vendor Registrations
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-600 border-b">
                <th className="pb-3">Vendor</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Joined</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((_, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-3 font-medium text-slate-800">
                    Vendor {i + 1}
                  </td>
                  <td className="py-3 text-slate-600">
                    vendor{i + 1}@gmail.com
                  </td>
                  <td className="py-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      Active
                    </span>
                  </td>
                  <td className="py-3 text-slate-500 text-xs">2 days ago</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Overview;
