import { useRef, useLayoutEffect, useCallback } from 'react'

export default function useSafeDispacth(dispatch) {
    const mounted = useRef(false)

    useLayoutEffect(() => {
        mounted.current = true

        return () => {
            mounted.current = false
        };
    }, [])

    return useCallback(
        (...args) => mounted.current ? dispatch(...args) : void 0,
        [dispatch],
    )

}
