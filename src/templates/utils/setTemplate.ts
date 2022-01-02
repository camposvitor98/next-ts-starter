import { templates } from "./templates";
import { isValidKey } from "utils/isValidKey";

interface InitialTemplates {
  template?: (props?: any) => JSX.Element | null;
  props?: any;
}

const getDepth = (length: number) =>
  Array.from(Array(length).keys()).sort((a, b) => b - a);

const getTemplate = (key: number, path: string[]) => {
  const currentPath = path[key];

  if (isValidKey(currentPath, templates)) {
    return templates[currentPath];
  }
};

export const setTemplate: (
  path: string[],
  initialTemplates: InitialTemplates
) => InitialTemplates = (path, initialTemplates) => {
  if (!path[3]) {
    return templates.home;
  }

  const currentTemplate = getDepth(path.length)
    .map((key) => getTemplate(key, path))
    .find(Boolean);

  return currentTemplate || initialTemplates;
};
