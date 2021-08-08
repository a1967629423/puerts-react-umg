"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBar = void 0;
const react_1 = require("react");
const React = require("react");
const react_umg_1 = require("react-umg");
let SlotOfProgressBar = {
    Size: {
        SizeRule: 1
    }
};
function StatusBar(props) {
    if ((props.initialPercent || 0) < 0) {
        throw new Error('initialPercent < 0');
    }
    const [percent, setPercent] = react_1.useState(props.initialPercent || 0.5);
    const color = react_1.useMemo(() => ({ R: 1 - percent, G: 0, B: percent }), [percent]);
    function onIncrement() {
        if (percent < 1) {
            setPercent(percent + 0.01);
        }
    }
    function onDecrement() {
        if (percent > 0) {
            setPercent(percent - 0.01);
        }
    }
    return (React.createElement(react_umg_1.HorizontalBox, null,
        React.createElement(react_umg_1.TextBlock, { Text: `${props.name}(${percent.toFixed(2)})` }),
        React.createElement(react_umg_1.ProgressBar, { Percent: percent, Slot: SlotOfProgressBar, FillColorAndOpacity: color }),
        React.createElement(react_umg_1.Button, { OnClicked: onIncrement }, "+"),
        React.createElement(react_umg_1.Button, { OnClicked: onDecrement }, "-")));
}
exports.StatusBar = StatusBar;
//# sourceMappingURL=ui-components.js.map