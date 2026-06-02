import { create } from 'zustand';

export const usePlay = create((set) => ({
    play: false,
    updatePlay: (newPlay) => set({ play: newPlay }),
    onToggleFullscreen: () => {
        const element = document.documentElement;
        const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;

        if (!fullscreenElement) {
            const requestFullscreen = element.requestFullscreen || element.webkitRequestFullscreen;

            if (requestFullscreen) {
                Promise.resolve(requestFullscreen.call(element))
                    .then(() => set({ play: true }));
            }
        } else {
            const exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen;

            if (exitFullscreen) {
                exitFullscreen.call(document);
            }
        }
    }
}))

export const useScreen = create((set) => ({
    screen: 1,
    updateScreen: (newScreen) => set({ screen: newScreen })
}))


export const useHronomer = create((set) => ({
    hronomer: 1,
    updateHronomer: (newHronomer) => set({hronomer: newHronomer})
}))

export const useMarker = create((set) => ({
    marker: 1,
    updateMarker: (newMarker) => set({marker: newMarker})
}))
