import { Icon } from '@lobehub/ui';
import { Button, message } from 'antd';
import { PackagePlus } from 'lucide-react';
import { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import DevModal from '@/features/PluginDevModal';
import { useToolStore } from '@/store/tool';

const AddPluginButton = forwardRef<HTMLButtonElement>((_, ref) => {
  const { t } = useTranslation('setting');
  const [showModal, setModal] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const [installCustomPlugin, updateNewDevPlugin] = useToolStore((s) => [
    s.installCustomPlugin,
    s.updateNewCustomPlugin,
  ]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {contextHolder}
      <DevModal
        onOpenChange={setModal}
        onSave={async (devPlugin) => {
          await installCustomPlugin(devPlugin);
          // toggleAgentPlugin(devPlugin.identifier);
        }}
        onValueChange={updateNewDevPlugin}
        open={showModal}
      />
      <Button
        icon={<Icon icon={PackagePlus} />}
        onClick={() => {
          // setModal(true);
          messageApi.warning('暂不支持自定义插件导入！');
        }}
        ref={ref}
      >
        {t('plugin.addTooltip')}
      </Button>
    </div>
  );
});

export default AddPluginButton;
