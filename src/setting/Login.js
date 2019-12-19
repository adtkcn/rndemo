

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
	const [count, setCount] = useState(props.navigation.state.params.count);
	useEffect(() => { console.log("每次都会执行") }, [count])

	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={ styles.scrollView }>

					<View style={ styles.body }>
						{/* <Text>{ props.navigation.state.params.val }</Text> */ }

						<Text> Login{ count }</Text>

						<Button title="set" onPress={ () => setCount(count + 1) } />

						<View style={ styles.close }>
							<Button title="关" onPress={ () => props.navigation.goBack() } />
						</View>

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