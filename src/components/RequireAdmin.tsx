import React, { PropsWithChildren } from "react";
import { useAppSelector } from "../redux/redux-hooks";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";

const RequireAdmin = (props: PropsWithChildren) => {
  const { user, status } = useAppSelector((state) => state.user);

  if (status === "loading" || status === "idle") return <Loader />;

  if (!user) return <Navigate to="/login" />;

  if (!user.is_admin) return <Navigate to="/" />;

  return props.children as JSX.Element;
};

export default RequireAdmin;
