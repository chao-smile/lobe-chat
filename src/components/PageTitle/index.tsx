import { memo, useEffect } from 'react';

const PageTitle = memo<{ title: string }>(({ title }) => {
  useEffect(() => {
    // console.log('title', title);
    document.title = title ? `${title} · ChatGPT` : 'ChatGPT';
  }, [title]);

  return null;
});

export default PageTitle;
