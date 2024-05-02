import { QueryClient } from "@tanstack/react-query";
import { createContext } from "react";

export const WorkbenchQueryClientContext = createContext<QueryClient | undefined>(undefined);