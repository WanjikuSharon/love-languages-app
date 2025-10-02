import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import Theme from '../styles/Theme';

export default class HeaderRightButton extends React.Component {
  static propTypes = {
    textStyle: PropTypes.object,
    onPress: PropTypes.func,
    style: PropTypes.object,
  };

  render() {
    let { style, textStyle, ...props } = this.props;
    return (
      <BorderlessButton {...props} style={[styles.button, style]}>
        <Text numberOfLines={1} style={[styles.buttonText, textStyle]}>
          {this.props.children}
        </Text>
      </BorderlessButton>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    paddingLeft: 10,
    paddingRight: 16,
    paddingVertical: 12,
  },
  buttonText: {
    color: Theme.lightTextColor,
    fontSize: 17,
  },
});
