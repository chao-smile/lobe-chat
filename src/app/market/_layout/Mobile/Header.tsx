'use client';

// import ShareAgentButton from '../../features/ShareAgentButton';
import { OpenAIOutlined } from '@ant-design/icons';
import { MobileNavBar } from '@lobehub/ui';
import { memo } from 'react';

import { mobileHeaderSticky } from '@/styles/mobileHeader';

const Header = memo(() => {
  return (
    <MobileNavBar
      center={
        <p
          style={{
            fontSize: 14,
            fontWeight: '500',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          <OpenAIOutlined />
          &nbsp;
          <span>OpenAI</span>
          <span style={{ opacity: 0.7 }}> /</span> <span style={{ opacity: 0.7 }}>ChatGPT</span>
        </p>
        // <Logo type={'text'} />
      }
      // right={<ShareAgentButton mobile />}
      style={mobileHeaderSticky}
    />
  );
});

export default Header;
