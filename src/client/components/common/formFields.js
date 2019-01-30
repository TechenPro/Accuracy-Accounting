import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title, input, type, placeholder} = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className='form-input_title'>{title}</label>
                <input
                    className='form-input_input'
                    type={type}
                    {...input}
                    required
                    placeholder={placeholder}
                />
            </div>
        )
    }
}

export class FormSelector extends Component{
    render(){
        const {className, title, input, type, options} = this.props;
        return(
            <div 
                className={`${className} form-selector`}
                type={type}
                {...input}
            >
                <label className='form-selector_title'>{title}</label>
                <select className='form-selector_select' required>
                    <option value="" selected disabled hidden>Choose here</option>
                    <option value='0'>{options[0]}</option>
                    <option value='1'>{options[1]}</option>
                    <option value='2'>{options[2]}</option>
                </select>
            </div>
        )
    }
}

export class FormTextArea extends Component {
  render() {
    const { className, title, input, type, placeholder} = this.props;
    return(
      <div className={`${className} form-textarea`}>
        <label className='form-textarea_title'>{title}</label>
        <textarea
          className='form-textarea_input'
          type={type}
          {...input}
          placeholder={placeholder}

        />

      </div>
    )
  }
}

export class FormButton extends Component {
    render() {
        const { className, title, input, type, onClick } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button
                    className={'form-button_button'}
                    type={type}
                    {...input}
                    onClick={onClick}
                >
                {title}
                </button>
            </div>
        )
    }
}
