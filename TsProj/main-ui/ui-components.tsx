import {useState,useMemo} from 'react';
import React = require('react');

import { Button, HorizontalBox, TextBlock, ProgressBar, HorizontalBoxSlot, LinearColor } from 'react-umg';
export interface Props {
    name: string;
    initialPercent?: number;
    key:number
}

interface State {
    percent: number;
}

let SlotOfProgressBar: HorizontalBoxSlot = {
    Size: {
        SizeRule: 1
    }
}

export function StatusBar(props:Props) {
    if ((props.initialPercent || 0) < 0) {
        throw new Error('initialPercent < 0');
    }
    const [percent,setPercent] = useState(props.initialPercent || 0.5);
    const color = useMemo<LinearColor>(()=>({R:1-percent,G:0,B:percent}),[percent]);
    
    function onIncrement() {
        if(percent < 1){
            setPercent(percent + 0.01);
        }
    }
    function onDecrement(){
        if(percent > 0) {
            setPercent(percent-0.01);
        }
    }
    return (
        <HorizontalBox>
            <TextBlock Text={`${props.name}(${percent.toFixed(2)})`} />
            <ProgressBar Percent={percent} Slot={SlotOfProgressBar} FillColorAndOpacity={color}/>
            <Button OnClicked={onIncrement} >+</Button>
            <Button OnClicked={onDecrement} >-</Button>
        </HorizontalBox>
    )
}