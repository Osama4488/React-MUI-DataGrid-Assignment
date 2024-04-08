import * as React from "react";
import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";

import data from "../data/data";



export default function GridSix() {
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ["account"
        // ,"symbol"
      
      ],
      },
      aggregation: {
        model: {
          quantity: "sum",
          filledQuantity: "sum",
          unrealizedPNL: "sum",
          realizedPNL: "sum",
          totalPNL: "sum",
          qtyBought: "sum",
          qtySold: "sum",
          qtyShorted: "sum",
        },
      },
    },
  });

  const getDetailPanelContent = React.useCallback(({row}) => {
    return <GridPanelChildContent row={row.innerData} />;
  }, []);

 

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGridPremium
        apiRef={apiRef}
        columns={data.columns}
        rows={data.rows}
        disableRowSelectionOnClick
        initialState={initialState}
        getAggregationPosition={(groupNode) =>
          groupNode.depth === -1 ? null : "inline"
        }
        getDetailPanelContent={getDetailPanelContent}
        rowGroupingColumnMode="multiple"
      
      />
    </div>
  );
}


const GridPanelChildContent = ({row}) => {
  return(
    <div className="grid-five-three" style={{ width: "100%" }}>
    <div style={{ height: 350, width: "100%" }}>
      <DataGridPremium
        {...row}
        initialState={{
          rowGrouping: {
            model: [""],
          },
        }}
        disableVirtualization
      />
    </div>
  </div>
  )
}
