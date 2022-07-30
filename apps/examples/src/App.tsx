import { ReactNode } from "react"
import { Delay, Lifetime, Repeat } from "timeline-composer"

const Box = ({ children }: { children?: ReactNode }) => (
	<div style={{ border: "1px solid black", padding: "1em", marginTop: "1em" }}>
		{children}
	</div>
)

function App() {
	return (
		<>
			<h1>Timeline Composer Test</h1>
			<p>I'm immediately visible.</p>
			<p>
				A second from now, you will see a simple "animation", ahem, and it will repeat
				every 6 seconds:
			</p>
			<Repeat interval={6}>
				<Delay seconds={1}>
					<Box>
						I'm visible after a second. Something else will appear{" "}
						<strong>after 2 seconds</strong>:
						<Delay seconds={2}>
							<Lifetime seconds={2}>
								<Box>
									I'm visible after two seconds, but will{" "}
									<strong>disappear again after 2 seconds</strong>. See you later!
								</Box>
							</Lifetime>
						</Delay>
					</Box>
				</Delay>
			</Repeat>
		</>
	)
}

export default App
