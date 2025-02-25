import { useEffect } from "react";
import { useRouter } from "next/router";

export default function UnfinishedPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/under-construction");
  }, []);

  return null;
}
