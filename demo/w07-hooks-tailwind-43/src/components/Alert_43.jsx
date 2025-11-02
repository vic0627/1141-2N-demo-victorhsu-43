import { useEffect } from "react";

const Alert_43 = ({ alert, showAlert }) => {
  useEffect(() => {
    const t = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(t);
  });

  if (alert.type === "success") {
    return (
      <p className="grid items-center text-center capitalize text-green-700 bg-green-200">
        {alert.msg}
      </p>
    );
  } else if (alert.type === "danger") {
    return (
      <p className="grid items-center text-center capitalize text-red-700 bg-red-200">
        {alert.msg}
      </p>
    );
  }
};

export default Alert_43;
