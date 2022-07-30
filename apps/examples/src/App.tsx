import { Delay, Repeat } from "timeline-composer"

function App() {
	return (
		<>
			<h1>Timeline Composer Test</h1>

			<p>I'm immediately visible.</p>

			<Repeat interval={2} times={3}>
				<p>A second from now, something will appear here:</p>

				<Delay seconds={1}>
					<p>I'm visible after a second.</p>
				</Delay>
			</Repeat>
		</>
	)
}

export default App
