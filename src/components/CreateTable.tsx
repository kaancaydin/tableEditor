import type { TableProps } from "../types/types";

export const CreateTable = ({
  rowNum,
  colNum,
  headerVal,
  colVal,
}: TableProps) => {
  const rowInt = Number(rowNum);
  const colInt = Number(colNum);
  return (
    <>
      <table
        className={`${rowInt > 0 && colInt > 0 ? "block" : "hidden"} border-collapse border border-red-900`}
      >
        <thead>
          <tr className="bg-red-100">
            <th className="border border-red-300 px-4 py-2 text-center" colSpan={2}>Table Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-red-300 px-4 py-2 text-left">Row</td>
            <td className="border border-red-300 px-4 py-2 text-left">{rowInt}</td>
          </tr>
          <tr>
            <td className="border border-red-300 px-4 py-2 text-left">Column</td>
            <td className="border border-red-300 px-4 py-2 text-left">{colInt}</td>
          </tr>
        </tbody>
      </table>

      <table className="w-full border-collapse border border-gray-300">
        {headerVal.trim() !== "" && (
          <thead>
            <tr className="bg-gray-100">
              <th
                className="border border-gray-300 px-4 py-2 text-center" //header şu anlık verilen satır değeri ile aynı sayıda ve hepsi birleşip tek satır oluyor
                colSpan={colInt}
              >
                {headerVal}
              </th>
            </tr>
          </thead>
        )}
        <tbody>
          {Array.from({ length: rowInt }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: colInt }).map((_, colIndex) => (
                <td
                  className="border border-gray-300 px-4 py-2 text-left"
                  key={colIndex}
                >
                  {colVal}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
