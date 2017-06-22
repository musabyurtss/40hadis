// export class Hadis {
//   id: number;
//   baslik: string;
//   metin: string;
// };

export interface Hadis {
   id: string;
   hadisInfo: {
    title: string,
    subtitle: string,
    text: string,
    author: string
   };
}
