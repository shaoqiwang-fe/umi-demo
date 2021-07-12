import styles from './index.less';
import { useIntl } from 'umi';

export default function IndexPage() {
  const intl = useIntl();
  return (
    <div>
      <h1 className={styles.title}>
        Page index{intl.formatMessage({ id: '1' })}
      </h1>
    </div>
  );
}
