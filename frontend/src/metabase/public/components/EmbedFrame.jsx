/* @flow */

import React, { Component } from "react";
import { withRouter } from "react-router";

import { IFRAMED, initializeIframeResizer } from "metabase/lib/dom";
import { parseHashOptions } from "metabase/lib/browser";

import MetabaseSettings from "metabase/lib/settings";

import TitleAndDescription from "metabase/components/TitleAndDescription";
import Parameters from "metabase/parameters/components/Parameters";
import LogoBadge from "./LogoBadge";

import cx from "classnames";

import "./EmbedFrame.css";

const DEFAULT_OPTIONS = {
  bordered: IFRAMED,
  titled: true,
};

import type { DashboardWithCards } from "metabase-types/types/Dashboard";
import type { Parameter } from "metabase-types/types/Parameter";

type Props = {
  className?: string,
  children?: any,
  actionButtons?: any[],
  name?: string,
  description?: string,
  dashboard?: DashboardWithCards,
  location: { query: { [key: string]: string }, hash: string },
  parameters?: Parameter[],
  parameterValues?: { [key: string]: string },
  setParameterValue: (id: string, value: string) => void,
};

type State = {
  innerScroll: boolean,
};

@withRouter
export default class EmbedFrame extends Component {
  props: Props;
  state: State = {
    innerScroll: true,
  };

  UNSAFE_componentWillMount() {
    initializeIframeResizer(() => this.setState({ innerScroll: false }));
  }

  render() {
    const {
      className,
      children,
      description,
      logo,
      actionButtons,
      location,
      parameters,
      parameterValues,
      setParameterValue,
    } = this.props;
    const { innerScroll } = this.state;

    const showFooter = !MetabaseSettings.hideEmbedBranding() || actionButtons;

    const { bordered, titled, theme, hide_parameters } = {
      ...DEFAULT_OPTIONS,
      ...parseHashOptions(location.hash),
    };

    const name = titled ? this.props.name : null;
    return (
      <React.Fragment>
      <div
        className={cx("EmbedFrame flex flex-column", className, {
          spread: innerScroll,
          "bordered rounded shadowed": bordered,
          [`Theme--${theme}`]: !!theme,
        })}
      >
        <div
          className={cx("flex flex-column flex-full relative", {
            "scroll-y": innerScroll,
          })}
        >
          {name || (parameters && parameters.length > 0) ? (
            <div className="EmbedFrame-header">

              {logo && (
                <img src={logo} />
              )}

              {name && (
                <span className='title '> {name} </span>
              )}
              {actionButtons && (
                <div className="action-button">
                  {actionButtons}
                </div>
              )}

              {parameters && parameters.length > 0 ? (
                <div className="flex ml-auto dashboard-content">
                  <Parameters
                    dashboard={this.props.dashboard}
                    parameters={parameters.map(p => ({
                      ...p,
                      value: parameterValues && parameterValues[p.id],
                    }))}
                    query={location.query}
                    setParameterValue={setParameterValue}
                    syncQueryString
                    hideParameters={hide_parameters}
                    isQB
                  />
                </div>
              ) : null}
            </div>
          ) : null}
          <div className="flex flex-column relative justify-content-center full flex-full dashboard-content">
            {children}
          </div>
        </div>
      </div>
      <LogoBadge dark={theme} class='logo' />
    </React.Fragment>
    );
  }
}
