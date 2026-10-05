import { X } from "lucide-react";
import type { SetTableConfig, SetTableProps } from "../types/types";
import { useState } from "react";

export const TableSettings = ({
  openTSettings,
  setOpenTSettings,
  data,
  setData,
}: SetTableConfig) => {
  const rowNum = data.rowNum;
  const colNum = data.colNum;
  const headerVal = data.headerVal;
  const colVal = data.colVal;
  const updateData = <K extends keyof SetTableProps>( //tipleri kopyaladık, K ise bu tiplerden herhangi biri olabilir dedik. örn K burada o tip içindeki herhnagi bir değişkene eşit olabilir
    key: K,
    value: SetTableProps[K],
  ) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const [isValid, setIsValid] = useState(true);
  const inputControl = () => {
    if (rowNum === "" || colNum === "" || rowNum <= 0 || colNum <= 0) {
      console.log("enter a valid number");
      setIsValid(false);
      return false;
    }
    setIsValid(true);
    return true;
    console.log("row:", rowNum);
    console.log("col:", colNum);
    console.log("colVal:", colVal);
    console.log("header values:", headerVal);
  };

  let headText: string;
  switch (openTSettings) {
    case "header":
      headText = "Define Your Headers";
      break;
    case "open":
      headText = "Set Up Your Table!";
      break;
    default:
      headText = "";
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-md">
      <div className="relative w-[90%] max-w-md overflow-hidden rounded-2xl border border-gray-200 ring ring-gray-400 bg-[#F7F7F5] shadow-2xl">
        <div className="flex h-10 items-center justify-between border-b border-gray-200 bg-[#ECECE9] px-3">
          <p className="text-sm font-semibold text-gray-700">Settings</p>
          <X
            width={20}
            className="cursor-pointer rounded-full p-0.5 text-gray-500 transition-all duration-150 hover:bg-red-500 hover:text-white"
            onClick={() => setOpenTSettings("close")}
          />
        </div>

        <div className="p-6">
          <p className="text-center text-xl font-bold  text-gray-800">
            {headText}
          </p>

          <div
            className={
              openTSettings === "header" ? "mt-5 flex flex-col gap-3" : "hidden"
            }
          >
            {Array.from({ length: Number(colNum) }).map((_, colIndex) => (
              <div key={colIndex} className="flex items-center gap-3">
                <label
                  htmlFor={`headerNum-${colIndex}`}
                  className="w-20 text-sm font-medium text-gray-600"
                >
                  Header {colIndex + 1}
                </label>

                <input
                  id={`headerNum-${colIndex}`}
                  type="text"
                  value={headerVal[colIndex] || ""}
                  placeholder="Header content"
                  onChange={(e) => {
                    const val = e.target.value;

                    updateData("headerVal", [
                      ...headerVal.slice(0, colIndex),
                      val,
                      ...headerVal.slice(colIndex + 1),
                    ]);
                  }}
                  className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            ))}
          </div>

          <div
            className={
              openTSettings === "header" ? "hidden" : "mt-5 flex flex-col gap-3"
            }
          >
            {/* Row */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="rowNum"
                className="w-20 text-sm font-medium text-gray-600"
              >
                Row
              </label>

              <input
                id="rowNum"
                type="number"
                value={rowNum}
                onChange={(e) => {
                  const val = e.target.value;
                  updateData("rowNum", val === "" ? "" : Number(val));
                }}
                className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Column */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="colNum"
                className="w-20 text-sm font-medium text-gray-600"
              >
                Column
              </label>

              <input
                id="colNum"
                type="number"
                value={colNum}
                onChange={(e) => {
                  const val = e.target.value;
                  updateData("colNum", val === "" ? "" : Number(val));
                }}
                className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Value */}
            <div className="flex items-center gap-3">
              <label
                htmlFor="valCol"
                className="w-20 text-sm font-medium text-gray-600"
              >
                Value
              </label>

              <input
                id="valCol"
                type="text"
                value={colVal}
                onChange={(e) => {
                  setIsValid(true);
                  updateData("colVal", e.target.value);
                }}
                className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {!isValid && (
            <p className="mt-2 -mb-2 text-center text-sm font-semibold text-red-500">
              Please fill in all required fields.
            </p>
          )}

          <div className="mt-5 flex justify-center">
            <button
              onClick={() => {
                if (!inputControl()) return;
                setOpenTSettings("header");
              }}
              className={
                openTSettings === "header"
                  ? "hidden"
                  : "w-full cursor-pointer rounded-lg bg-[#ce5e3c] px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-[#9e300f]"
              }
            >
              Header
            </button>

            <button
              onClick={() => {
                setOpenTSettings("created");
              }}
              className={
                openTSettings === "header"
                  ? "w-full cursor-pointer rounded-lg bg-[#46bb79] px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-[#1bb362]"
                  : "hidden"
              }
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
