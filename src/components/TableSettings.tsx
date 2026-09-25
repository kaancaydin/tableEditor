import { X } from "lucide-react";
import type { SetTableConfig, SetTableProps } from "../types/types";

export const TableSettings = ({
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
    let hV: string;
    if (headerVal.trim() !== "") {
      hV = headerVal;
    } else {
      hV = "null";
    }
    console.log(hV);
    console.log("row:", rowNum);
    console.log("col:", colNum);
    console.log("colVal:", colVal);
  };
  return (
    <div className=" relative flex flex-col gap-3 p-5 bg-gray-700 rounded-3xl justify-center items-center backdrop-blur-xl">
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
      <div className="flex items-center gap-2">
        <label htmlFor="rowNum" className="text-sm text-gray-200 w-16">
          Header
        </label>
        <input
          id="headerNum"
          type="text"
          name="headerNum"
          placeholder="Header content"
          onChange={(e) => {
            const val = e.target.value; //setHeaderVal(val) eski hali
            /* setData((prev) => ({
              ...prev,
              headerVal: val,
            })); */
            updateData("headerVal", val);
          }}
          className="border rounded px-2 py-1 w-full bg-black text-white text-sm"
        />
      </div>
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
            //setRowNum(val === "" ? "" : Number(val));
            /* setData((prev) => ({
              ...prev,
              rowNum: val === "" ? "" : Number(val),
            })); */
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
            //setColNum(val === "" ? "" : Number(val));
            /* setData((prev) => ({
              ...prev,
              colNum: val === "" ? "" : Number(val),
            })); */
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
            //setColVal(e.target.value);
            const val = e.target.value;
            /* setData((prev) => ({
              ...prev,
              colVal: val,
            })); */
            updateData("colVal", val);
          }}
          className="border rounded px-2 py-1 w-full bg-gray-800 text-white text-sm"
        />
      </div>
      <button
        onClick={() => {
          inputControl();
          setOpenTSettings("created");
        }}
        className="bg-green-400 ring-green-800 ring-2 p-2 rounded-2xl text-white font-bold text-base cursor-pointer w-[80%]"
      >
        Create
      </button>
    </div>
  );
};
