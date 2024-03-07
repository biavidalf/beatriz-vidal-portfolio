import { Alert } from "@material-tailwind/react";
import { X, Download } from "lucide-react";

export default function PdfViewer({ pdfPath, isActive, setIsActive }) {
  return (
    isActive && (
      <>
        <div className="absolute h-[600px] w-[80%]">
          <object
            className="absolute"
            data={`src/assets/${pdfPath}`}
            width="100%"
            height="100%"
            title="BeatrizVidalResume"
            type="application/pdf"
          >
            <embed
              src="https://drive.google.com/file/d/1-gqgpZ0nk3tp10tkza3D2WGJe5-_IrNq/preview"
              width="100%"
              height="100%"
            />
          </object>
          <div className="absolute left-2 top-2 space-y-2 lg:top-16">
            <button
              onClick={() => setIsActive(false)}
              className="rounded bg-black/70 p-1 text-gray-300 transition-colors hover:bg-black/50"
            >
              <X />
            </button>
            <a
              href={`src/assets/${pdfPath}`}
              download={true}
              className="flex items-center justify-center rounded bg-black/70 p-1 text-gray-300 transition-colors hover:bg-black/50"
            >
              <Download />
            </a>
          </div>
        </div>
      </>
    )
  );
}

{
  /*
  
  
  <object
        data="src/assets/resume/resume.pdf"
        type="application/pdf"
        width="80%"
        height="600px"
        className="absolute"
      >
        <Alert
          onClose={() => setIsActive(false)}
          className="rounded border border-stroke bg-bg-glass/85"
        >
          It appears you don't have a PDF plugin for this browser. No biggie...
          you can <a href="resume.pdf">click here to download the PDF file.</a>
        </Alert>
      </object> */
}
