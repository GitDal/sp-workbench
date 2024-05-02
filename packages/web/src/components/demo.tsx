import { SPFx } from "@pnp/sp";
import { useEffect, useState } from "react";
import { DisplayMode } from "sp-workbench/src";

type Props = {
  context: Parameters<typeof SPFx>[0];
  displayMode: DisplayMode;
  properties: { title: string };
};

export function Demo(props: Props) {
  const [item, setItem] = useState<{ Id: number; Title: string }>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${props.context.pageContext.web.absoluteUrl}/_api/web/lists/getbytitle('Demo')/items`
      );
      const json = await response.json();
      setItem(json[0]);
    })();
  }, [props.context]);

  return (
    <div>
      {props.displayMode === DisplayMode.Edit && <div>Edit</div>}
      <h1 style={{ fontWeight: "bold" }}>{props.properties.title}</h1>
      {item && (
        <div>
          Id: {item.Id}, Title: {item.Title}
        </div>
      )}
    </div>
  );
}
