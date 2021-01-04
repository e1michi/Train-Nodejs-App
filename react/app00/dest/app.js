"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//コンポーネントの作成
var MyComponent = function (_React$Component) {
  _inherits(MyComponent, _React$Component);

  function MyComponent(props) {
    _classCallCheck(this, MyComponent);

    var _this = _possibleConstructorReturn(this, (MyComponent.__proto__ || Object.getPrototypeOf(MyComponent)).call(this, props));

    _this.state = {
      myText: null
    };
    _this.setMyText = _this.setMyText.bind(_this);
    return _this;
  }
  //テキストの設定


  _createClass(MyComponent, [{
    key: "setMyText",
    value: function setMyText() {
      this.setState({
        myText: this.refs.myText.value
      });
      this.refs.myText.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "p",
          null,
          "\u5165\u529B\u5024:",
          this.state.myText
        ),
        React.createElement("input", { type: "text", ref: "myText" }),
        React.createElement("input", { type: "button", value: "\u5165\u529B", onClick: this.setMyText })
      );
    }
  }]);

  return MyComponent;
}(React.Component);

;
//コンポーネントの描画
ReactDOM.render(React.createElement(MyComponent, null), document.getElementById('app'));