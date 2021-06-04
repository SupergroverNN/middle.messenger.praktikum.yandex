import { page500Button } from './data';
import link from '../../components/link';

const page500 = (): string => {
  const mainButton = link(page500Button);

  return `main.error
            .error_block
              h2.error_block--title 500
              span.error_block--desc Мы уже фиксим проблему
              ${mainButton}`;
};
export default page500;
