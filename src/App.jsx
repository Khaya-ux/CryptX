import { useState } from "react";
import Sidebar from "./components/layout/sidebar";
import Header from "./components/layout/Header";
import ChartVisual from "./components/ui/ChartVisual";
import MetricCard from "./components/ui/MetricCard";
import TransactionTable from "./components/ui/TransactionTable";
import MainContent from "./components/layout/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <ChartVisual />
      <MetricCard />
      <TransactionTable />
      <MainContent />
    </div>
  );
}

export default App;
