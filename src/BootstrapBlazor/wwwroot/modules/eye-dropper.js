﻿export async function open() {
    if (!window.EyeDropper) {
        console.error("Your browser does not support the EyeDropper API")
        return
    }

    const eyeDropper = new EyeDropper();
    const result = await eyeDropper.open();
    return result.sRGBHex;
}
