import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Mail, 
  Phone, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle, 
  XCircle,
  Shield
} from 'lucide-react';

interface Vendor {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  status: 'verified' | 'pending' | 'blocked';
  businessName: string;
}

const initialVendors: Vendor[] = [
  {
    id: 1,
    name: "Esther Howard",
    businessName: "Howard's Bookstore",
    email: "esther.howard@example.com",
    phone: "(252) 555-0126",
    avatar: "https://i.pravatar.cc/150?u=1",
    status: 'verified'
  },
  {
    id: 2,
    name: "Cameron Williamson",
    businessName: "The Reading Nook",
    email: "c.williamson@example.com",
    phone: "(302) 555-0107",
    avatar: "https://i.pravatar.cc/150?u=2",
    status: 'pending'
  },
  {
    id: 3,
    name: "Robert Fox",
    businessName: "Fox & Sons Books",
    email: "robert.fox@example.com",
    phone: "(208) 555-0112",
    avatar: "https://i.pravatar.cc/150?u=3",
    status: 'blocked'
  },
];

const VendorManagement: React.FC = () => {
  const [vendors, setVendors] = useState(initialVendors);
  const [searchTerm, setSearchTerm] = useState('');

  const handleStatusChange = (id: number, newStatus: Vendor['status']) => {
    setVendors(vendors.map(v => v.id === id ? { ...v, status: newStatus } : v));
  };

  const filteredVendors = vendors.filter(vendor => 
    vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vendor.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-5">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h2 className="text-xl font-semibold text-slate-800">Vendor Management</h2>
          <p className="text-xs text-slate-500 mt-0.5">Manage vendor accounts, verification & access</p>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search vendor..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
          </div>
          <button className="p-2 bg-white border border-slate-200 rounded-md hover:bg-slate-50 text-slate-600 shadow-sm">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Vendors Table */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Vendor</th>
                <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Contact</th>
                <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                <th className="px-5 py-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wide text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredVendors.map((vendor) => (
                <tr key={vendor.id} className="hover:bg-slate-50 transition">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src={vendor.avatar} 
                        alt={vendor.name} 
                        className="w-9 h-9 rounded-full object-cover border border-slate-100"
                      />
                      <div>
                        <p className="font-medium text-sm text-slate-900">{vendor.name}</p>
                        <p className="text-[11px] text-slate-500">{vendor.businessName}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        {vendor.email}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-600">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        {vendor.phone}
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium capitalize border ${
                      vendor.status === 'verified' 
                        ? 'bg-green-50 text-green-700 border-green-200' 
                        : vendor.status === 'blocked'
                        ? 'bg-red-50 text-red-700 border-red-200'
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {vendor.status === 'verified' && <CheckCircle className="w-3 h-3 mr-1" />}
                      {vendor.status === 'blocked' && <XCircle className="w-3 h-3 mr-1" />}
                      {vendor.status === 'pending' && <Shield className="w-3 h-3 mr-1" />}
                      {vendor.status}
                    </span>
                  </td>

                  <td className="px-5 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {vendor.status !== 'verified' && (
                        <button 
                          onClick={() => handleStatusChange(vendor.id, 'verified')}
                          className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition shadow-sm"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          Verify
                        </button>
                      )}

                      {vendor.status !== 'blocked' ? (
                        <button 
                          onClick={() => handleStatusChange(vendor.id, 'blocked')}
                          className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-red-600 bg-white border border-red-200 rounded-md hover:bg-red-50 transition shadow-sm"
                        >
                          <ShieldAlert className="w-3.5 h-3.5" />
                          Block
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleStatusChange(vendor.id, 'pending')}
                          className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition shadow-sm"
                        >
                          <Shield className="w-3.5 h-3.5" />
                          Unblock
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredVendors.length === 0 && (
            <div className="p-6 text-center text-sm text-slate-500">
              No vendors found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorManagement;

