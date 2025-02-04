import { Editor, EditorState, ContentState, convertFromRaw, convertToRaw } from "draft-js";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const RichTextEditor = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data); // Get user data from Redux state
  const [editorState, setEditorState] = useState(EditorState.createEmpty()); // Editor state

  // Load saved user data from Redux (assuming it is in the correct raw Draft.js format)
  useEffect(() => {
    if (user) {
      try {
        // Convert raw user data to EditorState
        const content = convertFromRaw(user);
        setEditorState(EditorState.createWithContent(content));
      } catch (error) {
        console.error("Invalid content format:", error);
      }
    }
  }, [user]);

  // Handle changes in the editor and save to Redux
  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
    
    // Convert the editor content to raw format and save to Redux
    const rawContent = convertToRaw(newEditorState.getCurrentContent());
    dispatch({ type: 'SAVE_USER_DATA', payload: rawContent }); // Dispatch to save the content in Redux
  };

  return (
    <div style={{ border: "1px solid #ccc", minHeight: 200, padding: 10 }}>
      <Editor 
        editorState={editorState} 
        onChange={handleEditorChange} 
      />
    </div>
  );
};



