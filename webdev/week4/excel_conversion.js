// Assuming you're using a library like xlsx to read/write Excel files
const XLSX = require('xlsx');

function convertExcelFormat(inputFile, outputFile) {
    // Read the input Excel file
    const workbook = XLSX.readFile(inputFile);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // Convert the sheet to JSON
    const jsonData = XLSX.utils.sheet_to_json(sheet);

    // Create a new array to hold the converted data
    const convertedData = [];

    // Iterate through each row in the original data
    jsonData.forEach(row => {
        const { State, District, Gift1, Gift2, Gift3, Gift4 } = row;

        // Create a new row for each gift if its quantity is not empty or zero
        [
            { name: 'Gift 1', qty: Gift1 },
            { name: 'Gift 2', qty: Gift2 },
            { name: 'Gift 3', qty: Gift3 },
            { name: 'Gift 4', qty: Gift4 }
        ].forEach(gift => {
            if (gift.qty && gift.qty !== 0) {
                convertedData.push({
                    State,
                    District,
                    'Gift Name': gift.name,
                    Qty: gift.qty
                });
            }
        });
    });

    // Create a new workbook and add the converted data
    const newWorkbook = XLSX.utils.book_new();
    const newSheet = XLSX.utils.json_to_sheet(convertedData);
    XLSX.utils.book_append_sheet(newWorkbook, newSheet, "Converted Data");

    // Write the new workbook to a file
    XLSX.writeFile(newWorkbook, outputFile);

    console.log(`Conversion complete. Output saved to ${outputFile}`);
}

// Usage
convertExcelFormat('input.xlsx', 'output.xlsx');