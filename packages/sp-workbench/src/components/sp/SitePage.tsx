import { ToolbarButton } from "@fluentui/react-components";
import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction } from "react";
import "@pnp/sp/webs";
import { BookOpenRegular, EditRegular } from "@fluentui/react-icons";

type Props = {
  children: ReactNode;
  editMode: boolean;
  setEditMode: Dispatch<SetStateAction<boolean>>;
};

export function SitePage(props: Props) {
  const { editMode, setEditMode } = props;

  return (
    <>
      {/* Page Command Bar */}
      <div className="h-10 flex items-center justify-end print:hidden">
        <ToolbarButton
          className={clsx("p-4", {
            "bg-[#037c78] rounded text-white": editMode,
          })}
          icon={editMode ? <BookOpenRegular /> : <EditRegular />}
          onClick={() => {
            setEditMode((em) => !em);
          }}
        >
          {editMode ? "Publish" : "Edit"}
        </ToolbarButton>
      </div>

      {/* CanvasComponent */}
      <div>
        {/* Canvas */}
        <div>
          {/* CanvasLayout */}
          <div>
            {/* CanvasZone */}
            <div
              style={{
                padding: "0 16px",
              }}
            >
              {/* CanvasZone-SectionContainer */}
              <div
                style={{
                  display: "flex",
                  maxWidth: "1236px",
                  margin: "auto",
                }}
              >
                {/* CanvasSection */}
                <div
                  style={{
                    minHeight: "auto",
                    width: "100%",
                  }}
                >
                  {/* CanvasControl */}
                  <div
                    style={{
                      margin: "24px 0",
                      padding: "8px",
                    }}
                  >
                    {props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
