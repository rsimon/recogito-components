import ReactDOM from 'react-dom/client';

import './index.css'
import { EmptyAnnotation } from './EmptyAnnotation';
import { Annotation } from './Annotation';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
    <EmptyAnnotation 
      isNote={false}
      isPrivate={false} />

    <Annotation 
      isNote={false}
      isPrivate={false}
      isEditable={false}
      tags={['historical reference', 'meter', 'poetry', 'another tag']}
      showReplyField={true} />

    <Annotation 
      value={[
        "Lorem ipsum dolor sit amet consectetur. Scelerisque magna nulla cum ultrices viverra tortor morbi.", 
        "Lorem ipsum dolor sit amet consectetur. Scelerisque magna nulla cum ultrices viverra tortor morbi.",
        "Lorem ipsum dolor sit amet consectetur. Scelerisque magna nulla cum ultrices viverra tortor morbi.",
        "Lorem ipsum dolor sit amet consectetur. Scelerisque magna nulla cum ultrices viverra tortor morbi.",
        "Lorem ipsum dolor sit amet consectetur. Scelerisque magna nulla cum ultrices viverra tortor morbi." 
      ]} />

    <Annotation 
      isNote={true} 
      showReplyField={true} 
      tags={['historical reference', 'meter']} />

    <Annotation 
      isNote={true} 
      isReadOnly={true} 
      tags={['historical reference', 'meter']} />
  </div>
);