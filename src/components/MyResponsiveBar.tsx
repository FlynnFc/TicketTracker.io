import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

type TicketData = {
  completedTickets: number;
  totalTickets: number;
  Active: number;
  qa: number;
};
const MyResponsiveBar = (props: TicketData) => {
  const [data, setData] = useState({});
  useEffect(() => {
    return setData({
      unassigned: 1,
      unassignedColor: "hsl(213, 70%, 50%)",
      QA: props.qa,
      QAColor: "hsl(213, 70%, 50%)",
      active: props.totalTickets,
      activeColor: "hsl(79, 70%, 50%)",
      Completed: props.completedTickets,
      CompletedColor: "hsl(79, 40%, 50%)",
    });
  }, [props]);

  return (
    <div className="mb-4 mt-4 h-[95%] w-96 items-end rounded-xl bg-base-300 text-base-content shadow-xl">
      {data && (
        <ResponsiveBar
          data={[data]}
          keys={["unassigned", "QA", "active", "Completed"]}
          indexBy="ticket"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          colors={{ scheme: "set2" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#ffff",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eff312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "",
              },
              id: "dots",
            },
            {
              match: {
                id: "",
              },
              id: "lines",
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["brighter", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="#fff"
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              itemTextColor: "#fff",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Bar chart"
        />
      )}
    </div>
  );
};

export default MyResponsiveBar;
