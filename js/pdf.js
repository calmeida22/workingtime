var elem = document.getElementById("relatorio");
elem.onclick = function () {
    // Instanciar o jsPDF
    var doc = new jsPDF();
    
    doc.autoTable({
        html: '#tableClient',
        didDrawCell: function (data) {
            if (data.column.dataKey === 5 && data.cell.section === 'body') {
                doc.autoTable({
                    startY: data.cell.y + 2,
                    margin: { left: data.cell.x + data.cell.padding('left') },
                    tableWidth: 'wrap',
                    theme: 'grid',
                    styles: {
                        fontSize: 7,
                        cellPadding: 1,
                    }
                });
            }
        },
        columnStyles: {
            5: { cellWidth: 40 }
        },
        bodyStyles: {
            minCellHeight: 10
        }
    });

    // Gerar PDF
    doc.save('clientes.pdf');
};