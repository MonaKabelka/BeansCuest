namespace BeansCuest {
    let askedBothOptions = [false, false];
    let text: SceneText = {
        Unknown: {
            T0000: "Hellooo? Are you okay? U don't look okay! Are you dead? Have I witnessed a decease??? Oh that's a CAT-ASTROPHE!",
            T0001: "OH you're alive! I'm Stool. Are you alright? I heard a loud noise and then you were just… here. I was SO scared."
        },
        Bean: {
            T0000: "...urgh... Oliver...?",
            T0001: "Where am I? I was playing hide and seek with Oliver, and then everything is just a blur. I hope he's alright!",
            T0002: "Wha...?",
            T0003: "To get back home I have to find... stones?",
            T0004: "Enchantica? I'm not in the garden? With Oliver? Am I dreaming?",
            T0005: "How is that even pawssible? How are YOU pawssible?",
            T0006: "No that's not it. Don't get me wrong but you're a talking mushroom. This is enchanted!",
            T0007: "... Um - nevermind",
            T0008: "Can you tell me the best place to start looking for the stones? I want to go home. I hope Oliver is fine...",
            T0009: "It will definitely come in handy if you accompany me! Also, I'm looking forward to some company.",
            T0010: "I don't know. I think it would be safer for you to stay here.",
            T0011: "Sigh. Okay you can come with me."
        },
        Stool: {
            T0000: "I don't know what happened either. I usually just sit here and watch the portal...",
            T0001: "You know, in Enchantica we sometimes get visitors from other worlds! But suddenly BOOM and I've never seen something strange like you.",
            T0002: "You look funny!",
            T0003: "JUST NOW there was this loud noise! And all the three stones got lost! You know? The stones for the portal.",
            T0004: "If we won't fix it fast enough the portal might implode! And the could be everywhere in Enchantica!",
            T0005: "You're quick-witted! The stones to power the portal are the moonstone, the sunstone and the starstone. Without the stones we can never use the portal again!",
            T0006: "But it's im-paw-sible to find them",
            T0007: "Oliver?",
            T0008: "We're in Enchantica - to be exact in the Wistful Woods. I lived here for like - …forever. I take care of the portal and the stones.",
            T0009: "Me? I knew it! I shouldn't have pushed you like that, I'm SO sorry!",
            T0010: "What's a mushroom?",
            T0011: "Hmm. I'm not sure, but I have a dare hunch. Maybe you should start at the Lillypond next to the Wistful Woods.",
            T0012: "BUT WAIT - you can't leave me! What if something bad happens again? Will you take me with you? Pleeease?",
            T0013: "*Shivers* Didn't you hear that? There was a noise! Back there!",
            T0014: "Pawsome! Let's go!"
        }
    }
    export async function scene2_1(): fS.SceneReturn {
        await fS.Location.show(LOCATIONS.black);
        await makeTransition("fade_in");

        await createSingleLineSpeech(CHARACTERS.Unknown, text.Unknown.T0000);
        await showCharacter(CHARACTERS.Bean, "confused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.5);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0000);

        await fS.Location.show(LOCATIONS.wistfulwoods);
        await showCharacter(CHARACTERS.Stool, "worried", fS.positionPercent(85, 100));
        await makeTransition("pix1");

        await createSingleLineSpeech(CHARACTERS.Unknown, text.Unknown.T0001);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0001);

        await showCharacter(CHARACTERS.Stool, "explanatory", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createMultiLineSpeech(CHARACTERS.Stool, ["T0000", "T0001"], text);

        await showCharacter(CHARACTERS.Stool, "happy", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0002);

        await showCharacter(CHARACTERS.Bean, "questioning", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1)
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0002);

        await showCharacter(CHARACTERS.Stool, "hysterical", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createMultiLineSpeech(CHARACTERS.Stool, ["T0003", "T0004"], text);

        await showDialog1();
    }

    async function showDialog1() {
        let dialogue: Dialog = {
            A: "Stones?",
            B: "Enchantica?"
        };

        let dialogueElement = await fS.Menu.getInput(dialogue, "choice");

        switch (dialogueElement) {
            case dialogue.A:
                await optionA();
                break;
            case dialogue.B:
                await optionB();
                break;
        }
    }

    async function optionA() {
        askedBothOptions[0] = true;

        await showCharacter(CHARACTERS.Bean, "confused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0003);

        await showCharacter(CHARACTERS.Stool, "hysterical", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0005);

        await showCharacter(CHARACTERS.Stool, "sad", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0006);

        await optionC();
    }

    async function optionB() {
        askedBothOptions[1] = true;

        await showCharacter(CHARACTERS.Bean, "questioning", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0004);

        await showCharacter(CHARACTERS.Stool, "confused", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0007);

        await showCharacter(CHARACTERS.Stool, "explanatory", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0008);

        await optionC();
    }

    async function optionC() {
        if (!askedBothOptions.every((val) => val)) {
            await showDialog1();
            return;
        }
        await showCharacter(CHARACTERS.Bean, "confused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0005);

        await showCharacter(CHARACTERS.Stool, "worried", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0009);

        await showCharacter(CHARACTERS.Bean, "guilty", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0006);

        await showCharacter(CHARACTERS.Stool, "confused", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0010);

        await showCharacter(CHARACTERS.Bean, "confused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0007);

        await showCharacter(CHARACTERS.Bean, "questioning", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0008);

        await showCharacter(CHARACTERS.Stool, "questioning", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0011);

        await showCharacter(CHARACTERS.Stool, "hysterical", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0012);

        let dialogue: Dialog = {
            C1: "Take Stool with you?",
            C2: "Don't take Stool with you?"
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
    }

    async function optionC1() {
        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0009);

        await optionD();
    }

    async function optionC2() {
        await showCharacter(CHARACTERS.Bean, "unsure", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0010);

        await showCharacter(CHARACTERS.Stool, "crying", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0013);

        await showCharacter(CHARACTERS.Bean, "resigned", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0011);

        await optionD();
    }

    async function optionD() {
        await showCharacter(CHARACTERS.Stool, "happy", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0014);

        fS.Speech.hide();
        fS.Character.hideAll();
        await makeTransition("fade_in");
    }
}