import * as React from "react";
import Box from "@mui/material/Box";
import { DataGridPro } from "@mui/x-data-grid-pro";
import {
  randomCreatedDate,
  randomCurrency,
  randomEmail,
  randomPrice,
} from "@mui/x-data-grid-generator";
import Alert from "@mui/material/Alert";
import { useMovieData } from "@mui/x-data-grid-generator";
import { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export default function ControlMasterDetail() {
  //   const data = useMovieData();
  const data = {
    rows: [
      {
        id: 0,
        title: "Avatar",
        gross: 2847246203,
        budget: 237000000,
        director: "James Cameron",

        company: "20th Century Fox",
        year: 2009,
        imdbRating: 7.9,
        composer: {
          name: "James Horner",
        },
        childExpandedArr: [
          {
            id: 0,
            title: "Tyuea",
            gross: 2847246203,
            budget: 237000000,
            director: "James Cameron",

            company: "20th Century Fox",
            year: 2009,
            imdbRating: 7.9,
            composer: {
              name: "James Horner",
            },
            tableData: [
              {
                id: 1000,
                title: "qweqwe",
                gross: 2847246203,
                budget: 237000000,
                director: "James Cameron",

                company: "20th Century Fox",
                year: 2009,
                imdbRating: 7.9,
                composer: {
                  name: "James Horner",
                },
              },
              //   {
              //     id: 100,
              //     title: "BroadBand",
              //     gross: 2847246203,
              //     budget: 2567,
              //     director: "James Cameron",

              //     company: "20th Century Fox",
              //     year: 2009,
              //     imdbRating: 7.9,
              //     composer: {
              //       name: "James Horner",
              //     },
              //   },
            ],
          },
          {
            id: 0,
            title: "Avatar",
            gross: 2847246203,
            budget: 237000000,
            director: "James Cameron",

            company: "20th Century Fox",
            year: 2009,
            imdbRating: 7.9,
            composer: {
              name: "James Horner",
            },
            tableData: [
              {
                id: 1000,
                title: "Avatar",
                gross: 2847246203,
                budget: 237000000,
                director: "James Cameron",

                company: "20th Century Fox",
                year: 2009,
                imdbRating: 7.9,
                composer: {
                  name: "James Horner",
                },
              },
              {
                id: 100,
                title: "BroadBand",
                gross: 2847246203,
                budget: 237000000,
                director: "James Cameron",

                company: "20th Century Fox",
                year: 2009,
                imdbRating: 7.9,
                composer: {
                  name: "James Horner",
                },
              },
            ],
          },
        ],
      },
      {
        id: 1,
        title: "Avengers: Endgame",
        gross: 2797501328,
        budget: 356000000,
        director: "Anthony & Joe Russo",
        company: "Disney Studios",
        year: 2019,
        imdbRating: 8.4,
        cinematicUniverse: "Marvel Cinematic Universe",
        composer: {
          name: "Alan Silvestri",
        },
      },
      {
        id: 2,
        title: "Titanic",
        gross: 2187425379,
        budget: 200000000,
        director: "James Cameron",
        company: "20th Century Fox",
        year: 1997,
        imdbRating: 7.9,
        composer: {
          name: "James Horner",
        },
      },
      {
        id: 3,
        title: "Star Wars: The Force Awakens",
        gross: 2068223624,
        budget: 306000000,
        director: "J. J. Abrams",
        company: "Disney Studios",
        year: 2015,
        imdbRating: 7.9,
        cinematicUniverse: "Star Wars",
        composer: {
          name: "John Williams",
        },
      },
      {
        id: 4,
        title: "Avengers: Infinity War",
        gross: 2048359754,
        budget: 321000000,
        director: "Anthony & Joe Russo",
        company: "Disney Studios",
        year: 2018,
        imdbRating: 8.5,
        cinematicUniverse: "Marvel Cinematic Universe",
        composer: {
          name: "Alan Silvestri",
        },
      },
      {
        id: 5,
        title: "Spider-Man: No Way Home",
        gross: 1892768346,
        budget: 200000000,
        director: "Jon Watts",
        company: "Disney Studios",
        year: 2021,
        imdbRating: 8.3,
        cinematicUniverse: "Marvel Cinematic Universe",
        composer: {
          name: "Michael Giacchino",
        },
      },
      {
        id: 6,
        title: "Jurassic World",
        gross: 1671713208,
        budget: 150000000,
        director: "Colin Trevorrow",
        company: "Universal Pictures",
        year: 2015,
        imdbRating: 7,
        cinematicUniverse: "Jurassic Park",
        composer: {
          name: "Michael Giacchino",
        },
      },
      {
        id: 7,
        title: "The Lion King",
        gross: 1656943394,
        budget: 260000000,
        director: "Jon Favreau",
        company: "Disney Studios",
        year: 2019,
        imdbRating: 6.9,
        composer: {
          name: "Hans Zimmer",
        },
      },
    ],
    columns: [
      {
        field: "title",
        headerName: "Title",
        width: 200,
        groupable: false,
      },
      {
        field: "gross",
        headerName: "Gross",
        type: "number",
        width: 150,
        groupable: false,
      },
      {
        field: "company",
        headerName: "Company",
        width: 200,
      },
      {
        field: "director",
        headerName: "Director",
        width: 200,
      },
      {
        field: "year",
        headerName: "Year",
        type: "number",
        availableAggregationFunctions: ["max", "min"],
      },
      {
        field: "cinematicUniverse",
        headerName: "Cinematic Universe",
        width: 220,
      },
    ],
  };

  const [detailPanelExpandedRowIds, setDetailPanelExpandedRowIds] =
    React.useState([]);

  const handleDetailPanelExpandedRowIdsChange = React.useCallback((newIds) => {
    setDetailPanelExpandedRowIds(newIds);
  }, []);
  const getDetailPanelContent = React.useCallback(
    ({ row }) => <DetailPanelContentComp row={row} />,
    []
  );

  const DetailPanelContentComp = ({ row }) => {
    const [expanded, setExpanded] = useState({
      index: 0,
      value: true,
    });
    const [dropdowns, setDropdowns] = useState([0]);

    useEffect(() => {
      console.log(dropdowns, "dropdowns");
    }, [dropdowns]);

    // console.log(row, "row inside grid panel");

    // console.log(row.firstChild.tableData, "table data of first child");
    // const dataGridPanel = {
    //     "rows": [
    //         {
    //             "id": 0,
    //             "title": "Avatar",
    //             "gross": 2847246203,
    //             "budget": 237000000,
    //              "director": "James Cameron",

    //             "company": "20th Century Fox",
    //             "year": 2009,
    //             "imdbRating": 7.9,
    //             "composer": {
    //                 "name": "James Horner"
    //             },
    //             "firstChild":{
    //                 "id": 0,
    //             "title": "Avatar",
    //             "gross": 2847246203,
    //             "budget": 237000000,
    //              "director": "James Cameron",

    //             "company": "20th Century Fox",
    //             "year": 2009,
    //             "imdbRating": 7.9,
    //             "composer": {
    //                 "name": "James Horner"
    //             },
    //             }

    //         },
    //         {
    //             "id": 1,
    //             "title": "Avengers: Endgame",
    //             "gross": 2797501328,
    //             "budget": 356000000,
    //             "director": "Anthony & Joe Russo",
    //             "company": "Disney Studios",
    //             "year": 2019,
    //             "imdbRating": 8.4,
    //             "cinematicUniverse": "Marvel Cinematic Universe",
    //             "composer": {
    //                 "name": "Alan Silvestri"
    //             }
    //         },

    //     ],
    //     "columns": [
    //         {
    //             "field": "title",
    //             "headerName": "Title",
    //             "width": 200,
    //             "groupable": false
    //         },
    //         {
    //             "field": "gross",
    //             "headerName": "Gross",
    //             "type": "number",
    //             "width": 150,
    //             "groupable": false
    //         },
    //         {
    //             "field": "company",
    //             "headerName": "Company",
    //             "width": 200
    //         },
    //         {
    //             "field": "director",
    //             "headerName": "Director",
    //             "width": 200
    //         },
    //         {
    //             "field": "year",
    //             "headerName": "Year",
    //             "type": "number",
    //             "availableAggregationFunctions": [
    //                 "max",
    //                 "min"
    //             ]
    //         },
    //         {
    //             "field": "cinematicUniverse",
    //             "headerName": "Cinematic Universe",
    //             "width": 220
    //         }
    //     ]
    // }

    // useEffect(() => {
    //   console.log(expanded, "expanded");
    // }, [expanded]);
    const getDetailPanelHeight = React.useCallback(() => 50, []);

    return (
      <div style={{ height: "100%", overflow: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {row.childExpandedArr.map((i, idx) => {
            return (
              <>
                <div
                  onClick={() => {
                    setExpanded({
                      index: idx,
                      value: idx === expanded.index ? !expanded.value : true,
                    });

                    if (dropdowns.includes(idx)) {
                      const newArray = dropdowns.filter(
                        (item, index) => item !== idx
                      );
                      setDropdowns(newArray);
                    } else {
                      setDropdowns((prev) => [...prev, idx]);
                    }
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "0px 20px",
                    margin: "30px 0px ",
                  }}
                >
                  <div style={{ paddingRight: "30px", display: "flex" }}>
                    {i &&
                      (
                      

                        dropdowns.includes(idx)
                        
                        ? (
                        <IoMdArrowDropdown size={20} />
                      ) : (
                        <IoMdArrowDropup size={20} />
                      ))}
                  </div>
                  <div style={{ width: "200px" }}>{i.title}</div>
                  <div style={{ width: "200px" }}>{i.director}</div>
                  <div style={{ width: "200px" }}>{i.company}</div>
                  <div style={{ width: "200px" }}>{i.gross}</div>
                  <div style={{ width: "200px" }}>{i.budget}</div>
                </div>

                {dropdowns.includes(idx) && (
                  <DataGridPro
                    rows={i.tableData}
                    columns={COLUMNS}
                    getDetailPanelHeight={getDetailPanelHeight}
                    sx={{
                      "& .MuiDataGrid-detailPanel": {
                        overflow: "visible",
                      },
                    }}
                  />
                )}

                {/* {dropdowns.map((j) => {
                    return(
                        <DataGridPro
                        rows={i.tableData}
                        columns={COLUMNS}
                        getDetailPanelHeight={getDetailPanelHeight}
                        sx={{
                          "& .MuiDataGrid-detailPanel": {
                            overflow: "visible",
                          },
                        }}
                      />
                    )
                })} */}
              </>
            );
          })}
        </div>
      </div>
    );
  };

  const COLUMNS = React.useMemo(() => [
    { field: "title", headerName: "Title", width: 200, groupable: false },

    {
      field: "director",
      headerName: "Director",
      width: 200,
    },
    {
      field: "company",
      headerName: "Company",
      width: 200,
    },

    {
      field: "gross",
      headerName: "Gross",
      type: "number",
      minWidth: 140,
      groupable: false,
      valueFormatter: (value) => {
        if (!value) {
          return value;
        }
        return currencyFormatter.format(value);
      },
    },
    {
      field: "budget",
      headerName: "Budget",
      type: "number",
      minWidth: 140,
      groupable: false,
      valueFormatter: (value) => {
        if (!value) {
          return value;
        }
        return currencyFormatter.format(value);
      },
    },
  ]);

  const getDetailPanelHeight = React.useCallback(() => 200, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Alert severity="info">
        <code>
          detailPanelExpandedRowIds: {JSON.stringify(detailPanelExpandedRowIds)}
        </code>
      </Alert>

      <DataGridPro
        {...data}
        columns={COLUMNS}
        getDetailPanelContent={getDetailPanelContent}
        getDetailPanelHeight={getDetailPanelHeight}
        detailPanelExpandedRowIds={detailPanelExpandedRowIds}
        onDetailPanelExpandedRowIdsChange={
          handleDetailPanelExpandedRowIdsChange
        }
      />
    </Box>
  );
}
