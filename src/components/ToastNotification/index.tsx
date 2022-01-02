import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface ToastNotificationProps {
  theme?: "colored" | "dark" | "light";
}
export function ToastNotification(props: ToastNotificationProps) {
  const { theme = "colored" } = props;

  return <ToastContainer theme={theme} />;
}
