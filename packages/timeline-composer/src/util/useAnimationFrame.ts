import { useLayoutEffect } from "react"
import { clamp01 } from "./clamp"

export const useAnimationFrame = (callback: FrameRequestCallback, deps?: any[]) => {
	useLayoutEffect(() => {
		let running = true
		let lastTime: number

		const tick = (time: number) => {
			/* Initialize lastTime if it doesn't exist. */
			if (!lastTime) lastTime = time

			/* Determine delta time, clamped to 1 second max. */
			const diff = time - lastTime
			const dt = clamp01(diff / 1000)
			lastTime = time

			/* Invoke callback. */
			callback(dt)

			/* Repeat! */
			if (running) requestAnimationFrame(tick)
		}

		requestAnimationFrame(tick)

		return () => {
			running = false
		}
	}, deps)
}
