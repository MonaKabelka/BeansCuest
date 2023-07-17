namespace BeansCuest {
    export type CharacterName = "Bean" | "Stool" | "Lillypad" | "Charm" | "Chant" | "Spook" | "Bandit" | "Oliver" | "System" | "Unknown";

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
    "resigned" |
    "anxious" |
    "hiding" |
    "smiling" |
    "shy" |
    "disappointed" |
    "determined" |
    "blushing" | 
    "surprised" |
    "thinking" |
    "serious" |
    "mocking" |
    "disgusted" |
    "laughing" |
    "begging" |
    "cheering" |
    "impressed" |
    "shivers" |
    "concerned" |
    "annoyed" |
    "angry" |
    "snapped" |
    "whispering" |
    "muttering" |
    "grumpy" |
    "sleepy" |
    "center";

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
                resigned: "Images/Characters/Bean/resigned.png",
                smiling: "Images/Characters/Bean/smiling.png",
                determined: "Images/Characters/Bean/determined.png",
                surprised: "Images/Characters/Bean/surprised.png",
                thinking: "Images/Characters/Bean/thinking.png",
                serious: "Images/Characters/Bean/serious.png",
                laughing: "Images/Characters/Bean/laughing.png",
                begging: "Images/Characters/Bean/begging.png",
                impressed: "Images/Characters/Bean/impressed.png",
                whispering: "Images/Characters/Bean/whispering.png"
            }
        },
        Stool: {
            name: "Stool",
            origin: fS.ORIGIN.CENTER,
            pose: {
                worried: "Images/Characters/Stool/worried.png",
                explanatory: "Images/Characters/Stool/explanatory.png",
                hysterical: "Images/Characters/Stool/hysterical.png",
                sad: "Images/Characters/Stool/sad.png",
                confused: "Images/Characters/Stool/confused.png",
                happy: "Images/Characters/Stool/happy.png",
                crying: "Images/Characters/Stool/crying.png",
                anxious: "Images/Characters/Stool/anxious.png",
                disappointed: "Images/Characters/Stool/disappointed.png",
                serious: "Images/Characters/Stool/serious.png",
                mocking: "Images/Characters/Stool/mocking.png",
                disgusted: "Images/Characters/Stool/disgusted.png",
                cheering: "Images/Characters/Stool/cheering.png",
                shivers: "Images/Characters/Stool/shivers.png",
                concerned: "Images/Characters/Stool/concerned.png",
                annoyed: "Images/Characters/Stool/annoyed.png",
                impressed: "Images/Characters/Stool/impressed.png",
                whispering: "Images/Characters/Stool/whispering.png",
                questioning: "Images/Characters/Stool/questioning.png"
            }
        },
        System: {
            name: "System",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: null
        },
        Unknown: {
            name: "Unknown",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: null
        },
        Lillypad: {
            name: "Lillypad",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                hiding: "Images/Characters/Lillypad/hiding.png",
                shy: "Images/Characters/Lillypad/shy.png",
                blushing: "Images/Characters/Lillypad/blushing.png",
                sad: "Images/Characters/Lillypad/sad.png",
                smiling: "Images/Characters/Lillypad/smiling.png",
                scared: "Images/Characters/Lillypad/scared.png"
            }
        },
        Chant: {
            name: "Chant",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/Chant/angry.png",
                snapped: "Images/Characters/Chant/snapped.png",
                happy: "Images/Characters/Chant/happy.png"
            }
        },
        Charm: {
            name: "Charm",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                angry: "Images/Characters/Charm/angry.png",
                snapped: "Images/Characters/Charm/snapped.png",
                confused: "Images/Characters/Charm/confused.png"
            }
        },
        Bandit: {
            name: "Bandit",
            origin: fS.ORIGIN.BOTTOMCENTER,
            pose: {
                muttering: "Images/Characters/Bandit/muttering.png",
                grumpy: "Images/Characters/Bandit/grumpy.png",
                sleepy: "Images/Characters/Bandit/sleepy.png"
            }
        }
    }
}