import { OpenAIOutlined } from '@ant-design/icons';
import { Icon } from '@lobehub/ui';
import { Loader2 } from 'lucide-react';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

const FullscreenLoading = memo<{ title?: string }>(({ title }) => {
  return (
    <Flexbox height={'100%'} style={{ userSelect: 'none' }} width={'100%'}>
      <Center flex={1} gap={12} width={'100%'}>
        <p style={{ fontSize: 26, fontWeight: '500' }}>
          <OpenAIOutlined />
          &nbsp;
          <span>OpenAI</span>
          <span style={{ opacity: 0.7 }}> /</span> <span style={{ opacity: 0.7 }}>ChatGPT</span>
        </p>
        <Center gap={16} horizontal>
          <Icon icon={Loader2} spin />
          {title}
        </Center>
      </Center>
    </Flexbox>
  );
});

export default FullscreenLoading;
