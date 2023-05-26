import { cva } from "cva";

export const buttonStyles = cva(
  `font-medium  rounded-md disabled:grayscale appearance-none outline-none 
    disabled:opacity-50 focus-within:ring focus-within:ring-offset-2 ring-0  
    disabled:cursor-not-allowed ring-offset-neutral-50 dark:ring-offset-neutral-900 `,
  {
    variants: {
      variant: {
        primary: `bg-primary-600 text-primary-50 dark:bg-primary-500
          dark:ring-primary-400 ring-primary-500 
          `,
        neutral: `bg-white ring-1 ring-neutral-200 dark:bg-white/10 
          dark:ring-white/10 dark:text-neutral-100 ring-off`,
        cta: "bg-gradient-to-r from-primary-500 to-tertiary-400 text-primary-50",
        error: `bg-error-600 text-neutral-50 ring-error-500`,
        outline: `bg-transparent ring-1 ring-primary-600 text-primary-600 
        dark:bg-transparent dark:text-primary-200 dark:ring-primary-200`
      },
      size: {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2 text-base",
        large: "text-lg px-6 py-4"
      },
      fullWidth: {
        true: "w-full"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "medium"
    }
  }
);
