import { KeyboardEvent, useState } from 'react';
import { Check, Tag as TagIcon, Trash } from '@phosphor-icons/react';
import { AutosizeInput } from '../AutosizeInput';

import './AddTag.css';

interface AddTagProps {

  onAddTag(tag: string): void;

  onCancel(): void;

}

export const AddTag = (props: AddTagProps) => {

  const [editing, setEditing] = useState(false);

  const [value, setValue] = useState('');

  const onKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      props.onAddTag(value);
    }
  }

  return editing ? (
    <div className="add-tag-editor">
      <AutosizeInput
        autoFocus
        value={value}
        onChange={evt => setValue(evt.target.value)} 
        onKeyDown={onKeyDown} />

      <div className="add-tag-actions">
        <button
          onClick={props.onCancel}>
          <Trash size={16} />
        </button>

        <button
          onClick={() => props.onAddTag(value)}>
          <Check size={16} />
        </button>
      </div>
    </div>
  ) : (
    <button 
      className="add-tag-trigger"
      onClick={() => setEditing(true)}>
      <TagIcon size={12} /> Add a Tag
    </button>
  )

}