import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

export const useRotate = (onSwipeLeft, onSwipeRight, rangeOffset = 4) => {
    let firstTouch = 0;
	let start = [];

    // set user touch start position
    const onTouchStart = (e) => {
        firstTouch = e.nativeEvent.pageX;
		start = [e.nativeEvent.pageX, e.nativeEvent.pageY];
		// console.log("e0 = ", e.nativeEvent.pageX)
    };

    // when touch ends check for swipe directions
    const onTouchEnd = (e) => {
		console.log("e0 = ", e.nativeEvent.pageX)
        // get touch position and screen size
        const positionX = e.nativeEvent.pageX;
        const positionY = e.nativeEvent.pageX;
        const range = windowWidth / rangeOffset;

        // check if position is growing positively and has reached specified range
        if (positionX - firstTouch > range)
            onSwipeRight && onSwipeRight(positionX);
        // check if position is growing negatively and has reached specified range
        else if (firstTouch - positionX > range)
            onSwipeLeft && onSwipeLeft(positionX);
    }

    return { onTouchStart, onTouchEnd };
}