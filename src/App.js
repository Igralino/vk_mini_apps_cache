import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


class App extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		console.log(window.location.hash)

	}
	render() {
		return (
			<View>
				<Panel>
					Твой Хэш:
					<p>{window.location.hash ? window.location.hash : "Нет хеша"}</p>
				</Panel>

			</View>
		);
	}
}

export default App;
