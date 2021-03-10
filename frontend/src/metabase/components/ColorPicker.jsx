import React, { Component } from "react";

class ColorPicker extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
                   <input className='input flex-full ml1 align-self-stretc 'size="1" placeholder='#Color' value={value} onChange={e => {
                    onChange(e.target.value);
                  }} />
    );
  }
}

export default ColorPicker;
