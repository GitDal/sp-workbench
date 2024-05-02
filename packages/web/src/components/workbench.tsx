import { useMemo } from "react";
import { SPWorkbench } from "sp-workbench/src/";
import { Demo } from "./demo";

export default function Workbench() {
  type Context = React.ComponentProps<typeof Demo>["context"];
  const context = useMemo<Context>(() => {
    return {
      pageContext: {
        web: {
          absoluteUrl: window.location.origin,
        },
        legacyPageContext: {
          formDigestTimeoutSeconds: 60,
          formDigestValue: "digest",
        },
      },
    };
  }, []);

  return (
    <SPWorkbench>
      {(workbench) => (
        <Demo
          context={context}
          displayMode={workbench.displayMode}
          properties={{ title: "Title" }}
        />
      )}
    </SPWorkbench>
  );
}
