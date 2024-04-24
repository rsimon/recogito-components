import { Detective, DotsThree } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import { AuthorDetails } from './AuthorDetails';
import { QuillEditor, QuillEditorRoot } from './QuillEditor';

import './Annotation.css';

interface AnnotationProps {

  isPrivate?: boolean;

  value?: string;

}

export const Annotation = (props: AnnotationProps) => {

  return (
    <div className={props.isPrivate ? 'annotation private' : 'annotation'}>
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
          <AuthorDetails isPrivate={true} />
        </div>

        <div className="annotation-header-right">
          <DotsThree size={20} />
        </div>
      </div>

      <div className="annotation-comment-wrapper">
        <QuillEditorRoot>
          <QuillEditor 
            readOnly={true} 
            value={props.value || 'Lorem ipsum dolor sit amet consectetur.' }/>
        </QuillEditorRoot>
      </div>
    </div>
  )

}