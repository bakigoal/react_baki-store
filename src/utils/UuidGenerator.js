import {v4} from "uuid";

export default class UuidGenerator {

    static uuid4() {
        return v4()
    }
}