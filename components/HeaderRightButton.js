import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Theme from '../styles/Theme';

export default function HeaderRightButton({ onPress, children, style, textStyle }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text numberOfLines={1} style={[styles.buttonText, textStyle]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

HeaderRightButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  button: {
    paddingLeft: 10,
    paddingRight: 16,
    paddingVertical: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '600',
  },
});
