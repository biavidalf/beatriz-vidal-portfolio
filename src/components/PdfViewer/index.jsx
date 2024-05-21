import { X, Download } from "lucide-react";
import { getImageURL } from "../../utils/imageURL";

export default function PdfViewer({ pdfPath, isActive, setIsActive, style }) {
  return (
    isActive && (
      <>
        <div className={`absolute z-50 h-[600px] w-full sm:w-[80%] sm:mx-auto ${style}`}>
          <object
            className="absolute"
            data={getImageURL(`${pdfPath}`)}
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
          <div className="absolute right-7 top-2 space-y-2 lg:top-16">
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
