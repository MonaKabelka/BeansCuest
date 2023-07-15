"use strict";
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.f = FudgeCore;
    BeansCuest.fS = FudgeStory;
    BeansCuest.dataForSave = {
        nameProtagonist: ""
    };
    BeansCuest.mainPosition = [15, 100];
    BeansCuest.secondaryPosition = [85, 100];
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            { scene: BeansCuest.scene1_1, name: "Scene 1.1" },
            // { scene: scene1_2, name: "Scene 1.2" },
            // { scene: scene2_1, name: "Scene 2.1" },
            // { scene: scene3_1, name: "Scene 3.1" },
            // { scene: scene4_1, name: "Scene 4.1" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        BeansCuest.dataForSave = BeansCuest.fS.Progress.setData(BeansCuest.dataForSave, uiElement);
        // start the sequence
        BeansCuest.fS.Progress.go(scenes);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.CHARACTERS = {
        Oliver: {
            name: "Oliver",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Characters/Oliver/happy.png",
                worried: "Images/Characters/Oliver/worried.png",
                proud: "Images/Characters/Oliver/proud.png"
            }
        },
        Bean: {
            name: "Bean",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                happy: "Images/Characters/Bean/happy.png",
                sad: "Images/Characters/Bean/sad.png",
                focused: "Images/Characters/Bean/focused.png",
                curious: "Images/Characters/Bean/curious.png",
                charmed: "Images/Characters/Bean/charmed.png",
                proud: "Images/Characters/Bean/proud.png",
                scared: "Images/Characters/Bean/scared.png",
                confused: "Images/Characters/Bean/confused.png",
                questioning: "Images/Characters/Bean/questioning.png",
                guilty: "Images/Characters/Bean/guilty.png",
                unsure: "Images/Characters/Bean/unsure.png",
                resigned: "Images/Characters/Bean/resigned.png",
                smiling: "Images/Characters/Bean/smiling.png",
                determined: "Images/Characters/Bean/determined.png",
                surprised: "Images/Characters/Bean/surprised.png",
                thinking: "Images/Characters/Bean/thinking.png",
                serious: "Images/Characters/Bean/serious.png",
                laughing: "Images/Characters/Bean/laughing.png",
                begging: "Images/Characters/Bean/begging.png"
            }
        },
        Stool: {
            name: "Stool",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                worried: "Images/Characters/Stool/worried.png",
                explanatory: "Images/Characters/Stool/explanatory.png",
                hysterical: "Images/Characters/Stool/hysterical.png",
                sad: "Images/Characters/Stool/sad.png",
                confused: "Images/Characters/Stool/confused.png",
                happy: "Images/Characters/Stool/happy.png",
                crying: "Images/Characters/Stool/crying.png",
                anxious: "Images/Characters/Stool/anxious.png",
                disappointed: "Images/Characters/Stool/disappointed.png",
                serious: "Images/Characters/Stool/serious.png",
                mocking: "Images/Characters/Stool/mocking.png",
                disgusted: "Images/Characters/Stool/disgusted.png",
                cheering: "Images/Characters/Stool/cheering.png"
            }
        },
        Narrator: {
            name: "Narrator",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: null
        },
        Unknown: {
            name: "Unknown",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: null
        },
        Lillypad: {
            name: "Lillypad",
            origin: BeansCuest.fS.ORIGIN.BOTTOMCENTER,
            pose: {
                hiding: "Images/Characters/Lillypad/hiding.png",
                shy: "Images/Characters/Lillypad/shy.png",
                blushing: "Images/Characters/Lillypad/blushing.png",
                sad: "Images/Characters/Lillypad/sad.png",
                smiling: "Images/Characters/Lillypad/smiling.png",
                scared: "Images/Characters/Lillypad/scared.png"
            }
        }
    };
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function createDialog(config) {
        const dialogue = Object.entries(config).reduce((acc, [name, { label }]) => ({
            ...acc,
            [name]: label
        }), {});
        let dialogueElement = await BeansCuest.fS.Menu.getInput(dialogue, "choice");
        await Object.values(config).find(({ label }) => label === dialogueElement).callback();
    }
    BeansCuest.createDialog = createDialog;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.LOCATIONS = {
        cloud: {
            name: "cloud",
            background: "Images/Backgrounds/cloud.png"
        },
        lilypond: {
            name: "lilypond",
            background: "Images/Backgrounds/lilypond.png"
        },
        mansion: {
            name: "mansion",
            background: "Images/Backgrounds/mansion.png"
        },
        mansion2: {
            background: "Images/Backgrounds/mansion2.png",
            name: "mansion2",
        },
        meadow: {
            background: "Images/Backgrounds/meadow.png",
            name: "meadow"
        },
        meadow2: {
            background: "Images/Backgrounds/meadow2.png",
            name: "meadow2"
        },
        wistfulwoods: {
            name: "wistfulwoods",
            background: "Images/Backgrounds/wistfulwoods.png"
        },
        woods: {
            background: "Images/Backgrounds/woods.png",
            name: "woods"
        },
        woods2: {
            background: "Images/Backgrounds/woods2.png",
            name: "woods2"
        },
        woods3: {
            background: "Images/Backgrounds/woods3.png",
            name: "woods3"
        },
        black: {
            background: "Images/Backgrounds/black.png",
            name: "black",
        }
    };
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function letCharacterSayText(character, emotion, text, position) {
        await BeansCuest.showCharacter(character, emotion, position);
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(character, text);
    }
    BeansCuest.letCharacterSayText = letCharacterSayText;
    async function letCharactersHaveDialogue(texts, script) {
        for (let [character, scriptText] of texts) {
            const [x, y] = script[character.name].defaultPosition;
            const position = BeansCuest.fS.positionPercent(x, y);
            await letCharacterSayText(character, scriptText.emotion, scriptText.text, position);
        }
    }
    BeansCuest.letCharactersHaveDialogue = letCharactersHaveDialogue;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    BeansCuest.TRANSITIONS = {
        pix4: {
            alpha: "Images/Transitions/pix4.jpg",
            duration: 1,
            edge: 1
        },
        pix1: {
            alpha: "Images/Transitions/pix1.jpg",
            duration: 1,
            edge: 1
        }
    };
    function makeTransition(name, duration) {
        if (BeansCuest.TRANSITIONS[name]) {
            return BeansCuest.fS.update(duration ? duration : BeansCuest.TRANSITIONS[name].duration, BeansCuest.TRANSITIONS[name].alpha, BeansCuest.TRANSITIONS[name].edge);
        }
        return BeansCuest.fS.update(duration ? duration : 1);
    }
    BeansCuest.makeTransition = makeTransition;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function showCharacter(character, pose, position) {
        await hideCharacter(character);
        await BeansCuest.fS.Character.show(character, character.pose[pose], position);
    }
    BeansCuest.showCharacter = showCharacter;
    async function hideCharacter(character) {
        await BeansCuest.fS.Character.hide(character);
    }
    BeansCuest.hideCharacter = hideCharacter;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function createMultiLineSpeech(character, textNames, text) {
        for (let name of textNames) {
            await createSingleLineSpeech(character, text[character.name][name]);
        }
    }
    BeansCuest.createMultiLineSpeech = createMultiLineSpeech;
    ;
    async function createSingleLineSpeech(character, text) {
        await BeansCuest.fS.Speech.tell(character, text);
    }
    BeansCuest.createSingleLineSpeech = createSingleLineSpeech;
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let text = {
        Oliver: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    emotion: "happy",
                    text: "Hey Bean, finally!"
                },
                T0001: {
                    emotion: "worried",
                    text: "I was afraid something might have happened to you. I thought you weren't going to show up.",
                },
                T0002: {
                    emotion: "happy",
                    text: "No worries! I'm just happy you're here now. Are you ready to play hide and seek?"
                },
                T0003: {
                    emotion: "happy",
                    text: "Yeah, I do. But I'm getting better at finding you every time so don't underestimate me! Prepare to be found!"
                },
                T0004: {
                    emotion: "proud",
                    text: "We'll see about that! Alright, I'll start counting while you go and conceal yourself. Ready... set... go!"
                }
            }
        },
        Bean: {
            defaultPosition: BeansCuest.mainPosition,
            texts: {
                T0000: {
                    emotion: "sad",
                    text: "Sorry Oliver, I'm a bit late today. Unfurtunately I got caught up in some stuff and forgot the time."
                },
                T0001: {
                    emotion: "happy",
                    text: "I apologize for being late, but I had the most purr-fect dream last night. I was engaged in an epic yarn chase with the most exquisite yarn balls."
                },
                T0002: {
                    emotion: "happy",
                    text: "It was so captivating that when I woke up, I realized I couldn't resist the temptation and ended up yarning my way through the morning."
                },
                T0003: {
                    emotion: "focused",
                    text: "Absolutely! I've been improving my hiding skills, you know?"
                },
                T0004: {
                    emotion: "happy",
                    text: "Ha! Challenge accepted. This time, I'll find the most extraordinary hiding spot. You won't stand a chance!"
                }
            }
        }
    };
    async function scene1_1() {
        BeansCuest.fS.Speech.hide();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0000]], text);
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0001]], text);
        let dialog = {
            A: {
                callback: optionA,
                label: "Apologize"
            },
            B: {
                callback: optionB,
                label: "Try to be funny"
            }
        };
        await BeansCuest.createDialog(dialog);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in");
    }
    BeansCuest.scene1_1 = scene1_1;
    async function optionA() {
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0000]], text);
        await optionC();
    }
    async function optionB() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0001],
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0002],
        ], text);
        await optionC();
    }
    async function optionC() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0002],
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0003],
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0003],
            [BeansCuest.CHARACTERS.Bean, text.Bean.texts.T0004],
            [BeansCuest.CHARACTERS.Oliver, text.Oliver.texts.T0004],
        ], text);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let script = {
        Oliver: {
            defaultPosition: BeansCuest.secondaryPosition,
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
            defaultPosition: BeansCuest.mainPosition,
            texts: {
                T0000: {
                    emotion: "curious",
                    text: "it's getting rather dark around here... this seems like the purr-fect spot to hide. oliver never ventures beyond the garden. but what is this weird light?"
                },
                T0001: {
                    emotion: "charmed",
                    text: "wow it looks so beautiful and sparkly! i wonder what it could be… oh looks like a portal!",
                },
                T0002: {
                    emotion: "curious",
                    text: "must be magic or something. i wonder how… OAAAHH",
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
    };
    async function scene1_2() {
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.woods2);
        await BeansCuest.makeTransition("pix4");
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0000.text);
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000]], script);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Oliver, script.Oliver.texts.T0001.text);
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001]], script);
        let dialog = {
            C1: {
                label: "Investigate",
                callback: optionC1
            },
            C2: {
                label: "Ignore",
                callback: optionC2,
            }
        };
        await BeansCuest.createDialog(dialog);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
    }
    BeansCuest.scene1_2 = scene1_2;
    async function optionC1() {
        await BeansCuest.letCharactersHaveDialogue([[BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002]], script);
    }
    async function optionC2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005]
        ], script);
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let askedBothOptions = [false, false];
    let script = {
        Unknown: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    text: "Hellooo? Are you okay? U don't look okay! Are you dead? Have I witnessed a decease??? Oh that's a CAT-ASTROPHE!"
                },
                T0001: {
                    text: "OH you're alive! I'm Stool. Are you alright? I heard a loud noise and then you were just… here. I was SO scared."
                }
            }
        },
        Bean: {
            defaultPosition: BeansCuest.mainPosition,
            texts: {
                T0000: {
                    text: "...urgh... Oliver...?",
                    emotion: "confused"
                },
                T0001: {
                    text: "Where am I? I was playing hide and seek with Oliver, and then everything is just a blur. I hope he's alright!",
                    emotion: "confused"
                },
                T0002: {
                    text: "Wha...?",
                    emotion: "questioning"
                },
                T0003: {
                    text: "To get back home I have to find... stones?",
                    emotion: "confused"
                },
                T0004: {
                    text: "Enchantica? I'm not in the garden? With Oliver? Am I dreaming?",
                    emotion: "questioning"
                },
                T0005: {
                    text: "How is that even pawssible? How are YOU pawssible?",
                    emotion: "confused"
                },
                T0006: {
                    text: "No that's not it. Don't get me wrong but you're a talking mushroom. This is enchanted!",
                    emotion: "guilty"
                },
                T0007: {
                    text: "... Um - nevermind",
                    emotion: "confused"
                },
                T0008: {
                    text: "Can you tell me the best place to start looking for the stones? I want to go home. I hope Oliver is fine...",
                    emotion: "questioning"
                },
                T0009: {
                    text: "It will definitely come in handy if you accompany me! Also, I'm looking forward to some company.",
                    emotion: "happy"
                },
                T0010: {
                    text: "I don't know. I think it would be safer for you to stay here.",
                    emotion: "unsure"
                },
                T0011: {
                    text: "Sigh. Okay you can come with me.",
                    emotion: "resigned"
                },
            }
        },
        Stool: {
            defaultPosition: BeansCuest.secondaryPosition,
            texts: {
                T0000: {
                    text: "I don't know what happened either. I usually just sit here and watch the portal...",
                    emotion: "explanatory",
                },
                T0001: {
                    text: "You know, in Enchantica we sometimes get visitors from other worlds! But suddenly BOOM and I've never seen something strange like you.",
                    emotion: "explanatory",
                },
                T0002: {
                    text: "You look funny!",
                    emotion: "happy",
                },
                T0003: {
                    text: "JUST NOW there was this loud noise! And all the three stones got lost! You know? The stones for the portal.",
                    emotion: "hysterical",
                },
                T0004: {
                    text: "If we won't fix it fast enough the portal might implode! And the could be everywhere in Enchantica!",
                    emotion: "hysterical",
                },
                T0005: {
                    text: "You're quick-witted! The stones to power the portal are the moonstone, the sunstone and the starstone. Without the stones we can never use the portal again!",
                    emotion: "hysterical",
                },
                T0006: {
                    text: "But it's im-paw-sible to find them",
                    emotion: "sad",
                },
                T0007: {
                    text: "Oliver?",
                    emotion: "confused",
                },
                T0008: {
                    text: "We're in Enchantica - to be exact in the Wistful Woods. I lived here for like - …forever. I take care of the portal and the stones.",
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
                    text: "Hmm. I'm not sure, but I have a dare hunch. Maybe you should start at the Lillypond next to the Wistful Woods.",
                    emotion: "questioning",
                },
                T0012: {
                    text: "BUT WAIT - you can't leave me! What if something bad happens again? Will you take me with you? Pleeease?",
                    emotion: "hysterical",
                },
                T0013: {
                    text: "*Shivers* Didn't you hear that? There was a noise! Back there!",
                    emotion: "crying",
                },
                T0014: {
                    text: "Pawsome! Let's go!",
                    emotion: "happy",
                }
            }
        }
    };
    async function scene2_1() {
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0000.text);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0000]
        ], script);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.wistfulwoods);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "worried", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("pix1");
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Unknown, script.Unknown.texts.T0001.text);
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0001],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0000],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0001],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0002],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0002],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0003],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0004],
        ], script);
        await showDialog1();
    }
    BeansCuest.scene2_1 = scene2_1;
    async function showDialog1() {
        let dialog = {
            A: {
                label: "Stones?",
                callback: optionA,
            },
            B: {
                label: "Enchantica?",
                callback: optionB,
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionA() {
        askedBothOptions[0] = true;
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0003],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0005],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0006],
        ], script);
        await optionC();
    }
    async function optionB() {
        askedBothOptions[1] = true;
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0004],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0007],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0008],
        ], script);
        await optionC();
    }
    async function optionC() {
        if (!askedBothOptions.every((val) => val)) {
            await showDialog1();
            return;
        }
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0005],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0009],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0006],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0010],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0007],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0008],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0011],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0012],
        ], script);
        let dialog = {
            C1: {
                label: "Take Stool with you",
                callback: optionC1
            },
            C2: {
                label: "Don't take Stool with you",
                callback: optionC2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionC1() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0009],
        ], script);
        await optionD();
    }
    async function optionC2() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0010],
            [BeansCuest.CHARACTERS.Stool, script.Stool.texts.T0013],
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0011],
        ], script);
        await optionD();
    }
    async function optionD() {
        await BeansCuest.letCharactersHaveDialogue([
            [BeansCuest.CHARACTERS.Bean, script.Bean.texts.T0014],
        ], script);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
        await BeansCuest.makeTransition("fade_in");
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    let text = {
        Bean: {
            T0000: "Are you sure this is the best place to start looking for the first stone?",
            T0001: "I can barely make out features, but it looks something like a... frog?",
            T0002: "HELLOOOO??",
            T0003: "HELLO!? CAN YOU HELP US? WE'RE SEARCHING FOR SOMETHING AND IT'S URGENT!",
            T0004: "Shhh...",
            T0005: "Hello there. It's okay, we won't hurt you. We just need some information about something lost. Oh, by the way - I'm Bean.",
            T0006: "Nice to meet you, Lillypad! I'm searching for a lost relict, and I think you might be able to help. By any chance - Have you noticed anything strange lately?",
            T0007: "That's catastic!",
            T0008: "Well, not entirely catastic... I have no idea how to get there. I hate water!",
            T0009: "Nothing is impawssible, Stool. We will keep looking and keep trying until we find a way!",
            T0010: "What was it you wanted to say?",
            T0011: "Don't be shy! I'm listening!",
            T0012: "Fur-real?? That's great!",
            T0013: "No, of course not! Why would you think so?",
            T0014: "That's mean. I wish I could swim too. I've been afraid of water all my life. It's really distressing. You have a su-paw-power!",
            T0015: "That would be amazing!",
            T0016: "Wow, you're amazing, Lillypad! Thank you so much. I really appreciate your help. I'm a little closer to home now!",
            T0017: "Thanks for the kind offer - but I wouldn't feel good knowing you're putting yourself at risk for us. I think I'll search for a solution myself.",
            T0018: "I'll look around there. Thanks very much!",
            T0019: "Thank you Lilypad! You helped us a lot!",
            T0020: "I can't see anything, Stool. We need to find a way to get the relic.",
            T0021: "She's probably just diving for something. Let her be.",
            T0022: "Maybe we can search for something to help us.",
            T0023: "Have you been sitting in the pond for a long time? - If yes, surely you could help us.",
            T0024: "It's about a lost stone that I need to get back home. I came from another world and just ended up here by accident...",
            T0025: "... Because at home I played hide and seek with my best friend Oliver! But now I'm traveling with Sto-",
            T0026: "Oh? What happened?",
            T0027: "Oh no! My bad.",
            T0028: "Let's search the area for the stones.",
            T0029: "Stool you are great! That could be the stone! We just have to find something to reach it...",
            T0030: "Stool. Hear me out. I hold you by your feet.",
            T0031: "You dunk your head under the waterlily leaves and search for something to help us reach the stone.",
            T0032: "Well, but it was worth a try. Let's look elsewhere.",
            T0033: "Let's check in between these mossy stones.",
            T0034: "HAHAHA Stool! You have to be more careful!",
            T0035: "Did you hurt yourself?",
            T0036: "Hihi - paw promise! Now let's check somewhere else.",
            T0037: "Stool, see the reeds? I think I can see something peeking through...",
            T0038: "Uhaaah - but - arh - I'm too big -uhh - to fit between the - arhhhg -... Stool? Can you just take a look?",
            T0039: "Pweaaaase?",
            T0040: "Everything's alright?",
            T0041: "A Rod! I think this will work! Let's use this rod to try and hook the stone.",
            T0042: "Almost... there... got it!",
            T0043: "We've already found one! Finding the other two will be a piece of cake.",
            T0044: "We'll find the stones. It wasn't THAT difficult. Let's keep looking. Soo - where are we heading next? What do you suggest?",
            T0045: "Let's go!"
        },
        Stool: {
            T0000: "Well, I don't know why but something draws me here. Oh Bean - can you see that? Right there, in the pond.",
            T0001: "SHH - Be careful! You don't know wha-",
            T0002: "Be careful! You don't know wha-",
            T0003: "See?? Maybe this wasn't such a good idea after all.",
            T0004: "Oh no, what happened to Lillypad?",
            T0005: "...Bean...?",
            T0006: "I think… you might have overwhelmed it...",
            T0007: "Alright - but let's search together. This pond is a bit fishy...",
            T0008: "By the way - do you see this glowy thing at the bottom of the pond?",
            T0009: "I don't like where this is going.",
            T0010: "Absolutely no way.",
            T0011: "*Gurgling* I CRN'T REE A THRING! *Splash*",
            T0012: "It's pitch black - I literally can't see anything.",
            T0013: "BuT iT wAs WoRtH a TrY.",
            T0014: "But they are so slippy and slimyYYAHHHHHHHH",
            T0015: "I don't think so. But don't ever make me do that again!",
            T0016: "... You know I'm scared, right?",
            T0017: "Okay I'll do it.",
            T0018: "Yeah, I think I found something.",
            T0019: "You're doing great, Bean! Keep going!",
            T0020: "Yes! We did it!",
            T0021: "Okay now we have one stone to repair the portal. But we'll NEVER find the other two! They could be anywhere!",
            T0022: "Why are you asking ME??? I don't know! - But...",
            T0023: "...Something tells me we should search by the Mystique Meadows down the hill. I just can't tell why..."
        },
        Lillypad: {
            T0000: "I-I'm Lillypad.",
            T0001: "I-I don't know much, but I heard a big splash. And I-I think something fell into the pond and now it might be under the lily pads.",
            T0002: "A-Actually...",
            T0003: "N...Nothing. Nothing important.",
            T0004: "I-... I can swim. And dive...",
            T0005: "S-So you're not going to laugh at me?",
            T0006: "Oh... I-I was laughed at by everyone the whole time. That's why I ran away and now I live alone in this pond.",
            T0007: "Thank you. I-I may could help you dive down and search for the relict if you'd like.",
            T0008: "Is it this gem you've been looking for?",
            T0009: "It was nothing, really. I- I'm just happy to help. Good luck!",
            T0010: "Too bad. M- Maybe I can help you in some other way.",
            T0011: "I saw something in the reeds recently… M- Maybe this can help you.",
            T0012: "I-..."
        },
    };
    async function scene3_1() {
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.lilypond);
        await BeansCuest.makeTransition("pix4");
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "questioning", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0000);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "anxious", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0000);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "curious", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0001);
        let dialog = {
            A: {
                label: "Draw attention",
                callback: optionA
            },
            B: {
                label: "Sneak up",
                callback: optionB
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    BeansCuest.scene3_1 = scene3_1;
    async function optionA() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "happy", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0002);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "anxious", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0001);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "happy", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0003);
        await optionC();
    }
    async function optionB() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "anxious", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0002);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "curious", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0004);
        await optionC();
    }
    async function optionC() {
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "hiding", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.5);
        let dialog = {
            C1: {
                label: "Introduce yourself",
                callback: optionC1
            },
            C2: {
                label: "Don't waste time",
                callback: optionC2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionC1() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0005);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "hiding", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0000);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "happy", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0006);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "shy", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0001);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "happy", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0007);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "resigned", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0008);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "shy", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0002);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "disappointed", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0003);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "determined", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0009);
        let dialog = {
            C1_1: {
                label: "Ask Lillypad",
                callback: optionC1_1
            },
            C1_2: {
                label: "Ignore Lillypad",
                callback: optionC1_2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionC2() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createMultiLineSpeech(BeansCuest.CHARACTERS.Bean, ["T0023", "T0024"], text);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "worried", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0005);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "scared", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "focused", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0025);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.25);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "confused", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0026);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "worried", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0006);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "resigned", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0027);
        await optionD();
    }
    async function optionC1_1() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "questioning", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0010);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "shy", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0003);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0011);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "blushing", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0004);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "surprised", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0012);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "blushing", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0005);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "curious", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0013);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "sad", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0006);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0014);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "blushing", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0007);
        let dialog = {
            C1_1_1: {
                label: "Accept help",
                callback: optionC1_1_1
            },
            C1_1_2: {
                label: "Reject help",
                callback: optionC1_1_2
            }
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionC1_2() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "sad", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0012);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0019);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "focused", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0020);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "worried", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0004);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "focused", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0021);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0022);
        await optionD();
    }
    async function optionC1_1_1() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "happy", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0015);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "smiling", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0008);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "happy", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0016);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "smiling", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0009);
        await optionE();
    }
    async function optionC1_1_2() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0017);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "sad", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0010);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Lillypad, "shy", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Lillypad, text.Lillypad.T0011);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0018);
        await optionD();
    }
    async function optionD() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "thinking", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0028);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Lillypad);
        await BeansCuest.makeTransition("fade_in", 0.25);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "anxious", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.25);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0007);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "questioning", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0008);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "happy", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0029);
        let dialog = {
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
        };
        await BeansCuest.createDialog(dialog);
    }
    async function optionD1() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "serious", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0030);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "anxious", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0009);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "serious", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0031);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "serious", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0010);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bean);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.black);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0011);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "anxious", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0012);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Bean);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.fS.Location.show(BeansCuest.LOCATIONS.lilypond);
        await BeansCuest.makeTransition("pix4");
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "anxious", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.5);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0032);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "mocking", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0013);
        await optionD();
    }
    async function optionD2() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "thinking", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0033);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "disgusted", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0014);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "laughing", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0034);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0035);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "crying", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0015);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "happy", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0036);
        await optionD();
    }
    async function optionD3() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "focused", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0037);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "thinking", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0038);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "anxious", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0016);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "begging", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0039);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "crying", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0017);
        await BeansCuest.hideCharacter(BeansCuest.CHARACTERS.Stool);
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "curious", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0040);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0018);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "happy", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in");
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "happy", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0041);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "cheering", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0019);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "focused", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0042);
        await optionE();
    }
    async function optionE() {
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "happy", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0020);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0043);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "hysterical", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0021);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "smiling", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0044);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "anxious", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0022);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Stool, "explanatory", BeansCuest.fS.positionPercent(85, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Stool, text.Stool.T0023);
        await BeansCuest.showCharacter(BeansCuest.CHARACTERS.Bean, "happy", BeansCuest.fS.positionPercent(15, 100));
        await BeansCuest.makeTransition("fade_in", 0.1);
        await BeansCuest.createSingleLineSpeech(BeansCuest.CHARACTERS.Bean, text.Bean.T0045);
        BeansCuest.fS.Speech.hide();
        BeansCuest.fS.Character.hideAll();
    }
})(BeansCuest || (BeansCuest = {}));
var BeansCuest;
(function (BeansCuest) {
    async function scene4_1() {
    }
    BeansCuest.scene4_1 = scene4_1;
    // async function optionA() {
    // }
    // async function optionA_1() {
    // }
    // async function optionA_2() {
    // }
    // async function optionC() {
    // }
    // async function optionB() {
    // }
    // async function optionC_1() {
    // }
    // async function optionC_2() {
    // }
    // async function optionD() {
    // }
    // async function optionC1_1() {
    // }
    // async function optionC1_2() {
    // }
    // async function optionE() {
    // }
    // async function optionF() {
    // }
})(BeansCuest || (BeansCuest = {}));
//# sourceMappingURL=source.js.map