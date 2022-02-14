export class Card {
    texto: string | null;
    tags: string | null;

    constructor(texto: string | null, tags: string | null) {
        this.texto = texto || null;
        this.tags = tags || null;
    }
}

export class Filter {
    tag: string | null;
    limit: number;
    offset: number;
    
    constructor(tag?: string | null, limit?: number, offset?: number) {
        this.tag = tag || null;
        this.limit = limit || 30;
        this.offset = offset || 0;
    }
}