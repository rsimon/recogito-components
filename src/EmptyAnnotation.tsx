import { Avatar } from './Avatar';
import { QuillEditor, QuillEditorRoot, QuillEditorToolbar } from './QuillEditor';

import './EmptyAnnotation.css';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

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
          <button className="save save-arrow">
            <ArrowRight size={20} />
          </button>
        </div>
      </QuillEditorRoot>
    </div>
  )

}