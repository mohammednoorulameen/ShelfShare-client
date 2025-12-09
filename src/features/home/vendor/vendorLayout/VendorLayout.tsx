"use client";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import useLogout from "@/app/hooks/useLogout";
import SidebarLayout from "../../common/Sidebar";
import VendorHeader from "../../common/VendorHeader";
import { vendorMenu } from "@/app/constants/Icons";
import { FcLibrary } from "react-icons/fc";
import { useGetVendor } from "../api/VendorLayoutApi";

// Lucide + Shadcn UI
import {
  AlertCircle,
  ArrowRight,
  Mail,
  FileText,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/shared-ui/ui/button";
import { Card } from "@/shared-ui/ui/card";
import type { VendorLayoutProps } from "../../types/vendorLayout.types";

const VendorLayout = ({ onReapply, isReapplyLoading }: VendorLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const logout = useLogout();
  const { data: vendor, isLoading } = useGetVendor();

  const fallbackImg = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const disabled = vendor?.isAdminVerifiedStatus !== "approved";

  const handleReapply = () => {
    onReapply();
  };

  const handleContactSupport = () => {
    window.location.href = "mailto:admin@gmail.com";
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed inset-y-0 left-0 z-30 bg-white shadow-xl 
          transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0
        `}
      >
        <SidebarLayout
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          menuItems={vendorMenu}
          disabled={disabled}
          profile={{
            name: vendor?.bussinessName || "Loading...",
            email: vendor?.email || "Loading...",
            photo: vendor?.imageKey || fallbackImg,
            status: vendor?.isAdminVerifiedStatus,
          }}
          onLogout={logout}
          title="Vendor Panel"
          logo={<FcLibrary className="w-6 h-6 text-white" />}
        />
      </div>

      {/* Main Body */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <VendorHeader
          onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {/* Loader */}
          {isLoading ? (
            <div className="text-center text-slate-600 text-sm">
              Loading vendor details...
            </div>
          ) : disabled ? (
            // =============================
            // PREMIUM LUCIDE UI DESIGN
            // =============================
            <div className="min-h-[80vh] flex items-center justify-center px-4 py-8">
              <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="text-center mb-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl" />
                      <div className="relative bg-card rounded-full p-4 border border-border">
                        <AlertCircle className="w-8 h-8 text-red-600" />
                      </div>
                    </div>
                  </div>

                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Verification Needed
                  </h1>

                  <p className="text-muted-foreground">
                    Your vendor account must be verified before accessing the
                    dashboard.
                  </p>
                </div>

                {/* Card */}
                <Card className="bg-card border border-border shadow-lg mb-8 overflow-hidden">
                  <div className="p-8">
                    {/* Pending Status */}
                    {vendor?.isAdminVerifiedStatus === "pending" && (
                      <div className="flex items-start gap-4 mb-8 p-4 bg-yellow-100/40 rounded-lg border border-yellow-300/40">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mt-1" />
                        <div>
                          <h2 className="font-semibold text-yellow-700 mb-1">
                            Your verification is pending
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your account is under review. Please wait until the
                            admin verifies your details.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Rejected Status */}
                    {vendor?.isAdminVerifiedStatus === "rejected" && (
                      <>
                        <div className="flex items-start gap-4 mb-8 p-4 bg-red-100/40 rounded-lg border border-red-300/40">
                          <AlertCircle className="w-5 h-5 text-destructive mt-1" />
                          <div>
                            <h2 className="font-semibold text-destructive mb-1">
                              Your verification was rejected
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              We couldn't verify your account with the provided
                              documents.
                            </p>
                          </div>
                        </div>

                        {/* Reason section */}
                        <div className="mb-8">
                          <h3 className="text-sm font-semibold flex items-center gap-2">
                            <FileText className="w-4 h-4 text-primary" />
                            Reason for Rejection
                          </h3>

                          <div className="pl-6 border-l-2 border-border mt-3">
                            <p className="text-foreground font-medium">
                              {vendor?.adminRejectReason ||
                                "Document issue detected"}
                            </p>
                          </div>
                        </div>

                        {/* Next Steps */}
                        <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                          <h3 className="text-sm font-semibold flex items-center gap-2 mb-3">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            Next Steps
                          </h3>

                          <ol className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex gap-3">
                              <span className="text-primary font-semibold min-w-6">
                                1
                              </span>
                              Review the rejection reason carefully
                            </li>
                            <li className="flex gap-3">
                              <span className="text-primary font-semibold min-w-6">
                                2
                              </span>
                              Fix or replace incorrect documents
                            </li>
                            <li className="flex gap-3">
                              <span className="text-primary font-semibold min-w-6">
                                3
                              </span>
                              Submit your verification request again
                            </li>
                          </ol>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button
                            onClick={handleReapply}
                            disabled={isReapplyLoading}
                            className={`
                                 flex-1 bg-primary hover:bg-primary/90 font-semibold
                                 ${
                                   isReapplyLoading
                                     ? "cursor-wait"
                                     : "cursor-pointer"
                                 }
                                  `}
                          >
                            {isReapplyLoading ? "Submitting..." : "Re-Apply"}
                            {!isReapplyLoading && (
                              <ArrowRight className="w-4 h-4 ml-2" />
                            )}
                          </Button>

                          <Button
                            onClick={handleContactSupport}
                            variant="outline"
                            className="flex-1"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Contact Support
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </Card>

                {/* Help Section */}
                <div className="bg-card rounded-lg border border-border p-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Need more help?</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Our support team is available to assist you anytime.
                      </p>
                      <button
                        onClick={handleContactSupport}
                        className="text-sm font-medium text-primary hover:text-primary/80 inline-flex items-center gap-1"
                      >
                        Contact admin@gmail.com
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <p className="text-center mt-6 text-xs text-muted-foreground">
                  Verification Status • Last Updated: Today
                </p>
              </div>
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
};

export default VendorLayout;
