

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
	FlatList
} from 'react-native';

import List from "./home/List.js";

class App extends Component {

	// static navigationOptions = {
	// 	// header: null
	// };
	constructor(props) {
		super(props);
		this.state = {
			val: "12311"
		}
	}
	render() {
		var arr = [1, 2, 3];
		var Com = arr.map((item) => {
			return (<View key={ item } ><List ></List></View>)
			// return (<List key={ item }></List>)
		})
		console.log(Com);

		return (
			<>
				<StatusBar barStyle="dark-content" backgroundColor="#ccc" />
				<SafeAreaView>
					<View style={ [style.row, style.header] }>
						<Text style={ [style.flex_1, style.headerName] }>恒信(1)</Text>
						<Text>图标</Text>
					</View>
					<ScrollView
						contentInsetAdjustmentBehavior="automatic"
						style={ style.scrollView }>

						<View>
							<List></List>
							<Button title="打开设置" onPress={ () => this.props.navigation.navigate("Setting") } />
						</View>
						{/* <Com></Com> */ }
						{/* <List></List> */ }
						{/* <Com></Com> */ }


						{/* <TextInput style={ style.input } defaultValue={ this.state.val } onChangeText={ (val) => this.setState({ val: val }) }></TextInput> */ }





					</ScrollView>
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
		backgroundColor: "#ccc"
	},
	headerName: { fontSize: 18 },
	input: {
		marginTop: 40,
		marginBottom: 20,
		backgroundColor: '#ccc'
	},
	close: {
		marginTop: 12,
		backgroundColor: "gray",
	},

});
export default App;