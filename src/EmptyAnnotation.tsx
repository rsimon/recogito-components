import { ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { Avatar } from './Avatar';
import { QuillEditor, QuillEditorRoot, QuillEditorToolbar } from './QuillEditor';
import { AddTag } from './Tags/AddTag';
import { cn } from './util';

import './EmptyAnnotation.css';

interface EmptyAnnotationProps {

  isNote?: boolean;

  isPrivate?: boolean;

}

export const EmptyAnnotation = (props: EmptyAnnotationProps) => {

  const className = cn(
    'annotation empty',
    props.isNote ? 'note' : undefined,
    props.isPrivate ? 'private' : undefined
  );

  return (
    <div className={className}>
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
          <AddTag 
            onAddTag={() => {}}
            onCancel={() => {}} />

          <button className="save save-arrow">
            <ArrowRight size={20} />
          </button>
        </div>
      </QuillEditorRoot>
    </div>
  )

}