namespace BeansCuest {
  export import f = FudgeCore;
  export import fS = FudgeStory;

  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: fS.Scenes = [
      { scene: scene1_1, name: "Scene 1.1" }
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = fS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    fS.Progress.go(scenes);
  }
}