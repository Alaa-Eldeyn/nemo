"use client";
import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

function SignOutLink() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "Logging Out..." });
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left text-red-500" onClick={handleLogout}>
        تسجيل الخروج
      </Link>
    </SignOutButton>
  );
}
export default SignOutLink;
