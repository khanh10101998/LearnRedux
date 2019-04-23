import React, {Component} from 'react';
import {Button} from 'react-native'
import Main from '../main'
const ButtonComp = ({ title, onPress, bgColor, textColor }) => (
    <Button
        style={{ marginBottom: 10 }}
        backgroundColor={bgColor}
        title={title}
        color={textColor}
        onPress={onPress} />
);

export default ButtonComp;