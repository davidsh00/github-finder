import { useContext } from "react";
import AlertContext from "../../context/Alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return alert.msg === "" ? null : (
    <div className="px-4">
      <div className={`text-sm px-4 py-2 bg-blue-400 inline-block bg-opacity-60 rounded ${alert.type=='error' && ("bg-red-700")}`}>{alert.msg}</div>
    </div>
  );
}

export default Alert;
