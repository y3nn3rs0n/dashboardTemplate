import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

const nodes = [
  {
    id: "1",
    name: "Rodriguez",
    deadline: new Date(2024, 6, 21),
    type: "Pendiente",
    amount: "1200",
  },
  {
    id: "2",
    name: "Perez",
    deadline: new Date(2024, 6, 22),
    type: "Pendiente",
    amount: "1500",
  },
  {
    id: "3",
    name: "Perez",
    deadline: new Date(2024, 6, 23),
    type: "Devolucion",
    amount: "1000",
  },
  {
    id: "4",
    name: "Sanchez",
    deadline: new Date(2024, 6, 24),
    type: "Venta",
    amount: "3000",
  },
  {
    id: "5",
    name: "Pino",
    deadline: new Date(2024, 6, 25),
    type: "Venta",
    amount: "2000",
  },
  {
    id: "5",
    name: "Olivo",
    deadline: new Date(2024, 6, 25),
    type: "Venta",
    amount: "200",
  },
];

const Table = () => {
  let data = { nodes };

  const theme = useTheme({
    ...getTheme(),
    HeaderRow: `
      background-color: #131517;
    `,
    Row: `
      &:nth-of-type(odd) {
        background-color: #1e1f25;
      }

      &:nth-of-type(even) {
        background-color: #131517;
      }

      &:hover {
          color: #EE6C4D;
        }

        cursor: pointer;

      margin-bottom: 8px;
    `,
    Cell: `
      padding: 8px;
    `,
  });


  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  data = {
    nodes: data.nodes.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const COLUMNS = [
    { label: "Comprador", renderCell: (item) => item.name },
    {
      label: "Fecha",
      renderCell: (item) =>
        item.deadline.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }),
    },
    { label: "Estado", renderCell: (item) => item.type },
    { label: "Monto", renderCell: (item) => item.amount.toString()},
  ];

  return (
    <>
    <div className="items-center justify-center mt-2 ml-10">
      <label htmlFor="search">
        Buscar Venta:&nbsp;
        <input
          className="mb-4 rounded-xl ml-4 px-4 focus:outline-none text-gray-700"
          id="search"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Buscar"
          autoComplete="off"
        />
      </label>
      <div>
        <CompactTable columns={COLUMNS} data={data} theme={theme} />
  
      {data.nodes.length === 0 && (
             <p className="text-red-500 mt-4">No se encontraron elementos.</p>
      )}
  
      {/* Comentar o eliminar esta línea si no tienes el archivo `DocumentationSee` */}
      {/* <DocumentationSee anchor={"Features/Search"} /> */}
      </div>
    </div>
    </>
  );
};

export default Table;
