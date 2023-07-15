namespace BeansCuest {
    type SingleNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    export type TextName = `T${SingleNumber}${SingleNumber}${SingleNumber}${SingleNumber}`;
    export type SingleText = string;
    export type SceneText = Partial<Record<CharacterName, Partial<Record<TextName, SingleText>>>>;

    type ScriptText = {
        text: SingleText;
        emotion?: EmotionName;
    }

    export type SingleCharacterScript = {
        defaultPosition: [number, number],
        texts: Partial<Record<TextName, ScriptText>>
    };
    export type ScriptDefinition = Partial<Record<CharacterName, SingleCharacterScript>>;

    export async function letCharacterSayText(character: CharacterDefinition, emotion: EmotionName, text: string, position: f.Vector2) {
        await showCharacter(character, emotion, position);
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(character, text);
    }

    export async function letCharactersHaveDialogue(texts: [CharacterDefinition, ScriptText][], script: ScriptDefinition) {
        for (let [character, scriptText] of texts) {
            const [x, y] = script[character.name].defaultPosition;
            const position = fS.positionPercent(x, y);
            await letCharacterSayText(
                character, 
                scriptText.emotion, 
                scriptText.text,
                position
            );
        }
    }
}