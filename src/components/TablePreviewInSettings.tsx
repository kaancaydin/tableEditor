type PreviewTypes = {
  headerVal: (string | number)[];
  colInt: number;
  rowInt: number;
};

export const TablePreviewInSettings = ({
  headerVal,
  colInt,
  rowInt,
}: PreviewTypes) => {
  return (
    <div className="bg-[#ECECE9] p-4 rounded-lg">
      <div className="flex justify-between text-[#5c636a] text-xs mb-2 px-1">
        <p className="uppercase tracking-wider">Table Preview</p>
        <p>
          {colInt}x{rowInt}
        </p>
      </div>
      <div>
        <table className="w-full border-separate border-spacing-2">
          {headerVal && (
            <thead>
              <tr>
                {Array.from({ length: colInt }).map((_, colIndex) => (
                  <th
                    key={colIndex}
                    className="bg-[#D6D6D1] h-8 rounded-md font-normal"
                  ></th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {Array.from({ length: rowInt }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: colInt }).map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="bg-white h-8 rounded-md font-normal border border-gray-300"
                  ></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
