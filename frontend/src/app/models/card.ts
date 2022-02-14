export class Card {
    texto: string | null;
    tags: string | null;

    constructor(texto: string | null, tags: string | null) {
        this.texto = texto || null;
        this.tags = tags || null;
    }
}