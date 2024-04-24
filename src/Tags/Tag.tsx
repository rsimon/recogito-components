import { X } from '@phosphor-icons/react';
import './Tag.css';

interface TagProps {

  isEditable?: boolean;

  value: string;

}

export const Tag = (props: TagProps) => {

  return (
    <span className="tag">
      <span>{props.value}</span>
      {props.isEditable && (
        <button>
          <X />
        </button>
      )}
    </span>
  )

}