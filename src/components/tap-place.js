export const tapPlaceComponent = {
  init() {
    this.placementMode = true

    const placementUI = document.getElementById('zappar-placement-ui')

    placementUI.addEventListener('click', () => {
      this.placementMode = !this.placementMode

      console.log(this.placementMode)

      const instantTracker = document.getElementById('instant-group')
      instantTracker.setAttribute(
        'zappar-instant',
        `placement-mode: ${this.placementMode}`
      )

      const modelEl = document.getElementById('model')

      if (this.placementMode) {
        placementUI.textContent = 'Tap here to place the object'
        modelEl.setAttribute('animation-mixer', 'timeScale', 0)
      } else {
        placementUI.textContent = 'Tap here to lift the object'
        modelEl.setAttribute('animation-mixer', 'timeScale', 1)
      }
    })
  },
}
