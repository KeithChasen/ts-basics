async function fakeReq() {
    return 2;
}

const res: Promise<number> = fakeReq();

type Names = string[];
type OtherName = Array<string>;

type Obj = {
    [key: string]: number
}
type ObjNew = Record<string, number>

