namespace BeansCuest {
    export async function createMultiLineSpeech(character: CharacterDefinition, textNames: TextName[], text: SceneText) {
        for (let name of textNames) {
            await createSingleLineSpeech(character, text[character.name][name]);
        }
    };

    export async function createSingleLineSpeech(character: CharacterDefinition, text: string) {
        await fS.Speech.tell(character, text);
    }
}