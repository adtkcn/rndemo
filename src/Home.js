

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

import List from "./home/List.js";

class App extends Component {

	// static navigationOptions = {
	// 	// header: null
	// };
	constructor(props) {
		super(props);
		this.state = {
			val: "12311",
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
					<View style={ [style.row, style.header] }>
						<Text style={ [style.flex_1, style.headerName] }>恒信(1)</Text>
						<Text>+</Text>
					</View>
					{/* automatic:scrollView会自动计算和适应顶部和底部的内边距并且在scrollView 不可滚动时,也会设置内边距. */ }
					{/* <ScrollView
						contentInsetAdjustmentBehavior="automatic"
						style={ style.scrollView }
						refreshControl={
							<RefreshControl
								refreshing={ this.state.refreshing }
								onRefresh={ () => this._onRefresh() }
							/>
						}>
 
						<Button title="打开设置" onPress={ () => this.props.navigation.navigate("Setting") } />
					</ScrollView> */}
					<FlatList style={ style.scrollView }
						showsVerticalScrollIndicator={ false }
						refreshing={ this.state.refreshing }
						onRefresh={ () => this._onRefresh() }
						ListEmptyComponent={ <Text>空空如也</Text> }
						data={ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
						keyExtractor={ (item, index) => index.toString() }
						renderItem={ (item) => <List data={ item.item } click={ (d) => { this.clickItem(d) } } ></List >
						}>
					</FlatList>
				</SafeAreaView>
			</>
		);
	}

};

const style = StyleSheet.create({
	scrollView: {
		marginBottom: 44
	},
	row: {
		flexDirection: "row"
	},
	flex_1: {
		flex: 1,
	},
	header: {
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		backgroundColor: "#efefef"
	},
	headerName: { fontSize: 18 },
});
export default App;