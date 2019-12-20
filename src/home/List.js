

import React, { Component } from 'react';
// , { useState, useEffect } 
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableHighlight
} from 'react-native';

// let List = (props) => {
class List extends Component {

	// const [count, setCount] = useState(1);
	// useEffect(() => { console.log("每次都会执行") }, [count])
	render() {
		return (
			<View>
				{
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
						return <TouchableHighlight onPress={ () => { alert(item) } } key={ item }>
							<View style={ styles.lists } >
								<Image style={ styles.listsTouxiang } source={ require('../image/touxiang.jpg') }></Image>
								<View style={ styles.listsContent }>
									<View style={ styles.listsContentTitle }>
										<Text style={ styles.listsContentName } numberOfLines={ 1 }>月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月月</Text>
										<Text style={ styles.listsContentTime }>10:06</Text>

									</View>

									<Text style={ styles.listsContentDes }>干啥呢</Text>
								</View>
							</View>
						</TouchableHighlight>

					})
				}

			</View>
		);
	}

};

const styles = StyleSheet.create({

	lists: {
		flexDirection: 'row',
		paddingTop: 8,
		paddingLeft: 10,
		backgroundColor: "white"
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