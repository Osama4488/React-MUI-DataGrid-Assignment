// import * as React from 'react';
// // import { DataGridPro } from '@mui/x-data-grid-pro';
// import Box from '@mui/material/Box';
// import Draggable from 'react-draggable';

// const rows = [
//   {
//     hierarchy: ['Sarah'],
//     jobTitle: 'Head of Human Resources',
//     recruitmentDate: new Date(2020, 8, 12),
//     id: 0,
//   },
//   {
//     hierarchy: ['Thomas'],
//     jobTitle: 'Head of Sales',
//     recruitmentDate: new Date(2017, 3, 4),
//     id: 1,
//   },
//   {
//     hierarchy: ['Thomas', 'Robert'],
//     jobTitle: 'Sales Person',
//     recruitmentDate: new Date(2020, 11, 20),
//     id: 2,
//   },
//   {
//     hierarchy: ['Thomas', 'Karen'],
//     jobTitle: 'Sales Person',
//     recruitmentDate: new Date(2020, 10, 14),
//     id: 3,
//   },
//   {
//     hierarchy: ['Thomas', 'Nancy'],
//     jobTitle: 'Sales Person',
//     recruitmentDate: new Date(2017, 10, 29),
//     id: 4,
//   },
//   {
//     hierarchy: ['Thomas', 'Daniel'],
//     jobTitle: 'Sales Person',
//     recruitmentDate: new Date(2020, 7, 21),
//     id: 5,
//   },
//   {
//     hierarchy: ['Thomas', 'Christopher'],
//     jobTitle: 'Sales Person',
//     recruitmentDate: new Date(2020, 7, 20),
//     id: 6,
//   },
//   {
//     hierarchy: ['Thomas', 'Donald'],
//     jobTitle: 'Sales Person',
//     recruitmentDate: new Date(2019, 6, 28),
//     id: 7,
//   },
//   {
//     hierarchy: ['Mary'],
//     jobTitle: 'Head of Engineering',
//     recruitmentDate: new Date(2016, 3, 14),
//     id: 8,
//   },
//   {
//     hierarchy: ['Mary', 'Jennifer'],
//     jobTitle: 'Tech lead front',
//     recruitmentDate: new Date(2016, 5, 17),
//     id: 9,
//   },
//   {
//     hierarchy: ['Mary', 'Jennifer', 'Anna'],
//     jobTitle: 'Front-end developer',
//     recruitmentDate: new Date(2019, 11, 7),
//     id: 10,
//   },
//   {
//     hierarchy: ['Mary', 'Michael'],
//     jobTitle: 'Tech lead devops',
//     recruitmentDate: new Date(2021, 7, 1),
//     id: 11,
//   },
//   {
//     hierarchy: ['Mary', 'Linda'],
//     jobTitle: 'Tech lead back',
//     recruitmentDate: new Date(2017, 0, 12),
//     id: 12,
//   },
//   {
//     hierarchy: ['Mary', 'Linda', 'Elizabeth'],
//     jobTitle: 'Back-end developer',
//     recruitmentDate: new Date(2019, 2, 22),
//     id: 13,
//   },
//   {
//     hierarchy: ['Mary', 'Linda', 'William'],
//     jobTitle: 'Back-end developer',
//     recruitmentDate: new Date(2018, 4, 19),
//     id: 14,
//   },
// ];

// const columns = [
//   { field: 'jobTitle', headerName: 'Job Title', width: 200 },
//   {
//     field: 'recruitmentDate',
//     headerName: 'Recruitment Date',
//     type: 'date',
//     width: 150,
//   },
// ];

// const getTreeDataPath = (row) => row.hierarchy;

// export default function TreeDataSimple() {
//   return (
//     <Draggable>
//     {/* <Box component="section" sx={{ p: 1, border: '1px solid blue',maxWidth:"900px",margin:"auto",cursor:"move" }}>
//       <DataGridPro
//         treeData
//         rows={rows}
//         columns={columns}
//         getTreeDataPath={getTreeDataPath}
//       />
//     </Box> */}

//     <div>test</div>
//     </Draggable>
//   );
// }

import {useEffect,useState,lazy,Suspense} from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";

const DataGridNormal = lazy(() => import("./components/data-grid-normal") )
const DataGridGridPanel = lazy(() => import("./components/dataGrid-grid-panel"))


import Blogs from "./components/Blogs";
// import AntdComp from "./components/AntdComp";
const AntdComp = lazy(() => import("./components/AntdComp"))


import Switch from '@mui/material/Switch';




export default function TreeDataFullExample() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    
    setChecked(event.target.checked);
  };

  useEffect(() => {
    console.log(checked,"checked")
  },[checked])
    
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/normal" element={<DataGridNormal />}></Route>

    //     <Route path="/blogs" element={<Blogs />} />

    //     <Route path="/antd" element={<AntdComp />} />

    //   </Routes>
    // </BrowserRouter>

   <div style={{
      marginTop:"50px",
      maxWidth:"1500px",
      margin:"auto",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column"

   }}
   className="rootClass"
   >

      <span>Mui Data Grid</span>
      <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
      <strong>AntD Table</strong>


      <Suspense fallback={"Loading..."}>
      <div style={{marginTop:"50px",width:"100%"}}>
      {checked ?
      <DataGridGridPanel />
      
     : 
      
      // <AntdComp />
      <DataGridNormal />
      }
      </div>
      </Suspense>

   
   </div>
  );
}
