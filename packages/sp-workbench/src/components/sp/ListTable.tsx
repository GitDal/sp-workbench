import { useMemo } from "react";
import {
  TableRegular,
  DocumentFolderRegular,
} from "@fluentui/react-icons";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
} from "@fluentui/react-components";
import { IListInfo } from "@pnp/sp/lists";

type Props = {
  lists?: Array<IListInfo>;
};

export const ListTable = (props: Props) => {
  const { lists } = props;

  const rows = useMemo(() => {
    if (!lists) {
      return [];
    }

    const getListType = (baseTemplate: number) => {
      switch (baseTemplate) {
        case 101:
          return "Document library";
        default:
          return "List";
      }
    };

    return lists.map((list) => {
      return {
        id: list.Id,
        name: {
          title: list.Title,
          icon:
            list.BaseTemplate === 101 ? (
              <DocumentFolderRegular />
            ) : (
              <TableRegular />
            ),
        },
        type: getListType(list.BaseTemplate),
        items: list.ItemCount,
        modified: list.LastItemModifiedDate,
      };
    });
  }, [lists]);

  const columns = useMemo(
    () => [
      {
        columnKey: "name",
        label: "Name",
      },
      { columnKey: "type", label: "Type" },
      { columnKey: "items", label: "Items" },
      { columnKey: "modified", label: "Modified" },
    ],
    []
  );

  return (
    <>
      <div className="py-4" />
      <Table arial-label="Default table">
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHeaderCell key={column.columnKey}>
                <span className="font-semibold">{column.label}</span>
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <TableCellLayout
                  media={<div className="w-9">{row.name.icon}</div>}
                >
                  {row.name.title}
                </TableCellLayout>
              </TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.items}</TableCell>
              <TableCell>{row.modified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
