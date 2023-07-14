namespace BeansCuest {
    export async function showCharacter(character: CharacterDefinition, pose: EmotionName, position: f.Vector2) {
        await hideCharacter(character);
        await fS.Character.show(
            character,
            character.pose[pose],
            position
        );
    }

    export async function hideCharacter(character: CharacterDefinition) {
        await fS.Character.hide(character);
    }
}