

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
				<View style={ style.lists } >
					<Image style={ style.listsTouxiang } roundAsCircle={ true } resizeMode={ 'stretch' } source={ require('../image/touxiang.jpg') }></Image>
					<View style={ style.listsContent }>
						<View style={ style.listsContentTitle }>
							<Text style={ style.listsContentName } numberOfLines={ 1 }>月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月</Text>
							<Text style={ style.listsContentTime }>10:06</Text>
						</View>

						<Text style={ style.listsContentDes }>{ JSON.stringify(this.props.data) }</Text>
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
		borderBottomColor: "#ccc",
		borderBottomWidth: StyleSheet.hairlineWidth,// 1,符合平台最细的线
		flex: 1,
		marginLeft: 10,
		paddingBottom: 12,
		paddingRight: 10,
	},
	listsContentTitle: {
		flexDirection: 'row',
	},
	listsContentName: {
		fontSize: 16,
		flex: 1,
	},
	listsContentTime: {
		fontSize: 12,
		color: "#ccc"
	},
	listsContentDes: {
		fontSize: 14,
		color: "#ccc",
		paddingTop: 5
	},
});
export default List;