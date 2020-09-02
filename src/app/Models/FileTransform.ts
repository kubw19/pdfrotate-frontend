export class FileTransform{
    public file: File
    public rotation: number

    constructor(file: File, rotation: number){
        this.file = file
        this.rotation = rotation
    }
}