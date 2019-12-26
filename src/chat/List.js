

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

// let List = (props) => {
class List extends Component {

	// const [count, setCount] = useState(1);
	// useEffect(() => { console.log("每次都会执行") }, [count])
	render() {
		return (

			<TouchableNativeFeedback onPress={ () => { this.props.click(this.props.data) } } background={ TouchableNativeFeedback.SelectableBackground() }>

				<View>
					<View style={ style.lists } >
						<Image style={ style.listsTouxiang } roundAsCircle={ true } resizeMode={ 'stretch' } source={ require('../image/touxiang.jpg') }></Image>
						<View style={ style.listsContent }>
							<Text style={ style.listsContentText } >11</Text>
						</View>
					</View>
					<View style={ [style.lists, style.listsRight] } >
						<Image style={ style.listsTouxiang } roundAsCircle={ true } resizeMode={ 'stretch' } source={ require('../image/touxiang.jpg') }></Image>
						<View style={ style.listsContent }>
							<Text style={ style.listsContentText } >22aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
						</View>
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
	listsRight: {
		flexDirection: "row-reverse"
	},
	listsTouxiang: {
		width: 40,
		height: 40,
		borderRadius: 20,
	},
	listsContent: {

		borderRadius: 10,
		maxWidth: "68%",
		// flex: 1,
		marginRight: 10,
		marginLeft: 10,
		padding: 10,

		backgroundColor: "#ccc"
	},

	listsContentText: {
		fontSize: 16,
		flex: 1,
	},


});
export default List;