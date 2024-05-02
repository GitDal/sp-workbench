import { ReactNode } from "react";
import { SharePoint } from "./SharePoint";

type Props = {
  children: ReactNode | ((workbench: any) => ReactNode);
};

export function SPWorkbench(props: Props) {
  return <SharePoint {...props} />;
}
