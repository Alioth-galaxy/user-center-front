import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/pages/constants";

const Footer: React.FC = () => {
  const defaultMessage = '勇敢牛牛不怕困难';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: '语雀',
          href: 'https://www.yuque.com/dashboard',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '知识星球',
          href: PLANET_LINK,
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
