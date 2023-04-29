import { useState } from "react";
import "./Folder.css";
const Folder = (props) => {
  const { folderTree, handleAddItem, onHandleDelete } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAddFile, setIsAddFile] = useState(false);
  const [isAddFolder, setIsAddFolder] = useState(false);

  const onFolderClick = () => {
    setIsExpanded(!isExpanded);
  };

  const addFolder = () => {
    setIsAddFolder(!isAddFolder);
    setIsAddFile(false);
  };

  const addFile = () => {
    setIsAddFile(!isAddFile);
    setIsAddFolder(false);
  };

  const submitHander = (event, isFolder, folderName) => {
    if (event.target.value) {
      if (event.key === "Enter") {
        let item = {};
        if (isFolder) {
          item = {
            id: new Date().toTimeString(),
            type: "directory",
            name: event.target.value,
            children: []
          };
          setIsAddFolder(false);
        } else {
          item = {
            id: new Date().toTimeString(),
            type: "file",
            name: event.target.value
          };
          setIsAddFile(false);
        }

        handleAddItem(folderName, item);
      }
    }
  };

  if (folderTree.type === "directory")
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder">
          <span onClick={onFolderClick}>
            <>📁</>
            {folderTree.name}
          </span>
          <div
            style={{ display: "inline", marginLeft: "25px" }}
            onClick={addFolder}
          >
            <>📂</>
          </div>
          {isAddFolder && (
            <input
              type="text"
              placeholder="enter folder name"
              onKeyDown={(ev) => submitHander(ev, true, folderTree.name)}
            />
          )}
          <div
            style={{ display: "inline", marginLeft: "5px" }}
            onClick={addFile}
          >
            <>📃</>
          </div>
          {isAddFile && (
            <input
              type="text"
              placeholder="enter file name"
              onKeyDown={(ev) => submitHander(ev, false, folderTree.name)}
            />
          )}
          <div
            style={{ display: "inline", marginLeft: "5px" }}
            onClick={() => onHandleDelete(folderTree)}
          >
            <>🗑️</>
          </div>
        </div>
        <div
          style={{ display: isExpanded ? "block" : "none" }}
          className="tree"
        >
          {folderTree.children.map((obj) => (
            <Folder
              id={obj.name}
              folderTree={obj}
              handleAddItem={handleAddItem}
              onHandleDelete={onHandleDelete}
            />
          ))}
        </div>
      </div>
    );
  else if (folderTree.type === "file") {
    return (
      <span className="file">
        <>📄</> {folderTree.name}
      </span>
    );
  } else {
    return <></>;
  }
};

export default Folder;
