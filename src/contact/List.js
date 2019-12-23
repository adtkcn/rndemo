

import React, { Component } from 'react';
// , { useState, useEffect } 
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight,
	TouchableNativeFeedback
} from 'react-native';


class List extends Component {

	render() {
		var data = this.props.data
		return (

			<TouchableNativeFeedback onPress={ () => { this.props.click(this.props.data) } } background={ TouchableNativeFeedback.SelectableBackground() }>
				<View style={ style.lists } >
					<Image style={ style.listsTouxiang } roundAsCircle={ true } resizeMode={ 'stretch' } source={ require('../image/touxiang.jpg') }></Image>
					<View style={ style.listsContent }>
						<Text style={ style.listsContentName } numberOfLines={ 1 }>{ this.props.data }</Text>
					</View>
				</View>
			</TouchableNativeFeedback>

		);
	}

};

const style = StyleSheet.create({

	lists: {
		flexDirection: 'row',
		paddingTop: 8,
		paddingLeft: 10,
		backgroundColor: "white"
	},
	listsTouxiang: {
		width: 50,
		height: 50,
		borderRadius: 20,
	},
	listsContent: {
		// borderBottomColor: "#ccc",
		// borderBottomWidth: StyleSheet.hairlineWidth,// 1,符合平台最细的线
		flex: 1,
		marginLeft: 10,
		paddingBottom: 10,
		paddingRight: 0,
	},

	listsContentName: {
		lineHeight: 50,
		fontSize: 16,
	},

});
export default List;