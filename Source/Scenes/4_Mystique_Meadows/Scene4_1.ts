namespace BeansCuest {
    let script: ScriptDefinition = {
        Bean: {
            defaultPosition: mainPosition,
            texts: {
                T0000: {
                    emotion: "impressed",
                    text: "Wow, this place is amazing!"
                },
                T0001: {
                    emotion: "curious",
                    text: "Did you hear that?"
                },
                T0002: {
                    emotion: "determined",
                    text: "Let's check it out!"
                },
                T0003: {
                    emotion: "smiling",
                    text: "Hello? Pawdon me. I'm searching for a small glowing stone! It's very important..."
                },
                T0004: {
                    emotion: "curious",
                    text: "Is everything alright?"
                },
                T0005: {
                    emotion: "whispering",
                    text: "sometimes, unexpected alliances can turn the tides in our favor."
                },
                T0006: {
                    emotion: "questioning",
                    text: "Charm, Chant, I'm Bean and I would like to help you. Do you have any recollection of the last time you used the pixie dust? Purrhaps a specific place or activity?",
                },
                T0007: {
                    emotion: "whispering",
                    text: "okay..."
                },
                T0008: {
                    emotion: "determined",
                    text: "We should follow Charm's suggestion and start searching on the right side. Let's give it a try and see if we can find any traces of the pixie dust there."
                },
                T0009: {
                    emotion: "focused",
                    text: "Chant's suggestion to check the left side seems promising. We might stumble upon something significant that could help us reunite Charm and Chant with their precious dust."
                },
                T0010: {
                    emotion: "curious",
                    text: "Hmm. Seems like nothings here. Let's check for the other side."
                },
                T0011: {
                    emotion: "curious",
                    text: "Hello. I'm Bean. Why are you so grumpy? Can I help you?"
                },
                T0012: {
                    emotion: "worried",
                    text: "h no, that must've been clawful! I understand that you were just trying to find some peace and quiet, but taking something that doesn't belong to you isn't the best way to solve the problem..."
                },
                T0013: {
                    emotion: "worried",
                    text: "Let's find a way to bring harmony to this meadow without resorting to theft, okay?"
                },
                T0014: {
                    emotion: "determined",
                    text: "Deal!"
                },
                T0015: {
                    emotion: "thinking",
                    text: "Stool, we have to find a way to put an end to Charm and Chant's constant arguing. It's the only way to get the pixie dust back from Bandit."
                },
                T0016: {
                    emotion: "smiling",
                    text: "Good news! We found your pixie dust! There's just one small catch..."
                },
                T0017: {
                    emotion: "resigned",
                    text: "Well... here's the thing, a raccoon has it, and he said he would only give it back if you two stopped arguing."
                },
                T0018: {
                    emotion: "resigned",
                    text: "So, if you really want your pixie dust back, you'll have to make a pact to put an end to your arguments."
                },
                T0019: {
                    emotion: "determined",
                    text: "I have an idea that might help resolve your constant disagreements. Instead of arguing about who gets to use more or less, why don't you share it equally?"
                },
                T0020: {
                    emotion: "determined",
                    text: "By dividing the pixie dust equally, you'll realize that there is more than enough pixie dust to go around."
                }
            }
        },
        Stool: {
            defaultPosition: secondaryPosition,
            texts: {
                T0000: {
                    emotion: "impressed",
                    text: "Yeah, it's really beautiful."
                },
                T0001: {
                    emotion: "serious",
                    text: "Anyway - we should explore the meadow and see if we can find any clues."
                },
                T0002: {
                    emotion: "shivers",
                    text: "But we have to keep an eye out. This place is full of surprises."
                },
                T0003: {
                    emotion: "concerned",
                    text: "Indeed. Let's give it a wide berth."
                },
                T0004: {
                    emotion: "annoyed",
                    text: "Uh, are you even listening?"
                },
                T0005: {
                    emotion: "whispering",
                    text: "psst, bean, i don't think we should waste our time with those two bickering fairies. they'll just keep going in circles."
                },
                T0006: {
                    emotion: "whispering",
                    text: "bean, let's just start searching."
                },
                T0007: {
                    emotion: "anxious",
                    text: "Bean, I-I think we should tread carefully around this… creature. He seems quite... ruffled, to say the least. Perhaps we should proceed with caution."
                },
                T0008: {
                    emotion: "mocking",
                    text: "cAn I hElP yOu?"
                },
                T0009: {
                    emotion: "crying",
                    text: "And you're asking ME? What can I possibly do to make them stop arguing? It's not like I have any magical powers or wisdom to solve their conflicts."
                },
                T0010: {
                    emotion: "whispering",
                    text: "psst - bean, i think talking won't do much here. we need to come up with something that will make them see the bigger picture."
                }
            }
        },
        Unknown: {
            defaultPosition: secondaryPosition,
            texts: {
                T0000: {
                    text: "It's not my fault! You were the one who had it last."
                },
                T0001: {
                    text: "ME? I was the one who had it last??? You're crazy!"
                },
                T0002: {
                    text: "I will never speak to you again!"
                },
                T0003: {
                    text: "Are you kitten me? I will never speak to YOU again!"
                },
                T0004: {
                    text: "Not exactly - Charm lost our pixie dust and without the dust we can't fly."
                },
                T0005: {
                    text: "Fuzzy feline furballs and whisker-waggling troublemakers! Can't a raccoon get a decent nap without being bothered by meddling creatures?"
                }
            }
        },
        Charm: {
            defaultPosition: secondaryPosition,
            texts: {
                T0000: {
                    emotion: "snapped",
                    text: "In fact, Chant lost our pixie dust and doesn't want to admit it."
                },
                T0001: {
                    emotion: "thinking",
                    text: "Hmm I think the last time we used it was back there on the right side."
                },
                T0002: {
                    emotion: "snapped",
                    text: "I do too listen to you. I just don't agree with you!"
                },
                T0003: {
                    emotion: "snapped",
                    text: "Oh, please! You're the one who always wants to hog it all for yourself!"
                },
                T0004: {
                    emotion: "confused",
                    text: "What does that mean? And what is a raccoon?"
                }
            }
        },
        Chant: {
            defaultPosition: secondaryPosition,
            texts: {
                T0000: {
                    emotion: "angry",
                    text: "I won't admit it because it wasn't my fault!"
                },
                T0001: {
                    emotion: "snapped",
                    text: "No Charm, it was on the left side! You never listen to me."
                },
                T0002: {
                    emotion: "angry",
                    text: "I can't believe you're still inhissting on taking more than your fairy share of the pixie dust!"
                },
                T0003: {
                    emotion: "happy",
                    text: "That's great! Where is it?"
                }
            }
        },
        Bandit: {
            defaultPosition: secondaryPosition,
            texts: {
                T0000: {
                    emotion: "grumpy",
                    text: "Call me Bandit, and let me tell you, I can't catch a wink of sleep with those bickering fairies around. They go on and on about who gets how much pixie dust, and it's driving me nuts!"
                },
                T0001: {
                    emotion: "grumpy",
                    text: "So, I decided to take matters into my own paws and swipe their precious dust. Maybe that'll finally shut them up and bring some peace to these meadows."
                },
                T0002: {
                    emotion: "sleepy",
                    text: "Look, Bean, I hear what you're saying, but those two just won't quit their bickering. If they can learn to stop arguing and get along, then I'll consider giving the pixie dust back."
                },
                T0003: {
                    emotion: "sleepy",
                    text: "It's a fair deal, don't you think? They need to prove that they can share without fighting, and then we can all move on from this nonsense."
                }
            }
        }
    }
    export async function scene4_1(): fS.SceneReturn {
        await fS.Location.show(LOCATIONS.meadow);
        await makeTransition("fade_in");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0000],
            [CHARACTERS.Stool, script.Stool.texts.T0000],
            [CHARACTERS.Stool, script.Stool.texts.T0001],
            [CHARACTERS.Stool, script.Stool.texts.T0002],
        ], script);

        await createSingleLineSpeech(CHARACTERS.Unknown, script.Unknown.texts.T0000.text);
        await createSingleLineSpeech(CHARACTERS.Unknown, script.Unknown.texts.T0001.text);

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0001],
            [CHARACTERS.Stool, script.Stool.texts.T0003],
            [CHARACTERS.Bean, script.Bean.texts.T0002],
            [CHARACTERS.Stool, script.Stool.texts.T0004],
        ], script);

        await hideCharacter(CHARACTERS.Bean);
        await hideCharacter(CHARACTERS.Stool);

        await makeTransition("fade_in", 0.5);

        const [mX, mY] = mainPosition;
        const [sX, sY] = secondaryPosition; 

        await showCharacter(CHARACTERS.Charm, "angry", fS.positionPercent(mX, mY));
        await makeTransition("fade_in", 0.5);
        await createSingleLineSpeech(CHARACTERS.Unknown, script.Unknown.texts.T0002.text);
        
        await showCharacter(CHARACTERS.Chant, "angry", fS.positionPercent(sX, sY));
        await makeTransition("fade_in", 0.5);
        await createSingleLineSpeech(CHARACTERS.Unknown, script.Unknown.texts.T0003.text);

        await hideCharacter(CHARACTERS.Charm);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0003],
            [CHARACTERS.Bean, script.Bean.texts.T0004]
        ], script);

        await showCharacter(CHARACTERS.Chant, "snapped", fS.positionPercent(sX, sY));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Unknown, script.Unknown.texts.T0004.text);

        await letCharactersHaveDialogue([
            [CHARACTERS.Charm, script.Charm.texts.T0000]
        ], script);

        await hideCharacter(CHARACTERS.Bean);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Chant, script.Chant.texts.T0000, mainPosition);

        await hideCharacter(CHARACTERS.Charm);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Stool, script.Stool.texts.T0005, secondaryPosition);

        await hideCharacter(CHARACTERS.Chant);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Bean, script.Bean.texts.T0005, mainPosition);

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
        await letCharacterSayText(CHARACTERS.Bean, script.Bean.texts.T0006, mainPosition);
        
        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Charm, script.Charm.texts.T0001, secondaryPosition);

        await hideCharacter(CHARACTERS.Bean);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Chant, script.Chant.texts.T0001, mainPosition);
        await letCharacterSayText(CHARACTERS.Charm, script.Charm.texts.T0002, secondaryPosition);

        await hideCharacter(CHARACTERS.Charm);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Stool, script.Stool.texts.T0006, secondaryPosition);

        await hideCharacter(CHARACTERS.Chant);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Bean, script.Bean.texts.T0007, mainPosition);

        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);

        const dialog: DialogConfig = {
            A_1: {
                label: "Search on the right (Charm)",
                callback: optionA_1,
            },
            A_2: {
                label: "Search on the left (Chant)",
                callback: optionA_2,
            }
        }

        await createDialog(dialog);
    }

    async function optionA_1() {
        await letCharacterSayText(CHARACTERS.Bean, script.Bean.texts.T0008, mainPosition);
        await optionC();
    }

    async function optionA_2() {
        await letCharacterSayText(CHARACTERS.Bean, script.Bean.texts.T0009, mainPosition);
        await optionC();
    }

    async function optionC() {
        await fS.Location.show(LOCATIONS.meadow2);
        await makeTransition("fade_in");

        await letCharacterSayText(CHARACTERS.Bean, script.Bean.texts.T0010, mainPosition);
        
        const [mX, mY] = mainPosition;
        const [sX, sY] = secondaryPosition;
        await showCharacter(CHARACTERS.Bandit, "muttering", fS.positionPercent(sX, sY));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Unknown, script.Unknown.texts.T0005.text);

        await hideCharacter(CHARACTERS.Bandit);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Stool, script.Stool.texts.T0007, secondaryPosition);

        await letCharacterSayText(CHARACTERS.Bean, script.Bean.texts.T0011, mainPosition);

        await letCharacterSayText(CHARACTERS.Stool, script.Stool.texts.T0008, secondaryPosition);

        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Bandit, script.Bandit.texts.T0000],
            [CHARACTERS.Bandit, script.Bandit.texts.T0001],
            [CHARACTERS.Bean, script.Bean.texts.T0012],
            [CHARACTERS.Bean, script.Bean.texts.T0013],
            [CHARACTERS.Bandit, script.Bandit.texts.T0002],
            [CHARACTERS.Bandit, script.Bandit.texts.T0003],
            [CHARACTERS.Bean, script.Bean.texts.T0014],
            [CHARACTERS.Bean, script.Bean.texts.T0015],
        ],script);

        await hideCharacter(CHARACTERS.Bandit);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Stool, script.Stool.texts.T0009, secondaryPosition);

        await hideCharacter(CHARACTERS.Stool);
        await hideCharacter(CHARACTERS.Bean);
        await fS.Location.show(LOCATIONS.meadow);
        await makeTransition("fade_in", 0.5);
        await showCharacter(CHARACTERS.Charm, "angry", fS.positionPercent(mX, mY));
        await showCharacter(CHARACTERS.Chant, "angry", fS.positionPercent(sX, sY));
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Chant, script.Chant.texts.T0002, secondaryPosition);
        await letCharacterSayText(CHARACTERS.Charm, script.Charm.texts.T0003, mainPosition);

        await hideCharacter(CHARACTERS.Charm);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0016],
            [CHARACTERS.Chant, script.Chant.texts.T0003],
            [CHARACTERS.Bean, script.Bean.texts.T0017],
            [CHARACTERS.Bean, script.Bean.texts.T0018]
        ],script);

        await hideCharacter(CHARACTERS.Chant);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Charm, script.Charm.texts.T0004, secondaryPosition);

        await hideCharacter(CHARACTERS.Charm);
        await makeTransition("fade_in", 0.5);

        await letCharacterSayText(CHARACTERS.Stool, script.Stool.texts.T0010, secondaryPosition);

        const dialog: DialogConfig = {
            C_1: {
                label: "Offer a solution",
                callback: optionC_1,
            },
            C_2: {
                label: "Try to settle disputes",
                callback: optionC_2,
            }
        }

        await createDialog(dialog);
    }

    async function optionB() {
        await optionD();
    }

    async function optionC_1() {
        await letCharacterSayText(CHARACTERS.Bean, script.Bean.texts.T0019, mainPosition);
        await letCharacterSayText(CHARACTERS.Bean, script.Bean.texts.T0020, mainPosition);

        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);

        


        const dialog: DialogConfig = {
            C_1_1: {
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

    async function optionC_2() {
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

    }
}