namespace BeansCuest {
    let unlockNovelPages = {
        3: false,
        4: false,
    }

    let script: ScriptDefinition = {
        Bean: {
            defaultPosition: null,
            texts: {
                T0000: {
                    text: "Wow, this place is paw-mazing!"
                },
                T0001: {
                    text: "Did you hear that?"
                },
                T0002: {
                    text: "Let’s check it out!"
                },
                T0003: {
                    text: "Hello? Paw-don me. I’m searching for a small glowing stone! It’s very important…"
                },
                T0004: {
                    text: "Is everything alright?"
                },
                T0005: {
                    text: "sometimes, unexpected alliances can turn the tides in our favor."
                }
            }
        },
        Stool: {
            defaultPosition: POSITIONS[3][1],
            texts: {
                T0000: {
                    text: "Yeah, it’s really beautiful.",
                    emotion: "charmed"
                },
                T0001: {
                    text: "Anyway - we should explore the meadow and see if we can find any clues.",
                    emotion: "serious"
                },
                T0002: {
                    text: "But we have to keep an eye out. This place is full of surprises.",
                    emotion: "shivering"
                },
                T0003: {
                    text: "Indeed. Let's give it a wiiiide berth.",
                    emotion: "worried"
                },
                T0004: {
                    text: "Uh, are you even listening?",
                    emotion: "offended"
                },
                T0005: {
                    text: "psst, bean, i don't think we should waste our time with those two bickering fairies. they'll just keep going in circles.",
                    emotion: "worried"
                }
            }
        },
        Chant: {
            defaultPosition: POSITIONS[3][2],
            texts: {
                T0000: {
                    text: "It's not my fault! You were the one who had it last.",
                },
                T0001: {
                    text: "Are you kitten me? I will never speak to YOU again!"
                },
                T0002: {
                    text: "Not exactly – Charm lost our pixie dust and without the dust we can’t fly."
                },
                T0003: {
                    text: "I won't admit it because it wasn’t my fault!",
                    emotion: "angry"
                }
            }
        },
        Charm: {
            defaultPosition: POSITIONS[3][3],
            texts: {
                T0000: {
                    text: "ME? I was the one who had it last??? You’re crazy!"
                },
                T0001: {
                    text: "I will never speak to you again!"
                },
                T0002: {
                    text: "In fact, Chant lost our pixie dust and doesn't want to admit it.",
                    emotion: "snapped"
                }
            }
        },
        Unknown: {
            defaultPosition: POSITIONS[1],
            texts: null
        }
    }

    export async function scene4_1(): fS.SceneReturn {
        await fS.Location.show(LOCATIONS.meadow);
        await makeTransition("sceneChange");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0000, null],
            [CHARACTERS.Stool, script.Stool.texts.T0000, POSITIONS[1]],
            [CHARACTERS.Stool, script.Stool.texts.T0001, POSITIONS[1]],
            [CHARACTERS.Stool, script.Stool.texts.T0002, POSITIONS[1]],
            [CHARACTERS.Unknown, script.Chant.texts.T0000, null],
            [CHARACTERS.Unknown, script.Charm.texts.T0000, null],
            [CHARACTERS.Bean, script.Bean.texts.T0001, null],
            [CHARACTERS.Stool, script.Stool.texts.T0003, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0002, null],
            [CHARACTERS.Stool, script.Stool.texts.T0004, null],
        ], script);

        let [x, y] = script.Charm.defaultPosition;
        let positionVector = fS.positionPercent(x, y);
        await showCharacter(CHARACTERS.Charm, "angry", positionVector);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Unknown, script.Charm.texts.T0001, null],
        ], script);

        [x, y] = script.Chant.defaultPosition;
        positionVector = fS.positionPercent(x, y);
        await showCharacter(CHARACTERS.Chant, "angry", positionVector);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Unknown, script.Chant.texts.T0001, null],
            [CHARACTERS.Bean, script.Bean.texts.T0003, null],
            [CHARACTERS.Bean, script.Bean.texts.T0004, null],
        ], script);

        [x, y] = script.Chant.defaultPosition;
        positionVector = fS.positionPercent(x, y);
        await showCharacter(CHARACTERS.Chant, "snapped", positionVector);
        await makeTransition("fade_in", 0.1);

        await letCharactersHaveDialogue([
            [CHARACTERS.Unknown, script.Chant.texts.T0002, null],
            [CHARACTERS.Charm, script.Charm.texts.T0002, null],
            [CHARACTERS.Chant, script.Chant.texts.T0003, null],
            [CHARACTERS.Stool, script.Stool.texts.T0005, null],
            [CHARACTERS.Bean, script.Bean.texts.T0005, null],
        ], script);

        const dialog: DialogConfig = {
            A: {
                label: "Help searching the pixie dust",
                callback: optionA,
            },
            B: {
                label: "Don't waste time",
                callback: optionB,
            }
        }

        await createDialog(dialog);

    }

    async function optionA() {

        const dialog: DialogConfig = {
            A1: {
                label: "Search on the right (Charm)",
                callback: optionA1,
            },
            A2: {
                label: "Search on the left (Chant)",
                callback: optionA2,
            }
        }

        await createDialog(dialog);
    }

    async function optionA1() {
        await optionC();
    }

    async function optionA2() {
        await optionC();
    }

    async function optionC() {

        const dialog: DialogConfig = {
            C1: {
                label: "Offer a solution",
                callback: optionC1,
            },
            C2: {
                label: "Try to settle disputes",
                callback: optionC2,
            }
        }

        await createDialog(dialog);
    }

    async function optionB() {
        await optionD();
    }

    async function optionC1() {
        unlockNovelPages[3] = true;
        unlockNovelPages[4] = true;

        const dialog: DialogConfig = {
            C1_1: {
                label: "Offer a solution",
                callback: optionC1_1,
            },
            C1_2: {
                label: "Try to settle disputes",
                callback: optionC1_2,
            }
        }

        await createDialog(dialog);
    }

    async function optionC2() {
        await optionD();
    }

    async function optionD() {
        await optionE();
    }

    async function optionC1_1() {
        await optionF();
    }

    async function optionC1_2() {
        await optionE();
    }

    async function optionE() {
        await optionF();
    }

    async function optionF() {




        if (unlockNovelPages[3]) showNovelPages("novelpage3", LOCATIONS.cloud);
        if (unlockNovelPages[4]) showNovelPages("novelpage4", LOCATIONS.cloud);
    }
}