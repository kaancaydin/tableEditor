import type { TableConfig } from "../types/types";
import { TableData } from "./TableData";

export const A4Preview = ({ data }: { data: TableConfig }) => {
  return (
    <div className="w-[210mm] h-[297mm]  hidden print:flex justify-center items-center">
      <TableData data={data} />
    </div>
  );
};
