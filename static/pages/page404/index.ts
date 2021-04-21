import { page404Button } from './data';
import button from '../../components/button';

const page404 = (): string => {
  const mainButton = button(page404Button);
  return `main.error
            .error_block
              h2.error_block--title 404
              span.error_block--desc Не туда попали
              ${mainButton}`;
};
export default page404;
