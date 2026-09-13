import type { TableProps } from "../types/types";

export const CreateTable = ({ rowNum, colNum,colVal}: TableProps) => {
  const rowInt = Number(rowNum);
  const colInt = Number(colNum);
  return (
    <>
      <div
        className={`${rowInt > 0 && colInt > 0 ? "flex" : "hidden"} gap-2 mt-2 bg-gray-400 p-2 rounded-2xl`}
      >
        <p>
          row : <span className="bg-purple-500 p-1 rounded-xl">{rowInt}</span>
        </p>
        <span className="font-bold">|</span>
        <p>
          col : <span className="bg-purple-500 p-1 rounded-xl">{colInt}</span>
        </p>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <tbody>
          {Array.from({ length: rowInt }).map((_, rowIndex) => (
            <tr key={rowIndex}> 
              {Array.from({ length: colInt }).map((_, colIndex) => (
                <td className="border border-gray-300 px-4 py-2 text-left" key={colIndex}>
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
