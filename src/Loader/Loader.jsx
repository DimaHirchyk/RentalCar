import { BeatLoader } from "react-spinners";
export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 z-50">
      <BeatLoader color="#1d2cf4" />
    </div>
  );
}
