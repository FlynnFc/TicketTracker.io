import { ResponsivePie } from "@nivo/pie";

import { useEffect, useState } from "react";

const TicketTypeBar = (props: any) => {
  const [data, setData] = useState([
    { id: "Bug", value: 2, color: "hsl(13, 70%, 50%)", label: "Bug" },
    { id: "Feature", value: 3, color: "hsl(13, 70%, 50%)", label: "Feature" },
    { id: "Support", value: 1, color: "hsl(13, 70%, 50%)", label: "Support" },
    { id: "Task", value: 1, color: "hsl(13, 70%, 50%)", label: "Task" },
  ]);

  return (
    <div className="mb-4 mt-4 h-[95%] min-w-[24rem] items-end rounded-xl bg-base-300 shadow-xl lg:w-[47%]">
      {data && (
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#fff"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              itemTextColor: "#fff",
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      )}
    </div>
  );
};

export default TicketTypeBar;
