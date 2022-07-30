import React, { FC, Fragment, ReactNode, useState } from "react"
import { Delay } from "./Delay"

type RepeatProps = { children: ReactNode; times?: number; seconds?: number }

export const Repeat: FC<RepeatProps> = ({ children, times = Infinity, seconds = 1 }) => {
	const [iteration, setIteration] = useState(1)

	return (
		<Fragment key={iteration}>
			{iteration < times && (
				<Delay seconds={seconds} onComplete={() => setIteration(iteration + 1)} />
			)}
			{children}
		</Fragment>
	)
}
