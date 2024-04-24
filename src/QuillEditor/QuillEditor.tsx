import Quill from 'quill';
import { useLayoutEffect, useRef } from 'react';
import { useQuillEditor } from './QuillEditorRoot';

import './QuillEditor.css';
import 'quill/dist/quill.core.css';

interface QuillEditorProps {

  placeholder: string;

}

export const QuillEditor = (props: QuillEditorProps) => {

  const el = useRef<HTMLDivElement>(null);

  const { setQuill } = useQuillEditor();

  useLayoutEffect(() => {
    const quill = new Quill(el.current, { placeholder: props.placeholder });
    setQuill(quill);
  }, []);

  return (
    <div 
      ref={el}
      className="quill-rte" />
  )

}
