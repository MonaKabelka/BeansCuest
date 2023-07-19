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
                },
                T0006: {
                    text: "Charm, Chant, I’m Bean and I would like to help you. Do you have any recollection of the last time you used the pixie dust? Purr-haps a specific place or activity?"
                },
                T0007: {
                    text: "okay..."
                },
                T0008: {
                    text: "We should follow Charm's suggestion and start searching on the right side.",
                },
                T0009: {
                    text: "Let's give it a try and see if we can find any traces of the pixie dust there."
                },
                T0010: {
                    text: "Chant's suggestion to check the left side seems promising. We might stumble upon something significant that could help us reunite Charm and Chant with their precious dust."
                },
                T0011: {
                    text: "Hmm. Seems like nothings here. Let’s check for the other side."
                },
                T0012: {
                    text: "Hello. I’m Bean. Why are you so grumpy? Can I help you?"
                },
                T0013: {
                    text: "Oh no, that must’ve been claw-ful! I understand that you were just trying to find some peace and quiet, but taking something that doesn't belong to you isn't the best way to solve the problem…"
                },
                T0014: {
                    text: "Let's find a way to bring harmony to this meadow without resorting to theft, okay?"
                },
                T0015: {
                    text: "Deal!"
                },
                T0016: {
                    text: "Stool, we have to find a way to put an end to Charm and Chant's constant arguing. It's the only way to get the pixie dust back from Bandit."
                },
                T0017: {
                    text: "Good news! We found your pixie dust! There's just one small catch…"
                },
                T0018: {
                    text: "Well… here's the thing, a raccoon has it, and he said he would only give it back if you two stopped arguing."
                },
                T0019: {
                    text: "So, if you really want your pixie dust back, you'll have to make a pact to put an end to your arguments."
                },
                T0020: {
                    text: "I have an idea that might help resolve your constant disagreements. Instead of arguing about who gets to use more or less, why don't you share it equally?"
                },
                T0021: {
                    text: "By dividing the pixie dust equally, you'll realize that there is more than enough pixie dust to go around."
                },
                T0022: {
                    text: "With that out of the way, I'll take care of your pixie dust. I’ll be back any minute."
                },
                T0023: {
                    text: "i'll take that. hope you do not mind."
                },
                T0024: {
                    text: "Here’s your pixie dust!"
                },
                T0025: {
                    text: "Pixie dust? That sounds claw-some! I truly appreciate your kindness. The pixie dust would be a tremendous help in finding the stone I need for my journey home."
                },
                T0026: {
                    text: "You know – I’m from another world and need to repair a portal to get back."
                },
                T0027: {
                    text: "Thank you, Charm and Chant. I'm honored to accept your offer."
                },
                T0028: {
                    text: "<i>Use (i) to open your inventory and select the Pixie Dust</i>"
                },
                T0029: {
                    text: "Oh, wow! This is amazing! I'm floating! It feels so strange, but in a good way!"
                },
                T0030: {
                    text: "That's incredible! You make it look so effortless."
                },
                T0031: {
                    text: "Don't worry, Stool. I feel like I'm in control, and it's so much fun! It's a whole new perspective from up here."
                },
                T0032: {
                    text: "And hey, look! What's that on the cloud over there?",
                },
                T0033: {
                    text: "It seems to be glowing… Looks like the second relict!"
                },
                T0034: {
                    text: "I can’t accept your offer."
                },
                T0035: {
                    text: "The pixie dust is such a valuable and precious gift, and I wouldn't want to take advantage of your kindness."
                },
                T0036: {
                    text: "The most important thing for me was to see you both reconciled and happy. That in itself is a priceless reward."
                },
                T0037: {
                    text: "A glowing something on a cloud? That could be it! Stool, what do you think?"
                },
                T0038: {
                    text: "Charm, Chant, I understand that you both have your own opinions and preferences. But constantly arguing won't get us anywhere."
                },
                T0039: {
                    text: "It’s not about winning or being right, it's about finding a solution that works for both of you."
                },
                T0040: {
                    text: "True, these two brawlers don’t seem like they want to get interrupted. Let’s continue searching.",
                },
                T0041: {
                    text: "What is it?",
                },
                T0042: {
                    text: "Okay, we just need to figure out how to reach it. I think we should search the meadow for something that could help us climb up to the cloud."
                },
                T0043: {
                    text: "Well, Stool, you never know what we might find if we look hard enough. It's worth a try, don't you think?"
                },
                T0044: {
                    text: "Stool, I found something!"
                },
                T0045: {
                    text: "Actually, it's just a regular ladder, but it looks sturdy enough to help us climb up. See? Sometimes luck is on our side."
                },
                T0046: {
                    text: "It seems that way. Now, let's get this ladder set up and make our way to the cloud. We're one step closer to retrieving the stone!",
                },
                T0047: {
                    text: "Wow, Stool! Can you believe it? We're standing on a cloud! It feels so soft and the light up here is absolutely cat-astic."
                },
                T0048: {
                    text: "Don't worry, Stool. Look, the cloud seems stable, and we're safe up here. Let's take a moment to enjoy the view. And look, there’s the stone!"
                },
                T0049: {
                    text: "Stool, can you believe it? We've found two of the stones already! We're making progress."
                },
                T0050: {
                    text: "That’s purr-fect! Let's make our way to the mansion and see what lies ahead.",
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
                },
                T0006: {
                    text: "bean, let’s just start searching.",
                    emotion: "anxious"
                },
                T0007: {
                    text: "Bean, I-I think we should tread carefully around this… creature.",
                    emotion: "anxious"
                },
                T0008: {
                    text: "He seems quite... ruffled, to say the least. Perhaps we should proceed with caution.",
                    emotion: "anxious"
                },
                T0009: {
                    text: "cAn I hElP yOu?",
                    emotion: "offended"
                },
                T0010: {
                    text: "And you're asking ME? What can I possibly do to make them stop arguing? It's not like I have any magical powers or wisdom to solve their conflicts.",
                    emotion: "crying"
                },
                T0011: {
                    text: "psst - bean, i think talking won’t do much here. we need to come up with something that will make them see the bigger picture.",
                    emotion: "worried"
                },
                T0012: {
                    text: "Bean, I'm scared! We're floating so high, and I'm worried something might go wrong.",
                    emotion: "crying"
                },
                T0013: {
                    text: "pssst bean i think you said the wrong thing…",
                    emotion: "serious"
                },
                T0014: {
                    text: "There is indeed a peculiar magic emanating from up there. It's highly likely that the glowing object is the relict we seek.",
                    emotion: "explanatory"
                },
                T0015: {
                    text: "The portal could implode soon Bean. Let’s hurry. We don’t know how much time’s left.",
                    emotion: "worried"
                },
                T0016: {
                    text: "Hm. Weird.",
                    emotion: "confused"
                },
                T0017: {
                    text: "I swear the sunstone is somewhere around here. But… Well… Further up. There is a peculiar magic emanating from up there. It's likely that the relict we seek is on that cloud.",
                    emotion: "confused"
                },
                T0018: {
                    text: "Oh sure, Bean. Let's just search this vast meadow for a uni-cat while we're at it. Because finding something like that would be totally realistic!",
                    emotion: "offended"
                },
                T0019: {
                    text: "oh yes, i'm sure we'll stumble upon a rope in a meadow full of flowers.",
                    emotion: "offended"
                },
                T0020: {
                    text: "Let me guess, it's a golden ladder with sparkles and a sign saying 'Use Me to Reach the Cloud'?",
                    emotion: "serious"
                },
                T0021: {
                    text: "You actually found a ladder in the meadow?? I suppose luck does favor the bold.",
                    emotion: "happy"
                },
                T0022: {
                    text: "Let's go! <i>Use (i) to open your inventory and select the Ladder</i>",
                    emotion: "happy"
                },
                T0023: {
                    text: "Bean, I'm not sure about this. It's really high up here. What if the cloud disappears?",
                    emotion: "worried"
                },
                T0024: {
                    text: "But we still have one more stone to find. And time is not on our side. The portal could implode any minute. And we have no clue where the next stone is!",
                    emotion: "anxious"
                },
                T0025: {
                    text: "Well – in fact I have this strong feeling that the next stone is in this mysterious mansion below us in the swamp. See? It's like a faint whisper in my mind.",
                    emotion: "explanatory"
                },
                T0026: {
                    text: "But we don’t know for sure, right?",
                    emotion: "crying"
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
                },
                T0004: {
                    text: "No Charm, it was on the left side! You never listen to me.",
                    emotion: "snapped"
                },
                T0005: {
                    text: "I can't believe you're still in-hiss-ting on taking more than your fairy share of the pixie dust!",
                    emotion: "angry"
                },
                T0006: {
                    text: "That’s great! Where is it?",
                    emotion: "happy"
                },
                T0007: {
                    text: "…and we won't have to keep track of who used it last or constantly compare our flying skills.",
                    emotion: "happy"
                },
                T0008: {
                    text: "It's all right. I'm sorry too.",
                    emotion: "crying"
                },
                T0009: {
                    text: "You mentioned you're searching for a small glowing stone, right? Well, how about we lend you some of our precious pixie dust to aid in your search?",
                    emotion: "happy"
                },
                T0010: {
                    text: "You're most welcome, Bean. Just sprinkle a little bit of the pixie dust over yourself and feel the magic take hold.",
                    emotion: "happy"
                },
                T0011: {
                    text: "<i>Use (i) to open your inventory and select the Pixie Dust</i>",
                    emotion: "happy"
                },
                T0012: {
                    text: "Indeed, it's like dancing with the wind. Just relax and let the pixie dust guide you.",
                    emotion: "happy"
                },
                T0013: {
                    text: "But Bean, we insist!",
                    emotion: "snapped"
                },
                T0014: {
                    text: "We'll be your eyes in the sky! Your aerial scouts, seeking out that elusive stone!",
                    emotion: "happy"
                },
                T0015: {
                    text: "Whatever.",
                    emotion: "snapped"
                },
                T0016: {
                    text: "Alright, up we go, Charm!",
                    emotion: "happy"
                },
                T0017: {
                    text: "WAIT, WHAT ABOUT THE CLOUD WE JUST PASSED? IT HAD SOMETHING GLOWING ON IT!",
                },
                T0018: {
                    text: "SEE, I TOLD YOU I SAW SOMETHING! I'VE GOT THE EYES OF AN EAGLE, YOU KNOW!"
                },
                T0019: {
                    text: "What was that?"
                },
                T0020: {
                    text: "I think the thing your searching for is on that cloud. Bean, your selflessness is admirable and we’re glad that our arguments are behind us.",
                    emotion: "happy"
                },
                T0021: {
                    text: "I hope we meet again soon! Good luck!",
                    emotion: "happy"
                },
                T0022: {
                    text: "But what if I have something important to do on your day? It's not fair that I have to wait.",
                    emotion: "snapped"
                },
                T0023: {
                    text: "You're just jealous because I can perform more dazzling tricks with the pixie dust!",
                    emotion: "snapped"
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
                },
                T0003: {
                    text: "Hmm I think the last time we used it was back there on the right side.",
                    emotion: "thinking"
                },
                T0004: {
                    text: "I do too listen to you. I just don't agree with you!",
                    emotion: "snapped"
                },
                T0005: {
                    text: "Oh, please! You're the one who always wants to hog it all for yourself!",
                    emotion: "snapped"
                },
                T0006: {
                    text: "What does that mean? And what is a raccoon?",
                    emotion: "crying"
                },
                T0007: {
                    text: "Chant, if we share the pixie dust equally, we won't have to waste time arguing about who gets more or who flew higher…",
                    emotion: "thinking"
                },
                T0008: {
                    text: "I’m sorry Chant!",
                    emotion: "crying"
                },
                T0009: {
                    text: "Thanks for not giving up on us!",
                    emotion: "happy"
                },
                T0010: {
                    text: "You're a natural, Bean. Now let me show you how to maneuver in the air. It's all about balance and gentle movements.",
                    emotion: "happy"
                },
                T0011: {
                    text: "Okay, since you won't take the pixie dust, we'll use our flying abilities to search for the glowing stone from above! ",
                    emotion: "thinking"
                },
                T0012: {
                    text: "Why do you have to brag like that again… ",
                    emotion: "angry"
                },
                T0013: {
                    text: "Up we go!",
                    emotion: "happy"
                },
                T0014: {
                    text: "Really? You're just making that up to mess with me, aren't you?"
                },
                T0015: {
                    text: "Yeah, if that eagle had a questionable tendency to bump into trees…"
                },
                T0016: {
                    text: "Nothing."
                },
                T0017: {
                    text: "You’ve taught us an important lesson. We thank you for that. If there's ever anything else we can do for you on your journey, please don't hesitate to ask. ",
                    emotion: "happy"
                },
                T0018: {
                    text: "How about we take turns using the pixie dust? One day it's my turn, and the next day it's your turn. That way, we both get to enjoy flying.",
                    emotion: "thinking"
                },
                T0019: {
                    text: "And what if I need to practice my flying skills on your day? I shouldn't have to miss out just because it's YOUR turn.",
                    emotion: "angry"
                },
                T0020: {
                    text: "Jealous? Please! I'm just tired of you showing off all the time!",
                    emotion: "snapped"
                }
            }
        },
        Unknown: {
            defaultPosition: POSITIONS[1],
            texts: null
        },
        Bandit: {
            defaultPosition: POSITIONS[2][2],
            texts: {
                T0000: {
                    text: "Fuzzy feline furballs and whisker-waggling troublemakers! Can't a raccoon get a decent nap without being bothered by meddling creatures?"
                },
                T0001: {
                    text: "Call me Bandit, and let me tell you, I can't catch a wink of sleep with those bickering fairies around.",
                    emotion: "grumpy"
                },
                T0002: {
                    text: "They go on and on about who gets how much pixie dust, and it's driving me nuts! So, I decided to take matters into my own paws and swipe their precious dust.",
                    emotion: "grumpy"
                },
                T0003: {
                    text: "Maybe that'll finally shut them up and bring some peace to these meadows.",
                    emotion: "grumpy"
                },
                T0004: {
                    text: "Look, Bean, I hear what you're saying, but those two just won't quit their bickering. If they can learn to stop arguing and get along, then I'll consider giving the pixie dust back.",
                    emotion: "grumpy"
                },
                T0005: {
                    text: "It's a fair deal, don't you think? They need to prove that they can share without fighting, and then we can all move on from this nonsense.",
                    emotion: "grumpy"
                },
                T0006: {
                    text: "zZZzz...",
                    emotion: "sleeping"
                }
            }
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
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0006, null],
            [CHARACTERS.Charm, script.Charm.texts.T0003, null],
            [CHARACTERS.Chant, script.Chant.texts.T0004, null],
            [CHARACTERS.Charm, script.Charm.texts.T0004, null],
            [CHARACTERS.Stool, script.Stool.texts.T0006, null],
            [CHARACTERS.Bean, script.Bean.texts.T0007, null],
        ], script);

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
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0008, null],
            [CHARACTERS.Bean, script.Bean.texts.T0009, null],
        ], script);
        await optionC();
    }

    async function optionA2() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0010, null],
        ], script);
        await optionC();
    }

    async function optionC() {
        fS.Character.hideAll();
        fS.Speech.hide();
        await makeTransition("fade_in");

        await fS.Location.show(LOCATIONS.meadow2);
        await makeTransition("inScene");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0011, null],
        ], script);

        const [x, y] = script.Bandit.defaultPosition;
        const positionVector = fS.positionPercent(x, y);
        await showCharacter(CHARACTERS.Bandit, "grumpy", positionVector);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Unknown, script.Bandit.texts.T0000, null],
            [CHARACTERS.Stool, script.Stool.texts.T0007, POSITIONS[2][1]],
            [CHARACTERS.Stool, script.Stool.texts.T0008, POSITIONS[2][1]],
            [CHARACTERS.Bean, script.Bean.texts.T0012, null],
            [CHARACTERS.Stool, script.Stool.texts.T0009, POSITIONS[2][1]],
            [CHARACTERS.Bandit, script.Bandit.texts.T0001, null],
            [CHARACTERS.Bandit, script.Bandit.texts.T0002, null],
            [CHARACTERS.Bandit, script.Bandit.texts.T0003, null],
            [CHARACTERS.Bean, script.Bean.texts.T0013, null],
            [CHARACTERS.Bean, script.Bean.texts.T0014, null],
            [CHARACTERS.Bandit, script.Bandit.texts.T0004, null],
            [CHARACTERS.Bandit, script.Bandit.texts.T0005, null],
            [CHARACTERS.Bean, script.Bean.texts.T0015, null],
            [CHARACTERS.Bean, script.Bean.texts.T0016, null],
            [CHARACTERS.Stool, script.Stool.texts.T0010, POSITIONS[2][1]],
        ], script);

        fS.Speech.hide();
        fS.Character.hideAll();
        await fS.Location.show(LOCATIONS.meadow);
        await makeTransition("inScene");

        await letCharactersHaveDialogue([
            [CHARACTERS.Chant, script.Chant.texts.T0005, null],
            [CHARACTERS.Charm, script.Charm.texts.T0005, null],
            [CHARACTERS.Bean, script.Bean.texts.T0017, null],
            [CHARACTERS.Chant, script.Chant.texts.T0006, null],
            [CHARACTERS.Bean, script.Bean.texts.T0018, null],
            [CHARACTERS.Bean, script.Bean.texts.T0019, null],
            [CHARACTERS.Charm, script.Charm.texts.T0006, null],
            [CHARACTERS.Stool, script.Stool.texts.T0011, null],
        ], script);

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
        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0015, null],
            [CHARACTERS.Bean, script.Bean.texts.T0040, null],
        ], script);

        await optionD();
    }

    async function optionC1() {
        unlockNovelPages[3] = true;
        unlockNovelPages[4] = true;

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0020, null],
            [CHARACTERS.Bean, script.Bean.texts.T0021, null],
            [CHARACTERS.Charm, script.Charm.texts.T0007, null],
            [CHARACTERS.Chant, script.Chant.texts.T0007, null],
            [CHARACTERS.Charm, script.Charm.texts.T0008, null],
            [CHARACTERS.Chant, script.Chant.texts.T0008, null],
            [CHARACTERS.Bean, script.Bean.texts.T0022, null],
        ], script);

        fS.Speech.hide();
        fS.Character.hideAll();
        await makeTransition("fade_in", 0.5);

        await fS.Location.show(LOCATIONS.meadow2);
        await makeTransition("inScene");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bandit, script.Bandit.texts.T0006, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0023, null],
        ], script);

        await getItem(ITEMS.pixieDust, "pixieDust");

        fS.Speech.hide();
        fS.Character.hideAll();
        await makeTransition("fade_in", 0.5);

        await fS.Location.show(LOCATIONS.meadow);
        await makeTransition("inScene");

        dataForSave.pixieDust = true;

        do {
            await letCharactersHaveDialogue([
                [CHARACTERS.Bean, script.Bean.texts.T0028, null],
            ], script);
          } while (fS.Inventory.getAmount(ITEMS.pixieDust) != 0);

        
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0024, null],
            [CHARACTERS.Charm, script.Charm.texts.T0009, null],
            [CHARACTERS.Chant, script.Chant.texts.T0009, null],
            [CHARACTERS.Bean, script.Bean.texts.T0025, null],
            [CHARACTERS.Bean, script.Bean.texts.T0026, null],
        ], script);

        dataForSave.pixieDust = false;

        const dialog: DialogConfig = {
            C1_1: {
                label: "Accept Pixie Dust",
                callback: optionC1_1,
            },
            C1_2: {
                label: "Reject Pixie Dust",
                callback: optionC1_2,
            }
        }

        await createDialog(dialog);
    }

    async function optionC2() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0038, null],
            [CHARACTERS.Bean, script.Bean.texts.T0039, null],
            [CHARACTERS.Charm, script.Charm.texts.T0018, null],
            [CHARACTERS.Chant, script.Chant.texts.T0022, null],
            [CHARACTERS.Charm, script.Charm.texts.T0019, null],
            [CHARACTERS.Chant, script.Chant.texts.T0023, null],
            [CHARACTERS.Charm, script.Charm.texts.T0020, null],
        ], script);

        await optionD();
    }

    async function optionD() {
        await fS.Character.hide(CHARACTERS.Charm);
        await fS.Character.hide(CHARACTERS.Chant);
        await makeTransition("fade_in", 0.5);

        await letCharactersHaveDialogue([
            [CHARACTERS.Stool, script.Stool.texts.T0016, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0041, null],
            [CHARACTERS.Stool, script.Stool.texts.T0017, POSITIONS[1]],
        ], script);

        await optionE();
    }

    async function optionC1_1() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0027, null],
        ], script);
        
        await getItem(ITEMS.pixieDust, "pixieDust");

        dataForSave.pixieDust = true;

        do {
            await letCharactersHaveDialogue([
                [CHARACTERS.Chant, script.Chant.texts.T0010, POSITIONS[1]],
                [CHARACTERS.Chant, script.Chant.texts.T0011, POSITIONS[1]],
            ], script);
          } while (fS.Inventory.getAmount(ITEMS.pixieDust) != 0);

        fS.Character.hideAll();
        await makeTransition("fade_in", 0.5);

          dataForSave.pixieDust = false;

        await fS.Location.show(LOCATIONS.cloud);
        await makeTransition("inScene");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0029, null],
            [CHARACTERS.Charm, script.Charm.texts.T0010, null],
            [CHARACTERS.Chant, script.Chant.texts.T0012, null],
            [CHARACTERS.Bean, script.Bean.texts.T0030, null],
            [CHARACTERS.Stool, script.Stool.texts.T0012, null],
            [CHARACTERS.Bean, script.Bean.texts.T0031, null],
            [CHARACTERS.Bean, script.Bean.texts.T0032, null],
            [CHARACTERS.Bean, script.Bean.texts.T0033, null],
        ], script);

        await optionF();
    }

    async function optionC1_2() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0034, null],
            [CHARACTERS.Stool, script.Stool.texts.T0013, null],
            [CHARACTERS.Bean, script.Bean.texts.T0035, null],
            [CHARACTERS.Chant, script.Chant.texts.T0013, null],
            [CHARACTERS.Bean, script.Bean.texts.T0036, null],
            [CHARACTERS.Charm, script.Charm.texts.T0011, null],
            [CHARACTERS.Chant, script.Chant.texts.T0014, null],
            [CHARACTERS.Charm, script.Charm.texts.T0012, null],
            [CHARACTERS.Chant, script.Chant.texts.T0015, null],
            [CHARACTERS.Chant, script.Chant.texts.T0016, null],
        ], script);

        await fS.Character.animate(CHARACTERS.Chant, CHARACTERS.Chant.pose.happy, ANIMATIONS.flyUp(1, script.Chant.defaultPosition));
    
        await letCharactersHaveDialogue([
            [CHARACTERS.Charm, script.Charm.texts.T0013, null],
        ], script);

        await fS.Character.animate(CHARACTERS.Charm, CHARACTERS.Charm.pose.happy, ANIMATIONS.flyUp(1, script.Charm.defaultPosition));

        await letCharactersHaveDialogue([
            [CHARACTERS.Chant, script.Chant.texts.T0017, null],
            [CHARACTERS.Charm, script.Charm.texts.T0014, null],
            [CHARACTERS.Bean, script.Bean.texts.T0037, null],
            [CHARACTERS.Stool, script.Stool.texts.T0014, null],
            [CHARACTERS.Chant, script.Chant.texts.T0018, null],
            [CHARACTERS.Charm, script.Charm.texts.T0015, null],
            [CHARACTERS.Chant, script.Chant.texts.T0019, null],
            [CHARACTERS.Charm, script.Charm.texts.T0016, null],
        ], script);

        await fS.Character.animate(CHARACTERS.Charm, CHARACTERS.Charm.pose.happy, ANIMATIONS.flyDown(1, script.Charm.defaultPosition));
        await fS.Character.animate(CHARACTERS.Chant, CHARACTERS.Chant.pose.happy, ANIMATIONS.flyDown(1, script.Chant.defaultPosition));

        await letCharactersHaveDialogue([
            [CHARACTERS.Chant, script.Chant.texts.T0020, null],
            [CHARACTERS.Charm, script.Charm.texts.T0017, null],
            [CHARACTERS.Chant, script.Chant.texts.T0021, null],
        ], script);

        fS.Character.hideAll();
        fS.Speech.hide();
        await makeTransition("fade_in", 0.5);

        await optionE();
    }

    async function optionE() {
        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0042, null],
            [CHARACTERS.Stool, script.Stool.texts.T0018, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0043, null],
            [CHARACTERS.Stool, script.Stool.texts.T0019, POSITIONS[1]],
        ], script);

        await hideCharacter(CHARACTERS.Stool);

        await getItem(ITEMS.ladder, "ladder");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0044, null],
            [CHARACTERS.Stool, script.Stool.texts.T0020, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0045, null],
            [CHARACTERS.Stool, script.Stool.texts.T0021, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0046, null],
        ], script);

        dataForSave.ladder = true;

        do {
            await letCharactersHaveDialogue([
                [CHARACTERS.Stool, script.Stool.texts.T0022, POSITIONS[1]],
            ], script);
          } while (fS.Inventory.getAmount(ITEMS.ladder) != 0);

        
        fS.Speech.hide();
        fS.Character.hideAll();
        await fS.Location.show(LOCATIONS.cloud);
        await makeTransition("inScene");

        await optionF();
    }

    async function optionF() {

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0047, null],
            [CHARACTERS.Stool, script.Stool.texts.T0023, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0048, null],
        ], script);

        await getItem(ITEMS.sunstone, "sunstone");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0049, null],
            [CHARACTERS.Stool, script.Stool.texts.T0024, POSITIONS[1]],
            [CHARACTERS.Stool, script.Stool.texts.T0025, POSITIONS[1]],
            [CHARACTERS.Stool, script.Stool.texts.T0026, POSITIONS[1]],
            [CHARACTERS.Bean, script.Bean.texts.T0050, null],
        ], script);

        if (unlockNovelPages[3]) await showNovelPages("novelpage3", LOCATIONS.cloud);
        
        if (unlockNovelPages[4]) await showNovelPages("novelpage4", LOCATIONS.cloud);

        fS.Character.hideAll();
        fS.Speech.hide();
        await makeTransition("fade_in");
    }
}