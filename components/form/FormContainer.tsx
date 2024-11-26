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
    if (error) {
      toast({ description: error.message });
    }
  }, [error]);
  return <form action={formAction}>{children}</form>;
}

export default FormContainer;