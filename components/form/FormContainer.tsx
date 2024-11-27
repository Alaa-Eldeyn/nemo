"use client";
import { useActionState, useEffect } from "react";
import { actionFunction } from "@/utils/types";
import { useToast } from "@/hooks/use-toast";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [error, formAction] = useActionState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (error?.message !== "") {
      toast({
        description: error.message,
        className:
          "bottom-0 left-0 flex fixed md:max-w-[420px] md:bottom-4 md:left-4 md:justify-end md:gap-4",
      });
    }
  }, [error]);
  return <form action={formAction}>{children}</form>;
}

export default FormContainer;
