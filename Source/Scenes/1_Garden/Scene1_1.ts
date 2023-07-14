namespace BeansCuest {
    let text: SceneText = {
        Oliver: {
            T0000: "Hey Bean, finally!",
            T0001: "I was afraid something might have happened to you. I thought you weren't going to show up.",
            T0002: "No worries! I'm just happy you're here now. Are you ready to play hide and seek?",
            T0003: "Yeah, I do. But I'm getting better at finding you every time so don't underestimate me! Prepare to be found!",
            T0004: "We'll see about that! Alright, I'll start counting while you go and conceal yourself. Ready... set... go!"
        },
        Bean: {
            T0000: "Sorry Oliver, I'm a bit late today. Unfurtunately I got caught up in some stuff and forgot the time.",
            T0001: "I apologize for being late, but I had the most purr-fect dream last night. I was engaged in an epic yarn chase with the most exquisite yarn balls.",
            T0002: "It was so captivating that when I woke up, I realized I couldn't resist the temptation and ended up yarning my way through the morning.",
            T0003: "Absolutely! I've been improving my hiding skills, you know?",
            T0004: "Ha! Challenge accepted. This time, I'll find the most extraordinary hiding spot. You won't stand a chance!",
        }
    }
    export async function scene1_1(): fS.SceneReturn {

        fS.Speech.hide();
        await fS.Location.show(LOCATIONS.woods);
        await makeTransition("fade_in");
        await createSingleLineSpeech(CHARACTERS.Oliver, text.Oliver.T0000);
        await showCharacter(CHARACTERS.Oliver, "worried", fS.positionPercent(85, 100));
        await makeTransition("fade_in");
        await createSingleLineSpeech(CHARACTERS.Oliver, text.Oliver.T0001);

        let dialogue: Dialog = {
            A: "Apologize",
            B: "Try to be funny"
        };

        let dialogueElement = await fS.Menu.getInput(dialogue, "choice");

        switch (dialogueElement) {
            case dialogue.A:
                await optionA();
                await optionC();
                break;
            case dialogue.B:
                await optionB();
                await optionC();
                break;
        }

        fS.Speech.hide();
        fS.Character.hideAll();
        await makeTransition("fade_in");
    }

    async function optionA() {
        await showCharacter(CHARACTERS.Bean, "sad", fS.positionPercent(15, 100));
        await makeTransition("fade_in");
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0000);
    }

    async function optionB() {
        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in");
        await createMultiLineSpeech(CHARACTERS.Bean, ["T0001", "T0002"], text);
    }

    async function optionC() {
        await showCharacter(CHARACTERS.Oliver, "happy", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Oliver, text.Oliver.T0002);
        await showCharacter(CHARACTERS.Bean, "focused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0003);
        await createSingleLineSpeech(CHARACTERS.Oliver, text.Oliver.T0003);
        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0004);
        await showCharacter(CHARACTERS.Oliver, "proud", fS.positionPercent(85, 100));
        await createSingleLineSpeech(CHARACTERS.Oliver, text.Oliver.T0004);
    }
}