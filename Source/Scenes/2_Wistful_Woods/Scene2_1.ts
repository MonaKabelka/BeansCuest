namespace BeansCuest {
    let askedBothOptions = [false, false];

    let script: ScriptDefinition = {
        Unknown: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "Hello?? Are you okay? You don't look okay! Are you dead? That's a CAT-ASTROPHE!"
                },
                T0001: {
                    text: "OH you're alive! I'm Stool. Are you alright? I heard a loud noise and then you were just... here. I was scared.",
                    emotion: "worried"
                }
            }
        },
        Bean: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: { 
                    text: "...urgh... Oliver...?",
                },
                T0001: { 
                    text: "Where am I? I was playing hide and seek with Oliver, and then everything is just a blur. I hope he's alright!", 
                },
                T0002: { 
                    text: "Wha...?", 
                },
                T0003: { 
                    text: "To get back home I have to find... stones?", 
                },
                T0004: { 
                    text: "Enchantica? I'm not in the garden? With Oliver? Am I dreaming?", 
                },
                T0005: { 
                    text: "How is that even paw-ssible? How are YOU paw-ssible?", 
                },
                T0006: { 
                    text: "No that's not it. Don't get me wrong but you're a talking mushroom. This is enchanted!", 
                },
                T0007: { 
                    text: "... Um - nevermind", 
                },
                T0008: { 
                    text: "Can you tell me the best place to start looking for the stones? I want to go home. I hope Oliver is fine... ", 
                },
                T0009: { 
                    text: "It will definitely come in handy if you accompany me! Also, I'm looking forward to some company.", 
                },
                T0010: { 
                    text: "I don't know. I think it would be safer for you to stay here.", 
                },
                T0011: { 
                    text: "Sigh. Okay you can come with me.",
                },
            }
        },
        Stool: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "I don't know what happened either. I usually just sit here - You know, in Enchantica we sometimes get visitors from other worlds!",
                    emotion: "explanatory",
                },
                T0001: {
                    text: "But suddenly BOOM and I've never seen something strange like you.",
                    emotion: "explanatory",
                },
                T0002: {
                    text: "You look funny!",
                    emotion: "happy",
                },
                T0003: {
                    text: "Just now there was this loud noise! And all the three stones got lost! You know? The stones for the portal.",
                    emotion: "hysterical",
                },
                T0004: {
                    text: "If we won't fix it fast enough the portal might implode! And they could be everywhere in Enchantica!",
                    emotion: "hysterical",
                },
                T0005: {
                    text: "You're quick-witted! The stones to power the portal are the <b>moonstone</b>, the <b>sunstone</b> and the <b>starstone</b>. Without the stones we can never use the portal again!",
                    emotion: "explanatory",
                },
                T0006: {
                    text: "But it's im-paw-sible to find them...",
                    emotion: "sad",
                },
                T0007: {
                    text: "Oliver?",
                    emotion: "confused",
                },
                T0008: {
                    text: "We're in Enchantica - to be exact in the Wistful Woods. I lived here for like - ...forever. I take care of the portal and the stones.",
                    emotion: "explanatory",
                },
                T0009: {
                    text: "Me? I knew it! I shouldn't have pushed you like that, I'm SO sorry!",
                    emotion: "worried",
                },
                T0010: {
                    text: "What's a mushroom?",
                    emotion: "confused",
                },
                T0011: {
                    text: "Hmm. I'm not sure, but I have a dare hunch. Maybe you should start at the Lilypond next to the Wistful Woods.",
                    emotion: "explanatory",
                },
                T0012: {
                    text: "BUT WAIT - you can't leave me! What if something bad happens again? Will you take me with you? Please?",
                    emotion: "hysterical",
                },
                T0013: {
                    text: "<i>*Shivers*</i> Didn't you hear that? There was a noise! Back there!",
                    emotion: "crying",
                },
                T0014: {
                    text: "Paw-some! Let's go!",
                    emotion: "happy",
                }
            }
        }
    } as const;

    export async function scene2_1(): fS.SceneReturn {
        await fS.Location.show(LOCATIONS.black);
        await makeTransition("fade_in", 0.1);

        await createSingleLineSpeech(CHARACTERS.Unknown, script.Unknown.texts.T0000.text);

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0000, null]
        ], script);
        

        await fS.Location.show(LOCATIONS.wistfulwoods);
        await makeTransition("fade_in");

        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Unknown.texts.T0001, null],
            [CHARACTERS.Bean, script.Bean.texts.T0001, null],
            [CHARACTERS.Stool, script.Stool.texts.T0000, null],
            [CHARACTERS.Stool, script.Stool.texts.T0001, null],
            [CHARACTERS.Stool, script.Stool.texts.T0002, null],
            [CHARACTERS.Bean, script.Bean.texts.T0002, null],
            [CHARACTERS.Stool, script.Stool.texts.T0003, null],
            [CHARACTERS.Stool, script.Stool.texts.T0004, null],
        ], script);

        await showDialog1();
    }

    async function showDialog1() {
        let dialog: DialogConfig = {
            A: {
                label: "Stones?",
                callback: optionA,
            },
            B: {
                label: "Enchantica?",
                callback: optionB,
            }
        }

        await createDialog(dialog);
    }

    async function optionA() {
        askedBothOptions[0] = true;

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0003, null],
            [CHARACTERS.Stool, script.Stool.texts.T0005, null],
            [CHARACTERS.Stool, script.Stool.texts.T0006, null],
        ], script);

        await optionC();
    }

    async function optionB() {
        askedBothOptions[1] = true;

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0004, null],
            [CHARACTERS.Stool, script.Stool.texts.T0007, null],
            [CHARACTERS.Stool, script.Stool.texts.T0008, null],
        ], script);

        await optionC();
    }

    async function optionC() {
        if (!askedBothOptions.every((val) => val)) {
            await showDialog1();
            return;
        }

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0005, null],
            [CHARACTERS.Stool, script.Stool.texts.T0009, null],
            [CHARACTERS.Bean, script.Bean.texts.T0006, null],
            [CHARACTERS.Stool, script.Stool.texts.T0010, null],
            [CHARACTERS.Bean, script.Bean.texts.T0007, null],
            [CHARACTERS.Bean, script.Bean.texts.T0008, null],
            [CHARACTERS.Stool, script.Stool.texts.T0011, null],
            [CHARACTERS.Stool, script.Stool.texts.T0012, null],
        ], script);

        let dialog: DialogConfig = {
            C1: {
                label: "Take Stool with you", 
                callback: optionC1
            },
            C2: {
                label: "Don't take Stool with you",
                callback: optionC2
            }
        };

        await createDialog(dialog);
    }

    async function optionC1() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0009, null],
        ], script);
        
        await optionD();
    }

    async function optionC2() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0010, null],
            [CHARACTERS.Stool, script.Stool.texts.T0013, null],
            [CHARACTERS.Bean, script.Bean.texts.T0011, null],
        ], script);

        await optionD();
    }

    async function optionD() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0014, null],
        ], script);

        fS.Speech.hide();
        fS.Character.hideAll();
    }
}