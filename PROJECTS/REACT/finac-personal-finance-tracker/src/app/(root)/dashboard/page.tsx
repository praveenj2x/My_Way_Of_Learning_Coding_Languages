import React from "react";
import TradingChart from "@/components/tradingView/tradingChart";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";

const Home = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;

  return (
    <div className=" p-6 ">
      {/* TOP GRID — Overview + Heatmap */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Market Overview */}
        <div className="col-span-1">
          <TradingChart
            title="Market Overview"
            scriptUrl={`${scriptUrl}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>

        {/* Heatmap */}
        <div className="col-span-1 lg:col-span-2">
          <TradingChart
            title="Stock Heatmap"
            scriptUrl={`${scriptUrl}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>

      {/* BOTTOM GRID — Top Stories + Market Data */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 home-section mt-10">
        {/* Top Stories */}
        <div className="col-span-1">
          <TradingChart
            title="Top Financial Stories"
            scriptUrl={`${scriptUrl}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            height={600}
          />
        </div>

        {/* Market Quotes */}
        <div className="col-span-1 lg:col-span-2">
          <TradingChart
            title="Market Quotes"
            scriptUrl={`${scriptUrl}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
