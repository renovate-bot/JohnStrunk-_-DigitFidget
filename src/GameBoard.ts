export class Cell {
    value: number;
    enabled: boolean;
    constructor() {
        this.value = 0;
        this.enabled = true;
    }

    /**
     * Toggles the `enabled` state of the Cell.
     *
     * @returns The new state of `enabled` after toggling.
     */
    toggle(): boolean {
        this.enabled = !this.enabled;
        return this.enabled;
    }
}
