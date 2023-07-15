namespace BeansCuest {
    let text: SceneText = {
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
    }
    export async function scene3_1(): fS.SceneReturn {
        await fS.Location.show(LOCATIONS.lilypond);
        await makeTransition("pix4");

        await showCharacter(CHARACTERS.Bean, "questioning", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0000);

        await showCharacter(CHARACTERS.Stool, "anxious", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0000);

        await showCharacter(CHARACTERS.Bean, "curious", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0001);

        let dialogue: Dialog = {
            A: "Draw attention",
            B: "Sneak up"
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
        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0002);

        await showCharacter(CHARACTERS.Stool, "anxious", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0001);

        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0003);

        await optionC();
    }

    async function optionB() {
        await showCharacter(CHARACTERS.Stool, "anxious", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0002);

        await showCharacter(CHARACTERS.Bean, "curious", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0004);

        await optionC();
    }

    async function optionC() {
        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);

        await showCharacter(CHARACTERS.Lillypad, "hiding", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.5);

        let dialogue: Dialog = {
            C1: "Introduce yourself",
            C2: "Don't waste time"
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
        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0005);

        await showCharacter(CHARACTERS.Lillypad, "hiding", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0000);

        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0006);

        await showCharacter(CHARACTERS.Lillypad, "shy", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0001);

        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0007);

        await showCharacter(CHARACTERS.Bean, "resigned", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0008);

        await showCharacter(CHARACTERS.Lillypad, "shy", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0002);

        await hideCharacter(CHARACTERS.Lillypad);
        await makeTransition("fade_in", 0.5)

        await showCharacter(CHARACTERS.Stool, "disappointed", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.5);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0003);

        await showCharacter(CHARACTERS.Bean, "determined", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0009);

        let dialogue: Dialog = {
            C1_1: "Ask Lillypad",
            C1_2: "Ignore Lillypad"
        };

        let dialogueElement = await fS.Menu.getInput(dialogue, "choice");

        switch (dialogueElement) {
            case dialogue.C1_1:
                await optionC1_1();
                break;
            case dialogue.C1_2:
                await optionC1_2();
                break;
        }
    }

    async function optionC2() {
        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createMultiLineSpeech(CHARACTERS.Bean, ["T0023", "T0024"], text);

        await hideCharacter(CHARACTERS.Lillypad);
        await makeTransition("fade_in", 0.5);

        await showCharacter(CHARACTERS.Stool, "worried", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.5);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0005);

        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in", 0.5);
        await showCharacter(CHARACTERS.Lillypad, "scared", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.5);

        await showCharacter(CHARACTERS.Bean, "focused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0025);

        await hideCharacter(CHARACTERS.Lillypad);
        await makeTransition("fade_in", 0.25);

        await showCharacter(CHARACTERS.Bean, "confused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0026);

        await showCharacter(CHARACTERS.Stool, "worried", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0006);

        await showCharacter(CHARACTERS.Bean, "resigned", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0027);

        await optionD();
    }

    async function optionC1_1() {
        await showCharacter(CHARACTERS.Bean, "questioning", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0010);

        await showCharacter(CHARACTERS.Lillypad, "shy", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0003);

        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0011);

        await showCharacter(CHARACTERS.Lillypad, "blushing", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0004);

        await showCharacter(CHARACTERS.Bean, "surprised", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0012);

        await showCharacter(CHARACTERS.Lillypad, "blushing", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0005);

        await showCharacter(CHARACTERS.Bean, "curious", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0013);

        await showCharacter(CHARACTERS.Lillypad, "sad", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0006);

        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0014);

        await showCharacter(CHARACTERS.Lillypad, "blushing", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0007);

        let dialogue: Dialog = {
            C1_1_1: "Accept help",
            C1_1_2: "Reject help"
        };

        let dialogueElement = await fS.Menu.getInput(dialogue, "choice");

        switch (dialogueElement) {
            case dialogue.C1_1_1:
                await optionC1_1_1();
                break;
            case dialogue.C1_1_2:
                await optionC1_1_2();
                break;
        }
    }

    async function optionC1_2() {
        await showCharacter(CHARACTERS.Lillypad, "sad", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0012);

        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0019);

        await showCharacter(CHARACTERS.Bean, "focused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0020);

        await hideCharacter(CHARACTERS.Lillypad);
        await makeTransition("fade_in", 0.5)

        await showCharacter(CHARACTERS.Stool, "worried", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.5);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0004);

        await showCharacter(CHARACTERS.Bean, "focused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0021);

        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0022);

        await optionD();
    }

    async function optionC1_1_1() {
        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0015);

        await showCharacter(CHARACTERS.Lillypad, "smiling", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0008);

        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0016);

        await showCharacter(CHARACTERS.Lillypad, "smiling", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0009);

        await optionE();
    }

    async function optionC1_1_2() {
        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0017);

        await showCharacter(CHARACTERS.Lillypad, "sad", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0010);

        await showCharacter(CHARACTERS.Lillypad, "shy", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Lillypad, text.Lillypad.T0011);

        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0018);

        await optionD();
    }

    async function optionD() {
        await showCharacter(CHARACTERS.Bean, "thinking", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0028);

        await hideCharacter(CHARACTERS.Lillypad);
        await makeTransition("fade_in", 0.25);

        await showCharacter(CHARACTERS.Stool, "anxious", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.25);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0007);

        await showCharacter(CHARACTERS.Stool, "questioning", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0008);

        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0029);

        let dialogue: Dialog = {
            D1: "Check waterlilies",
            D2: "Check mossy stones",
            D3: "Check reeds"
        };

        let dialogueElement = await fS.Menu.getInput(dialogue, "choice");

        switch (dialogueElement) {
            case dialogue.D1:
                await optionD1();
                break;
            case dialogue.D2:
                await optionD2();
                break;
            case dialogue.D3:
                await optionD3();
                break;
        }
    }

    async function optionD1() {
        await showCharacter(CHARACTERS.Bean, "serious", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0030);

        await showCharacter(CHARACTERS.Stool, "anxious", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0009);

        await showCharacter(CHARACTERS.Bean, "serious", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0031);

        await showCharacter(CHARACTERS.Stool, "serious", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0010);

        await hideCharacter(CHARACTERS.Bean);
        await hideCharacter(CHARACTERS.Stool);
        await fS.Location.show(LOCATIONS.black);
        await makeTransition("fade_in");

        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0011);

        await showCharacter(CHARACTERS.Stool, "anxious", fS.positionPercent(85, 100));
        await makeTransition("fade_in");
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0012);

        await hideCharacter(CHARACTERS.Bean);
        await hideCharacter(CHARACTERS.Stool);
        await fS.Location.show(LOCATIONS.lilypond);
        await makeTransition("pix4");

        await showCharacter(CHARACTERS.Stool, "anxious", fS.positionPercent(85, 100));
        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.5);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0032);

        await showCharacter(CHARACTERS.Stool, "mocking", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0013);

        await optionD();
    }

    async function optionD2() {
        await showCharacter(CHARACTERS.Bean, "thinking", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0033);

        await showCharacter(CHARACTERS.Stool, "disgusted", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0014);

        await showCharacter(CHARACTERS.Bean, "laughing", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0034);

        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0035);

        await showCharacter(CHARACTERS.Stool, "crying", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0015);

        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0036);

        await optionD();
    }

    async function optionD3() {
        await showCharacter(CHARACTERS.Bean, "focused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0037);

        await showCharacter(CHARACTERS.Bean, "thinking", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0038);

        await showCharacter(CHARACTERS.Stool, "anxious", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0016);

        await showCharacter(CHARACTERS.Bean, "begging", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0039);

        await showCharacter(CHARACTERS.Stool, "crying", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0017);

        await hideCharacter(CHARACTERS.Stool);
        await makeTransition("fade_in");

        await showCharacter(CHARACTERS.Bean, "curious", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0040);

        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0018);

        await showCharacter(CHARACTERS.Stool, "happy", fS.positionPercent(85, 100));
        await makeTransition("fade_in");

        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0041);

        await showCharacter(CHARACTERS.Stool, "cheering", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0019);

        await showCharacter(CHARACTERS.Bean, "focused", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0042);

        await optionE();
    }

    async function optionE() {
        await showCharacter(CHARACTERS.Stool, "happy", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0020);

        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0043);

        await showCharacter(CHARACTERS.Stool, "hysterical", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0021);

        await showCharacter(CHARACTERS.Bean, "smiling", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0044);

        await showCharacter(CHARACTERS.Stool, "anxious", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0022);

        await showCharacter(CHARACTERS.Stool, "explanatory", fS.positionPercent(85, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Stool, text.Stool.T0023);

        await showCharacter(CHARACTERS.Bean, "happy", fS.positionPercent(15, 100));
        await makeTransition("fade_in", 0.1);
        await createSingleLineSpeech(CHARACTERS.Bean, text.Bean.T0045);

        fS.Speech.hide();
        fS.Character.hideAll();
    }

}