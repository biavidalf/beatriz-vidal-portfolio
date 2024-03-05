import IconReact from "../../../../assets/icons/technologies/icon-react.svg";
import ScreenshotPhais from "../../../../assets/projects/phais-plus/cadastro.png";

export default function Project({ openView }) {
  return (
    <div
      onClick={openView}
      className="relative cursor-pointer transition duration-500 ease-in-out hover:scale-105"
    >
      <img src={ScreenshotPhais} alt="" className=" rounded-md" />
      <div className="absolute left-0 top-0 flex h-full w-full items-end justify-between rounded-md bg-gradient-to-t from-black/60 via-black/30 to-black/0 px-7 py-5  hover:bg-gradient-to-t hover:from-deep-purple-900/80 hover:via-deep-purple-900/30 hover:to-deep-purple-900/0">
        <h1 className="font-medium">Phais+</h1>
        <div className="flex gap-2">
          <img src={IconReact} alt="" className="w-6" />
          <img src={IconReact} alt="" className="w-6" />
          <img src={IconReact} alt="" className="w-6" />
        </div>
      </div>
    </div>
  );
}
