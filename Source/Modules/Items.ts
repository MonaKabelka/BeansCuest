namespace BeansCuest {
    export async function getItem(item: fS.ItemDefinition, itemKey: keyof typeof ITEMS) {
        fS.Inventory.add(item);
        const itemChar = Object.entries(ITEM_CHARACTERS).find(([key]) => key === itemKey)[1];
        fS.Character.hideAll();
        await makeTransition("fade_in", 0.5);
        await fS.Character.animate(itemChar, itemChar.pose.center, ANIMATIONS.getBigger(1));
        await createSingleLineSpeech(CHARACTERS.System, `You aquired ${item.name}`);
        await fS.Character.animate(itemChar, itemChar.pose.center, ANIMATIONS.getSmaller(1));
    }
}