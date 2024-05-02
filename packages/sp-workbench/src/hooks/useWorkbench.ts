import { WorkbenchContext } from "../contexts/WorkbenchContext";
import { useContext } from "react";

export const useWorkbench = () => {
    return useContext(WorkbenchContext);
};