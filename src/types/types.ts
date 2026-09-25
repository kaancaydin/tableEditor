import type { Dispatch, SetStateAction } from "react";

export type TableStatus = "open" | "close" | "created"; //yeni tipler eklenecek

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

export type SetTableProps = {
  //setOpenTSettings: React.Dispatch<React.SetStateAction<TableStatus>>;
  rowNum: number | "";
  colNum: number | "";
  headerVal: string;
  colVal: string;
};
export type SetTableConfig = {
  setOpenTSettings: React.Dispatch<React.SetStateAction<TableStatus>>;
  data: SetTableProps;
  setData: Dispatch<SetStateAction<TableConfig>>;
};

export type TableProps = {
  rowNum: number | "";
  colNum: number | "";
  headerVal: string;
  colVal: string;
  //style?: string;
};

export type TableConfig = {
  rowNum: number | "";
  colNum: number | "";
  headerVal: string;
  colVal: string;
};
