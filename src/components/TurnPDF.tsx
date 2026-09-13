import { FileText } from "lucide-react";
export const TurnToPdf = () => {
  return (
    <>
      <button
        className="p-2 ring-2 ring-red-700 bg-red-500 font-sans text-white 
        text-base font-base my-2 rounded-2xl cursor-pointer
        hover:scale-110 transition-all duration-100
        flex print:hidden
        "
        onClick={() => {
          window.print();
          console.log("table turning into a pdf...");
        }}
      >
        <FileText className="mx-0.5" />
        PDF'e Dönüştür
      </button>
    </>
  );
};
