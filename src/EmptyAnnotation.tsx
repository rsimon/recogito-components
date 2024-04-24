import { Avatar } from './Avatar';
import { QuillEditor, QuillEditorRoot, QuillEditorToolbar } from './QuillEditor';

import './EmptyAnnotation.css';

export const EmptyAnnotation = () => {

  return (
    <div className="annotation empty">
      <QuillEditorRoot>
        <div className="annotation-header">
          <Avatar />
          <div className="annotation-toolbar-wrapper">
            <QuillEditorToolbar />
          </div>
        </div>
        
        <div className="annotation-comment-wrapper">
          <QuillEditor 
            placeholder="Add a comment" />
        </div>

        <div className="annotation-footer">

        </div>
      </QuillEditorRoot>
    </div>
  )

}