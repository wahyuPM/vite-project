import React, { useRef, useState, useCallback, useLayoutEffect } from 'react'

export default function Carousel({ children, refContainer }) {
    const refDragHandler = useRef(null)
    // const containerClientReact = refContainer.curent.getBoundingClientReact()
    const [index, setIndex] = useState(0)

    const threshold = 100
    const itemToShow = window.innerWidth < 767 ? 1 : 4
    const DIRECTION_LEFT = "DIRECTION_LEFT"
    const DIRECTION_RIGHT = "DIRECTION_RIGHT"

    const posInitial = useRef()
    const posX1 = useRef()
    const posX2 = useRef()
    const posFinal = useRef()
    const isAllowShift = useRef(true)
    const cards = useRef()

    const cardSize = cards.current?.[0].offsetWidth || 0
    const cardCount = cards.current?.length

    const fnCheckIndex = useCallback(
        (e) => {
            if (e.propertyName = 'left') {
                setTimeout(() => {
                    refDragHandler.current.classList.remove('.transition-all.duration-200')
                }, 200);

                const isMobile = window.innerWidth < 767 ? 0 : -1

                if (index <= 0) {
                    refDragHandler.current.style.left = 0
                    setIndex(0)
                } else if (index >= cardCount - itemToShow) {
                    refDragHandler.current.style.left = -((cardCount - itemToShow + isMobile) * cardSize)
                    setIndex(cardCount - itemToShow)
                } else if (index === cardCount || index === cardCount - 1) {
                    refDragHandler.current.style.left = (cardCount - 1) * cardSize
                    setIndex(cardCount - 1)
                }
                isAllowShift.current = true

            }
        },
        [cardCount, cardSize, index, itemToShow],
    )


    const fnShiftItem = useCallback(
        (direction) => {
            refDragHandler.current.classList.add('.transition-all.duration-200')
            // refDragHandler.current.classList.add('.transition-all.duration-200')

            if (isAllowShift.current) {
                if (direction === 'DIRECTION_LEFT') {
                    setIndex(prev => prev + 1)
                    refDragHandler.current.style.left = posInitial.current - cardSize + 'px'
                } else if (direction === 'DIRECTION_RIGHT') {
                    setIndex(prev => prev - 1)
                    refDragHandler.current.style.left = posInitial.current + cardSize + 'px'
                }
            }
            isAllowShift.current = false
        },
        [cardSize],
    )


    const onDragMove = useCallback(
        (ev) => {
            ev = ev || window.event
            ev.preventDefault()


            if (ev.type === 'touchmove') {
                posX2.current = posX1.current - ev.touches[0].clientX
                posX1.current = ev.touches[0].clientX
            } else {
                posX2.current = posX1.current - ev.clientX
                posX1.current = ev.clientX
            }

            refDragHandler.current.style.left = refDragHandler.current.offsetLeft - posX2.current + 'px'
        },
        [posX1, posX2],
    )

    const onDragEnd = useCallback(
        (ev) => {
            ev = ev || window.event
            ev.preventDefault()

            posFinal.current = refDragHandler.current.offsetLeft

            if (posFinal.current - posInitial.current < -threshold) {
                fnShiftItem(DIRECTION_LEFT)
            } else if (posFinal.current - posInitial.current > threshold) {
                fnShiftItem(DIRECTION_RIGHT)
            } else {
                refDragHandler.current.style.left = posInitial.current + 'px'
            }

            document.onmouseup = null
            document.onmousemove = null
        },
        [],
    )

    const onDragStart = useCallback(
        (ev) => {
            ev = ev || window.event
            ev.preventDefault()


            posInitial.current = refDragHandler.current.offsetLeft

            if (ev.type === 'touchstart') {
                posX1.current = ev.touches[0].clientX
            } else {
                posX1.current = ev.clientX
                document.onmouseup = onDragEnd
                document.onmousemove = onDragMove
            }
        },
        [onDragEnd, onDragMove],
    )

    const onClick = ev => {
        ev = ev || window.event
        !isAllowShift.curent && ev.preventDefault()
    }

    useLayoutEffect(() => {
        const refForwardDragHandler = refDragHandler.current

        refForwardDragHandler.onmousedown = onDragStart
        refForwardDragHandler.addEventListener('touchstart', onDragStart)
        refForwardDragHandler.addEventListener('touchmove', onDragEnd)
        refForwardDragHandler.addEventListener('touchstart', onDragMove)
        refForwardDragHandler.addEventListener('click', onClick)
        refForwardDragHandler.addEventListener('transitionend', fnCheckIndex)
        return () => {
            refForwardDragHandler.removeEventListener('touchstart', onDragStart)
            refForwardDragHandler.removeEventListener('touchmove', onDragEnd)
            refForwardDragHandler.removeEventListener('touchstart', onDragMove)
            refForwardDragHandler.removeEventListener('click', onClick)
            refForwardDragHandler.removeEventListener('transitionend', fnCheckIndex)
        };
    }, [onDragStart, onDragMove, onDragEnd, onClick, fnCheckIndex])

    return (
        <div ref={refDragHandler} className="flex -mx-4 flex-row relative">{children}</div>
    )

}
