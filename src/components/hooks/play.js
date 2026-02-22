import { create } from 'zustand';

export const usePlay = create((set) => ({
    play: false,
    updatePlay: (newPlay) => set({ play: newPlay }),
    onToggleFullscreen: () => {
        if (!document.fullscreenElement) {
            document.documentElement
                .requestFullscreen()
                .then(() => set({ play : true}));
        } else {
            document.exitFullscreen();
        }
    }
}))

export const useScreen = create((set) => ({
    screen: false,
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

