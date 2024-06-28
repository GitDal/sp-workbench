import React from "react";
import { useWorkbench } from "../../hooks/useWorkbench";
import "@pnp/sp/lists";
import {
  Button,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  SelectTabData,
  SelectTabEvent,
  Tab,
  TabList,
} from "@fluentui/react-components";
import {
  AddRegular,
  SettingsRegular,
  BinRecycleRegular,
} from "@fluentui/react-icons";
import { useWorkbenchQuery } from "../../hooks/useWorkbenchQuery";
import { ListTable } from "./ListTable";
import { useLocation } from "wouter";

export function ViewLists() {
  const { sp } = useWorkbench();
  const [, setLocation] = useLocation();

  const { data: lists } = useWorkbenchQuery({
    queryKey: ["lists"],
    queryFn: () => sp?.web.lists(),
  });

  const [selectedValue, setSelectedValue] = React.useState("contents");

  const onTabSelect = (_event: SelectTabEvent, data: SelectTabData) => {
    setSelectedValue(data.value as string);
  };

  return (
    <>
      <div className="flex justify-between">
        <Menu>
          <MenuTrigger disableButtonEnhancement>
            <MenuButton
              appearance="subtle"
              icon={<AddRegular />}
              className="h-11"
            >
              New
            </MenuButton>
          </MenuTrigger>

          <MenuPopover>
            <MenuList>
              <MenuItem onClick={() => alert("Not implemented.")}>
                List
              </MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>

        <div>
          <Button
            appearance="subtle"
            icon={<SettingsRegular />}
            className="h-11"
            onClick={() => setLocation("/_layouts/settings.aspx")}
          >
            Site settings
          </Button>
          <Button
            appearance="subtle"
            icon={<BinRecycleRegular />}
            className="h-11"
            onClick={() => setLocation("/_layouts/AdminRecycleBin.aspx")}
          >
            Recycle bin (0)
          </Button>
        </div>
      </div>

      <main className="w-full flex justify-start p-8 flex-col">
        <TabList selectedValue={selectedValue} onTabSelect={onTabSelect}>
          <Tab value="contents">Contents</Tab>
          <Tab value="subsites">Subsites</Tab>
        </TabList>
        <Divider className="pt-2" />
        {selectedValue === "contents" ? <ListTable lists={lists} /> : null}

        {selectedValue === "subsites"
          ? "Your site doesn't have any subsites"
          : null}
      </main>
    </>
  );
}
