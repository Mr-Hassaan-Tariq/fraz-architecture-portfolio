import React, { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Setting workerSrc for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

 
export default function PdfViewer(props) {
  const [totalPages, setTotalPages] = useState(null);

  return (
    <div>
      <div style={{ height: "750px" }}>
        <Document
          file={props.file}
          onLoadSuccess={({ numPages }) => setTotalPages(numPages)}
        >
          {Array.from(new Array(Math.ceil(totalPages)), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
}
