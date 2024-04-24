import ReactDOM from 'react-dom/client';

import './index.css'
import { EmptyAnnotation } from './EmptyAnnotation';
import { Annotation } from './Annotation';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
    <EmptyAnnotation />

    <Annotation />

    <Annotation 
      isPrivate={true} 
      value="Lorem ipsum dolor sit amet consectetur. Scelerisque magna nulla cum ultrices viverra tortor morbi." />
  </div>
);