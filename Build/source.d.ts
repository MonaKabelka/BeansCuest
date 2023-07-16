declare namespace BeansCuest {
    export import f = FudgeCore;
    export import fS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
    };
    let mainPosition: [number, number];
    let secondaryPosition: [number, number];
}
declare namespace BeansCuest {
    export type CharacterName = "Bean" | "Stool" | "Lillypad" | "Charm" | "Chant" | "Spook" | "Bandit" | "Oliver" | "Narrator" | "Unknown";
    export type EmotionName = "happy" | "worried" | "sad" | "focused" | "proud" | "curious" | "charmed" | "scared" | "confused" | "explanatory" | "questioning" | "hysterical" | "guilty" | "unsure" | "crying" | "resigned" | "anxious" | "hiding" | "smiling" | "shy" | "disappointed" | "determined" | "blushing" | "surprised" | "thinking" | "serious" | "mocking" | "disgusted" | "laughing" | "begging" | "cheering" | "impressed" | "shivers" | "concerned" | "annoyed" | "angry" | "snapped" | "whispering" | "muttering" | "grumpy" | "sleepy";
    export type Pose = `Images/Characters/${CharacterName}/${EmotionName}.png`;
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
    type Dialog = Record<string, string>;
    type Option = {
        callback: () => Promise<void>;
        label: string;
    };
    type DialogConfig = Record<string, Option>;
    function createDialog(config: DialogConfig): Promise<void>;
}
declare namespace BeansCuest {
    type LocationName = "cloud" | "lilypond" | "mansion" | "mansion2" | "meadow" | "meadow2" | "wistfulwoods" | "woods" | "woods2" | "woods3" | "black";
    type Location<T extends LocationName> = {
        name: T;
        background: `Images/Backgrounds/${T}.png`;
    };
    type LocationDefinition = Record<LocationName, Location<LocationName>>;
    export let LOCATIONS: LocationDefinition;
    export {};
}
declare namespace BeansCuest {
    type MenuAction = "inventory" | "save" | "load" | "credits" | "volumeUp" | "volumeDown" | "novelPages" | "toggleMenu";
    type MenuDefinition = Record<MenuAction, {
        label: string;
        callback: () => Promise<void>;
        code: f.KEYBOARD_CODE;
    }>;
}
declare namespace BeansCuest {
    type SingleNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    export type TextName = `T${SingleNumber}${SingleNumber}${SingleNumber}${SingleNumber}`;
    export type SingleText = string;
    export type SceneText = Partial<Record<CharacterName, Partial<Record<TextName, SingleText>>>>;
    type ScriptText = {
        text: SingleText;
        emotion?: EmotionName;
    };
    export type SingleCharacterScript = {
        defaultPosition: [number, number];
        texts: Partial<Record<TextName, ScriptText>>;
    };
    export type ScriptDefinition = Partial<Record<CharacterName, SingleCharacterScript>>;
    export function letCharacterSayText(character: CharacterDefinition, scriptText: ScriptText, position: [number, number]): Promise<void>;
    export function letCharactersHaveDialogue(texts: [CharacterDefinition, ScriptText][], script: ScriptDefinition): Promise<void>;
    export {};
}
declare namespace BeansCuest {
    type TransitionName = "fade_in" | "inScene" | "portal" | "sceneChange";
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
    function showCharacter(character: CharacterDefinition, pose: EmotionName, position: f.Vector2): Promise<void>;
    function hideCharacter(character: CharacterDefinition): Promise<void>;
}
declare namespace BeansCuest {
    let gameMenu: fS.Menu;
    let menuDefinition: MenuDefinition;
    function transformMenu(definition: MenuDefinition): Object;
    function useCallbacks(_option: string): Promise<void>;
    let isMenuOpen: boolean;
}
declare namespace BeansCuest {
    function createMultiLineSpeech(character: CharacterDefinition, textNames: TextName[], text: SceneText): Promise<void>;
    function createSingleLineSpeech(character: CharacterDefinition, text: string): Promise<void>;
}
declare namespace BeansCuest {
    function scene1_1(): fS.SceneReturn;
}
declare namespace BeansCuest {
    function scene1_2(): fS.SceneReturn;
}
declare namespace BeansCuest {
    function scene2_1(): fS.SceneReturn;
}
declare namespace BeansCuest {
    function scene3_1(): fS.SceneReturn;
}
declare namespace BeansCuest {
    function scene4_1(): fS.SceneReturn;
}
