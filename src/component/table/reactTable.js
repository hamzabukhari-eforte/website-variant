import React, { useState, useEffect } from "react";
// import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import ReactTable from "react-table";

import styled from "styled-components";
import Style from "./style";

const StyledTable = styled(ReactTable)`
  ${Style}
`;

const TableWrapper = (props) => {
  return (
    <StyledTable
      data={props.tableData}
      columns={props.columns}
      minRows={5}
      noDataText="No data found"
      resizable={false}
      // pageText={""}
      pageSize={5}
      // defaultPageSize={2}
      showPageSizeOptions={false}
      previousText={"‹"}
      nextText={"›"}
      // SubComponent={(r) => <div>Yalla I render successfully!</div>}
      {...props}
    />
  );
};

export default TableWrapper;

// const TableWrapper = (props) => {
//   console.log("Table Data in table wrapper: ", props.tableData);
//   // let loading;
//   // if (props.tableData === null || props.tableData === undefined) {
//   //   loading = true;
//   // } else {
//   //   loading = false;
//   // }
//   return (
//     <StyledTable
//       {...props}
//       data={props.tableData ? props.tableData : null}
//       noDataText="No data found"
//       showPageSizeOptions={false}
//       loading={props.loading}
//       columns={props.content.map((val) => ({
//         Header: val.sortable ? (
//           <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
//             <div
//               className="sortingHeader"
//               style={{
//                 display: "flex",
//                 fontSize: "1.3rem",
//                 flexDirection: "column",
//                 marginRight: 10,
//               }}
//             >
//               <div className="ascending">
//                 <FiChevronUp />
//               </div>
//               <div className="descending">
//                 <FiChevronDown />
//               </div>
//             </div>
//             {val.name}
//           </div>
//         ) : (
//           val.name
//         ),
//         id: val.id,
//         sortable: val.sortable || false,
//         Cell: val.render ? val.render : (r) => r.original[val.id],
//       }))}
//       defaultPageSize={DEFAULT_TABLE_PAGE_SIZE}
//       pageSize={props.pageSize || DEFAULT_TABLE_PAGE_SIZE}
//       minRows={5}
//       resizable={false}
//       pageText={""}
//       previousText={"‹"}
//       nextText={"›"}
//     />
//   );
// };

// export default TableWrapper;
