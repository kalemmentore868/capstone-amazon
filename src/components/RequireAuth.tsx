import React, { PropsWithChildren } from "react";
import { useAppSelector } from "../redux/redux-hooks";
import { Navigate } from "react-router-dom";

const RequireAuth = (props: PropsWithChildren) => {
  const { user } = useAppSelector((state) => state.user);

  if (!user) return <Navigate to="/login" />;

  return props.children as JSX.Element;
};

export default RequireAuth;
