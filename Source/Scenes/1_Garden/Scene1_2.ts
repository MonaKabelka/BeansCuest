namespace BeansCuest {
    let text: SceneText = {
        Oliver: {
            T0000: "1, 2, 3... 10, 11, 12...",
            T0001: "Okay, I'm done counting. Bean, where are you? I know you're hiding somewhere, and I'll find you!"
        },
        Bean: {
            T0000: "it's getting rather dark around here... this seems like the purr-fect spot to hide. oliver never ventures beyond the garden. but what is this weird light?",
            T0001: "wow it looks so beautiful and sparkly! i wonder what it could be… oh looks like a portal!",
            T0002: "must be magic or something. i wonder how… OAAAHH",
            T0003: "the light... it's... magical...",
            T0004: "i'll return later, fully prepared. for now, i'll show oliver who truly excels at hiding.",
            T0005: "Oh no! My paw... it's stuck! AHHH!"
        }
    }
    export async function scene1_2(): fS.SceneReturn {
        await fS.Location.show(LOCATIONS.woods2);
        await makeTransition("pix4");
        await createSingleLineSpeech(CHARACTERS.Oliver, text.Oliver.T0000);
        await showCharacter(CHARACTERS.Bean, "curious", fS.positionPercent(15, 100))
        await makeTransition("fade_in");
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0000);
        await createSingleLineSpeech(CHARACTERS.Oliver, text.Oliver.T0001);

        await showCharacter(CHARACTERS.Bean, "charmed", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0001);

        let dialogue: Dialog = {
            C1: "Investigate",
            C2: "Ignore"
        };

        let dialogueElement = await fS.Menu.getInput(dialogue, "choice");

        switch (dialogueElement) {
            case dialogue.C1:
                await optionC1();
                break;
            case dialogue.C2:
                await optionC2();
                break;
        }

        fS.Speech.hide();
        fS.Character.hideAll();
        await fS.Location.show(LOCATIONS.black);
        await makeTransition("fade_in");
    }

    async function optionC1() {
        await showCharacter(CHARACTERS.Bean, "curious", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0002);
        
    }

    async function optionC2() {
        await showCharacter(CHARACTERS.Bean, "charmed", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0003);
        await showCharacter(CHARACTERS.Bean, "proud", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0004);
        await showCharacter(CHARACTERS.Bean, "scared", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0005);
    }
}