

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

import { creactAxios, http } from './config/axios.js'

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
		this.props.navigation.navigate("Chat", { ...data })
	}
	_onRefresh() {
		console.log("开始刷新");
		this.setState({ refreshing: true });
		setTimeout(() => {
			this.setState({ refreshing: false });
		}, 1000);
	}
	componentDidMount() {
		console.log(http);

		http.get('/').then((d) => {
			console.log(d);
		}).catch((e) => {
			console.log(e);
		})
	}
	render() {
		return (
			<>
				<StatusBar barStyle="dark-content" backgroundColor="#efefef" />
				<SafeAreaView style={ { flex: 1, backgroundColor: '#efefef' } }>
					<View style={ [style.row, style.header] }>
						<Text style={ [style.flex_1, style.headerName] }>恒信(1)</Text>
						<Text>+</Text>
					</View>
					{/* <Button title="打开设置" onPress={ () => this.props.navigation.navigate("Setting") } /> */ }

					<FlatList style={ style.scrollView }
						showsVerticalScrollIndicator={ false }
						refreshing={ this.state.refreshing }
						onRefresh={ () => this._onRefresh() }
						ListEmptyComponent={ <Text>空空如也</Text> }
						data={ [{ uid: 1, username: "yue", msg: "hello", time: "10:26" }, { uid: 2, username: "yue2", msg: "world", time: "10:25" }] }
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