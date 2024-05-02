import { Tenant } from "msw-sp";

const url = "https://demo.sharepoint.com";

export const tenant: Tenant = {
    title: "Demo",
    url,
    sites: {
        "/": {
            rootWeb: {
                title: "Demo",
                serverRelativeUrl: "/",
                lists: [
                    {
                        id: "73664cb0-4cd6-45d3-8750-2c40c9695977",
                        title: "Demo",
                        baseTemplate: 100,
                        hidden: false,
                        url: "Lists/Demo",
                        items: [
                            {
                                "Id": 1,
                                "Title": "Demo",
                                "ID": 1,
                                "Modified": "2024-01-04T11:56:54Z",
                                "Created": "2023-10-10T06:01:48Z",
                                "AuthorId": 1073741822,
                                "EditorId": 1073741822,
                            },
                        ]
                    },
                ],
            },
        },
    },
};
