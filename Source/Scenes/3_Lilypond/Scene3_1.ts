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
            T0025: "Because at home I played hide and seek with my best friend Oliver! But now I'm traveling with Sto-",
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
    }

    async function optionA() {

    }

    async function optionB() {

    }

    async function optionC() {

    }

    async function optionC1() {

    }

    async function optionC2() {

    }

    async function optionC1_1() {

    }

    async function optionC1_2() {
        
    }

    async function optionC1_1_1() {

    }

    async function optionC1_1_2() {

    }

    async function optionD() {

    }

    async function optionD1() {

    }

    async function optionD2() {
        
    }

    async function optionD3() {
        
    }

    async function optionE() {

    }

}