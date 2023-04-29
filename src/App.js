import React from "react";
import Folder from "./component/Folder";
import folderTree from "./data/mockFolderTree";
import "./styles.css";

export default function App() {
  const [fileSystem, setFileSystem] = React.useState(folderTree);

  function deleteNode(tree, item) {
    let latestNode = [];
    if (tree.name === item.name) {
      return {};
    } else {
      latestNode = tree?.children?.map((obj) => {
        return deleteNode(obj, item);
      });
    }

    return { ...tree, children: latestNode };
  }

  function onHandleDelete(item) {
    console.log("deleted" + item.name);
    setFileSystem(deleteNode(fileSystem, item));
  }

  function addNode(fileSystem, folderName, item) {
    if (fileSystem.name === folderName) {
      console.log("added" + item.name);
      fileSystem.children.unshift(item);
      return fileSystem;
    }
    let latestNode = [];
    latestNode = fileSystem?.children?.map((obj) => {
      return addNode(obj, folderName, item);
    });

    return { ...fileSystem, children: latestNode };
  }

  function handleAddItem(folderName, item) {
    setFileSystem(addNode(fileSystem, folderName, item));
  }

  return (
    <div className="App">
      <Folder
        folderTree={fileSystem}
        handleAddItem={handleAddItem}
        onHandleDelete={onHandleDelete}
      />
    </div>
  );
}
