export class Card {
    text: string | null;
    tag: string | null;

    constructor(text: string | null, tag: string | null) {
        this.text = text || null;
        this.tag = tag || null;
    }
}