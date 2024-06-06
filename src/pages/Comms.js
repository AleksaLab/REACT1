import Header from "../comps/Head";
import Foot from "../comps/Footer";
import '../main.css';
import { useState } from "react";
import Comment from "../components/Comment";
import useNode from "../hooks/useNode";
import "../sass/style.css";

const comments = {
  id: 1,
  items: [],
};
const Comm = () => {
  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  return (
    <div className="App">
        <Header/>
        <div className="body5">
            <div className="bod5">
      <Comment
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        comment={commentsData}
        
      />

      </div>
      </div>
      <Foot/>
    </div>
  );
};

export default Comm;