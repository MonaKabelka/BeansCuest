namespace BeansCuest {
    export const SOUND_NAMES = ["a", "b", "c"] as const;
    export type SoundName = typeof SOUND_NAMES[number];
    export type SoundDefinition = {
        url: string,
        defaultVolume: number,
    };
    export const SOUNDS: Record<SoundName, SoundDefinition> = {
        a: {
            url: "Audio/Sounds/a.mp3",
            defaultVolume: 1
        },
        b: {
            url: "Audio/Sounds/b.mp3",
            defaultVolume: 1
        },
        c: {
            url: "Audio/Sounds/c.mp3",
            defaultVolume: 1
        },
    }

    export const MUSIC_NAMES = ["garden", "woods", "lilypond", "meadows", "mansion", "portal"] as const;
    export type MusicName = typeof MUSIC_NAMES[number];
    export type MusicDefinition = {
        url: string,
        defaultVolume: number,
        looping?: boolean,
    };
    export const MUSICS: Record<MusicName, MusicDefinition> = {
        garden: {
            defaultVolume: 1,
            url: "Audio/BGM/garden.mp3",
            looping: true
        },
        woods: {
            defaultVolume: 1,
            url: "Audio/BGM/woods.mp3",
            looping: true
        },
        lilypond: {
            defaultVolume: 1,
            url: "Audio/BGM/lilypond.mp3",
            looping: true
        },
        meadows: {
            defaultVolume: 1,
            url: "Audio/BGM/meadows.mp3",
            looping: true
        },
        mansion: {
            defaultVolume: 1,
            url: "Audio/BGM/mansion.mp3",
            looping: true
        },
        portal: {
            defaultVolume: 1,
            url: "Audio/BGM/portal.mp3",
            looping: true
        }
    }
}