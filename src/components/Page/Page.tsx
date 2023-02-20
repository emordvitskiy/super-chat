import type { PropsWithChildren } from 'react';

import './styles.css';

export function Page({ children }: PropsWithChildren) {
  return (
    <div className="page-container">
      {children}
    </div>
  );
}
