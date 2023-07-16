namespace BeansCuest {

    let text: ScriptDefinition = {
        Oliver: {
            defaultPosition: secondaryPosition,
            texts: {
                T0000: {
                    emotion: "happy",
                    text: "Hey Bean, finally!"
                },
                T0001: {
                    emotion: "worried",
                    text: "I was afraid something might have happened to you. I thought you weren't going to show up.",
                },
                T0002: {
                    emotion: "happy",
                    text: "No worries! I'm just happy you're here now. Are you ready to play hide and seek?"
                },
                T0003: {
                    emotion: "happy",
                    text: "Yeah, I do. But I'm getting better at finding you every time so don't underestimate me! Prepare to be found!"
                },
                T0004: {
                    emotion: "proud",
                    text: "We'll see about that! Alright, I'll start counting while you go and conceal yourself. Ready... set... go!"
                }
            }
        },
        Bean: {
            defaultPosition: mainPosition,
            texts: {
                T0000: {
                    emotion: "sad",
                    text: "Sorry Oliver, I'm a bit late today. Unfurtunately I got caught up in some stuff and forgot the time."
                },
                T0001: {
                    emotion: "happy",
                    text: "I apologize for being late, but I had the most purr-fect dream last night. I was engaged in an epic yarn chase with the most exquisite yarn balls."
                },
                T0002: {
                    emotion: "happy",
                    text: "It was so captivating that when I woke up, I realized I couldn't resist the temptation and ended up yarning my way through the morning."
                },
                T0003: {
                    emotion: "focused",
                    text: "Absolutely! I've been improving my hiding skills, you know?"
                },
                T0004: {
                    emotion: "happy",
                    text: "Ha! Challenge accepted. This time, I'll find the most extraordinary hiding spot. You won't stand a chance!"
                }
            }
        }
    };

    export async function scene1_1(): fS.SceneReturn {
        fS.Speech.hide();
        await fS.Location.show(LOCATIONS.woods);
        await makeTransition("fade_in");

        fS.Inventory.add(ITEMS.moonstone);
        
        await letCharactersHaveDialogue([[CHARACTERS.Oliver, text.Oliver.texts.T0000]], text);
        
        await letCharactersHaveDialogue([[CHARACTERS.Oliver, text.Oliver.texts.T0001]], text);

        let dialog: DialogConfig = {
            A: {
                callback: optionA,
                label: "Apologize"
            },
            B: {
                callback: optionB,
                label: "Try to be funny"
            }
        }

        await createDialog(dialog);

        fS.Speech.hide();
        fS.Character.hideAll();
        await makeTransition("fade_in");
    }

    async function optionA() {
        await letCharactersHaveDialogue([[CHARACTERS.Bean, text.Bean.texts.T0000]], text);
        await optionC();
    }

    async function optionB() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, text.Bean.texts.T0001],
            [CHARACTERS.Bean, text.Bean.texts.T0002],
        ], text);
        await optionC();
    }

    async function optionC() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Oliver, text.Oliver.texts.T0002],
            [CHARACTERS.Bean, text.Bean.texts.T0003],
            [CHARACTERS.Oliver, text.Oliver.texts.T0003],
            [CHARACTERS.Bean, text.Bean.texts.T0004],
            [CHARACTERS.Oliver, text.Oliver.texts.T0004],
        ], text);
    }

    
}