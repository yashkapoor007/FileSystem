const folderTree = {
  id: "",
  name: "photos",
  type: "directory",
  children: [
    {
      id: "summer",
      name: "summer",
      type: "directory",
      children: [
        {
          id: "summer/june",
          name: "june",
          type: "directory",
          children: [
            {
              id: "summer/june/windsurf.jpg",
              name: "windsurf.jpg",
              type: "file"
            }
          ]
        }
      ]
    },
    {
      id: "winter",
      name: "winter",
      type: "directory",
      children: [
        {
          id: "winter/january",
          name: "january",
          type: "directory",
          children: [
            {
              id: "winter/january/ski.png",
              name: "ski.png",
              type: "file"
            },
            {
              id: "winter/january/snowboard.jpg",
              name: "snowboard.jpg",
              type: "file"
            }
          ]
        }
      ]
    }
  ]
};

export default folderTree;
