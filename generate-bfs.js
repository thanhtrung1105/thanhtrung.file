const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel,
        AlignmentType, WidthType, BorderStyle, ShadingType, PageBreak } = require('docx');
const fs = require('fs');

const border = { style: BorderStyle.SINGLE, size: 1, color: "999999" };
const borders = { top: border, bottom: border, left: border, right: border };

const headerCell = (text) => new TableCell({
  borders,
  shading: { fill: "4472C4", type: ShadingType.CLEAR },
  margins: { top: 60, bottom: 60, left: 80, right: 80 },
  children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text, bold: true, color: "FFFFFF", size: 18 })]
  })]
});

const dataCell = (text) => new TableCell({
  borders,
  margins: { top: 60, bottom: 60, left: 80, right: 80 },
  children: [new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text, size: 18 })]
  })]
});

// BFS data cho graph A
const graphA = {
  name: "a)",
  steps: [
    { step: 1, queue: "[S]", open: "S", closed: "", action: "Khởi tạo S" },
    { step: 2, queue: "[C,B,A]", open: "C,B,A", closed: "S", action: "Mở S → thêm C,B,A" },
    { step: 3, queue: "[B,A,H]", open: "B,A,H", closed: "S,C", action: "Mở C → thêm H,B" },
    { step: 4, queue: "[A,H,F]", open: "A,H,F", closed: "S,C,B", action: "Mở B → thêm F" },
    { step: 5, queue: "[H,F,D]", open: "H,F,D", closed: "S,C,B,A", action: "Mở A → thêm D" },
    { step: 6, queue: "[F,D]", open: "F,D", closed: "S,C,B,A,H", action: "Mở H (đã có F)" },
    { step: 7, queue: "[D,G]", open: "D,G", closed: "S,C,B,A,H,F", action: "Mở F → thêm G ✓" },
    { step: 8, queue: "[G,E]", open: "G,E", closed: "S,C,B,A,H,F,D", action: "Mở D → thêm E" },
    { step: 9, queue: "[]", open: "", closed: "All", action: "Tìm thấy G!" }
  ],
  path: "S → C → B → F → G",
  edges: 4
};

// BFS data cho graph B
const graphB = {
  name: "b)",
  steps: [
    { step: 1, queue: "[S]", open: "S", closed: "", action: "Khởi tạo S" },
    { step: 2, queue: "[B,D,E,P]", open: "B,D,E,P", closed: "S", action: "Mở S → thêm B,D,E,P" },
    { step: 3, queue: "[D,E,P,A]", open: "D,E,P,A", closed: "S,B", action: "Mở B → thêm A" },
    { step: 4, queue: "[E,P,A,C]", open: "E,P,A,C", closed: "S,B,D", action: "Mở D → thêm C,E" },
    { step: 5, queue: "[P,A,C,H,R]", open: "P,A,C,H,R", closed: "S,B,D,E", action: "Mở E → thêm H,R" },
    { step: 6, queue: "[A,C,H,R,Q]", open: "A,C,H,R,Q", closed: "S,B,D,E,P", action: "Mở P → thêm Q" },
    { step: 7, queue: "[C,H,R,Q]", open: "C,H,R,Q", closed: "S,B,D,E,P,A", action: "Mở A (đã có C)" },
    { step: 8, queue: "[H,R,Q,F]", open: "H,R,Q,F", closed: "S,B,D,E,P,A,C", action: "Mở C → thêm F" },
    { step: 9, queue: "[R,Q,F]", open: "R,Q,F", closed: "S,B,D,E,P,A,C,H", action: "Mở H" },
    { step: 10, queue: "[Q,F]", open: "Q,F", closed: "S,B,D,E,P,A,C,H,R", action: "Mở R" },
    { step: 11, queue: "[F]", open: "F", closed: "S,B,D,E,P,A,C,H,R,Q", action: "Mở Q" },
    { step: 12, queue: "[G]", open: "G", closed: "...F", action: "Mở F → G ✓" },
    { step: 13, queue: "[]", open: "", closed: "All", action: "Tìm thấy G!" }
  ],
  path: "S → D → E → R → F → G",
  edges: 5
};

// BFS data cho graph C
const graphC = {
  name: "c)",
  steps: [
    { step: 1, queue: "[S]", open: "S", closed: "", action: "Khởi tạo S" },
    { step: 2, queue: "[B,D,E,P]", open: "B,D,E,P", closed: "S", action: "Mở S → thêm B,D,E,P" },
    { step: 3, queue: "[D,E,P,A]", open: "D,E,P,A", closed: "S,B", action: "Mở B → thêm A" },
    { step: 4, queue: "[E,P,A,C]", open: "E,P,A,C", closed: "S,B,D", action: "Mở D → thêm C,E" },
    { step: 5, queue: "[P,A,C,H,R]", open: "P,A,C,H,R", closed: "S,B,D,E", action: "Mở E → thêm H,R" },
    { step: 6, queue: "[A,C,H,R,Q]", open: "A,C,H,R,Q", closed: "S,B,D,E,P", action: "Mở P → thêm Q" },
    { step: 7, queue: "[C,H,R,Q]", open: "C,H,R,Q", closed: "S,B,D,E,P,A", action: "Mở A (đã có C)" },
    { step: 8, queue: "[H,R,Q,F]", open: "H,R,Q,F", closed: "S,B,D,E,P,A,C", action: "Mở C → thêm F" },
    { step: 9, queue: "[R,Q,F]", open: "R,Q,F", closed: "S,B,D,E,P,A,C,H", action: "Mở H" },
    { step: 10, queue: "[Q,F]", open: "Q,F", closed: "S,B,D,E,P,A,C,H,R", action: "Mở R" },
    { step: 11, queue: "[F]", open: "F", closed: "S,B,D,E,P,A,C,H,R,Q", action: "Mở Q" },
    { step: 12, queue: "[G]", open: "G", closed: "...F", action: "Mở F → G ✓" },
    { step: 13, queue: "[]", open: "", closed: "All", action: "Tìm thấy G!" }
  ],
  path: "S → D → C → F → G",
  edges: 4
};

function createGraphSection(graphData) {
  const tableRows = [
    new TableRow({
      children: [
        headerCell("Bước"),
        headerCell("Queue"),
        headerCell("Open"),
        headerCell("Closed"),
        headerCell("Hành động")
      ]
    })
  ];

  graphData.steps.forEach(row => {
    tableRows.push(new TableRow({
      children: [
        dataCell(row.step.toString()),
        dataCell(row.queue),
        dataCell(row.open),
        dataCell(row.closed),
        dataCell(row.action)
      ]
    }));
  });

  return [
    new Paragraph({
      heading: HeadingLevel.HEADING_2,
      children: [new TextRun({ text: `Đồ thị ${graphData.name}`, bold: true, size: 26 })],
      spacing: { before: 200, after: 150 }
    }),
    
    new Paragraph({
      children: [new TextRun({ text: "1. Biểu diễn đồ thị theo từng bước duyệt cây", bold: true, size: 20 })],
      spacing: { after: 100 }
    }),
    
    new Paragraph({
      children: [new TextRun({ text: "[Hình ảnh đồ thị - vẽ tương tự PDF]", italics: true })],
      spacing: { after: 200 }
    }),

    new Paragraph({
      children: [new TextRun({ text: "2. Lập bảng theo từng bước thuật toán", bold: true, size: 20 })],
      spacing: { before: 100, after: 100 }
    }),
    
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      rows: tableRows
    }),
    
    new Paragraph({
      children: [new TextRun({
        text: `✓ Đường đi: ${graphData.path} (${graphData.edges} cạnh)`,
        bold: true,
        size: 20,
        color: "FF0000"
      })],
      spacing: { before: 150, after: 300 }
    })
  ];
}

const doc = new Document({
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "BÀI TẬP CHO ĐỒ THỊ ĐƯỜNG ĐI VỚI", bold: true, size: 32 })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "Start: S", size: 22, bold: true })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "Goal: G", size: 22, bold: true })],
        spacing: { after: 300 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "YÊU CẦU:", bold: true, size: 28 })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "1. Tìm đường đi từ S đến G bằng BFS:", bold: true, size: 20 })],
        spacing: { after: 100 }
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Biểu diễn đồ thị theo từng bước duyệt cây", size: 20 })]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Lập bảng theo từng bước thuật toán", size: 20 })],
        spacing: { after: 200 }
      }),
      new Paragraph({
        children: [new TextRun({ text: "2. Độ phức tạp thời gian và không gian của thuật toán", bold: true, size: 20 })],
        spacing: { after: 300 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "LỜI GIẢI", bold: true, size: 32 })],
        spacing: { before: 200 }
      }),

      // Graph A
      ...createGraphSection(graphA),

      // Graph B
      ...createGraphSection(graphB),

      // Graph C
      ...createGraphSection(graphC),

      new PageBreak(),

      // Độ phức tạp
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun({ text: "2. ĐỘ PHỨC TẠP THỜI GIAN VÀ KHÔNG GIAN", bold: true, size: 32 })]
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Độ phức tạp Thời gian", bold: true, size: 26 })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "T(n) = O(V + E)", bold: true, size: 24, color: "FF0000" })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "Trong đó: V = số đỉnh, E = số cạnh", size: 20 })],
        spacing: { after: 150 }
      }),
      new Paragraph({
        children: [new TextRun({ text: "Lý do:", bold: true, size: 20 })]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Mỗi đỉnh được xử lý (mở) đúng 1 lần → O(V)", size: 20 })]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Mỗi cạnh được duyệt đúng 1 lần → O(E)", size: 20 })]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Các phép toán queue (thêm/xóa) là O(1)", size: 20 })],
        spacing: { after: 250 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun({ text: "Độ phức tạp Không gian", bold: true, size: 26 })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "S(n) = O(V)", bold: true, size: 24, color: "FF0000" })]
      }),
      new Paragraph({
        children: [new TextRun({ text: "Lý do:", bold: true, size: 20 })]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Queue lưu tối đa V đỉnh trong trường hợp xấu nhất", size: 20 })]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Mảng Visited lưu trạng thái của V đỉnh", size: 20 })]
      }),
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        children: [new TextRun({ text: "Mảng Parent lưu đỉnh cha để reconstruct đường đi", size: 20 })]
      })
    ]
  }],
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [
          {
            level: 0,
            format: "bullet",
            text: "•",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720, hanging: 360 }
              }
            }
          }
        ]
      }
    ]
  }
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("BFS_Solution.docx", buffer);
  console.log("✓ Tạo file hoàn chỉnh: BFS_Solution.docx");
}).catch(err => {
  console.error("✗ Lỗi:", err.message);
});
