declare namespace BeansCuest {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace BeansCuest {
    export type CharacterName = "Bean" | "Stool" | "Lillypad" | "Charm" | "Chant" | "Spook" | "Bandit" | "Oliver";
    export type EmotionName = "angry" | "happy" | "upset";
    export type Pose = `Images/Characters/${CharacterName}_${EmotionName}.png`;
    type PoseDefinition = Partial<Record<EmotionName, Pose>>;
    export type CharacterDefinition = {
        name: CharacterName;
        origin: f.ORIGIN2D;
        pose: PoseDefinition;
    };
    export const CHARACTERS: Partial<Record<CharacterName, CharacterDefinition>>;
    export {};
}
declare namespace BeansCuest {
    type LocationName = "cloud" | "lilypond" | "mansion" | "mansion2" | "meadow" | "meadow2" | "wistfulwoods" | "woods" | "woods2" | "woods3";
    type Location<T extends LocationName> = {
        name: T;
        background: `Images/Backgrounds/${T}.png`;
    };
    type LocationDefinition = Record<LocationName, Location<LocationName>>;
    export let LOCATIONS: LocationDefinition;
    export {};
}
declare namespace BeansCuest {
    type SingleNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    export type TextName = `T${SingleNumber}${SingleNumber}${SingleNumber}${SingleNumber}`;
    export type SingleText = string;
    export type SceneText = Partial<Record<CharacterName, Partial<Record<TextName, SingleText>>>>;
    export {};
}
declare namespace BeansCuest {
    type TransitionName = "fade_in" | "inScene";
    type Transition<T extends TransitionName> = {
        alpha: `Images/Transitions/${T}.jpg`;
        edge: number;
        duration: number;
    };
    export let TRANSITIONS: Partial<Record<TransitionName, Transition<TransitionName>>>;
    export function makeTransition(name: TransitionName, duration?: number): Promise<void>;
    export {};
}
declare namespace BeansCuest {
    function showCharacter(character: CharacterDefinition, pose: Pose, [x, y]: [number, number]): Promise<void>;
}
declare namespace BeansCuest {
    function createMultiLineSpeech(character: CharacterDefinition, textNames: TextName[], text: SceneText): Promise<void>;
    function createSingleLineSpeech(character: CharacterDefinition, text: SingleText): Promise<void>;
}
declare namespace BeansCuest {
    function Scene(): fS.SceneReturn;
}
declare namespace BeansCuest {
    function scene1_1(): fS.SceneReturn;
}
