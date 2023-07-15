namespace BeansCuest {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  export let dataForSave = {
    nameProtagonist: ""
  };

  export let mainPosition: [number, number] = [15, 100];
  export let secondaryPosition: [number, number] = [85, 100];

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: fS.Scenes = [
      // { scene: scene1_1, name: "Scene 1.1" },
      // { scene: scene1_2, name: "Scene 1.2" },
      // { scene: scene2_1, name: "Scene 2.1" },
      // { scene: scene3_1, name: "Scene 3.1" },
      { scene: scene4_1, name: "Scene 4.1" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = fS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    fS.Progress.go(scenes);
  }
}