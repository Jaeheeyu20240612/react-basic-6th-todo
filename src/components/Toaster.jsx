import { useEffect } from 'react';
import { useToastStore } from '../store/useToastStore';

const Toaster = () => {
  const { toasts, removeToast } = useToastStore();

  useEffect(() => {
    if (toasts.length === 0) return;
    const targetToastId = toasts[0]?.id;
    const timer = setTimeout(() => {
      removeToast(targetToastId);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [toasts, removeToast]);
  return (
    <div className='fixed right-5 bottom-5'>
      <ul>
        {toasts.map((t) => (
          <li
            className=' bg-white p-5 min-w-56 rounded-lg shadow-md mb-2'
            key={t.id}
          >
            <p>{t.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toaster;
