const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
        AlignmentType, HeadingLevel, BorderStyle, WidthType, ShadingType, LevelFormat } = require('docx');

// Đọc hình ảnh
const usercaseTQImage = fs.readFileSync('/home/claude/thanhtrung.file/PTvkt/usercasetq.png');
const logo4plus1 = fs.readFileSync('/home/claude/thanhtrung.file/PTvkt/usercasetq.png'); // Tạm dùng ảnh này

const doc = new Document({
  styles: {
    default: { 
      document: { 
        run: { font: "Times New Roman", size: 26 } // 13pt default
      } 
    },
    paragraphStyles: [
      { 
        id: "Heading1", 
        name: "Heading 1", 
        basedOn: "Normal", 
        next: "Normal", 
        quickFormat: true,
        run: { size: 32, bold: true, font: "Times New Roman", color: "000000" },
        paragraph: { 
          spacing: { before: 240, after: 120 }, 
          outlineLevel: 0,
          alignment: AlignmentType.LEFT
        } 
      },
      { 
        id: "Heading2", 
        name: "Heading 2", 
        basedOn: "Normal", 
        next: "Normal", 
        quickFormat: true,
        run: { size: 28, bold: true, font: "Times New Roman", color: "000000" },
        paragraph: { 
          spacing: { before: 180, after: 120 }, 
          outlineLevel: 1,
          alignment: AlignmentType.LEFT
        } 
      },
      { 
        id: "Heading3", 
        name: "Heading 3", 
        basedOn: "Normal", 
        next: "Normal", 
        quickFormat: true,
        run: { size: 26, bold: true, font: "Times New Roman", color: "000000", italics: true },
        paragraph: { 
          spacing: { before: 120, after: 120 }, 
          outlineLevel: 2,
          alignment: AlignmentType.LEFT
        } 
      },
    ]
  },
  numbering: {
    config: [
      { 
        reference: "bullets",
        levels: [
          { 
            level: 0, 
            format: LevelFormat.BULLET, 
            text: "•", 
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } 
          }
        ] 
      },
      { 
        reference: "numbers",
        levels: [
          { 
            level: 0, 
            format: LevelFormat.DECIMAL, 
            text: "%1.", 
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } 
          }
        ] 
      },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: {
          width: 11906,   // A4 width
          height: 16838   // A4 height
        },
        margin: { 
          top: 1440,    // 1 inch = 1440 DXA
          right: 1134,  // 0.79 inch
          bottom: 1440, 
          left: 1417    // 0.98 inch
        }
      }
    },
    children: [
      // Tiêu đề Chương
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER,
        spacing: { before: 240, after: 360 },
        children: [
          new TextRun({
            text: "CHƯƠNG 1. TỔNG QUAN ĐỀ TÀI",
            bold: true,
            size: 32,
            font: "Times New Roman"
          })
        ]
      }),

      // 1.1
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
        children: [
          new TextRun({
            text: "1.1. Tổng quan về ngôn ngữ UML",
            bold: true,
            size: 28,
            font: "Times New Roman"
          })
        ]
      }),

      // 1.1.1
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 180, after: 120 },
        children: [
          new TextRun({
            text: "1.1.1. Giới thiệu UML",
            bold: true,
            italics: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // a) Khái niệm
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "a) Khái niệm UML",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "UML (Unified Modeling Language – Ngôn ngữ Mô hình hóa Thống nhất) là một ngôn ngữ mô hình hóa trực quan, theo chuẩn quốc tế, được thiết kế đặc biệt để đặc tả, hình dung, xây dựng và làm tài liệu cho các hệ thống phần mềm hướng đối tượng. Theo Object Management Group (OMG), UML không phải là một phương pháp luận phát triển phần mềm, mà là một công cụ ngôn ngữ linh hoạt có thể áp dụng cho nhiều quy trình phát triển khác nhau, từ Waterfall truyền thống cho đến Agile hiện đại.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Ngôn ngữ này được phát triển ban đầu bởi Grady Booch, James Rumbaugh và Ivar Jacobson (thường được gọi là \"Three Amigos\") vào giữa những năm 1990, nhằm hợp nhất các phương pháp tiếp cận mô hình hóa hướng đối tượng đang phân mảnh thời bấy giờ. Việc sử dụng UML trong quá trình phân tích và thiết kế hệ thống website bán lẻ như HT Market giúp đội ngũ phát triển giảm thiểu rủi ro, kiểm soát độ phức tạp của luồng dữ liệu lớn và đảm bảo kiến trúc phần mềm có khả năng mở rộng (scalability) cao trong tương lai.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // b) Các khối xây dựng cơ bản
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "b) Các khối xây dựng cơ bản của UML (UML Building Blocks)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Ngôn ngữ Mô hình hóa Thống nhất (UML) được cấu thành từ ba khối kiến tạo cốt lõi. Sự kết hợp của ba khối này cho phép mô tả toàn diện kiến trúc của bất kỳ hệ thống phần mềm nào:",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 1. Các phần tử
      new Paragraph({
        spacing: { after: 80 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "1. Các phần tử (Things)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: " – Đây là những thực thể trừu tượng và là những thành phần cơ bản nhất cấu tạo nên mô hình. Chúng được chia thành bốn nhóm chính:",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: "Phần tử cấu trúc (Structural Things): Đại diện cho các thực thể tĩnh như Class (Lớp), Interface (Giao diện), Component (Thành phần), và Node (Nút).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: "Phần tử hành vi (Behavioral Things): Mô tả hành động động của hệ thống, bao gồm Interaction (Tương tác) và State Machine (Máy trạng thái).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: "Phần tử nhóm (Grouping Things): Là cơ chế tổ chức các mô hình thành các đơn vị quản lý logic. Tiêu biểu và phổ biến nhất là Package (Gói).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Phần tử chú thích (Annotational Things): Đóng vai trò giải thích, ghi chú hoặc làm rõ các quy tắc, ràng buộc cho các phần tử khác trong mô hình. Đại diện chính là Note (Chú thích).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 2. Các mối quan hệ
      new Paragraph({
        spacing: { after: 80 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "2. Các mối quan hệ (Relationships)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: " – Mối quan hệ thể hiện cơ chế liên kết và tương tác giữa các phần tử. Có bốn loại quan hệ cơ bản:",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: "Dependency (Sự phụ thuộc): Mối quan hệ ngữ nghĩa một chiều, trong đó sự thay đổi cấu trúc hoặc ý nghĩa của phần tử độc lập có thể làm thay đổi phần tử phụ thuộc vào nó.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: "Association (Sự kết hợp): Mối quan hệ cấu trúc mô tả các liên kết vật lý hoặc logic giữa các đối tượng. Các hình thức đặc biệt của Association bao gồm Aggregation (Tích hợp) và Composition (Cấu thành).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: "Generalization (Sự khái quát hóa): Mối quan hệ phân cấp (thường được gọi là quan hệ kế thừa / \"is-a\"), trong đó phần tử con (phần tử chuyên biệt) sẽ thừa hưởng cấu trúc và hành vi của phần tử cha (phần tử khái quát).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: "Realization (Sự hiện thực hóa): Mối quan hệ mang tính hợp đồng, trong đó một phần tử (như Interface) định nghĩa các hành vi, và một phần tử khác (như Class hoặc Component) cam kết thực thi các hành vi đó.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 3. Các biểu đồ
      new Paragraph({
        spacing: { after: 80 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "3. Các biểu đồ (Diagrams)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: " – Biểu đồ là sự sắp xếp và kết nối các phần tử cùng mối quan hệ của chúng để thể hiện một góc nhìn (view) cụ thể về hệ thống. Các biểu đồ UML được chia thành hai nhóm lớn:",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 60 },
        children: [
          new TextRun({
            text: "Biểu đồ cấu trúc (Structural Diagrams): Mô tả cấu trúc tĩnh của hệ thống, bao gồm Class Diagram, Object Diagram, Component Diagram, Deployment Diagram, và Package Diagram.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 180 },
        children: [
          new TextRun({
            text: "Biểu đồ hành vi (Behavioral Diagrams): Mô tả các khía cạnh động của hệ thống, bao gồm Use Case Diagram, Sequence Diagram, Activity Diagram, State Machine Diagram, và Communication Diagram.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 1.1.2 Góc nhìn UML
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 180, after: 120 },
        children: [
          new TextRun({
            text: "1.1.2. Góc nhìn UML",
            bold: true,
            italics: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 180 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Để hiểu và thiết kế toàn diện một hệ thống phần mềm phức tạp như website bán hàng HT Market, UML cung cấp nhiều góc nhìn (perspectives) khác nhau thông qua các biểu đồ chuyên biệt. Trong phân tích và thiết kế hệ thống bằng UML, người ta thường sử dụng mô hình 4+1 View để mô tả kiến trúc phần mềm từ nhiều khía cạnh khác nhau. 5 góc nhìn này giúp các thành phần liên quan (khách hàng, lập trình viên, người kiểm thử...) hiểu rõ hệ thống theo nhu cầu của họ.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // Hình 1: Mô hình 4+1 View
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 120, after: 180 },
        children: [
          new ImageRun({
            data: usercaseTQImage,
            transformation: {
              width: 400,
              height: 300
            },
            type: "png"
          })
        ]
      }),

      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 240 },
        children: [
          new TextRun({
            text: "Hình 1: Mô hình 4+1 View (Kruchten, 1995)",
            italics: true,
            size: 24,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Dưới đây là chi tiết về 5 góc nhìn:",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 1. Góc nhìn Use Case
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "1. Góc nhìn Use Case (Scenarios View)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Đây là góc nhìn trung tâm (cái \"+1\"), đóng vai trò kết nối tất cả các góc nhìn khác. Mục tiêu là mô tả các chức năng của hệ thống từ quan điểm của người dùng cuối.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 60 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Nội dung: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Xác định các tác nhân (Actors) và các kịch bản sử dụng (Use Cases).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Biểu đồ đại diện: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Biểu đồ Use Case (Use Case Diagram), Biểu đồ Hoạt động (Activity Diagram).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 2. Góc nhìn Logic
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "2. Góc nhìn Logic (Design View)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Tập trung vào các chức năng bên trong hệ thống nhằm đáp ứng yêu cầu của người dùng.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 60 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Mục tiêu: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Mô tả cấu trúc dữ liệu và các thành phần logic của hệ thống.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 60 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Nội dung: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Các lớp (classes), giao diện (interfaces) và sự cộng tác giữa chúng.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Biểu đồ đại diện: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Biểu đồ Lớp (Class Diagram), Biểu đồ Đối tượng (Object Diagram), Biểu đồ Trạng thái (State Machine Diagram).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 3. Góc nhìn Tiến trình
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "3. Góc nhìn Tiến trình (Process View)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Tập trung vào các khía cạnh động và hiệu năng của hệ thống khi vận hành.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 60 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Mục tiêu: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Mô tả các luồng điều khiển, sự đồng bộ và các tiến trình chạy song song.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 60 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Nội dung: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Cách các thành phần giao tiếp với nhau theo thời gian thực để thực hiện một tác vụ.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Biểu đồ đại diện: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Biểu đồ Tuần tự (Sequence Diagram), Biểu đồ Cộng tác (Communication Diagram).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 4. Góc nhìn Triển khai
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "4. Góc nhìn Triển khai (Implementation / Development View)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Mô tả cách hệ thống được tổ chức thành các mô-đun phần mềm cụ thể.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 60 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Mục tiêu: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Tập trung vào việc quản lý mã nguồn, các thư viện và file thực thi.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 60 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Nội dung: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Cách phân chia hệ thống thành các thành phần (components) và gói (packages).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Biểu đồ đại diện: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Biểu đồ Thành phần (Component Diagram), Biểu đồ Gói (Package Diagram).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 5. Góc nhìn Vật lý
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "5. Góc nhìn Vật lý (Deployment View)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Mô tả cách phần mềm được cài đặt lên các thiết bị phần cứng.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 60 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Mục tiêu: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Xác định cấu trúc vật lý của hệ thống bao gồm máy chủ, mạng và các thiết bị ngoại vi.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 60 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Nội dung: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Cách phân bổ các thành phần phần mềm lên các nút (nodes) phần cứng.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 240 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Biểu đồ đại diện: ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Biểu đồ Triển khai (Deployment Diagram).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 1.1.3 Biểu đồ UML
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 180, after: 120 },
        children: [
          new TextRun({
            text: "1.1.3. Biểu đồ UML",
            bold: true,
            italics: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Trong phạm vi đồ án này, nhóm tập trung vào bốn loại biểu đồ chính được sử dụng thực tế để phân tích và thiết kế hệ thống HT Market:",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // a) Use Case Diagram
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "a) Use Case Diagram (Biểu đồ case sử dụng)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 180 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Biểu đồ Use Case thuộc nhóm biểu đồ hành vi, có chức năng mô tả hệ thống từ góc nhìn của người dùng cuối (end-user). Biểu đồ này không giải thích \"hệ thống làm việc như thế nào\" mà tập trung vào \"hệ thống làm được những gì\" và \"ai là người tương tác với nó\". Các thành phần chính bao gồm Actor (Tác nhân – đại diện cho người dùng hoặc hệ thống bên ngoài) và Use Case (Ca sử dụng – chức năng của hệ thống). Trong dự án này, biểu đồ Use Case giúp xác định rõ ranh giới của website HT Market và các tính năng cốt lõi mà người dùng có thể thực hiện.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // b) Sequence Diagram
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "b) Sequence Diagram (Biểu đồ tuần tự)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 180 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Thuộc nhóm biểu đồ tương tác, Sequence Diagram thể hiện cách các đối tượng (objects) trong hệ thống giao tiếp với nhau theo trình tự thời gian. Đối với một hệ thống thương mại điện tử xử lý nhiều giao dịch đồng thời, biểu đồ này cực kỳ quan trọng để đặc tả luồng thông điệp (message flow) của các chức năng phức tạp như quá trình đăng nhập qua token, xử lý luồng đăng tải và xử lý video/hình ảnh. Nó giúp các nhà phát triển hình dung được sự tương tác giữa giao diện người dùng (Client/Frontend), máy chủ xử lý logic (Backend/API) và cơ sở dữ liệu (Database).",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // c) Activity Diagram
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "c) Activity Diagram (Biểu đồ hoạt động)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 180 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Activity Diagram là một biến thể của biểu đồ trạng thái, tập trung mô tả dòng chảy điều khiển (flow of control) từ một hoạt động này sang một hoạt động khác. Nó rất giống với lưu đồ toán (flowchart) nhưng hỗ trợ tốt hơn cho việc mô tả các tiến trình xử lý song song (concurrent processes). Biểu đồ này được ứng dụng để mô tả chi tiết logic nghiệp vụ (business logic) của một Use Case, chẳng hạn như quy trình đặt hàng từ khi thêm sản phẩm vào giỏ đến khi thanh toán thành công.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // d) Class Diagram
      new Paragraph({
        spacing: { before: 120, after: 120 },
        children: [
          new TextRun({
            text: "d) Class Diagram (Biểu đồ lớp)",
            bold: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 240 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Class Diagram là biểu đồ quan trọng nhất trong nhóm biểu đồ cấu trúc, đóng vai trò là nền tảng trung tâm của thiết kế hướng đối tượng. Nó mô tả cấu trúc tĩnh của hệ thống bằng cách hiển thị các Lớp (Classes), Thuộc tính (Attributes), Phương thức (Methods/Operations) và Mối quan hệ giữa các lớp đó. Trong đề tài này, biểu đồ lớp sẽ là bản thiết kế để xây dựng mô hình thực thể – liên kết (ERD) cho cơ sở dữ liệu nhằm lưu trữ thông tin khách hàng, đơn hàng, sản phẩm và danh mục.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 1.2 Mô tả ứng dụng
      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        spacing: { before: 240, after: 120 },
        children: [
          new TextRun({
            text: "1.2. Mô tả ứng dụng",
            bold: true,
            size: 28,
            font: "Times New Roman"
          })
        ]
      }),

      // 1.2.1 Đối tượng sử dụng
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 180, after: 120 },
        children: [
          new TextRun({
            text: "1.2.1. Đối tượng sử dụng",
            bold: true,
            italics: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Hệ thống website HT Market được thiết kế nhằm phục vụ hệ sinh thái người dùng đa dạng, đặc biệt chú trọng vào khả năng mua sắm trực tuyến hàng hóa tạp hóa thiết yếu. Các đối tượng (Actors) chính bao gồm:",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 80 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "1. Khách hàng (Customer): ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Là những cá nhân tham gia vào nền tảng để mua sắm hàng hóa, theo dõi đơn hàng, kết nối với cửa hàng và tương tác với các ưu đãi trực tuyến.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 80 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "2. Khách vãng lai (Guest): ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Người dùng chưa đăng ký tài khoản, có thể xem danh mục và tìm kiếm sản phẩm nhưng chưa thể đặt hàng. Đây là nhóm tiềm năng cần được chuyển đổi thành khách hàng.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 240 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "3. Quản trị viên (Administrator): ",
            bold: true,
            size: 26,
            font: "Times New Roman"
          }),
          new TextRun({
            text: "Đội ngũ vận hành hệ thống, có đặc quyền cao nhất nhằm quản lý tài khoản người dùng, kiểm duyệt sản phẩm, xử lý đơn hàng, duy trì sự ổn định và an toàn của hệ thống.",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // 1.2.2 Các chức năng chính
      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        spacing: { before: 180, after: 120 },
        children: [
          new TextRun({
            text: "1.2.2. Các chức năng chính",
            bold: true,
            italics: true,
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      new Paragraph({
        spacing: { after: 120 },
        alignment: AlignmentType.JUSTIFIED,
        children: [
          new TextRun({
            text: "Bảng dưới đây tóm tắt các chức năng chính của hệ thống website HT Market:",
            size: 26,
            font: "Times New Roman"
          })
        ]
      }),

      // Bảng chức năng
      new Table({
        width: { size: 9355, type: WidthType.DXA },
        columnWidths: [2800, 2100, 4455],
        rows: [
          // Header row
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({ text: "Chức năng", bold: true, size: 26, font: "Times New Roman" })
                    ]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({ text: "Nhóm người dùng", bold: true, size: 26, font: "Times New Roman" })
                    ]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                shading: { fill: "D5E8F0", type: ShadingType.CLEAR },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.CENTER,
                    children: [
                      new TextRun({ text: "Mô tả", bold: true, size: 26, font: "Times New Roman" })
                    ]
                  })
                ]
              })
            ]
          }),
          // Data rows
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Đăng ký / Đăng nhập", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Khách hàng", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Tạo tài khoản mới và đăng nhập vào hệ thống", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Duyệt danh mục sản phẩm", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Tất cả", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Xem danh sách sản phẩm theo danh mục", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Tìm kiếm sản phẩm", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Tất cả", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Tìm kiếm theo tên, danh mục, giá", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Xem chi tiết sản phẩm", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Tất cả", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Xem thông tin đầy đủ về sản phẩm", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Quản lý giỏ hàng", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Khách hàng", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Thêm, xóa, cập nhật số lượng sản phẩm trong giỏ", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Đặt hàng & Thanh toán", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Khách hàng", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Đặt hàng và thanh toán trực tuyến", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Theo dõi đơn hàng", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Khách hàng", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Kiểm tra trạng thái đơn hàng đã đặt", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Quản lý sản phẩm", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Admin", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Thêm, sửa, xóa sản phẩm và danh mục", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Quản lý đơn hàng", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Admin", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Xem, xử lý và cập nhật trạng thái đơn hàng", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Quản lý người dùng", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Admin", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Xem, khóa/mở khóa tài khoản khách hàng", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          }),
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Thống kê & Báo cáo", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2100, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Admin", size: 26, font: "Times New Roman" })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 4455, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 120, right: 120 },
                children: [
                  new Paragraph({
                    children: [new TextRun({ text: "Xem báo cáo doanh thu, thống kê sản phẩm bán chạy", size: 26, font: "Times New Roman" })]
                  })
                ]
              })
            ]
          })
        ]
      }),

      // Chú thích bảng
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 120, after: 240 },
        children: [
          new TextRun({
            text: "Bảng 1: Các chức năng chính của hệ thống HT Market",
            italics: true,
            size: 24,
            font: "Times New Roman"
          })
        ]
      }),

    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync("/mnt/user-data/outputs/Chuong1_TongQuanDeTai.docx", buffer);
  console.log("Đã tạo file Word thành công!");
});
