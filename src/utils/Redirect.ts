import { useRouter } from "next/router";
import { useEffect } from "react";

interface IRedirectProps {
  to: string;
}

export function Redirect(props: IRedirectProps) {
  const { to } = props;

  const router = useRouter();

  useEffect(() => {
    router.push(to);
  }, [to]);

  return null;
}
