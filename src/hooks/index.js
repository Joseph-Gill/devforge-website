import {useState, useEffect, useRef} from 'react'


// Returns boolean value and ref for a referenced element is currently overflowing on the y axis
export const useContainerOverflowHeight = (trigger) => {
    const labelRef = useRef()
    const [containerOverflowing, setContainerOverflowing] = useState(false)
    // console.log(dependencies)

    useEffect(() => {
        setContainerOverflowing(labelRef?.current?.offsetHeight < labelRef?.current?.scrollHeight)
    }, [labelRef, trigger])

    return [containerOverflowing, labelRef]
}
