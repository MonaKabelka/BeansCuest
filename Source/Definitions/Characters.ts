namespace BeansCuest {
    export type CharacterName = "Bean" | "Stool" | "Lillypad" | "Charm" | "Chant" | "Spook" | "Bandit" | "Oliver" | "Narrator" | "Unknown";

    export type EmotionName = "happy" | 
    "worried" | 
    "sad" | 
    "focused" | 
    "proud" | 
    "curious" | 
    "charmed" | 
    "scared" | 
    "confused" | 
    "explanatory" | 
    "questioning" | 
    "hysterical" |
    "guilty" |
    "unsure" |
    "crying" |
    "resigned";

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
                scared: "Images/Characters/Bean/scared.png",
                confused: "Images/Characters/Bean/confused.png",
                questioning: "Images/Characters/Bean/questioning.png",
                guilty: "Images/Characters/Bean/guilty.png",
                unsure: "Images/Characters/Bean/unsure.png",
                resigned: "Images/Characters/Bean/resigned.png"
            }
        },
        Stool: {
            name: "Stool",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                worried: "Images/Characters/Stool/worried.png",
                explanatory: "Images/Characters/Stool/explanatory.png",
                hysterical: "Images/Characters/Stool/hysterical.png",
                sad: "Images/Characters/Stool/sad.png",
                confused: "Images/Characters/Stool/confused.png",
                happy: "Images/Characters/Stool/happy.png",
                crying: "Images/Characters/Stool/crying.png"
            }
        },
        Narrator: {
            name: "Narrator",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: null
        },
        Unknown: {
            name: "Unknown",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: null
        }
    }
}