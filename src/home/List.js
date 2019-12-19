

import React, { Component } from 'react';
// , { useState, useEffect } 
import {
	StyleSheet,
	View,
	Text,
	Image,

} from 'react-native';

// let List = (props) => {
class List extends Component {

	// const [count, setCount] = useState(1);
	// useEffect(() => { console.log("每次都会执行") }, [count])
	render() {
		return (
			<View>
				{
					[1, 2, 3].map((item) => {
						return <View style={ styles.lists }>
							<Image style={ styles.listsTouxiang } source={ require('../image/touxiang.jpg') }></Image>
							<View style={ styles.listsContent }>
								<Text style={ styles.listsContentName }>月</Text>
								<Text style={ styles.listsContentDes }>干啥呢</Text>
							</View>
						</View>

					})
				}

			</View>
		);
	}

};

const styles = StyleSheet.create({

	lists: {
		flexDirection: 'row',
		paddingTop: 5
	},
	listsTouxiang: {
		width: 50,
		height: 50,
	},
	listsContent: {
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		flex: 1,
		marginLeft: 10,
		paddingBottom: 10
	},
	listsContentName: {
		fontSize: 18,
	},
	listsContentDes: {
		fontSize: 14,
		color: "#ccc",
		paddingTop: 5
	},
});
export default List;