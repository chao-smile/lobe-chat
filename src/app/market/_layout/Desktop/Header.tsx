import { OpenAIOutlined } from '@ant-design/icons';
import { ChatHeader } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';

// import ShareAgentButton from '../../features/ShareAgentButton';

export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    color: ${token.colorText};
    fill: ${token.colorText};
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();

  return (
    <ChatHeader
      left={
        <Link aria-label={'home'} href={'/'}>
          <p className={styles.logo} style={{ fontSize: 26, fontWeight: '500' }}>
            <OpenAIOutlined />
            &nbsp;
            <span>OpenAI</span>
            <span style={{ opacity: 0.7 }}> /</span> <span style={{ opacity: 0.7 }}>ChatGPT</span>
          </p>
          {/* <Logo className={styles.logo} extra={'Discover'} size={36} type={'text'} /> */}
        </Link>
      }
      // right={<ShareAgentButton />}
    />
  );
});

export default Header;
