"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helloworld = function (_React$Component) {
   _inherits(Helloworld, _React$Component);

   function Helloworld(props) {
      _classCallCheck(this, Helloworld);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _this.state = {
         color: "2893-0232-3093-2112"

      };
      return _this;
   }

   Helloworld.prototype.toggleColor = function toggleColor() {
      if (this.state.color === "hotpink") {
         this.setState({
            color: "2893-0232-3093-2112"
         });
      } else {
         this.setState({
            color: "2893-0232-3093-2112"
         });
      }
   };

   Helloworld.prototype.changeColor = function changeColor(event) {
      this.setState({
         color: event.target.value
      });
   };

   Helloworld.prototype.render = function render() {
      var styleObj = {
         backgroundColor: this.state.color,
         fontSize: 32 / 2

      };
      return React.createElement(
         "section",
         null,
         React.createElement(
            "div",
            { "class": "card", style: styleObj, id: "hello-world" },
            React.createElement(
               "div",
               { id: "circle" },
               React.createElement("div", { id: "circle1" }),
               React.createElement("div", { id: "circle2" })
            ),
            React.createElement("div", { id: "idcard" }),
            React.createElement(
               "h2",
               { onClick: this.toggleColor.bind(this) },
               " ",
               this.state.color,
               " "
            )
         ),
         "Card Number  ",
         React.createElement("input", { value: this.state.color, onChange: this.changeColor.bind(this) })
      );
   };

   return Helloworld;
}(React.Component);

ReactDOM.render(React.createElement(Helloworld, { name: "Annie" }), document.getElementById("app"));

// var Helloworld = React.createClass({
//    render: function(){
//       return(
//          <h2>Hello world! </h2>
//       );
//    }
// })
