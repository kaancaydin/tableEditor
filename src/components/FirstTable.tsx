const columns = [
  {
    header: "a1",
    data: "b1",
  },
  {
    header: "a2",
    data: "b2",
  },
  {
    header: "a3",
    data: "b3",
  },
];

export const FirstTable = () => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          {columns.map((i, key) => (
            <th
              className="border border-gray-300 px-4 py-2 text-left"
              key={key}
            >
              {i.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        <tr>
          {columns.map((i, key) => (
            <td key={key} className="border border-gray-300 px-4 py-2">
              {i.data}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
