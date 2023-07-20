namespace BeansCuest {
    export async function showNovelPages(novelpage: NovelpageName, previousLocation: fS.LocationDefinition) {
        dataForSave[novelpage] = true;
        await fS.Location.show(NOVELPAGES[novelpage]);
        fS.Character.hideAll();
        fS.Speech.hide();
        await makeTransition("novelpage");
        await playSound(SOUNDS.novelpage);
        await createSingleLineSpeech(CHARACTERS.System, "You've unlocked a new novel page!");
        await fS.Location.show(previousLocation);
        await makeTransition("novelpage");
    }
}