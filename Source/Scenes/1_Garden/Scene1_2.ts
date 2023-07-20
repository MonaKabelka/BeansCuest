namespace BeansCuest {
    let lastText: ScriptText;

    let script: ScriptDefinition = {
        Oliver: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "1, 2, 3... 10, 11, 12...",
                },
                T0001: {
                    text: "Okay, I'm done counting. Bean, where are you? I know you're hiding somewhere, and I'll find you!"
                }
            }
        },
        Bean: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    emotion: "curious",
                    text: "it's getting rather dark around here... this seems like the purr-fect spot to hide. oliver never ventures beyond the garden. but what is this weird light?"
                },
                T0001: {
                    emotion: "charmed",
                    text: "wow it looks so beautiful and sparkly! i wonder what it could be... oh looks like a portal!",
                },
                T0002: {
                    emotion: "curious",
                    text: "must be magic or something. i wonder how... OAAAHH",
                },
                T0003: {
                    emotion: "charmed",
                    text: "the light... it's... magical...",
                },
                T0004: {
                    emotion: "happy",
                    text: "i'll return later, fully prepared. for now, i'll show oliver who truly excels at hiding.",
                },
                T0005: {
                    emotion: "scared",
                    text: "Oh no! My paw... it's stuck! AHHH!"
                }
            }
        }
    }
    export async function scene1_2(): fS.SceneReturn {
        fS.Speech.hide();
        fS.Character.hideAll();
        await fS.Location.show(LOCATIONS.woods2);
        await makeTransition("inScene");

        await playBGM(MUSICS.woodsportal);

        await createSingleLineSpeech(CHARACTERS.Oliver, script.Oliver.texts.T0000.text);

        await letCharactersHaveDialogue([[CHARACTERS.Bean, script.Bean.texts.T0000, null]], script);

        await createSingleLineSpeech(CHARACTERS.Oliver, script.Oliver.texts.T0001.text);

        await letCharactersHaveDialogue([[CHARACTERS.Bean, script.Bean.texts.T0001, null]], script);

        let dialog: DialogConfig = {
            C1: {
                label: "Investigate",
                callback: optionC1
            },
            C2: {
                label: "Ignore",
                callback: optionC2,
            }
        };

        await createDialog(dialog);
    }

    async function optionC1() {
        await letCharactersHaveDialogue([[CHARACTERS.Bean, script.Bean.texts.T0002, null]], script);

        lastText = script.Bean.texts.T0002;

        await playSound(SOUNDS.portal);

        await optionD();
    }

    async function optionC2() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0003, null],
            [CHARACTERS.Bean, script.Bean.texts.T0004, null],
            [CHARACTERS.Bean, script.Bean.texts.T0005, null]
        ], script);

        lastText = script.Bean.texts.T0005;

        await playSound(SOUNDS.portal);
        
        await optionD();
    }

    async function optionD() {
        fS.Speech.hide();
        await fS.Character.animate(CHARACTERS.Bean, CHARACTERS.Bean.pose[lastText.emotion], ANIMATIONS.portalTripping(2));

        fS.Character.hideAll();
        await fS.Location.show(LOCATIONS.black);

        await muteBGM(MUSICS.woodsportal);

        await makeTransition("portal");
    }
}