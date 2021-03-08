import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { PLUGIN_LOGO_ICON_COMPONENTS } from "metabase/plugins";

class TamLogo extends Component {
  static defaultProps = {
    height: 32,
  };
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    const { dark, height, width } = this.props;
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="29"
      height="43"
      viewBox="0 0 59 93"
    >
      <defs>
        <path
          id="path-1"
          d="M16.568.16c-2.155 0-4.194.454-6.118 1.361a18.333 18.333 0 00-5.32 3.875 19.078 19.078 0 00-3.598 5.366C.64 12.75.182 14.694.152 16.596v37.789c0 2.117 1.737 3.833 3.88 3.833h33.735c2.14 0 3.877-1.716 3.877-3.833s-1.736-3.833-3.877-3.833H7.91V16.81c0-1.222.25-2.378.753-3.471a9.663 9.663 0 014.869-4.833 8.08 8.08 0 013.338-.724l5.039.004v11.854l7.754.008V3.907c0-.511-.1-.994-.3-1.448a3.878 3.878 0 00-.82-1.193 3.85 3.85 0 00-1.227-.808A3.802 3.802 0 0025.829.16h-9.261z"
        ></path>
        <linearGradient
          id="linearGradient-3"
          x1="50%"
          x2="50%"
          y1="16.727%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#E8431C"></stop>
          <stop offset="100%" stopColor="#F39318"></stop>
        </linearGradient>
        <path
          id="path-4"
          d="M38.812.01v14.617l-8.354.008h-13.85c-2.154 0-4.193.454-6.117 1.363a18.283 18.283 0 00-5.321 3.875 19.036 19.036 0 00-3.598 5.364C.682 27.225.222 29.17.193 31.07v18.303c0 2.117 1.736 3.832 3.879 3.832 2.14 0 3.877-1.715 3.877-3.832V31.283c0-1.22.25-2.377.754-3.47a9.656 9.656 0 014.869-4.833 8.067 8.067 0 013.338-.723l14.013-.008h11.81c1.063 0 1.967-.369 2.714-1.107.746-.739 1.12-1.646 1.12-2.726V.01h-7.755z"
        ></path>
        <linearGradient
          id="linearGradient-6"
          x1="50%"
          x2="50%"
          y1="0%"
          y2="61.547%"
        >
          <stop offset="0%" stopColor="#E8431C"></stop>
          <stop offset="100%" stopColor="#B10A2E"></stop>
        </linearGradient>
      </defs>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(-691 -80)"
      >
        <g transform="translate(691 80)">
          <g fill="#FFF" transform="translate(0 67.133)">
            <path d="M.193 6.666H2.7V.181h1.524v6.485h7.935v1.44H4.224v10.209c0 3.983 1.219 5.356 4.673 5.356h3.353v1.44H9.134c-3.759 0-6.434-1.44-6.434-5.859V8.106H.193v-1.44z"></path>
            <path d="M27.05 15.838c-1.117-.235-3.047-.435-4.571-.435-3.489 0-7.045.67-7.045 4.218 0 3.18 2.879 4.016 6.13 4.016 1.897 0 3.929-.335 5.487-.937v-6.862zm-13.31 3.85c0-4.085 3.489-5.758 9.077-5.758 1.05 0 2.574.134 4.234.368v-.703c0-3.883-1.897-5.49-5.69-5.49h-4.797l-.002-1.439h4.968c4.742 0 7.045 2.009 7.045 6.628v10.578c-1.863.736-4.37 1.238-6.841 1.238-4.234 0-7.993-1.406-7.993-5.422z"></path>
            <path d="M57.024 15.001c0-5.59-1.863-6.862-5.791-6.862-1.558 0-3.794.469-5.521 1.373.576 1.104.915 2.577.915 4.552V25.11h-1.524V15.001c0-5.59-1.931-6.862-5.894-6.862-1.66 0-2.81.234-4.707.636V25.11h-1.524V7.57c2.642-.502 4.47-.904 6.4-.904 2.236 0 4.065.368 5.318 1.506 1.998-.937 4.674-1.506 6.672-1.506 4.505 0 7.18 1.44 7.18 7.398V25.11h-1.524V15.001z"></path>
          </g>
          <g transform="translate(16.783)">
            <mask id="mask-2" fill="#fff">
              <use xlinkHref="#path-1"></use>
            </mask>
            <path
              fill="url(#linearGradient-3)"
              d="M16.568.16c-2.155 0-4.194.454-6.118 1.361a18.333 18.333 0 00-5.32 3.875 19.078 19.078 0 00-3.598 5.366C.64 12.75.182 14.694.152 16.596v37.789c0 2.117 1.737 3.833 3.88 3.833h33.735c2.14 0 3.877-1.716 3.877-3.833s-1.736-3.833-3.877-3.833H7.91V16.81c0-1.222.25-2.378.753-3.471a9.663 9.663 0 014.869-4.833 8.08 8.08 0 013.338-.724l5.039.004v11.854l7.754.008V3.907c0-.511-.1-.994-.3-1.448a3.878 3.878 0 00-.82-1.193 3.85 3.85 0 00-1.227-.808A3.802 3.802 0 0025.829.16h-9.261z"
              mask="url(#mask-2)"
            ></path>
          </g>
          <g transform="translate(0 5.245)">
            <mask id="mask-5" fill="#fff">
              <use xlinkHref="#path-4"></use>
            </mask>
            <path
              fill="url(#linearGradient-6)"
              d="M38.812.01v14.617l-8.354.008h-13.85c-2.154 0-4.193.454-6.117 1.363a18.283 18.283 0 00-5.321 3.875 19.036 19.036 0 00-3.598 5.364C.682 27.225.222 29.17.193 31.07v18.303c0 2.117 1.736 3.832 3.879 3.832 2.14 0 3.877-1.715 3.877-3.832V31.283c0-1.22.25-2.377.754-3.47a9.656 9.656 0 014.869-4.833 8.067 8.067 0 013.338-.723l14.013-.008h11.81c1.063 0 1.967-.369 2.714-1.107.746-.739 1.12-1.646 1.12-2.726V.01h-7.755z"
              mask="url(#mask-5)"
            ></path>
          </g>
          <g fill="#F39318" transform="translate(38.811 34.615)">
            <path d="M7.898 4.03c0 2.116-1.733 3.833-3.875 3.833S.144 6.146.144 4.031C.144 1.915 1.881.199 4.023.199S7.898 1.915 7.898 4.03"></path>
            <path d="M17.766 4.03c0 2.116-1.733 3.833-3.876 3.833-2.142 0-3.878-1.717-3.878-3.832 0-2.116 1.736-3.832 3.878-3.832 2.143 0 3.876 1.716 3.876 3.832"></path>
          </g>
        </g>
      </g>
    </svg>
    );
  }
}

export default function LogoIcon(props) {
  const [Component = TamLogo] = PLUGIN_LOGO_ICON_COMPONENTS;
  return <Component {...props} />;
}
