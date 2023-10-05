import grapesjs from "grapesjs";
import { useState, useEffect } from "react";
import gjsBlocksBasic from "grapesjs-blocks-basic";
import gjsPresentWebpage from "grapesjs-preset-webpage";

const Editor = () => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [gjsBlocksBasic, gjsPresentWebpage],
      pluginsOpts: {
        gjsPresentWebpage: {},
      },
      modal: true,
    });
    setEditor(editor);
  }, []);
  console.log(editor);
  return (
    <div>
      <div id="editor"></div>
    </div>
  );
};

export default Editor;
