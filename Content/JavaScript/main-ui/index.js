"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Load = void 0;
const react_1 = require("react");
const React = require("react");
const react_umg_1 = require("react-umg");
const ui_components_1 = require("./ui-components");
let SlotOfVerticalBox = {
    LayoutData: {
        Offsets: {
            Left: 120,
            Top: 120,
            Right: 480,
            Bottom: 80
        }
    }
};
// class Hello extends React.Component<Props, State> {
//     buttonTextures: string[];
//     constructor(props: Props) {
//       super(props);
//       this.state = {
//         names: props.names,
//         buttonTextureIndex : 0,
//       };
//       this.buttonTextures = [
//           "Texture2D'/Game/StarterContent/Textures/ImageButtonNormal.ImageButtonNormal'",
//           "Texture2D'/Game/StarterContent/Textures/ImageButtonActivated.ImageButtonActivated'"
//         ]
//     }
//     render() {
//         return (
//             <CanvasPanel>
//                 <VerticalBox Slot={SlotOfVerticalBox}>
//                     <HorizontalBox>
//                     <Button OnHovered={() => this.setState({buttonTextureIndex: 1})} OnUnhovered={() => this.setState({buttonTextureIndex: 0})} >
//                         <TextureImage TextureName={this.buttonTextures[this.state.buttonTextureIndex]} bMatchSize={true}/>
//                     </Button>
//                     </HorizontalBox>
//                     {this.state.names.map((name, idx) => <StatusBar name={name} key={idx}/>)}
//                 </VerticalBox>
//             </CanvasPanel>
//         );
//     }
// }
const buttonTextures = [
    "Texture2D'/Game/StarterContent/Textures/ImageButtonNormal.ImageButtonNormal'",
    "Texture2D'/Game/StarterContent/Textures/ImageButtonActivated.ImageButtonActivated'"
];
function Hello(props) {
    const [names, setNames] = react_1.useState(props.names);
    const [buttonTextureIndex, setButtonTextureIndex] = react_1.useState(0);
    const buttonHover = react_1.useCallback(() => {
        setButtonTextureIndex(1);
    }, []);
    const buttonUnHover = react_1.useCallback(() => {
        setButtonTextureIndex(0);
    }, []);
    return (React.createElement(react_umg_1.CanvasPanel, null,
        React.createElement(react_umg_1.VerticalBox, { Slot: SlotOfVerticalBox },
            React.createElement(react_umg_1.HorizontalBox, null,
                React.createElement(react_umg_1.Button, { OnHovered: buttonHover, OnUnhovered: buttonUnHover },
                    React.createElement(react_umg_1.TextureImage, { TextureName: buttonTextures[buttonTextureIndex], bMatchSize: true }))),
            names.map((name, i) => React.createElement(ui_components_1.StatusBar, { name: name, key: i })))));
}
function Load() {
    return react_umg_1.ReactUMG.render(React.createElement(Hello, { names: ["Health:", "Energy:"] }));
}
exports.Load = Load;
;
//# sourceMappingURL=index.js.map