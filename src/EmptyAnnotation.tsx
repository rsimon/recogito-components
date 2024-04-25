import { ArrowRight, Detective } from '@phosphor-icons/react';
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
          <div className="annotation-header-left">
            {props.isPrivate ? (
              <div className="private-avatar">
                <div className="avatar-ring">
                  <div className="avatar-inner">
                    <Detective size={17} />
                  </div>
                </div>
              </div>
            ) : (
              <Avatar />
            )}
            <div className="annotation-author-details">
              <div className="created-by">
                {props.isPrivate ? 'Private' : 'Lorin'}
              </div>
            </div>
          </div>

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