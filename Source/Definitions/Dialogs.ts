namespace BeansCuest {
    export type Dialog = Record<string, string>;

    export type Option = {
        callback: () => Promise<void>
        label: string;
    };

    export type DialogConfig = Record<string, Option>;

    export async function createDialog(config: DialogConfig) {
        const dialogue: Dialog = Object.entries(config).reduce((acc, [name, { label }]) => ({
            ...acc,
            [name]: label
        }), {});

        let dialogueElement = await fS.Menu.getInput(dialogue, "choice");

        await Object.values(config).find(({ label }) => label === dialogueElement).callback()
    }
}