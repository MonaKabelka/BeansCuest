namespace BeansCuest {
    type SingleNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
    export type TextName = `T${SingleNumber}${SingleNumber}${SingleNumber}${SingleNumber}`;
    export type SingleText = string;
    export type SceneText = Partial<Record<CharacterName, Partial<Record<TextName, SingleText>>>>;

    export type ScriptText = {
        text: SingleText;
        emotion?: EmotionName;
    }

    export type SingleCharacterScript = {
        defaultPosition: [number, number],
        texts: Partial<Record<TextName, ScriptText>>
    };
    export type ScriptDefinition = Partial<Record<CharacterName, SingleCharacterScript>>;

    export async function letCharacterSayText(character: CharacterDefinition, scriptText: ScriptText, position: [number, number]) {
        if (scriptText.emotion) {
            const [x, y] = position;
            const positionVector = fS.positionPercent(x, y);
            await showCharacter(character, scriptText.emotion, positionVector);
            await makeTransition("fade_in", 0.1);
        }
        await createSingleLineSpeech(character, scriptText.text);
    }

    export async function letCharactersHaveDialogue(texts: [CharacterDefinition, ScriptText, [number, number]][], script: ScriptDefinition) {
        for (let [character, scriptText, position] of texts) {
            await letCharacterSayText(
                character, 
                scriptText,
                position ?? script[character.name].defaultPosition
            );
        }
    }
}