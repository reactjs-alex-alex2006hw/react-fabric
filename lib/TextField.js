'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var TextField = (function (_React$Component) {
  _inherits(TextField, _React$Component);

  _createClass(TextField, null, [{
    key: 'displayName',
    value: 'TextField',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      description: _react.PropTypes.node,
      disabled: _react.PropTypes.bool,
      id: _react.PropTypes.string,
      label: _react.PropTypes.oneOfType([_react.PropTypes.element, _react.PropTypes.string]),
      multiline: _react.PropTypes.bool,
      name: _react.PropTypes.string,
      onChange: _react.PropTypes.func,
      placeholder: _react.PropTypes.bool,
      required: _react.PropTypes.bool,
      underlined: _react.PropTypes.bool
    },
    enumerable: true
  }]);

  function TextField(props) {
    _classCallCheck(this, TextField);

    _get(Object.getPrototypeOf(TextField.prototype), 'constructor', this).call(this);

    this.state = {
      showLabel: true,
      isActive: false,
      id: props.id || 'TextField-' + TextField.instanceCount
    };

    TextField.instanceCount++;
  }

  _createClass(TextField, [{
    key: '_onInputChange',
    value: function _onInputChange(e) {
      this.setState(_extends({}, this.state, {
        showLabel: e.target.value === ''
      }));

      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }, {
    key: '_onInputFocus',
    value: function _onInputFocus() {
      this.setState(_extends({}, this.state, {
        isActive: true
      }));
    }
  }, {
    key: '_onInputBlur',
    value: function _onInputBlur() {
      this.setState(_extends({}, this.state, {
        isActive: false
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var description = _props.description;
      var disabled = _props.disabled;
      var label = _props.label;
      var multiline = _props.multiline;
      var name = _props.name;
      var placeholder = _props.placeholder;
      var required = _props.required;
      var underlined = _props.underlined;

      var inputId = this.state.id + '_input';

      var input = _react2['default'].cloneElement(multiline ? _react2['default'].createElement('textarea', null) : _react2['default'].createElement('input', null), {
        className: 'ms-TextField-field',
        id: inputId,
        name: name,
        onBlur: this._onInputBlur.bind(this),
        onChange: this._onInputChange.bind(this),
        onFocus: this._onInputFocus.bind(this)
      });

      return _react2['default'].createElement(
        'div',
        { id: this.state.id, className: (0, _classnames2['default'])('ms-TextField', {
            'ms-TextField--placeholder': placeholder,
            'ms-TextField--underlined': underlined,
            'is-active': underlined && this.state.isActive,
            'is-disabled': disabled
          }) },
        _react2['default'].createElement(
          _Label2['default'],
          { style: this.state.showLabel ? {} : { display: 'none' },
            required: required,
            disabled: disabled,
            htmlFor: inputId },
          label
        ),
        input,
        _react2['default'].createElement(
          'span',
          { className: 'ms-TextField-description' },
          description
        )
      );
    }
  }], [{
    key: 'instanceCount',
    value: 0,
    enumerable: true
  }]);

  return TextField;
})(_react2['default'].Component);

exports['default'] = TextField;
module.exports = exports['default'];