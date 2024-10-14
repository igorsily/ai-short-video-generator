"use client";

import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { UserResource } from "@clerk/types";
import { useRouter } from "next/navigation";

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  if (isSignedIn) {
    router.replace("/dashboard");
  }

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/sign-in");
    } else if (isLoaded && user) {
      void buscaOuCriaUsuario(user);
    }
  }, [isLoaded, isSignedIn, user, router]);

  const buscaOuCriaUsuario = async (user: UserResource) => {
    const { fullName, imageUrl } = user;

    const { emailAddress } = user.primaryEmailAddress!;

    const body = {
      fullName,
      imageUrl,
      email: emailAddress,
    };

    await fetch(`/api/users`, {
      method: "POST",
      body: JSON.stringify(body),
      cache: "no-cache",
    });
  };

  return <div>{children}</div>;
};

export default Provider;
