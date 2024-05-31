import React from "react";
import { useWorkbench } from "../../hooks/useWorkbench";
import "@pnp/sp/lists";
import {
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
import { AddRegular } from "@fluentui/react-icons";
import { useWorkbenchQuery } from "../../hooks/useWorkbenchQuery";
import { ListTable } from "./ListTable";

export function ViewLists() {
  const { sp } = useWorkbench();

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
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <MenuButton appearance="subtle" icon={<AddRegular />}>
            New
          </MenuButton>
        </MenuTrigger>

        <MenuPopover>
          <MenuList>
            <MenuItem onClick={() => alert("Not implemented.")}>List</MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>

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
