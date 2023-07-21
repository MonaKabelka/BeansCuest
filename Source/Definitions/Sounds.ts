namespace BeansCuest {
    export const SOUND_NAMES = ["boo", "collapse", "howling", "item", "novelpage", "pixiedust", "portal", "portalactivates", "snoring", "splash", "creak", "bites"] as const;
    export type SoundName = typeof SOUND_NAMES[number];
    export type SoundDefinition = {
        url: string,
        defaultVolume: number,
    };
    export const SOUNDS: Record<SoundName, SoundDefinition> = {
        boo: {
            url: "Audio/FX/boo.mp3",
            defaultVolume: 0.2
        },
        collapse: {
            url: "Audio/FX/collapse.mp3",
            defaultVolume: 0.5
        },
        howling: {
            url: "Audio/FX/howling.mp3",
            defaultVolume: 0.5
        },
        novelpage: {
            url: "Audio/FX/novelpage.mp3",
            defaultVolume: 0.5
        },
        pixiedust: {
            url: "Audio/FX/pixiedust.mp3",
            defaultVolume: 0.3
        },
        portal: {
            url: "Audio/FX/portal.mp3",
            defaultVolume: 0.4
        },
        portalactivates: {
            url: "Audio/FX/portalactivates.mp3",
            defaultVolume: 0.3
        },
        snoring: {
            url: "Audio/FX/snoring.mp3",
            defaultVolume: 0.8
        },
        item: {
            url: "Audio/FX/item.mp3",
            defaultVolume: 0.3
        },
        splash: {
            url: "Audio/FX/splash.mp3",
            defaultVolume: 0.5
        },
        creak: {
            url: "Audio/FX/creak.mp3",
            defaultVolume: 0.6
        },
        bites: {
            url: "Audio/FX/bites.mp3",
            defaultVolume: 0.6
        },
    }

    export const MUSIC_NAMES = ["woods", "woodsportal", "cloud", "lilypond", "mansion", "meadow", "otherworld", "splashscreen", "wistfulwoods", "end"] as const;
    export type MusicName = typeof MUSIC_NAMES[number];
    export type MusicDefinition = {
        url: string,
        defaultVolume: number,
        looping?: boolean,
    };
    export const MUSICS: Record<MusicName, MusicDefinition> = {
        woods: {
            defaultVolume: 0.2,
            url: "Audio/BGM/woods.mp3",
            looping: true
        },
        woodsportal: {
            defaultVolume: 0.5,
            url: "Audio/BGM/woodsportal.mp3",
            looping: true
        },
        cloud: {
            defaultVolume: 0.3,
            url: "Audio/BGM/cloud.mp3",
            looping: true
        },
        lilypond: {
            defaultVolume: 0.5,
            url: "Audio/BGM/lilypond.mp3",
            looping: true
        },
        mansion: {
            defaultVolume: 0.5,
            url: "Audio/BGM/mansion.mp3",
            looping: true
        },
        meadow: {
            defaultVolume: 0.5,
            url: "Audio/BGM/meadow.mp3",
            looping: true
        },
        otherworld: {
            defaultVolume: 0.5,
            url: "Audio/BGM/otherworld.mp3",
            looping: true
        },
        splashscreen: {
            defaultVolume: 0.5,
            url: "Audio/BGM/splashscreen.mp3",
            looping: true
        },
        wistfulwoods: {
            defaultVolume: 0.15,
            url: "Audio/BGM/wistfulwoods.mp3",
            looping: true
        },
        end: {
            defaultVolume: 0.3,
            url: "Audio/BGM/end.mp3",
            looping: true
        },
    }
}