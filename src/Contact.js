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
	SectionList
} from 'react-native';

import List from "./contact/List.js";

function Group(props) {
	return (props.label && <Text style={ style.groupLabel }>{ props.label }</Text>)
}
function GroupLine() {
	return <View style={ style.GroupLine }></View>
}
class App extends Component {

	static navigationOptions = {
		title: "通信录"
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
				<SafeAreaView style={ { flex: 1, backgroundColor: '#efefef' } }>
					<View style={ [style.row, style.header] }>
						<Text style={ [style.flex_1, style.headerName] }>通讯录</Text>
					</View>
					{/* <List data={ "新的朋友" } click={ (d) => { this.clickItem(d) } }  ></List > */ }

					{/* <FlatList style={ style.listBox }
						showsVerticalScrollIndicator={ false }
						refreshing={ this.state.refreshing }
						onRefresh={ () => this._onRefresh() }
						ListEmptyComponent={ <Text>空空如也</Text> }
						data={ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }
						keyExtractor={ (item, index) => index.toString() }
						renderItem={ (item) => <List data={ item.item } click={ (d) => { this.clickItem(d) } }  ></List > }
						ListFooterComponent={ <Text>58位联系人</Text> }
					>
					</FlatList> */}
					<SectionList
						showsVerticalScrollIndicator={ false }
						stickySectionHeadersEnabled={ true }
						refreshing={ this.state.refreshing }
						onRefresh={ () => this._onRefresh() }
						sections={ [
							{ title: 'Title1', data: ['item1', 'item2'] },
							{ title: 'Title2', data: ['item3', 'item4'] },
							{ title: 'Title3', data: ['item5', 'item6'] },
							{ title: 'Title4', data: ['item7', 'item8'] },
							{ title: 'Title5', data: ['item9', 'item10'] },
							{ title: 'Title6', data: ['item11', 'item12'] },
						] }

						renderSectionHeader={ ({ section: { title } }) => (
							<Group label={ title }></Group>
						) }
						ListHeaderComponent={ () => <List data={ "新的朋友" } click={ (d) => { this.clickItem(d) } }  ></List > }
						renderItem={ ({ item, index, section }) => <List data={ item } key={ index.toString() } click={ (d) => { this.clickItem(d) } }  ></List > }
						ItemSeparatorComponent={ () => <GroupLine /> }
						ListFooterComponent={ <Text style={ style.contactFooter }>58位联系人</Text> }
					>

					</SectionList>
				</SafeAreaView>
			</>
		);
	}

};

const style = StyleSheet.create({
	groupLabel: {
		backgroundColor: "#efefef",
		color: "black",
		paddingVertical: 5,
		paddingLeft: 10,
		fontSize: 12,
		borderTopColor: "#ccc",
		borderTopWidth: StyleSheet.hairlineWidth,// 1,符合平台最细的线
		borderBottomColor: "#ccc",
		borderBottomWidth: StyleSheet.hairlineWidth,// 1,符合平台最细的线
	},
	GroupLine: {
		marginLeft: 70,
		borderBottomColor: "#ccc",
		borderBottomWidth: StyleSheet.hairlineWidth,// 1,符合平台最细的线
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
	contactFooter: {
		color: "#ccc",
		fontSize: 16,
		paddingVertical: 10,
		textAlign: "center",
		borderTopColor: "#ccc",
		borderTopWidth: StyleSheet.hairlineWidth,// 1,符合平台最细的线
	}

});
export default App;