namespace BeansCuest {
    const script: ScriptDefinition = {
        Bean: {
            defaultPosition: POSITIONS[1],
            texts: {
                T0000: {
                    text: "Stool, do you hear those spooky ghostlike noises? It's definitely coming from the mansion."
                }
            }
        }
    }

    const possibleAnswers = ["Kitten", "Kittens", "Baby cat", "Baby cats", "Kitty", "Kittycat", "Babycat", "Babycats"];

    export async function scene5(): fS.SceneReturn {
        await fS.Location.show(LOCATIONS.mansion);
        await makeTransition("sceneChange");

        await letCharactersHaveDialogue([
            [CHARACTERS.Bean, script.Bean.texts.T0000, null]
        ], null);

        const answer = await fS.Speech.getInput();
        if (possibleAnswers.includes(answer)) await optionA();
        else await optionB();
    }

    async function optionA() {

    }

    async function optionB() {
        
    }
}