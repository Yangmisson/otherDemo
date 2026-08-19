import React, { useReducer } from 'react';
import ShowArea from './ShowArea';
import Buttons from './Buttons';
import { Color } from './color';   //引入Color组件

function HooksDemo(){
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default HooksDemo
