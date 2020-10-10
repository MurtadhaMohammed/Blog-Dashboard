import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const AuthContainer = (props) => {
  const route = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem("blog_token")) {
      route.replace("/login");
      setLoading(false);
    }
  }, []);

  return loading && props.children;
};
