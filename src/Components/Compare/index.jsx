import React from "react";
import Clear from "./Clear";
import Iphone from "./Iphone";
import FilterTabs from "./FilterTabs";
import ScreenTables from "./CompareTables/ScreenTables";
import BatteryTable from "./CompareTables/BatteryTable";
import CameraTable from "./CompareTables/CameraTable";
import BasicTable from "./CompareTables/BasicTable";
import DesignTable from "./CompareTables/DesignTable";
import NetworkTable from "./CompareTables/NetworkTable";
import SystemTable from "./CompareTables/SystemTable";
import WirelessTable from "./CompareTables/WirelessTable";
import MultimediaTable from "./CompareTables/MultimediaTable";
import FeatureTable from "./CompareTables/FeatureTable";
import LinkTable from "./CompareTables/LinkTable";
import Information from "./CompareTables/Information";

const ComparePage = () => {
  return (
    <div>
      <Clear />
      <Iphone />
      <div className="pt-8">
        <FilterTabs />
        <div className="pt-8">
          <ScreenTables />
        </div>
        <div className="pt-8">
          <BatteryTable />
        </div>
        <div className="pt-8">
          <CameraTable />
        </div>
        <div className="pt-8">
          <BasicTable />
        </div>
        <div className="pt-8">
          <DesignTable />
        </div>
        <div className="pt-8">
          <NetworkTable />
        </div>
        <div className="pt-8">
          <SystemTable />
        </div>
        <div className="pt-8">
          <WirelessTable />
        </div>
        <div className="pt-8">
          <MultimediaTable />
        </div>
        <div className="pt-8">
          <FeatureTable />
        </div>
        <div className="pt-8">
          <LinkTable />
        </div>
        <div className="pt-8">
          <Information />
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
