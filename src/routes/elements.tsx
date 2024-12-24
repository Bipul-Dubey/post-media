import React from "react";

export const Authentication = React.lazy(
  () => import("../components/Authentication")
);

export const NewsFeedPage = React.lazy(() => import("../components/Feeds"));

export const CurrentUserProfilePage = React.lazy(
  () => import("../components/Profile")
);
