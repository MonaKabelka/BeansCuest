namespace BeansCuest {
    let foundClue = false;

    let unlockedNovelpage = false;

    const script: ScriptDefinition = {
        Bean: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "Stool, do you hear those spooky ghostlike noises? It's definitely coming from the mansion."
                },
                T0001: {
                    text: "I understand your fear, Stool, but we've come so far. We can't turn back now. Remember, we need to be bold and face our fears."
                },
                T0002: {
                    text: "Don't be hiss-terical, Stool. Let's head inside. You can hide behind me."
                },
                T0003: {
                    text: "What is th-..."
                },
                T0004: {
                    text: "Stool, are you okay?"
                },
                T0005: {
                    text: "I-I'm Bean, and this is Stool. We mean no harm. We're searching for something important.",
                },
                T0006: {
                    text: "We're on a mission to find the moonstone. It's one of the relics we need to repair a magical portal to find my way back home."
                },
                T0007: {
                    text: "What's your name by any chance?"
                },
                T0008: {
                    text: "So - the moonstone might be inside the clock? That's great! But how do we open it?"
                },
                T0009: {
                    text: "How do you know that the clock is locked? Have you tried opening it before?"
                },
                T0010: {
                    text: "I'm truly sorry for the pain you've endured all this time. But now, I'm here to help."
                },
                T0011: { 
                    text: "There must be a way to open the clock and retrieve both your charm and the moonstone. Let's think this through together."
                },
                T0012: {
                    text: "Seems like nothing happened. Maybe I should try again."
                },
                T0013: {
                    text: "Spook - can I hear the riddle again?"
                },
                T0014: {
                    text: "Maybe I can find something to help me... The rug looks very suspicious..."
                },
                T0015: {
                    text: `Huff, huff - it's a dusty note! It says: "I rhyme on mittens, yet I am nothing to wear."... Maybe this could be a clue?`
                },
                T0016: {
                    text: `The note says: "I rhyme on mittens, yet I am nothing to wear."... Maybe this could be a clue?`
                },
                T0017: {
                    text: "Spook, do you have any clues or hints that could help us solve this riddle?"
                },
                T0018: {
                    text: "It worked! We solved the riddle! The clock is open! And - what's that? A charm?"
                },
                T0019: {
                    text: "I'm glad I could help you. How come you couldn't solve the riddle yourself after all this time?"
                },
                T0020: {
                    text: "Spook, I can sense that there's a deep story behind your inability to solve the riddle yourself."
                },
                T0021: {
                    text: "I'm sorry if there's something troubling you."
                },
                T0022: {
                    text: "If you're comfortable sharing, I'd like to know what happened."
                },
                T0023: {
                    text: "Oh, Spook, I'm so sorry to hear that. How did the curse manifest itself?"
                },
                T0024: {
                    text: "That must have been incredibly difficult for you. I can't imagine the pain you've endured all this time."
                },
                T0025: {
                    text: "Finally! All stones. With all the relics, I can finally repair the portal and return home! To Oliver!"
                },
                T0026: {
                    text: "Spook, what are you planning to do now that you have your charm back?"
                },
                T0027: {
                    text: "I'm glad to hear that."
                },
                T0028: {
                    text: "STOOL? I am so glad you're fine!"
                },
                T0029: {
                    text: "I got the last stone!"
                },
                T0030: {
                    text: "Sure - you weren't scared at all! Let's go!"
                }
            }
        },
        Stool: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "Bean, I'm scared! This place gives me the creeps. I don't think we should go inside.",
                    emotion: "shivering"
                },
                T0001: {
                    text: "But what if there are monsters or worse... - D O G S!?",
                    emotion: "anxious",
                },
                T0002: { 
                    text: "I'm not prepared for that.",
                    emotion: "crying",
                },
                T0003: {
                    text: "Sure - at least you'll be eaten first...",
                    emotion: "shivering",
                },
                T0004: {
                    text: "let's be as quiet as possible. we don't want to alert anyone inside the house.",
                    emotion: "shivering",
                },
                T0005: {
                    text: "AAAAH! What was that? I can't take it anymore~",
                    emotion: "hysterical",
                },
                T0006: {
                    text: "...",
                    emotion: "confused"
                },
                T0007: {
                    text: "What...? Where am I?",
                    emotion: "confused"
                },
                T0008: {
                    text: "... What happened? Suddenly, everything was black.",
                    emotion: "confused"
                },
                T0009: {
                    text: "You got the moonstone?? Furreal?? Well - that was easy! And I wasn't scared at all! Let's head back to the portal and hope it's not too late!",
                    emotion: "happy"
                }
            }
        },
        Spook: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "Who-hoo dares enter my haunted abode? State your purr-pose, intruders!",
                },
                T0001: {
                    text: "Hmm, I heard shattering glass from the grandfather clock. What are you searching in this forsaken place?",
                },
                T0002: {
                    text: "I forgot my name long ago, but you can call me Spook. You're on a noble quest indeed.",
                    emotion: "smiling",
                },
                T0003: {
                    text: "I may be able to assist you, but I have my own reasons to seek answers within these haunted halls.",
                    emotion: "smiling",
                },
                T0004: {
                    text: "The clock holds the secrets you seek, but it's locked, I'm afraid.",
                    emotion: "thinking",
                },
                T0005: {
                    text: "As a ghost, I can wander through the walls, but I cannot manipulate physical objects in the same way.",
                    emotion: "thinking",
                },
                T0006: {
                    text: "There is a deeper reason behind my knowledge. Inside that very clock, lies a charm of my deceased childhood friend.",
                    emotion: "grief",
                },
                T0007: {
                    text: "It holds sentimental value, but alas, I've been unable to retrieve it for an eternity.",
                    emotion: "sad",
                },
                T0008: {
                    text: "Thank you, Bean. To open the clock there's a riddle. The solution to opening the clock lies within its words.",
                    emotion: "smiling",
                },
                T0009: {
                    text: `"I act like a cat, I look like a cat, Yet I am not 'cat'."`,
                    emotion: "thinking",
                },
                T0010: {
                    text: "I do remember reading something in a book long ago. There was a clue that might shed some light on the riddle.",
                    emotion: "thinking",
                },
                T0011: {
                    text: `It said, "I am a small version of the creature that is stating the riddle".`,
                    emotion: "thinking",
                },
                T0012: {
                    text: "It indeed is a charm, Bean. My precious charm. Thank you.",
                    emotion: "grief",
                },
                T0013: {
                    text: "Your question is a valid one.",
                    emotion: "sad",
                },
                T0014: {
                    text: "You see, sometimes when we are too close to a problem or burdened by our own emotions, it becomes challenging to see the solution.",
                    emotion: "grief",
                },
                T0015: {
                    text: "Your willingness to help means more to me than words can express. Let us focus on the present.",
                },
                T0016: { 
                    text: "Long ago, I was desperate to revive my dear friend who had passed away. I stumbled upon a riddle spell that promised to bring her back to life.",
                    emotion: "sad"
                },
                T0017: {
                    text: "I attempted the spell with all my hope and love, but instead of bringing her back, it backfired, resulting in a curse upon me.",
                    emotion: "sad"
                },
                T0018: {
                    text : "The curse bound me to a tormenting paradox.",
                    emotion: "grief"
                },
                T0019: {
                    text: "The most important thing to me, the charm that held the memories of my dear friend, was right in front of my eyes, yet I couldn't solve the riddle to retrieve it.",
                    emotion: "sad"
                },
                T0020: {
                    text: "It was a constant reminder of my failure and loss.",
                    emotion: "grief"
                },
                T0021: {
                    text: "Your understanding and willingness to help mean more to me than words can express. Let us focus on the present.",
                    emotion: "smiling"
                },
                T0022: {
                    text: "I've come to realize that the memories I hold dear are more than enough to keep my friend alive in my heart.",
                     emotion: "thinking"
                },
                T0023: {
                    text: "I've learned that it's not the physical charm that truly matters, but the bond and love we shared.",
                    emotion: "thinking"
                },
                T0024: {
                    text: "I've made peace with the past and am ready to embrace the present.",
                    emotion: "smiling"
                },
                T0025: {
                    text: "You've brought light and joy into my afterlife, and I'm grateful for the friendship we've formed.",
                    emotion: "smiling"
                },
                T0026: {
                    text: "As I continue my ethereal existence, I'll cherish the memories we've created together. Farewell, dear friend.",
                    emotion: "smiling"
                }
            }
        },
        Unknown: {
            defaultPosition: POSITIONS[1],
            texts: null
        }
    }

    const possibleAnswers = ["kitten", "kittens", "baby cat", "baby cats", "kitty", "kittycat", "babycat", "babycats"];

    export async function scene5(): fS.SceneReturn {
        await fS.Location.show(LOCATIONS.mansion);
        await makeTransition("sceneChange");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0000, null],
            [CHARACTERS.Stool, script.Stool.texts.T0000, null],
            [CHARACTERS.Bean, script.Bean.texts.T0001, null],
            [CHARACTERS.Stool, script.Stool.texts.T0001, null],
            [CHARACTERS.Stool, script.Stool.texts.T0002, null],
            [CHARACTERS.Bean, script.Bean.texts.T0002, null],
            [CHARACTERS.Stool, script.Stool.texts.T0003, null],
        ], script);

        fS.Speech.hide();
        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);

        await fS.Location.show(LOCATIONS.mansion2);
        await makeTransition("inScene");

        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0004, null],
            [CHARACTERS.Bean, script.Bean.texts.T0003, null],
            [CHARACTERS.Stool, script.Stool.texts.T0005, null],
        ], script);

        let [x, y] = script.Stool.defaultPosition;
        let positionVector = fS.positionPercent(x, y);
        await showCharacter(CHARACTERS.Stool, "fainting", positionVector);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0004, null],
        ], script);

        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);

        [x, y] = script.Spook.defaultPosition;
        positionVector = fS.positionPercent(x, y);
        await showCharacter(CHARACTERS.Spook, "sad", positionVector);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Unknown, script.Spook.texts.T0000, null],
            [CHARACTERS.Bean, script.Bean.texts.T0005, null],
        ], script);

        [x, y] = script.Spook.defaultPosition;
        positionVector = fS.positionPercent(x, y);
        await showCharacter(CHARACTERS.Spook, "thinking", positionVector);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Unknown, script.Spook.texts.T0001, null],
            [CHARACTERS.Bean, script.Bean.texts.T0006, null],
            [CHARACTERS.Bean, script.Bean.texts.T0007, null],
            [CHARACTERS.Spook, script.Spook.texts.T0002, null],
            [CHARACTERS.Spook, script.Spook.texts.T0003, null],
            [CHARACTERS.Bean, script.Bean.texts.T0008, null],
            [CHARACTERS.Spook, script.Spook.texts.T0004, null],
            [CHARACTERS.Spook, script.Spook.texts.T0005, null],
            [CHARACTERS.Bean, script.Bean.texts.T0009, null],
            [CHARACTERS.Spook, script.Spook.texts.T0006, null],
            [CHARACTERS.Spook, script.Spook.texts.T0007, null],
            [CHARACTERS.Bean, script.Bean.texts.T0010, null],
            [CHARACTERS.Bean, script.Bean.texts.T0011, null],
            [CHARACTERS.Spook, script.Spook.texts.T0008, null],
            [CHARACTERS.Spook, script.Spook.texts.T0009, null],
        ], script);

        await allowRiddleAnswer();
    }

    async function allowRiddleAnswer() {
        await createSingleLineSpeech(CHARACTERS.Bean, "I think my answer will be ");

        const answer = await fS.Speech.getInput();
        if (possibleAnswers.includes(answer.toLowerCase())) await optionA();
        else await optionB();
    }

    async function optionA() {
        await letCharactersHaveDialogue([
        [CHARACTERS.Bean, script.Bean.texts.T0018, null],
        [CHARACTERS.Spook, script.Spook.texts.T0012, null],
        [CHARACTERS.Bean, script.Bean.texts.T0019, null],
        [CHARACTERS.Spook, script.Spook.texts.T0013, null],
        [CHARACTERS.Spook, script.Spook.texts.T0014, null],
        ], script);

        const dialog: DialogConfig = {
            A1: {
                label: "Don't ask what happened",
                callback: optionA1
            },
            A2: {
                label: "Ask what happened",
                callback: optionA2
            }
        }

        await createDialog(dialog);
    }

    async function optionB() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0012, null],
        ], script);

        const dialog: DialogConfig = {
            B1: {
                label: "Hear the riddle again",
                callback: optionB1
            },
            B2: {
                label: "Seek for a clue",
                callback: optionB2
            },
            B3: {
                label: "Ask Spook for help",
                callback: optionB3
            }
        }

        await createDialog(dialog);
    }
    
    async function optionB1() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0013, null],
            [CHARACTERS.Spook, script.Spook.texts.T0009, null],
        ], script);

        await allowRiddleAnswer();
    }

    async function optionB2() {
        if (!foundClue) {
            await letCharactersHaveDialogue([
                [CHARACTERS.Bean, script.Bean.texts.T0014, null],
                [CHARACTERS.Bean, script.Bean.texts.T0015, null],
            ], script);
    
            await getItem(ITEMS.note, "note");
            foundClue = true;
        } else {
            await letCharactersHaveDialogue([
                [CHARACTERS.Bean, script.Bean.texts.T0016, null],
            ], script);
        }

        await allowRiddleAnswer();
    }

    async function optionB3() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0017, null],
            [CHARACTERS.Spook, script.Spook.texts.T0010, null],
            [CHARACTERS.Spook, script.Spook.texts.T0011, null],
        ], script);

        await allowRiddleAnswer();
    }

    async function optionA1() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0020, null],
            [CHARACTERS.Bean, script.Bean.texts.T0021, null],
            [CHARACTERS.Spook, script.Spook.texts.T0015, null],
        ], script);

        await optionC();
    }

    async function optionA2() {
        unlockedNovelpage = true;
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0020, null],
            [CHARACTERS.Bean, script.Bean.texts.T0022, null],
            [CHARACTERS.Spook, script.Spook.texts.T0016, null],
            [CHARACTERS.Spook, script.Spook.texts.T0017, null],
            [CHARACTERS.Bean, script.Bean.texts.T0023, null],
            [CHARACTERS.Spook, script.Spook.texts.T0018, null],
            [CHARACTERS.Spook, script.Spook.texts.T0019, null],
            [CHARACTERS.Spook, script.Spook.texts.T0020, null],
            [CHARACTERS.Bean, script.Bean.texts.T0024, null],
            [CHARACTERS.Spook, script.Spook.texts.T0021, null],
        ], script);

        await optionC();
    }

    async function optionC() {
        await getItem(ITEMS.moonstone, "moonstone");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0025, null],
            [CHARACTERS.Bean, script.Bean.texts.T0026, null],
            [CHARACTERS.Spook, script.Spook.texts.T0022, null],
            [CHARACTERS.Spook, script.Spook.texts.T0023, null],
            [CHARACTERS.Spook, script.Spook.texts.T0024, null],
            [CHARACTERS.Bean, script.Bean.texts.T0027, null],
            [CHARACTERS.Spook, script.Spook.texts.T0025, null],
            [CHARACTERS.Spook, script.Spook.texts.T0026, null],
        ], script);

        await hideCharacter(CHARACTERS.Spook);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0006, null],
            [CHARACTERS.Stool, script.Stool.texts.T0007, null],
            [CHARACTERS.Bean, script.Bean.texts.T0028, null],
            [CHARACTERS.Stool, script.Stool.texts.T0008, null],
            [CHARACTERS.Bean, script.Bean.texts.T0029, null],
            [CHARACTERS.Stool, script.Stool.texts.T0009, null],
            [CHARACTERS.Bean, script.Bean.texts.T0030, null],
        ], script);

        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);
        
        if (unlockedNovelpage) await showNovelPages("novelpage5", LOCATIONS.mansion2);

        fS.Character.hideAll();
        fS.Speech.hide();
    }

}