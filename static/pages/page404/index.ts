import { page404Button } from './data';
import link from '../../components/link';

const page404 = (): string => {
  const mainButton = link(page404Button);
  return `main.error
            .error_block
              h2.error_block--title 404
              span.error_block--desc Не туда попали
              ${mainButton}`;
};
export default page404;
