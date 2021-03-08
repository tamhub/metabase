/* @flow */
import React from "react";
import cx from "classnames";
import pure from "recompose/pure";

import Icon from "metabase/components/Icon";
import Tooltip from "metabase/components/Tooltip";
import colors from "metabase/lib/colors";

type Attributes = {
  title: string,
  description?: string,
  className?: string,
};
const TitleAndDescription = ({ title, description, className }: Attributes) => (
  <div className={cx("flex justify-content-center align-items-center", className)}>
    <h2 className="h2 text-wrap text-center" style={{ color: colors.accent5}}>{title}</h2>
     <span>{description}</span>
  </div>
);

export default pure(TitleAndDescription);
