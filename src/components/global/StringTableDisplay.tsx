import { type } from "os";
import React, { CSSProperties } from "react";

interface TableDisplayProps<Type, Signature extends TableDataUnit<Type>> {
  d: TableData<Type, Signature>;
  c: tableCols;
}

export interface tableCols
  extends Array<{
    Header: string;
    accessor: string;
  }> {}

export interface TableDataUnit<Type> {
  [key: string]: Type;
}
export interface TableData<Type, Signature extends TableDataUnit<Type>>
  extends Array<Signature> {}

// export interface stringTableDataUnit {
//   [key: string]: string;
// }
// export interface stringTableData extends Array<stringTableDataUnit> {}

// export interface numberTableDataUnit {
//   [key: string]: number;
// }
// export interface numberTableData extends Array<numberTableDataUnit> {}

const tableGlobalStyle: CSSProperties = { border: "solid 1px var(--Grey-3)" };
const tableHeadStyle: CSSProperties = {
  borderBottom: "solid 3px var(--Secondary-3)",
  background: "var(--Grey-7)",
  color: "var(--Grey-0)",
  fontWeight: "bold",
};
const tableBodyStyle: CSSProperties = {
  padding: "10px",
  border: "solid 1px gray",
  background: "var(--Grey-7)",
};

import { useTable } from "react-table";

interface TableSignature<Type> {}

const StringTableDisplay: React.FC<
  TableDisplayProps<string, TableDataUnit<string>>
> = ({ d, c }) => {
  const data = React.useMemo(() => d, []);

  const columns = React.useMemo(() => c, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={tableGlobalStyle}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} style={tableHeadStyle}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} style={tableBodyStyle}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default StringTableDisplay;
