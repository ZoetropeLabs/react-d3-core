"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axis = require('./axis');

var _axis2 = _interopRequireDefault(_axis);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Yaxis = function (_Component) {
  _inherits(Yaxis, _Component);

  function Yaxis(props) {
    _classCallCheck(this, Yaxis);

    return _possibleConstructorReturn(this, (Yaxis.__proto__ || Object.getPrototypeOf(Yaxis)).call(this, props));
  }

  _createClass(Yaxis, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var width = _props.width;
      var height = _props.height;
      var margins = _props.margins;
      var y = _props.y;
      var yAxisClassName = _props.yAxisClassName;
      var yDomain = _props.yDomain;
      var yRange = _props.yRange;
      var yBandPaddingInner = _props.yBandPaddingInner;
      var yBandPaddingOuter = _props.yBandPaddingOuter;
      var yScale = _props.yScale;
      var yOrient = _props.yOrient;
      var yTickOrient = _props.yTickOrient;
      var yTickFormat = _props.yTickFormat;
      var yTickPadding = _props.yTickPadding;
      var yTickSizeOuter = _props.yTickSizeOuter;
      var yTickSizeInner = _props.yTickSizeInner;
      var yTicks = _props.yTicks;
      var yLabel = _props.yLabel;
      var yLabelPosition = _props.yLabelPosition;
      var labelOffset = _props.labelOffset;
      var showYAxis = _props.showYAxis;
      var style = _props.style;
      var yAxisStyling = _props.yAxisStyling;
      var yTickValues = _props.yTickValues;


      var t;
      var axisLabel;

      if (!yRange) {
        yRange = [height - margins.top - margins.bottom, 0];
      }

      if (yOrient === 'right') {
        // y - right
        t = 'translate(' + (width - margins.right - margins.left) + ', 0)';
      } else if (yOrient === 'left') {
        // y - left
        t = 'translate(0, 0)';
      }

      if (yLabel) {
        axisLabel = _react2.default.createElement(_label2.default, {
          height: height,
          width: width,
          margins: margins,
          labelTitle: yLabel,
          labelPosition: yLabelPosition,
          labelOffset: labelOffset,
          bandPaddingInner: yBandPaddingInner,
          bandPaddingOuter: yBandPaddingOuter
        });
      }

      return _react2.default.createElement(
        'g',
        { transform: t },
        _react2.default.createElement(_axis2.default, {
          height: height,
          width: width,
          margins: margins,
          showAxis: showYAxis,
          axisClassName: yAxisClassName,
          bandPaddingInner: yBandPaddingInner,
          bandPaddingOuter: yBandPaddingOuter,
          type: 'y',
          proxy: y,
          domain: yDomain,
          range: yRange,
          scale: yScale,
          orient: yOrient,
          tickOrient: yTickOrient,
          tickFormat: yTickFormat,
          tickPadding: yTickPadding,
          tickSizeInner: yTickSizeInner,
          tickSizeOuter: yTickSizeOuter,
          ticks: yTicks,
          style: style,
          axisStyling: yAxisStyling,
          tickValues: yTickValues
        }),
        axisLabel
      );
    }
  }]);

  return Yaxis;
}(_react.Component);

Yaxis.defaultProps = _extends({
  showYAxis: true,
  yAxisClassName: 'react-d3-core__axis__yAxis',
  yScale: 'linear',
  yOrient: 'left',
  yTickOrient: 'left',
  yLabelPosition: 'left',
  yTickPadding: 3,
  yInnerTickSize: 6,
  yOuterTickSize: 6
}, _commonProps2.default);
Yaxis.propTypes = {
  height: _react.PropTypes.number.isRequired,
  width: _react.PropTypes.number.isRequired,
  margins: _react.PropTypes.object.isRequired,
  showYAxis: _react.PropTypes.bool,
  y: _react.PropTypes.func,
  yDomain: _react.PropTypes.array,
  yRange: _react.PropTypes.array,
  yScale: _react.PropTypes.string.isRequired,
  yOrient: _react.PropTypes.oneOf(['left', 'right']),
  yTickOrient: _react.PropTypes.oneOf(['left', 'right']),
  yAxisClassName: _react.PropTypes.string,
  yTickSizeInner: _react.PropTypes.number,
  yTickSizeOuter: _react.PropTypes.number,
  yBandPaddingInner: _react.PropTypes.number,
  yBandPaddingOuter: _react.PropTypes.number,
  yTickPadding: _react.PropTypes.number,
  yTickFormat: _react.PropTypes.func,
  yTicks: _react.PropTypes.array,
  style: _react.PropTypes.object,
  /*
   yAxisStyling object holds css styling classes for axis elements
   pathClassName: "someCls"
   ticksClassName: "someCls"
   textClassName: "someCls"
   */
  yAxisStyling: _react.PropTypes.object,
  yTickValues: _react.PropTypes.array
};
exports.default = Yaxis;