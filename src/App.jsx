import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import ChartVisual from "./components/ui/ChartVisual";
import MetricCard from "./components/ui/MetricCard";
import TransactionTable from "./components/ui/TransactionTable";
import LiveMarket from "./components/ui/LiveMarket";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar - Fixed left */}
      <Sidebar />

      {/* Main area - Header + Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Fixed top */}
        <Header />

        {/* Main Content Area - Scrollable */}
        <main className="flex-1 overflow-y-auto bg-white-100 p-6">
          {/* Top Row: MetricCard (left) and ChartVisual (right) */}
          <div className="flex gap-6 mb-6">
            <div className="flex-shrink-0">
              <MetricCard />
            </div>
            <div className="flex-shrink-0">
              <ChartVisual />
            </div>
          </div>

          {/* Bottom Row: LiveMarket (left) and TransactionTable (right) */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <LiveMarket />
            </div>
            <div className="flex-shrink-0">
              <TransactionTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
