namespace BeansCuest {
    export async function scene1_2(): fS.SceneReturn {
        await fS.Location.show(LOCATIONS.woods2);
        await makeTransition("fade_in");
    }
}