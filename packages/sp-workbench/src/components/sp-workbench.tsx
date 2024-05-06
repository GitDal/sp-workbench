import { SharePoint } from "./SharePoint";

type Props = React.ComponentProps<typeof SharePoint>;

export function SPWorkbench(props: Props) {
  return <SharePoint {...props} />;
}
