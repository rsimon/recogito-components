import { ChangeEvent, useLayoutEffect, useRef, useState } from 'react';

import './AutosizeInput.css';

interface AutosizeInputProps {
  
  autoFocus?: boolean;

  className?: string;

  value: string;

  onChange?: React.ChangeEventHandler<HTMLInputElement>;

}

export const AutosizeInput = (props: AutosizeInputProps) => {

  const measure = useRef<HTMLSpanElement>(null);

  const [width, setWidth] = useState(1);

  useLayoutEffect(() => {
    setWidth(measure.current.offsetWidth);
  }, [props.value]);

  return (
    <div className="autosize-input">
      <span 
        ref={measure}
        className="autosize-input-measure">{props.value}</span>

      <input 
        autoFocus={props.autoFocus}
        className={props.className}
        value={props.value}
        style={{ width: Math.max(width, 10)}}
        onChange={props.onChange} />
    </div>
  )

}