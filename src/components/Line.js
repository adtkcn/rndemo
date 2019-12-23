import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';

function Line(props) {
	return <View
		borderBottomWidth={ props.lineWidth || StyleSheet.hairlineWidth }
		borderBottomColor={ props.color || "#ccc" }
		marginLeft={ props.offsetLeft || 0 }
		marginRight={ props.offsetRight || 0 }
	></View>
}


export default Line;