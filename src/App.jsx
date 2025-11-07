import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import ChartVisual from "./components/ui/ChartVisual";
import MetricCard from "./components/ui/MetricCard";
import TransactionTable from "./components/ui/TransactionTable";
import LiveMarket from "./components/ui/LiveMarket";
// import MainContent from "./components/layout/MainContent";

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
        <main className="flex-1 overflow-y-auto bg-gray-100 p-6">
          {/* <MainContent /> */}

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <MetricCard />
          </div>

          {/* Chart Section */}
          <div className="mt-6">
            <ChartVisual />
          </div>

          {/* Transaction Table */}
          <div className="mt-6">
            <TransactionTable />
          </div>

          <div className="mt-6">
            <LiveMarket />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
