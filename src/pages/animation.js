import PdfViewer from "@/components/common/PdfViewer";
import Service from "@/components/Service";
import React, { useState } from "react";

export default function animation() {
  const [file, setFile] = useState("/Muhammad Haris.pdf");

  return (
    <div>
      <Service type={"animation"} />
      <PdfViewer file={file} />
    </div>
  );
}
