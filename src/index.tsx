import React from "react";
import { initializeWidget, useRecord, useMeta, useRecordsAll,useDatasheet } from "@apitable/widget-sdk";
import { Button } from '@apitable/components'
// import { initializeWidget } from "widget-sdk/src";
import { Setting } from "./setting";

export const HelloWorld: React.FC = () => {
  const meta = useMeta();
  const allRecord = useRecordsAll(useDatasheet(meta.datasheetId))
  console.log(allRecord, 'bbl1')
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1, overflow: "auto", padding: "0 8px" }}>
      WIDGET_PACKAGE_ID--{process.env.WIDGET_PACKAGE_ID}
      <Button>hello</Button>
      </div>
      <Setting />
    </div>
  );
};
initializeWidget(HelloWorld, process.env.WIDGET_PACKAGE_ID);
