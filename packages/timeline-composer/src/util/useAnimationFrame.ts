import { useLayoutEffect } from "react"

export const useAnimationFrame = (callback: FrameRequestCallback, deps?: any[]) => {
	useLayoutEffect(() => {
		let running = true
		let lastTime = 0

		const tick = (time: number) => {
			const diff = time - lastTime
			const dt = diff / 1000
			lastTime = time

			callback(dt)

			if (running) requestAnimationFrame(tick)
		}

		requestAnimationFrame(tick)

		return () => {
			running = false
		}
	}, deps)
}
