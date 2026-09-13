import { useState } from "react";
import { TurnToPdf } from "./components/TurnPDF";
import { TableSettings } from "./components/TableSettings";
import { Table } from "lucide-react";
import { CreateTable } from "./components/CreateTable";
import type { TableStatus } from "./types/types";

function App() {
  const [openTSettings, setOpenTSettings] = useState<TableStatus>("close");
  const [rowNum, setRowNum] = useState<number | "">("");
  const [colNum, setColNum] = useState<number | "">("");
  const [colVal, setColVal] = useState<string>("");
  return (
    <>
      <div className={`flex items-center justify-center flex-col `}>
        <p className="my-3 font-bold">Table Editor</p>
        <button
          className="font-bold bg-blue-700 ring-2 ring-blue-500 text-white text-xl p-2 flex gap-0.5 
        cursor-pointer rounded-2xl justify-center items-center text-center
        hover:scale-105 transition-all duration-100 print:hidden
        "
          onClick={() => {
            setOpenTSettings("open");
          }}
        >
          <Table />
          Create a Table
        </button>
        <TurnToPdf />
        <div className={`${openTSettings === "open" ? "flex" : "hidden"}`}>
          <TableSettings
            setOpenTSettings={setOpenTSettings}
            rowNum={rowNum}
            colNum={colNum}
            colVal={colVal}
            setRowNum={setRowNum}
            setColNum={setColNum}
            setColVal={setColVal}
          />
        </div>
        <div className={`${openTSettings === "created" ? "flex flex-col gap-2 items-center text-center" : "hidden"}`}>
          <CreateTable rowNum={rowNum} colNum={colNum} colVal={colVal}/>
        </div>
      </div>
    </>
  );
}

export default App;
