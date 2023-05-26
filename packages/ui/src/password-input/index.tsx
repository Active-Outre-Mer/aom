import { useState, forwardRef, useId } from "react";
import { InputRoot } from "../input-wrapper";
import { cx } from "../cx";
import { Eye, EyeOff } from "lucide-react";
import type { ComponentPropsWithRef } from "react";
import type { InputRootProps } from "../input-wrapper";

export type PasswordInputProps = Omit<InputRootProps, "icon"> & ComponentPropsWithRef<"input">;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, description, error, ...props }, ref) => {
    const [type, setType] = useState<"text" | "password">("password");
    const id = useId();
    return (
      <>
        <InputRoot {...props} error={error} id={props.id || id} description={description} label={label}>
          <input
            {...props}
            type={type}
            ref={ref}
            id={props.id || id}
            className={cx(
              `appearance-none  outline-none w-full bg-transparent h-full inline-block
          placeholder:dark:text-neutral-600 placeholder:text-neutral-400`,
              "pl-2"
            )}
          />
          <div
            className={`absolute text-neutral-500 dark:text-neutral-300 top-2/4 right-2
         -translate-y-2/4`}
          >
            <button
              aria-hidden="true"
              tabIndex={-1}
              className={`hover:bg-neutral-300/10 rounded-sm p-[2px] relative active:top-[2px] 
            hover:dark:bg-neutral-700/50`}
              onClick={() => setType(type === "text" ? "password" : "text")}
            >
              {type === "password" ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
        </InputRoot>
      </>
    );
  }
);
