import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { COLORS } from '@/global-styles';

const MySwal = withReactContent(Swal);

export const showConfirm = () => {
  return MySwal.fire({
    title: 'Warning',
    text: '하부를 생성 하시겠습니까?.',
    icon: 'warning',
    confirmButtonText: 'Ok',
    confirmButtonColor: COLORS.violet_2,
    showCancelButton: true,
    cancelButtonText: 'Cancel',
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: false,
    scrollbarPadding: false,
  }).then((result) => {
    return result.isConfirmed;
  });
};

export const showError = (errorMessage: string) => {
  return MySwal.fire({
    title: 'Error',
    text: errorMessage,
    icon: 'error',
    confirmButtonText: 'Ok',
    confirmButtonColor: COLORS.violet_2,
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: false,
    scrollbarPadding: false,
  });
};

export const showSuccess = (errorMessage = '성공적인') => {
  return MySwal.fire({
    title: 'Success',
    text: errorMessage,
    icon: 'success',
    confirmButtonText: 'Ok',
    confirmButtonColor: COLORS.violet_2,
    reverseButtons: true,
    focusConfirm: false,
    focusCancel: false,
    scrollbarPadding: false,
  });
};
