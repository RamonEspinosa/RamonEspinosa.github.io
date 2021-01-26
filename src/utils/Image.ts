interface Img {
    src: string
    alt: string
}
export default class Image {
    private _src: string;
    private _alt: string;
    constructor({
        src,
        alt
    }: Img) {
        this._src = src;
        this._alt = alt;
    }
    
    get src():string {
        return this._src;
    }
    set src(value: string) {
        this._src = value;
    }
    
    get alt():string {
        return this._alt;
    }
    set alt(value: string) {
        this._alt = value;
    }

}