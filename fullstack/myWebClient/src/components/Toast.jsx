import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ error }) => {
  useEffect(() => {
    if (error) {
      toast.error(error, {
        closeButton: false,
        className: 'p-0 w-[400px] border border-purple-600/40',
        ariaLabel: 'toast-notification',
      });
    }
  }, [error]);

  return (
    <div>
      <ToastContainer autoClose={3000} position="top-right" />
    </div>
  );
}

export default Toast