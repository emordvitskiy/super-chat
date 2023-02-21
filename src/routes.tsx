import { createBrowserRouter } from 'react-router-dom';

import { ChatsList } from './pages/ChatsList';
import { ChatScreen } from './pages/ChatScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: async () => {
      return fetch('/data-mocks/chats.json');
    },
    element: <ChatsList />,
  },
  {
    path: '/chat/:id',
    element: <ChatScreen />,
  },
]);
