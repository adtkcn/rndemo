

import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	StatusBar,
	TextInput,
	FlatList,
	TouchableOpacity
} from 'react-native';

import List from "./chat/List.js";

class App extends Component {

	static navigationOptions = ({ navigation }) => {
		// const { params } = navigation.state;
		console.log(navigation.state);
		// console.log(params);
		return {
			title: navigation.getParam("username", "无名氏")
		}
	};
	constructor(props) {
		super(props);
		this.state = {
			refreshing: false
		}
	}
	clickItem(data) {
		console.log(data);
	}
	_onPressButton(data) {
		console.log(data);

	}
	_onRefresh() {
		console.log("开始刷新");
		this.setState({ refreshing: true });
		setTimeout(() => {
			this.setState({ refreshing: false });
		}, 1000);
	}
	render() {
		return (
			<>
				<StatusBar barStyle="dark-content" backgroundColor="#efefef" />
				<SafeAreaView style={ { flex: 1, backgroundColor: '#efefef' } }>

					<FlatList style={ style.scrollView }
						inverted={ true }
						showsVerticalScrollIndicator={ false }
						// refreshing={ this.state.refreshing }
						// onRefresh={ () => this._onRefresh() }
						ListEmptyComponent={ <Text>空空如也</Text> }
						data={ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
						keyExtractor={ (item, index) => index.toString() }
						renderItem={ (item) => <List data={ item.item } click={ (d) => { this.clickItem(d) } } ></List >
						}>
					</FlatList>
					{/* <View><TextInput placeholder="1"></TextInput></View> */ }
					<View >

						<View style={ style.btnContainer }>
							<TextInput style={ style.TextInput } multiline  ></TextInput>
							<TouchableOpacity style={ style.sendContainer } onPress={ () => this._onPressButton() } >
								<Text style={ style.send }>发送</Text>
							</TouchableOpacity>
						</View>

					</View>

				</SafeAreaView>
			</>
		);
	}

};

const style = StyleSheet.create({

	scrollView: {
	},
	row: {
		flexDirection: "row"
	},
	flex_1: {
		flex: 1,
	},
	btnContainer: {
		flexDirection: "row",
		padding: 3,
		// paddingVertical: 3
	},
	TextInput: {
		flex: 1,
		marginRight: 3,
		paddingVertical: 0,
		minHeight: 36,
		maxHeight: 160,
		backgroundColor: "white"
	},
	sendContainer: {
		alignSelf: "flex-end"
	},
	send: {
		// borderColor: "red",
		// borderWidth: 1,
		paddingHorizontal: 13,
		backgroundColor: "white",
		height: 36,
		lineHeight: 36,
		fontSize: 14

	}
});
console.log(style);

export default App;