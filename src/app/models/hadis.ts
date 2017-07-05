// export class Hadis {
//   id: number;
//   baslik: string;
//   metin: string;
// };

export interface Hadis {
    id: string;
    hadisInfo: {
        order: number,
        title: string,
        author: string
        text: string,
        seen: boolean
    };
}
