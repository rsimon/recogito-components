import { useState } from 'react';
import { Check, Tag as TagIcon, Trash } from '@phosphor-icons/react';
import { AutosizeInput } from '../AutosizeInput';

import './AddTag.css';

export const AddTag = () => {

  const [editing, setEditing] = useState(false);

  const [value, setValue] = useState('');

  return editing ? (
    <div className="add-tag-editor">
      <AutosizeInput 
        autoFocus
        value={value}
        onChange={evt => setValue(evt.target.value)} />
        
      <button>
        <Trash />
      </button>

      <button>
        <Check />
      </button>
    </div>
  ) : (
    <button 
      className="add-tag-trigger"
      onClick={() => setEditing(true)}>
      <TagIcon size={12} /> Add Tag
    </button>
  )

}