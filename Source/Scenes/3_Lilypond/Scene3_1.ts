namespace BeansCuest {
    let novelPageUnlocked = false;

    let script: ScriptDefinition = {
        Bean: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "So this is the best place to start looking for the first stone.",
                },
                T0001: {
                    text: "I can barely make out features, but it looks something like a... frog?",
                },
                T0002: {
                    text: "HELLOOO??",
                },
                T0003: {
                    text: "HELLO!? CAN YOU HELP US? WE'RE SEARCHING FOR SOMETHING AND IT'S URGENT!",
                },
                T0004: {
                    text: "Shhh..."
                },
                T0005: {
                    text: "Hello there. It's okay, we won't hurt you. We just need some information about something lost. And by the way - I'm Bean."
                },
                T0006: {
                    text: "Nice to meet you, Lillypad! I'm searching for a lost relict, and I think you might be able to help. By any chance - Have you noticed anything strange lately?"
                },
                T0007: {
                    text: "That's cat-astic!"
                },
                T0008: {
                    text: "Well, not entirely cat-astic... I have no idea how to get there. I hate water!"
                },
                T0009: {
                    text: "Nothing is im-paw-ssible, Stool. We will keep looking and keep trying until we find a way!"
                },
                T0010: {
                    text: "What was it you wanted to say?"
                },
                T0011: {
                    text: "Don't be shy! I'm listening!"
                },
                T0012: {
                    text: "Fur-real?? That's great!"
                },
                T0013: {
                    text: "No, of course not! Why would you think so?"
                },
                T0014: {
                    text: "That's mean. I wish I could swim too. I've been afraid of water all my life. It's really distressing. You have a su-paw-power!"
                },
                T0015: {
                    text: "That would be fur-midable!"
                },
                T0016: {
                    text: "Wow, you're amazing, Lillypad! Thank you so much. I really appreciate your help. I'm a little closer to home now!"
                },
                T0017: {
                    text: "Thanks for the kind offer - but I wouldn't feel good knowing you're putting yourself at risk for us. I think I'll search for a solution myself."
                },
                T0018: {
                    text: "I'll look around there. Thanks very much!"
                },
                T0019: {
                    text: "Thank you Lilypad! You helped us a lot!"
                },
                T0020: {
                    text: "I can't see anything, Stool. We need to find a way to get the relic."
                },
                T0021: {
                    text: "She's probably just diving for something. Let her be."
                },
                T0022: {
                    text: "Maybe we can search for something to help us."
                },
                T0023: {
                    text: "Have you been sitting in the pond for a long time? - If yes, surely you could help us."
                },
                T0024: {
                    text: "It's about a lost stone that I need to get back home. I came from another world and just ended up here by accident..."
                },
                T0025: {
                    text: "... Because at home I played hide and seek with my best friend Oliver! But now I'm traveling with Sto-"
                },
                T0026: {
                    text: "Oh? What happened?"
                },
                T0027: {
                    text: "Oh no! That's un-fur-tunate."
                },
                T0028: {
                    text: "Let's search the area for the stones."
                },
                T0029: {
                    text: "Stool you are cat-astic! That could be the stone! We just have to find something to reach it..."
                },
                T0030: {
                    text: "Stool. Hear me out. I hold you by your feet. "
                },
                T0031: {
                    text: "You dunk your head under the waterlily leaves and search for something to help us reach the stone."
                },
                T0032: {
                    text: "Well, but it was worth a try. Let's look elsewhere."
                },
                T0033: {
                    text: "Let's check in between these mossy stones."
                },
                T0034: {
                    text: "HAHAHA Stool! You have to be more careful!"
                },
                T0035: {
                    text: "Did you hurt yourself?"
                },
                T0036: {
                    text: "Hihi - paw promise! Now let's check somewhere else."
                },
                T0037: {
                    text: "Stool, see the reeds? I think I can see something peeking through..."
                },
                T0038: {
                    text: "Uhaaah - but - arh - I'm too big -uhh - to fit between the - arhhhg -... Stool? Can you just take a look?"
                },
                T0039: {
                    text: "Pleaaaase?"
                },
                T0040: {
                    text: "Everything's alright?"
                },
                T0041: {
                    text: "A Rod! I think this will work! Let's use this rod to try and hook the stone."
                },
                T0042: {
                    text: "Almost... there... got it!"
                },
                T0043: {
                    text: "We've already found one! Finding the other two will be a piece of cake."
                },
                T0044: {
                    text: "We'll find the stones. It wasn't THAT difficult. Let's keep looking. Soo - where are we heading next? What do you suggest?"
                },
                T0045: {
                    text: "Let's go!"
                }
            }
        },
        Stool: {
            defaultPosition: POSITIONS[2][1],
            texts: {
                T0000: {
                    text: "Well, I don't know why but something draws me here.",
                    emotion: "explanatory"
                },
                T0001: {
                    text: "Oh Bean - can you see that? Right there, in the pond.",
                    emotion: "anxious"
                },
                T0002: {
                    text: "SHH - Be careful! You don't know wha-",
                    emotion: "anxious"
                },
                T0003: {
                    text: "Be careful! You don't know wha-",
                    emotion: "anxious"
                },
                T0004: {
                    text: "See?? Maybe this wasn't such a good idea after all.",
                    emotion: "offended"
                },
                T0005: {
                    text: "Oh no, what happened to Lillypad?",
                    emotion: "worried"
                },
                T0006: {
                    text: "...Bean...?",
                    emotion: "worried"
                },
                T0007: {
                    text: "I think... you might have overwhelmed it...",
                    emotion: "worried"
                },
                T0008: {
                    text: "Alright - but let's search together. This pond is a bit fishy...",
                    emotion: "anxious"
                },
                T0009: {
                    text: "By the way - do you see this glowy thing at the bottom of the pond?",
                    emotion: "explanatory"
                },
                T0010: {
                    text: "I don't like where this is going.",
                    emotion: "anxious"
                },
                T0011: {
                    text: "Absolutely no way.",
                    emotion: "serious"
                },
                T0012: {
                    text: "<i>*Gurgling*</i> I CRN'T REE A THRING! <i>*Splash*</i>"
                },
                T0013: {
                    text: "It's pitch black - I literally can't see anything.",
                    emotion: "crying"
                },
                T0014: {
                    text: "BuT iT wAs WoRtH a TrY.",
                    emotion: "offended"
                },
                T0015: {
                    text: "But they are so slippy and slimyYYAHHHHHHHH",
                    emotion: "anxious"
                },
                T0016: {
                    text: "I don't think so. But don't ever make me do that again!",
                    emotion: "crying"
                },
                T0017: {
                    text: "... You know I'm scared, right?",
                    emotion: "anxious"
                },
                T0018: {
                    text: "Okay I'll do it.",
                    emotion: "crying"
                },
                T0019: {
                    text: "Yeah, I think I found something."
                },
                T0020: {
                    text: "You're doing great, Bean! Keep going!",
                    emotion: "happy"
                },
                T0021: {
                    text: "Only two more to go...",
                    emotion: "worried"
                },
                T0022: {
                    text: "We have one stone to repair the portal. But we'll NEVER find the other two! They could be anywhere!",
                    emotion: "hysterical"
                },
                T0023: {
                    text: "Why are you asking ME??? I don't know! - But...",
                    emotion: "anxious"
                },
                T0024: {
                    text: "... Something tells me we should search by the Mystique Meadows down the hill. I just can't tell why...",
                    emotion: "explanatory"
                },
                T0025: {
                    text: "You should use the rod to get the stone! <i>Use (i) to open your inventory and select the rod</i>",
                    emotion: "explanatory"
                }
            }
        },
        Lillypad: {
            defaultPosition: POSITIONS[2][2],
            texts: {
                T0000: {
                    text: "I-I'm Lillypad.",
                    emotion: "shy"
                },
                T0001: {
                    text: "I-I don't know much, but I heard a big splash. And I-I think something fell into the pond and now it might be under the lily pads.",
                    emotion: "shy"
                },
                T0002: {
                    text: "A-Actually...",
                    emotion: "shy"
                },
                T0003: {
                    text: "N...Nothing. Nothing important.",
                    emotion: "shy"
                },
                T0004: {
                    text: "I-... I can swim. And dive...",
                    emotion: "shy"
                },
                T0005: {
                    text: "S-So you're not going to laugh at me?",
                    emotion: "blushing"
                },
                T0006: {
                    text: "Oh... I-I was laughed at by everyone the whole time. That's why I ran away and now I live alone in this pond.",
                    emotion: "sad"
                },
                T0007: {
                    text: "Thank you. I-I may could help you dive down and search for the relict if you'd like.",
                    emotion: "blushing"
                },
                T0008: {
                    text: "Is it this gem you've been looking for?",
                    emotion: "blushing"
                },
                T0009: {
                    text: "It was nothing, really. I- I'm just happy to help. Good luck!",
                    emotion: "blushing"
                },
                T0010: {
                    text: "Too bad. M- Maybe I can help you in some other way.",
                    emotion: "sad"
                },
                T0011: {
                    text: "I saw something in the reeds recently... M- Maybe this can help you.",
                    emotion: "shy"
                },
                T0012: {
                    text: "I-...",
                    emotion: "sad"
                }
            }
        },
    }

    export async function scene3_1(): fS.SceneReturn {
        fS.Speech.hide();
        fS.Character.hideAll();
        await makeTransition("fade_in", 0.5);

        await playBGM(MUSICS.lilypond);

        await fS.Location.show(LOCATIONS.lilypond);
        await makeTransition("sceneChange");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0000, null],
            [CHARACTERS.Stool, script.Stool.texts.T0000, null],
            [CHARACTERS.Stool, script.Stool.texts.T0001, null],
            [CHARACTERS.Bean, script.Bean.texts.T0001, null],
        ], script);

        let dialog: DialogConfig = {
            A: {
                label: "Draw attention",
                callback: optionA
            },
            B: {
                label: "Sneak up",
                callback: optionB
            }
        }

        await createDialog(dialog);
    }

    async function optionA() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0002, null],
            [CHARACTERS.Stool, script.Stool.texts.T0002, null],
            [CHARACTERS.Bean, script.Bean.texts.T0003, null],
        ], script);

        await optionC();
    }

    async function optionB() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0003, null],
            [CHARACTERS.Bean, script.Bean.texts.T0004, null],
        ], script);

        await optionC();
    }

    async function optionC() {
        const [x, y] = script.Lillypad.defaultPosition;
        const positionVector = fS.positionPercent(x, y);
        await showCharacter(CHARACTERS.Lillypad, "shy", positionVector);
        await makeTransition("fade_in", 0.5);

        let dialog: DialogConfig = {
            C1: {
                label: "Introduce yourself",
                callback: optionC1
            },
            C2: {
                label: "Don't waste time",
                callback: optionC2
            }
        }

        await createDialog(dialog);
    }

    async function optionC1() {
        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0005, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0000, null],
            [CHARACTERS.Bean, script.Bean.texts.T0006, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0001, null],
            [CHARACTERS.Bean, script.Bean.texts.T0007, null],
            [CHARACTERS.Bean, script.Bean.texts.T0008, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0002, null],
            [CHARACTERS.Stool, script.Stool.texts.T0004, null],
            [CHARACTERS.Bean, script.Bean.texts.T0009, null],
        ], script);

        let dialog: DialogConfig = {
            C1_1: {
                label: "Ask Lillypad",
                callback: optionC1_1
            },
            C1_2: {
                label: "Ignore Lillypad",
                callback: optionC1_2
            }
        }

        await createDialog(dialog);
    }

    async function optionC2() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0023, null],
            [CHARACTERS.Bean, script.Bean.texts.T0024, null],
            [CHARACTERS.Stool, script.Stool.texts.T0006, null],
        ],script);

        const [x, y] = script.Lillypad.defaultPosition;
        const positionVector = fS.positionPercent(x, y);
        await showCharacter(CHARACTERS.Lillypad, "sad", positionVector);
        await makeTransition("fade_in", 0.1);
        
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0025, null],
        ], script);

        await hideCharacter(CHARACTERS.Lillypad);
        await makeTransition("fade_in", 0.5);

        await playSound(SOUNDS.splash);
        
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0026, null],
            [CHARACTERS.Stool, script.Stool.texts.T0007, null],
            [CHARACTERS.Bean, script.Bean.texts.T0027, null],
        ], script);

        await optionD();
    }

    async function optionC1_1() {
        novelPageUnlocked = true;

        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);


        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0010, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0003, null],
            [CHARACTERS.Bean, script.Bean.texts.T0011, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0004, null],
            [CHARACTERS.Bean, script.Bean.texts.T0012, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0005, null],
            [CHARACTERS.Bean, script.Bean.texts.T0013, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0006, null],
            [CHARACTERS.Bean, script.Bean.texts.T0014, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0007, null],
        ], script);

        let dialog: DialogConfig = {
            C1_1_1: {
                label: "Accept help",
                callback: optionC1_1_1
            },
            C1_1_2: {
                label: "Reject help",
                callback: optionC1_1_2
            }
        }

        await createDialog(dialog);
    }

    async function optionC1_2() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0012, null],
            [CHARACTERS.Bean, script.Bean.texts.T0019, null],
            [CHARACTERS.Bean, script.Bean.texts.T0020, null],
        ], script);

        await hideCharacter(CHARACTERS.Lillypad);
        await makeTransition("fade_in", 0.5)

        await playSound(SOUNDS.splash);

        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0005, null],
            [CHARACTERS.Bean, script.Bean.texts.T0021, null],
            [CHARACTERS.Bean, script.Bean.texts.T0022, null],
        ], script);

        await optionD();
    }

    async function  optionC1_1_1() {
        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0015, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0008, null],],script);
        
        await getItem(ITEMS.starstone, "starstone");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0016, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0009, null],
        ], script);

        await optionE();
    }

    async function optionC1_1_2() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0017, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0010, null],
            [CHARACTERS.Lillypad, script.Lillypad.texts.T0011, null],
            [CHARACTERS.Bean, script.Bean.texts.T0018, null],
        ], script);

        await hideCharacter(CHARACTERS.Lillypad);
        await makeTransition("fade_in", 0.5);
        await optionD3();
    }

    async function optionD() {
        await hideCharacter(CHARACTERS.Lillypad);
        await makeTransition("fade_in", 0.25);

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0028, null],
        ], script);

        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0008, POSITIONS[1]],
            [CHARACTERS.Stool, script.Stool.texts.T0009, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0029, null],
        ], script);

        await createSearchDialog();
    }

    async function createSearchDialog() {
        let dialog: DialogConfig = {
            D1: {
                label: "Check waterlilies",
                callback: optionD1
            },
            D2: {
                label: "Check mossy stones",
                callback: optionD2
            },
            D3: {
                label: "Check reeds",
                callback: optionD3
            }
        }

        await createDialog(dialog);
    }

    async function optionD1() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0030, null],
            [CHARACTERS.Stool, script.Stool.texts.T0010, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0031, null],
            [CHARACTERS.Stool, script.Stool.texts.T0011, POSITIONS[1]],
        ], script);

        await hideCharacter(CHARACTERS.Bean);
        await hideCharacter(CHARACTERS.Stool);

        fS.Speech.hide();
        fS.Character.hideAll();
        await makeTransition("fade_in", 0.5);

        await fS.Location.show(LOCATIONS.black);
        await makeTransition("fade_in");

        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0012, null],
            [CHARACTERS.Stool, script.Stool.texts.T0013, POSITIONS[1]],
        ], script);

        await fS.Location.show(LOCATIONS.lilypond);
        await makeTransition("inScene");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0032, null],
            [CHARACTERS.Stool, script.Stool.texts.T0014, POSITIONS[1]],
        ], script);

        await createSearchDialog();
    }

    async function optionD2() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0033, null],
            [CHARACTERS.Stool, script.Stool.texts.T0015, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0034, null],
            [CHARACTERS.Bean, script.Bean.texts.T0035, null],
            [CHARACTERS.Stool, script.Stool.texts.T0016, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0036, null],
        ], script);

        await createSearchDialog();
    }

    async function optionD3() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0037, null],
            [CHARACTERS.Bean, script.Bean.texts.T0038, null],
            [CHARACTERS.Stool, script.Stool.texts.T0017, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0039, null],
            [CHARACTERS.Stool, script.Stool.texts.T0018, POSITIONS[1]],
        ], script);

        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0040, null],
            [CHARACTERS.Stool, script.Stool.texts.T0019, null],
        ], script);

        await getItem(ITEMS.fishingRod, "fishingRod");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0041, null],
        ], script);

        dataForSave.fishingRod = true;

        do {
            await letCharactersHaveDialogue([
                [CHARACTERS.Stool, script.Stool.texts.T0025, POSITIONS[1]],
            ], script);
          } while (fS.Inventory.getAmount(ITEMS.fishingRod) != 0);

        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0020, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0042, null],
        ], script);

        await getItem(ITEMS.starstone, "starstone");

        await optionE();
    }

    async function optionE() {
        await hideCharacter(CHARACTERS.Lillypad);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0021, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0043, null],
            [CHARACTERS.Stool, script.Stool.texts.T0022, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0044, null],
            [CHARACTERS.Stool, script.Stool.texts.T0023, POSITIONS[1]],
            [CHARACTERS.Stool, script.Stool.texts.T0024, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0045, null],
        ], script);

        if (novelPageUnlocked) await showNovelPages("novelpage2", LOCATIONS.lilypond);

        fS.Speech.hide();
        fS.Character.hideAll();

        await muteBGM(MUSICS.lilypond);
    }

}