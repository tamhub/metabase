/* @flow */

import React from "react";
import LogoIcon from "metabase/components/TamLogo";

import { t, jt } from "ttag";

type Props = {
  dark: boolean,
};

const LogoBadge = ({ dark }: Props) => (
  <div className='logo'>

    <span className="ml1 md-ml2 text-medium black slogan">Product of</span>
    <LogoIcon height={8} dark={dark}  />
   
  </div>
);

export default LogoBadge;
