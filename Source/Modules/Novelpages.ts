namespace BeansCuest {
    export async function showNovelPages(novelpage: NovelpageName, previousLocation: fS.LocationDefinition) {
        dataForSave[novelpage] = true;
        const {pageNr, ...page} = NOVELPAGES[novelpage]
        await fS.Location.show(page);
        fS.Character.hideAll();
        fS.Speech.hide();
        await playSound(SOUNDS.bites);
        await makeTransition("novelpage");
        await playSound(SOUNDS.novelpage);
        await createSingleLineSpeech(CHARACTERS.System, `You've unlocked novel page ${pageNr}!`);
        await fS.Location.show(previousLocation);
        await playSound(SOUNDS.bites);
        await makeTransition("novelpage");
    }
}