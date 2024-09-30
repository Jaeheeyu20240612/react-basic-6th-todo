import { create } from 'zustand';

export const useToastStore = create((set) => ({
  toasts: [
    {
      id: crypto.randomUUID(),
      content: 'hello, world!!',
    },
  ],
  addToast: (content) => {
    const newToast = {
      id: crypto.randomUUID(),
      content,
    };
    set((prev) => ({
      toasts: [...prev.toasts, newToast],
    }));
  },
  removeToast: (id) => {
    set((prev) => ({
      toasts: prev.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));
