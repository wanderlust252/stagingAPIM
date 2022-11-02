export default (x: any, rotate = 0) => {
  do {
    x = btoa(x);
    rotate--;
  } while (rotate > 0);
  return x;
};
