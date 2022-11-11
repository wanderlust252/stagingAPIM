import { TODO } from '@/interfaces';

const encode = (x: TODO, rotate = 0) => {
  do {
    x = btoa(x);
    rotate--;
  } while (rotate > 0);
  return x;
};

export default encode;
