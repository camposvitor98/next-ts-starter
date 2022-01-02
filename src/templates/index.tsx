import { useRouter } from "next/router";
import { ReactChild, useEffect, useState } from "react";
import { setTemplate } from "./utils/setTemplate";

interface TemplateProps {
  children: ReactChild;
}

interface CurrentTemplate {
  template?: (props?: any) => JSX.Element | null;
  props?: any;
}

export function Template({ children }: TemplateProps) {
  const router = useRouter();

  const [currentTemplate, setCurrentTemplate] = useState<CurrentTemplate>({});

  function setPath() {
    if (typeof window !== "undefined") {
      const path = window.location.href.split("/");

      setCurrentTemplate(setTemplate(path, {}));
    }
  }

  useEffect(() => {
    setPath();
  }, [router?.asPath]);

  if (currentTemplate.template) {
    return (
      <currentTemplate.template {...currentTemplate.props}>
        {children}
      </currentTemplate.template>
    );
  }

  return <>{children}</>;
}
