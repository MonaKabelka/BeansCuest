namespace BeansCuest {

    let text: ScriptDefinition = {
        Oliver: {
            defaultPosition: POSITIONS[1],
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
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "Sorry Oliver, I'm a bit late today. Unfurtunately I got caught up in some stuff and forgot the time."
                },
                T0001: {
                    text: "I apologize for being late, but I had the most purr-fect dream last night. I was engaged in an epic yarn chase with the most exquisite yarn balls."
                },
                T0002: {
                    text: "It was so captivating that when I woke up, I realized I couldn't resist the temptation and ended up yarning my way through the morning."
                },
                T0003: {
                    text: "Absolutely! I've been improving my hiding skills, you know?"
                },
                T0004: {
                    text: "Ha! Challenge accepted. This time, I'll find the most extraordinary hiding spot. You won't stand a chance!"
                }
            }
        }
    };

    export async function scene1_1(): fS.SceneReturn {
        fS.Speech.hide();
        await fS.Location.show(LOCATIONS.woods);
        await makeTransition("sceneChange");
        
        await letCharactersHaveDialogue([
            [CHARACTERS.Oliver, text.Oliver.texts.T0000, null], 
            [CHARACTERS.Oliver, text.Oliver.texts.T0001, null]
        ], text);

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
    }

    async function optionA() {
        await letCharactersHaveDialogue([[CHARACTERS.Bean, text.Bean.texts.T0000, null]], text);
        await optionC();
    }

    async function optionB() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, text.Bean.texts.T0001, null],
            [CHARACTERS.Bean, text.Bean.texts.T0002, null],
        ], text);
        await optionC();
    }

    async function optionC() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Oliver, text.Oliver.texts.T0002, null],
            [CHARACTERS.Bean, text.Bean.texts.T0003, null],
            [CHARACTERS.Oliver, text.Oliver.texts.T0003, null],
            [CHARACTERS.Bean, text.Bean.texts.T0004, null],
            [CHARACTERS.Oliver, text.Oliver.texts.T0004, null],
        ], text);
    }

    
}