import type { Dispatch, SetStateAction } from "react";

export type TableStatus = "open" | "close" | "created" | "header"; //yeni tipler eklenecek

export type TableSettingType = {
  openTSetting: TableStatus;
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

export type SetTableProps = {
  //setOpenTSettings: React.Dispatch<React.SetStateAction<TableStatus>>;
  rowNum: number | "";
  colNum: number | "";
  headerVal: (string | number)[];
  colVal: string;
};
export type SetTableConfig = {
  openTSettings: TableStatus;
  setOpenTSettings: React.Dispatch<React.SetStateAction<TableStatus>>;
  data: SetTableProps;
  setData: Dispatch<SetStateAction<TableConfig>>;
};

export type TableProps = {
  rowNum: number | "";
  colNum: number | "";
  headerVal: (string | number)[];
  colVal: string;
  //style?: string;
};

export type TableConfig = {
  rowNum: number | "";
  colNum: number | "";
  headerVal: (string | number)[];
  colVal: string;
};
