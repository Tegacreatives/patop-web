"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button/Button";

interface EmptyStateProps {
  actionTitle: string;
}

const UnauthorizedState: React.FC<EmptyStateProps> = ({ actionTitle }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col space-y-4 items-center justify-center min-h-[75vh]">
      <h1 className="text-2xl font-medium">Please login to {actionTitle} </h1>
      <Button label="Login" onClick={() => router.push("/login")} />
    </div>
  );
};

export default UnauthorizedState;
