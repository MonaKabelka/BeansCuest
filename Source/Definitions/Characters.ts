namespace BeansCuest {
    export type CharacterName = "Bean" | "Stool" | "Lillypad" | "Charm" | "Chant" | "Spook" | "Bandit" | "Oliver" | "Narrator";

    export type EmotionName = "happy" | "worried" | "sad" | "focused" | "proud" | "curious" | "charmed" | "scared";

    export type Pose = `Images/Characters/${CharacterName}/${EmotionName}.png`;
    type PoseDefinition = Partial<Record<EmotionName, Pose>>;

    export type CharacterDefinition = {
        name: CharacterName,
        origin: f.ORIGIN2D,
        pose: PoseDefinition
    }
    export const CHARACTERS: Partial<Record<CharacterName, CharacterDefinition>> = {
        Oliver: {
            name: "Oliver",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Characters/Oliver/happy.png",
                worried: "Images/Characters/Oliver/worried.png",
                proud: "Images/Characters/Oliver/proud.png"
            }
        },
        Bean: {
            name: "Bean",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Characters/Bean/happy.png",
                sad: "Images/Characters/Bean/sad.png",
                focused: "Images/Characters/Bean/focused.png",
                curious: "Images/Characters/Bean/curious.png",
                charmed: "Images/Characters/Bean/charmed.png",
                proud: "Images/Characters/Bean/proud.png",
                scared: "Images/Characters/Bean/scared.png"
            }
        },
        Narrator: {
            name: "Narrator",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: null
        }
    }
}