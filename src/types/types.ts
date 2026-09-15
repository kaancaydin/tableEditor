export type TableStatus = "open" | "close" | "created";

export type TableSettingType = {
  setOpenTSettings: React.Dispatch<React.SetStateAction<TableStatus>>;
  rowNum: number | "";
  colNum: number | "";
  headerVal: string;
  colVal: string;
  setRowNum: React.Dispatch<React.SetStateAction<number | "">>;
  setColNum: React.Dispatch<React.SetStateAction<number | "">>;
  setHeaderVal: React.Dispatch<React.SetStateAction<string>>;
  setColVal: React.Dispatch<React.SetStateAction<string>>;
};

export type TableProps = {
  rowNum: number | "";
  colNum: number | "";
  headerVal: string;
  colVal: string;
};
