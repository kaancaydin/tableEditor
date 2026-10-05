import { Table } from "lucide-react";
import type { CreateTableProps } from "../types/types";

export const CreateTable = ({
  openTSettings,
  setOpenTSettings,
  resetInput,
}: CreateTableProps) => {
  return (
    <>
      <button
        className={` ${openTSettings === "close" || openTSettings === "created" ? "flex" : "hidden"}
            font-bold bg-blue-700 ring-2 ring-blue-500 text-white text-xl p-2 flex gap-0.5 
            cursor-pointer rounded-2xl justify-center items-center text-center m-2
            hover:scale-105 transition-all duration-100 print:hidden
        `}
        onClick={() => {
          setOpenTSettings("open");
          resetInput();
        }}
      >
        <Table />
        {openTSettings === "created"
          ? "Create another Table"
          : "Create a Table"}
      </button>
    </>
  );
};
