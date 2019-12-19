

import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
	StatusBar,
} from 'react-native';

let App = (props) => {
	const [count, setCount] = useState(1);
	useEffect(() => { console.log("每次都会执行") }, [count])

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={ styles.scrollView }>

					<View style={ styles.body }>


						<Text>{ count }</Text>

						<Button title="add count" onPress={ () => setCount(count + 1) } />

						<Button title="用户登录" onPress={ () => props.navigation.push("Login", { count: count }) } />

					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);


};

const styles = StyleSheet.create({

	engine: {
		position: 'absolute',
		right: 0,
	},

	close: {
		marginTop: 12,
		backgroundColor: "gray",
	},

});
export default App;