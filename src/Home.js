

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
				<StatusBar barStyle="dark-content" />
				<SafeAreaView>

					<ScrollView
						contentInsetAdjustmentBehavior="automatic"
						style={ styles.scrollView }>

						<View>
							<List></List>
						</View>
						{/* <Com></Com> */ }
						{/* <List></List> */ }
						{/* <Com></Com> */ }
						<View style={ styles.body }>

							<TextInput style={ styles.input } defaultValue={ this.state.val } onChangeText={ (val) => this.setState({ val: val }) }></TextInput>

							<Button title="打开设置" onPress={ () => this.props.navigation.navigate("Setting") } />


						</View>
					</ScrollView>
				</SafeAreaView>
			</>
		);
	}

};

const styles = StyleSheet.create({


	input: {
		marginTop: 40,
		marginBottom: 20,
		backgroundColor: '#ccc'
		// textShadowColor: "gray",
		// textShadowOffset: { width: 2, height: 5 }
	},
	close: {
		marginTop: 12,
		backgroundColor: "gray",
	},

});
export default App;