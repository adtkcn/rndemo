

import React, { useState, useEffect } from 'react';
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	Button,
	StatusBar,
	Image,
	TouchableOpacity
} from 'react-native';

import Line from "./components/Line.js";

let App = (props) => {
	const [count, setCount] = useState(1);
	useEffect(() => { console.log("每次都会执行") }, [count])

	return (
		<>
			<StatusBar barStyle="dark-content" backgroundColor="#efefef" />
			<SafeAreaView style={ { flex: 1, backgroundColor: '#efefef' } }>
				<ScrollView
					contentInsetAdjustmentBehavior="automatic"
					style={ style.scrollView }>

					<View style={ style.body }>
						<View style={ style.lists } >
							<View style={ style.row }>
								<Text style={ [style.flex_1, style.listTitle] }>头像</Text>
								<Image style={ [style.alignSelfCenter, style.listsTouxiang] } roundAsCircle={ true } resizeMode={ 'stretch' } source={ require('./image/touxiang.jpg') }></Image>
								<Text style={ [style.alignSelfCenter, style.listArrow] }> > </Text>
							</View>
							<Line offsetLeft={ 0 } offsetRight={ 0 } ></Line>
						</View>

						<View style={ style.lists } >
							<View style={ style.row }>
								<Text style={ [style.flex_1, style.listTitle] }>昵称</Text>
								<Text style={ [style.alignSelfCenter, style.listSubTitle] }> ++ </Text>
								<Text style={ [style.alignSelfCenter, style.listArrow] }> > </Text>
							</View>
							<Line offsetLeft={ 0 } offsetRight={ 0 } ></Line>
						</View>

						<View style={ style.lists } >
							<View style={ style.row }>
								<Text style={ [style.flex_1, style.listTitle] }>账号</Text>
								<Text style={ [style.alignSelfCenter, style.listSubTitle] }> nin </Text>
								<Text style={ [style.alignSelfCenter, style.listArrow] }>  </Text>
							</View>
							<Line offsetLeft={ 0 } offsetRight={ 0 } ></Line>
						</View>

						{/* <Text>{ count }</Text>
						<Button title="add count" onPress={ () => setCount(count + 1) } /> */}

						<TouchableOpacity style={ style.btns } onPress={ () => props.navigation.push("Login", { count: count }) }>

							<Text style={ style.btn }> 切换账号</Text>

						</TouchableOpacity>

						<View >
							{/* <Button style={ style.btn } backgroundColor={ "white" } title="切换账号" onPress={ () => props.navigation.push("Login", { count: count }) } /> */ }
						</View>


					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);


};

const style = StyleSheet.create({

	row: {
		flexDirection: "row"
	},
	flex_1: {
		flex: 1,
	},
	alignSelfCenter: {
		alignSelf: "center"
	},

	listsTouxiang: {
		width: 50,
		height: 50,
		borderRadius: 20,
		marginRight: 20
	},
	lists: {
		position: "relative",
		marginLeft: 10
	},
	listTitle: {
		lineHeight: 60,
	},

	listSubTitle: {
		color: "#ccc",
		marginRight: 20
	},
	listArrow: {
		position: "absolute",
		right: 2,
		color: "#ccc",
	},
	btns: {
		marginTop: 50,
		height: 100
	},
	btn: {
		backgroundColor: "green",
		color: "white",
		textAlign: "center",
		padding: 10
	}
});
export default App;