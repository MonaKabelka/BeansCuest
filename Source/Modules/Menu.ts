namespace BeansCuest {
    export let gameMenu: fS.Menu;

    export let isMenuOpen = false;
    export let volume = 1;

    export let menuDefinition: MenuDefinition = {
        credits: {
            label: "(C)redits",
            callback: showCredits,
            code: f.KEYBOARD_CODE.C
        },
        inventory: {
            label: "(I)nventory",
            callback: openInventory,
            code: f.KEYBOARD_CODE.I
        },
        load: {
            label: "(L)oad",
            callback: loadGame,
            code: f.KEYBOARD_CODE.L
        },
        save: {
            label: "(S)ave",
            callback: saveGame,
            code: f.KEYBOARD_CODE.S
        },
        novelPages: {
            label: "(N)ovel Pages",
            callback: showNovelPages,
            code: f.KEYBOARD_CODE.N
        },
        volumeDown: {
            label: "Vol (D)own",
            callback: volumeDown,
            code: f.KEYBOARD_CODE.D
        },
        volumeUp: {
            label: "Vol (U)p",
            callback: volumeUp,
            code: f.KEYBOARD_CODE.U
        },
        toggleMenu: {
            label: "Toggle (M)enu",
            callback: toggleMenu,
            code: f.KEYBOARD_CODE.M
        }
    }

    export function transformMenu(definition: MenuDefinition): Object {
        return Object.entries(definition).reduce((acc, [key, { label }]) => ({...acc, [key]: label}), {});
    }

    export async function useCallbacks(_option: string) {
        await Object.values(menuDefinition).find(({ label}) => label === _option).callback();
    }

    async function toggleMenu() {
        isMenuOpen ? gameMenu.close() : gameMenu.open();
        isMenuOpen = !isMenuOpen;
    }

    async function showCredits() {
        await fS.Text.print(`<table class="credits-table">
        <thead>
          <tr>
            <th>   Resources   </th>
            <th>   Credits   </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>   Concept   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Script   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Background Artworks   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Character Design   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Character Artworks   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   GUI Design   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Item Artworks   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Programming   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Logo Design   </td>
            <td>   Mona Kabelka   </td>
          </tr>
          <tr>
            <td>   Fudge Core   </td>
            <td>   Jirka Dell'Oro-Friedl   </td>
          </tr>
          <tr>
            <td>   Lecturer   </td>
            <td>   Riem Yasin   </td>
          </tr>
        </tbody>
        </table>`);
        return;
    }

    async function openInventory() {
        await fS.Inventory.open();
    }

    async function saveGame() {
        await fS.Progress.save();
    }

    async function loadGame() {
        await fS.Progress.load();
    }

    async function showNovelPages() {
        return;
    }

    async function volumeDown() {
        volume = Math.max(volume - 0.1, 0);
        fS.Sound.setMasterVolume(volume);
    }

    async function volumeUp() {
        volume = Math.min(volume + 0.1, 1);
        fS.Sound.setMasterVolume(volume);
    }

    document.addEventListener("keydown", handleKeyPress);

    async function handleKeyPress(event: KeyboardEvent) {
        if (!Object.values(menuDefinition).some(({ code }) => code === event.code)) return;
        await useCallbacks(Object.values(menuDefinition).find(({ code }) => code === event.code).label)
    }


}