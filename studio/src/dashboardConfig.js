export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "615758700c5b50134093f4fe",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-w9yffg2k",
                  apiId: "6884b112-58c1-43e6-bdaa-8ced1cad8bd7",
                },
                {
                  buildHookId: "61575870280be01877789296",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-kuuzt6vv",
                  apiId: "abda87cd-cf07-4a41-b789-d34599968145",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Blake-Trapnell/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-kuuzt6vv.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
