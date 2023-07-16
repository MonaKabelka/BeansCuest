namespace BeansCuest {
    export let gameMenu: fS.Menu;

    export let menuDefinition: MenuDefinition = {
        credits: {
            label: "(C)redits",
            callback: showCredits
        },
        inventory: {
            label: "(I)nventory",
            callback: openInventory
        },
        load: {
            label: "(L)oad",
            callback: loadGame
        },
        save: {
            label: "(S)ave",
            callback: saveGame
        },
        novelPages: {
            label: "(N)ovel Pages",
            callback: showNovelPages
        },
        volumeDown: {
            label: "Vol (-)",
            callback: volumeDown
        },
        volumeUp: {
            label: "Vol (+)",
            callback: volumeUp
        }
    }

    export function transformMenu(definition: MenuDefinition): Object {
        return Object.entries(definition).reduce((acc, [key, { label }]) => ({...acc, [key]: label}), {});
    }

    export async function useCallbacks(_option: string) {
        await Object.values(menuDefinition).find(({ label}) => label === _option).callback();
    }

    async function showCredits() {
        return;
    }

    async function openInventory() {
        return;
    }

    async function saveGame() {
        return;
    }

    async function loadGame() {
        return;
    }

    async function showNovelPages() {
        return;
    }

    async function volumeDown() {
        return;
    }

    async function volumeUp() {
        return;
    }


}