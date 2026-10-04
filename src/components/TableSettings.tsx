import { X } from "lucide-react";
import type { SetTableConfig, SetTableProps } from "../types/types";

export const TableSettings = ({
  openTSettings,
  setOpenTSettings,
  data,
  setData,
}: SetTableConfig) => {
  /* const rowInt = Number(setTable.rowNum);
  const colInt = Number(setTable.colNum); */
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

  const inputControl = () => {
    if (rowNum === "" || colNum === "" || rowNum <= 0 || colNum <= 0) {
      console.log("enter a valid number");
      return;
    }
    //const headerControl =  headerVal.every(i => i.trim() !== "");
    /* if (!headerControl) {
      console.log("header cant be empty")
    }  */
    console.log("row:", rowNum);
    console.log("col:", colNum);
    console.log("colVal:", colVal);
    console.log("header values:", headerVal);
  };
  return (
    <div className="relative flex flex-col gap-3 p-5 bg-gray-700 rounded-3xl justify-center items-center backdrop-blur-xl">
      <div className="absolute flex items-center  top-0 left-0 right-0 p-1 bg-gray-500 opacity-75 justify-between rounded-t-3xl">
        <p className="pl-2 font-medium text-white">Settings</p>
        <X
          width={24}
          className="cursor-pointer mr-1 hover:scale-105 duration-100 rounded-full hover:bg-red-900 text-red-700 hover:text-white transition-all"
          onClick={() => setOpenTSettings("close")}
        />
      </div>
      <p className="text-xl font-bold text-white shadow-2xl mt-3">
        Set your table!
      </p>
      <div
        className={`${openTSettings === "header" ? "flex flex-col items-center gap-2" : "hidden"}`}
      >
        {Array.from({ length: Number(colNum) }).map((_, colIndex) => (
          <div className="" key={colIndex}>
            <label htmlFor="headerVal" className="text-sm text-gray-200 w-16">
              Header {colIndex + 1}
            </label>
            <input
              id="headerNum"
              type="text"
              name="headerNum"
              placeholder="Header content"
              onChange={(e) => {
                const val = e.target.value; //setHeaderVal(val)
                updateData("headerVal", [
                  ...headerVal.slice(0, colIndex),
                  val,
                  ...headerVal.slice(colIndex + 1),
                ]);
              }}
              className="border rounded px-2 py-1 w-full bg-black text-white text-sm"
            />
          </div>
        ))}
      </div>
      <div
        className={`${openTSettings === "header" ? "hidden" : "flex flex-col gap-2"}`}
      >
        <div className="flex items-center gap-2">
          <label htmlFor="rowNum" className="text-sm text-gray-200 w-16">
            Row
          </label>
          <input
            id="rowNum"
            type="number"
            name="rowNum"
            onChange={(e) => {
              const val = e.target.value;
              updateData("rowNum", val === "" ? "" : Number(val));
            }}
            className="border rounded px-2 py-1 w-full bg-gray-800 text-white text-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="rowNum" className="text-sm text-gray-200 w-16">
            Column
          </label>
          <input
            id="colNum"
            type="number"
            name="colNum"
            onChange={(e) => {
              const val = e.target.value;
              updateData("colNum", val === "" ? "" : Number(val));
            }}
            className="border rounded px-2 py-1 w-full bg-gray-800 text-white text-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="valCol" className="text-sm text-gray-200 w-16">
            Value
          </label>
          <input
            id="valCol"
            type="text"
            name="valCol"
            onChange={(e) => {
              const val = e.target.value;
              updateData("colVal", val);
            }}
            className="border rounded px-2 py-1 w-full bg-gray-800 text-white text-sm"
          />
        </div>
      </div>
      <button
        onClick={() => {
          inputControl();
          setOpenTSettings("header");
        }}
        className={`${openTSettings === "header" ? "hidden" : "bg-red-400 ring-red-800 ring-2 p-2 rounded-2xl text-white font-bold text-base cursor-pointer w-[80%]"}`}
      >
        Header
      </button>
      <button
        onClick={() => {
          inputControl();
          setOpenTSettings("created");
        }}
        className={`${openTSettings === "header" ? "bg-green-400 ring-green-800 ring-2 p-2 rounded-2xl text-white font-bold text-base cursor-pointer w-[80%]" : "hidden"}`}
      >
        Create
      </button>
    </div>
  );
};
