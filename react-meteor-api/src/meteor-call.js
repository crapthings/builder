import { composeWithTracker as Compose } from 'react-komposer'

const _callbackResult = new ReactiveVar()

function _tracker (props, onData) {
	const result = _callbackResult.get()
	onData(null, {
		call () {
			Meteor.call(props.name, (err, result) => {
				err ? _callbackResult.set(err) : _callbackResult.set(result)
			})
		},
		result
	})
}

function _comp ({component, ...props}) {
	return component(props)
}

export const MeteorCall = Compose(_tracker)(_comp)
