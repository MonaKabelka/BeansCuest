namespace BeansCuest {
    export function getItemsInInventory() {
        const inventory = document.getElementsByClassName("inventory")[0];
        const inventoryList = inventory.getElementsByTagName("ul")[0];
        return inventoryList.getElementsByTagName("li");
    }

    export function getStatusOfStones() {
        const items = getItemsInInventory();
        const stones: {el: HTMLLIElement, item: fS.ItemDefinition}[] = [];
        for (let item of items) {
            switch (item.id) {
                case "Moonstone":
                    stones.push({
                        el: item,
                        item: ITEMS.moonstone
                    });
                    break;
                case "Sunstone":
                    stones.push({
                        el: item,
                        item: ITEMS.sunstone
                    });
                    break;
                case "Starstone":
                    stones.push({
                        el: item,
                        item: ITEMS.starstone
                    })
                    break;
            }
        }
        return stones;
    }
}