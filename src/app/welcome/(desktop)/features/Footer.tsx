'use client';

import { ActionIcon } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { Book } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { DOCUMENTS } from '@/const/url';

const Footer = memo(() => {
  const theme = useTheme();
  const { t } = useTranslation('common');

  return (
    <Flexbox align={'center'} horizontal justify={'space-between'} style={{ padding: 16 }}>
      <span style={{ color: theme.colorTextDescription }}>
        ©{new Date().getFullYear()} ChatGPT
      </span>
      <Flexbox horizontal>
        <ActionIcon
          icon={Book}
          onClick={() => window.open(DOCUMENTS, '__blank')}
          size={'site'}
          title={t('document')}
        />
      </Flexbox>
    </Flexbox>
  );
});

export default Footer;
