import { DisplayMode } from "../types/DisplayMode";
import { SPFI, spfi } from "@pnp/sp";
import { createContext } from "react";

type WorkbenchContext = {
    sp: SPFI;
    displayMode: DisplayMode;
};

export const WorkbenchContext = createContext<WorkbenchContext>({
    sp: spfi().using(),
    displayMode: DisplayMode.Read,
});