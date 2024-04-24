import Quill from 'quill';
import { createContext, useContext, useState } from 'react';

interface QuillEditorContextValue {

  quill?: Quill;

  setQuill: React.Dispatch<React.SetStateAction<Quill>>;

}

const QuillEditorContext = createContext<QuillEditorContextValue>(undefined);

export const QuillEditorRoot = ({ children }) => {

  const [quill, setQuill] = useState<Quill | undefined>(undefined); 

  return (
    <QuillEditorContext.Provider value={{ quill, setQuill }}>
      {children}
    </QuillEditorContext.Provider>
  );
};

export const useQuillEditor = () => useContext(QuillEditorContext);
