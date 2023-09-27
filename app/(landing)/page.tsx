"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return <div>Home</div>;
};

export default LandingPage;
