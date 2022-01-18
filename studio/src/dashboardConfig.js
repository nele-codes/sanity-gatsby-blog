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
                    "61e60351d09d80657f28cde5",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-sadeeom4",
                  apiId: "6a3dbe88-efe7-4dc0-9eae-3bf20d17cb77",
                },
                {
                  buildHookId: "61e60352a71e1e1df473ae7a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-961md9mk",
                  apiId: "cf387f3d-084c-442e-b978-a10021a852ac",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/nele-codes/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-961md9mk.netlify.app",
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
