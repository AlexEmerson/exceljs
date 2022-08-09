import ExcelJS from "exceljs";

const workbook = new ExcelJS.Workbook();
const sheet = workbook.addWorksheet("My Sheet");

sheet.addRow(["Test", "row"]);
workbook.xlsx
  .writeFile("./countries.xlsx")
  .then(() => console.log("File saved"));
