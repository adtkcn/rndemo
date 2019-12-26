

import React, { Component } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
	StatusBar,
	TextInput,
	FlatList,
	RefreshControl
} from 'react-native';

import List from "./chat/List.js";

class App extends Component {

	static navigationOptions = {
		title: "user name"
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
				<SafeAreaView>
					<View style={ style.background }>
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
					</View>

				</SafeAreaView>
			</>
		);
	}

};

const style = StyleSheet.create({
	background: { backgroundColor: "#ccc" },
	scrollView: {

		// marginBottom: 44
	},
	row: {
		flexDirection: "row"
	},
	flex_1: {
		flex: 1,
	},

});
export default App;