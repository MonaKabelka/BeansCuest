namespace BeansCuest {
    export async function playSound(sound: SoundDefinition) {
        fS.Sound.play(sound.url, sound.defaultVolume);
    }

    export async function playBGM(music: MusicDefinition, duration?: number) {
        await fS.Sound.fade(music.url, music.defaultVolume, duration || 0.5, music.looping);
    }

    export async function muteBGM(music: MusicDefinition, duration?: number) {
        await fS.Sound.fade(music.url, 0, duration || 0.5);
    }
}