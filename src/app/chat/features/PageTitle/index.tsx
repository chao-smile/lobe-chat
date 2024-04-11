'use client';

import { memo } from 'react';

import PageTitle from '@/components/PageTitle';
import { useSessionStore } from '@/store/session';
import { agentSelectors } from '@/store/session/selectors';

const Title = memo(() => {
  // const [avatar, title] = useSessionStore((s) => [
  //   agentSelectors.currentAgentAvatar(s),
  //   agentSelectors.currentAgentTitle(s),
  // ]);
  const [title] = useSessionStore((s) => [agentSelectors.currentAgentTitle(s)]);
  // avatar
  return <PageTitle title={[title].filter(Boolean).join(' ')} />;
});
export default Title;
